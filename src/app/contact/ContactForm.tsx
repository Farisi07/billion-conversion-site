"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { submitLead, type LeadState } from "./actions";
import { services } from "@/lib/content";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const initial: LeadState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initial);
  const [context, setContext] = useState({ page: "", utm: "", startedAt: 0 });
  const started = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only values read after mount
    setContext({ page: document.referrer || window.location.pathname, utm: window.location.search.slice(0, 300), startedAt: Date.now() });
  }, []);

  useEffect(() => {
    if (state.status === "success") track("generate_lead", { form: "contact" });
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="card p-8 text-center md:p-12">
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-emerald" />
        <h2 className="mt-5 font-display text-2xl font-bold">Thank you — we&apos;ve got your details.</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ivory/75">
          For the fastest reply, continue the conversation on WhatsApp. Your details are already written in the message.
        </p>
        {state.whatsappUrl && (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp:form-success"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald px-6 font-semibold text-obsidian"
          >
            <MessageCircle aria-hidden className="size-5" /> Continue on WhatsApp
          </a>
        )}
      </div>
    );
  }

  const err = state.errors ?? {};
  const v = state.values ?? {};
  const field = "mt-2 block w-full rounded-xl border bg-obsidian/60 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-emerald focus:outline-none";
  const border = (k: keyof NonNullable<LeadState["errors"]>) => (err[k] ? "border-red-400" : "border-line");

  return (
    <form
      action={action}
      noValidate
      className="card space-y-5 p-6 md:p-9"
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          track("form_start", { form: "contact" });
        }
      }}
    >
      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">{state.message}</p>
      )}

      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Company website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <input type="hidden" name="started_at" value={context.startedAt} />
      <input type="hidden" name="page" value={context.page} />
      <input type="hidden" name="utm" value={context.utm} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={err.name}>
          <input id="name" name="name" defaultValue={v.name} autoComplete="name" required aria-invalid={!!err.name} aria-describedby={err.name ? "name-error" : undefined} className={cn(field, border("name"))} />
        </Field>
        <Field id="business" label="Business name" error={err.business}>
          <input id="business" name="business" defaultValue={v.business} autoComplete="organization" required aria-invalid={!!err.business} aria-describedby={err.business ? "business-error" : undefined} className={cn(field, border("business"))} />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" hint="Include country code, e.g. +91 or +973" error={err.phone}>
          <input id="phone" name="phone" defaultValue={v.phone} type="tel" autoComplete="tel" required placeholder="+91" aria-invalid={!!err.phone} aria-describedby={err.phone ? "phone-error" : "phone-hint"} className={cn(field, border("phone"))} />
        </Field>
        <Field id="email" label="Email (optional)" error={err.email}>
          <input id="email" name="email" defaultValue={v.email} type="email" autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? "email-error" : undefined} className={cn(field, border("email"))} />
        </Field>
        <Field id="country" label="Country" error={err.country}>
          <select id="country" name="country" required defaultValue={v.country ?? ""} aria-invalid={!!err.country} aria-describedby={err.country ? "country-error" : undefined} className={cn(field, border("country"))}>
            <option value="" disabled>Choose…</option>
            <option>India</option>
            <option>United Arab Emirates</option>
            <option>Bahrain</option>
            <option>Other</option>
          </select>
        </Field>
        <Field id="service" label="What do you need help with?" error={err.service}>
          <select id="service" name="service" required defaultValue={v.service ?? ""} aria-invalid={!!err.service} aria-describedby={err.service ? "service-error" : undefined} className={cn(field, border("service"))}>
            <option value="" disabled>Choose…</option>
            {services.map((s) => (
              <option key={s.slug}>{s.slug === "performance-marketing" ? "Performance Marketing" : s.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>
      <Field id="message" label="Tell us about your goals (optional)">
        <textarea id="message" name="message" defaultValue={v.message} rows={4} className={cn(field, "border-line")} />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory/75">
          <input type="checkbox" name="consent" defaultChecked={v.consent} className="mt-1 size-4 accent-emerald" aria-invalid={!!err.consent} aria-describedby={err.consent ? "consent-error" : undefined} />
          <span>I agree that Billion Conversion may contact me by phone, WhatsApp or email about this enquiry, as described in the <a href="/privacy/" className="text-emerald underline">Privacy Policy</a>.</span>
        </label>
        {err.consent && <p id="consent-error" className="mt-2 text-sm text-red-300">{err.consent}</p>}
      </div>
      <button type="submit" disabled={pending} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald px-6 font-semibold text-obsidian transition-colors hover:bg-[#2fd09a] disabled:opacity-70 sm:w-auto">
        {pending && <Loader2 aria-hidden className="size-4 animate-spin" />}
        {pending ? "Sending…" : "Get my custom quote"}
      </button>
    </form>
  );
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ivory/90">{label}</label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">{error}</p>}
    </div>
  );
}
