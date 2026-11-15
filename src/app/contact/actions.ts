"use server";

import { whatsappLink } from "@/lib/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<LeadField, string>>;
  message?: string;
  whatsappUrl?: string;
  /** Echoed back on error so the form keeps what the visitor typed */
  values?: Partial<Record<Exclude<LeadField, "consent">, string>> & { consent?: boolean };
};

type LeadField = "name" | "business" | "phone" | "email" | "country" | "service" | "message" | "consent";

const clean = (v: FormDataEntryValue | null, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * Lead submission layer.
 * Delivery (configure via env; all optional, any combination):
 *  - LEAD_WEBHOOK_URL  → POST JSON (Zapier/Make/n8n, Google Sheet, or a CRM later)
 *  - RESEND_API_KEY + LEAD_EMAIL_TO (+ LEAD_EMAIL_FROM) → email notification via Resend
 * The visitor is always offered a pre-filled WhatsApp message as the primary channel.
 */
export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Spam protection: honeypot + minimum fill time
  if (clean(form.get("company_website"))) return { status: "success", whatsappUrl: whatsappLink() };
  const started = Number(form.get("started_at"));
  if (!started || Date.now() - started < 2500) {
    return { status: "error", message: "Please take a moment to complete the form, then try again." };
  }

  const data = {
    name: clean(form.get("name"), 120),
    business: clean(form.get("business"), 160),
    phone: clean(form.get("phone"), 40),
    email: clean(form.get("email"), 160),
    country: clean(form.get("country"), 60),
    service: clean(form.get("service"), 80),
    message: clean(form.get("message"), 2000),
    consent: form.get("consent") === "on",
    page: clean(form.get("page"), 200),
    utm: clean(form.get("utm"), 300),
  };

  const errors: LeadState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!data.business) errors.business = "Please enter your business name.";
  if (!/^\+?[0-9 ()-]{7,20}$/.test(data.phone)) errors.phone = "Please enter a valid phone or WhatsApp number, including country code.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.country) errors.country = "Please choose your country.";
  if (!data.service) errors.service = "Please choose what you need help with.";
  if (!data.consent) errors.consent = "Please agree so we can contact you about your enquiry.";
  if (Object.keys(errors).length) return { status: "error", errors, message: "Please check the highlighted fields.", values: { name: data.name, business: data.business, phone: data.phone, email: data.email, country: data.country, service: data.service, message: data.message, consent: data.consent } };

  const summary = `Hi Billion Conversion, I'm ${data.name} from ${data.business} (${data.country}). I'd like a custom quote for: ${data.service}.${data.message ? ` ${data.message}` : ""}`;
  const lead = { ...data, submittedAt: new Date().toISOString(), source: "website" };

  const deliveries: Promise<unknown>[] = [];
  if (process.env.LEAD_WEBHOOK_URL) {
    deliveries.push(fetch(process.env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(lead) }));
  }
  if (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_TO) {
    deliveries.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_EMAIL_FROM ?? "Website <onboarding@resend.dev>",
          to: process.env.LEAD_EMAIL_TO.split(","),
          subject: `New website lead: ${data.business} (${data.service})`,
          text: Object.entries(lead).map(([k, v]) => `${k}: ${v}`).join("\n"),
        }),
      }),
    );
  }
  if (!deliveries.length) console.info("[lead] No delivery configured — lead not forwarded:", { business: data.business, service: data.service });

  const results = await Promise.allSettled(deliveries);
  const failed = results.some((r) => r.status === "rejected" || (r.status === "fulfilled" && r.value instanceof Response && !r.value.ok));
  if (failed) console.error("[lead] One or more deliveries failed");

  // Even if a background delivery fails, WhatsApp continuation still reaches the team.
  return { status: "success", whatsappUrl: whatsappLink(summary) };
}
