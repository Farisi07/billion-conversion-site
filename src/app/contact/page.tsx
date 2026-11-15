import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { breadcrumbLd, buildMetadata, localBusinessLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "./ContactForm";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Contact – Book a Growth Call or Get a Custom Quote",
  description: "Talk to Billion Conversion on WhatsApp or by phone, or request a custom quote. Team based at KINFRA, Ramanattukara, Kozhikode; serving Kerala, the UAE, Bahrain and the GCC.",
  path: "/contact/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact/" },
];

export default function ContactPage() {
  return (
    <section className="bg-ambient pt-[calc(var(--header-h)+48px)] pb-24">
      <div className="container-site">
        <Breadcrumbs items={crumbs} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <p className="eyebrow hero-rise">Contact</p>
            <h1 className="hero-rise mt-5 font-display text-display font-bold" style={{ ["--d" as string]: 1 }}>Let&apos;s grow your business.</h1>
            <p className="hero-rise mt-6 text-lg leading-relaxed text-ivory/75" style={{ ["--d" as string]: 2 }}>
              Every plan is custom-quoted to your goals, channels and markets. Tell us a little about your business — or message us directly on WhatsApp.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-track="whatsapp:contact" className="card flex items-center gap-4 p-5 hover:border-emerald/60">
                  <MessageCircle aria-hidden className="size-6 text-emerald" />
                  <span>
                    <span className="block font-semibold">WhatsApp (fastest)</span>
                    <span className="text-ivory/70">{site.whatsapp.display}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.tel}`} data-track="phone:contact" className="card flex items-center gap-4 p-5 hover:border-emerald/60">
                  <Phone aria-hidden className="size-6 text-emerald" />
                  <span>
                    <span className="block font-semibold">Call us</span>
                    <span className="text-ivory/70">{site.phone.display}</span>
                  </span>
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} data-track="email:contact" className="card flex items-center gap-4 p-5 hover:border-emerald/60">
                    <Mail aria-hidden className="size-6 text-emerald" />
                    <span>
                      <span className="block font-semibold">Email</span>
                      <span className="break-all text-ivory/70">{site.email}</span>
                    </span>
                  </a>
                </li>
              )}
              <li className="card flex items-start gap-4 p-5">
                <MapPin aria-hidden className="mt-0.5 size-6 shrink-0 text-emerald" />
                <span>
                  <span className="block font-semibold">Office</span>
                  <address className="not-italic text-ivory/70">{site.offices.operational.lines.join(", ")}</address>
                  <a href={site.offices.operational.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-emerald underline underline-offset-2">Open in Google Maps</a>
                </span>
              </li>
              <li className="flex items-start gap-4 px-5 text-sm text-slate">
                <Clock aria-hidden className="mt-0.5 size-5 shrink-0" />
                {/* TODO: confirm business hours */}
                We reply to WhatsApp and form enquiries as quickly as we can during business hours (IST). UAE, Bahrain and GCC calls are scheduled in your time zone.
              </li>
            </ul>
          </div>
          <div className="hero-rise" style={{ ["--d" as string]: 2 }}>
            <ContactForm />
          </div>
        </div>
      </div>
      <PageFaqs path="/contact/" title="Questions before you get in touch" className="container-site pt-24" />
      <JsonLd data={[breadcrumbLd(crumbs), localBusinessLd()]} />
    </section>
  );
}
