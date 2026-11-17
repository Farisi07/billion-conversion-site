import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { aboutPageLd, breadcrumbLd, buildMetadata, founderLd, localBusinessLd } from "@/lib/seo";
import { ArrowLink, Button, CtaPanel, PageHero } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { FounderSection } from "@/components/Founder";
import { SocialLinks } from "@/components/Social";
import { PageFaqs } from "@/components/PageFaqs";

/**
 * Brand / entity page: one clear page for search engines and AI assistants to
 * associate with the name "Billion Conversion". Only verified facts belong here.
 */
const path = "/about-billion-conversion/";
const title = "Who is Billion Conversion?";
const description =
  "Billion Conversion is a growth marketing agency in Kerala, India, founded by Salmanul Faris B. Learn who we are, what we do, where we are based and how to reach us.";

export const metadata = buildMetadata({
  title: "Who is Billion Conversion? | Growth Marketing Agency, Kerala",
  absoluteTitle: true,
  description,
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
  { name: title, path },
];

export default function BrandPage() {
  const o = site.offices.operational;
  const facts: { k: string; v: ReactNode }[] = [
    { k: "Brand name", v: site.name },
    { k: "Legal entity", v: site.legalName },
    { k: "Type of business", v: "Growth marketing agency" },
    { k: "Founder", v: site.founder.name },
    ...(site.foundingYear ? [{ k: "Founded", v: site.foundingYear }] : []),
    { k: "Headquarters", v: o.lines.join(", ") },
    { k: "Markets served", v: "Kerala, India, the UAE, Bahrain and the wider GCC" },
    { k: "Tagline", v: site.tagline },
    { k: "Official website", v: <a href={site.url} className="text-emerald hover:underline">{site.url.replace(/^https?:\/\//, "")}</a> },
  ];

  return (
    <>
      <PageHero eyebrow={`About ${site.name}`} title={title} intro={site.about.intro} crumbs={crumbs}>
        <Button href="/contact/" track="cta:brand-page">Book a Growth Call</Button>
        <Button href="/services/" variant="outline" arrow={false} track="cta:brand-page-services">Explore Our Services</Button>
      </PageHero>

      {/* Company introduction + key facts */}
      <section className="container-site grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-ivory/80">
          <p className="eyebrow">Company introduction</p>
          <h2 className="font-display text-h2 font-bold text-balance text-ivory">{site.name} at a glance</h2>
          <p>
            <strong className="text-ivory">{site.name}</strong> is a growth marketing agency based in Kerala, India. It helps businesses scale through digital marketing,
            performance marketing, SEO and conversion-focused strategies, and measures its work by qualified leads, customers and revenue.
          </p>
          {site.about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="card p-8">
          <h2 className="font-display text-2xl font-bold">Key facts</h2>
          <dl className="mt-6 space-y-4 text-ivory/80">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-sm text-slate">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-ambient py-20 md:py-28">
        <div className="container-site">
          <FounderSection />
        </div>
      </section>

      {/* Company history (verified facts only; add dated milestones as they are confirmed) */}
      <section className="container-site grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow mb-4">Company history</p>
          <h2 className="font-display text-h2 font-bold text-balance">How {site.name} started</h2>
        </div>
        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="space-y-5 text-lg leading-relaxed text-ivory/80">
          <p>
            {site.name} was founded{site.foundingYear ? ` in ${site.foundingYear}` : ""} by {site.founder.name} with a simple idea: marketing should be judged by
            the numbers that matter to a business — leads, customers and revenue — not by likes and impressions. That idea became the company&apos;s
            tagline, <em className="text-ivory">&ldquo;{site.tagline}&rdquo;</em>
          </p>
          <p>
            The business is registered as {site.legalName} and operates from {o.lines[0]} in {o.locality}, Kerala. From Kerala, {site.name} works with
            businesses in India, the UAE, Bahrain and the wider GCC, bringing search, paid media, websites and conversion optimisation together as one
            connected growth system.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-line-soft bg-forest/25 py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="font-display text-h2 font-bold text-balance">What {site.name} does</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={{ ["--reveal-i" as string]: i % 4 }}>
                <Link href={`/services/${s.slug}/`} className="card flex h-full flex-col p-6 hover:border-emerald/60">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ivory/70">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location + social + contact */}
      <section className="container-site grid gap-6 py-20 md:grid-cols-3">
        <div data-reveal className="card p-8">
          <MapPin aria-hidden className="size-6 text-emerald" />
          <h2 className="mt-4 font-display text-2xl font-bold">Location</h2>
          <address className="mt-4 not-italic leading-relaxed text-ivory/80">
            {o.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <p className="mt-3 text-sm text-slate">Serving Kerala, India, the UAE, Bahrain and the wider GCC.</p>
          <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-2 font-semibold text-emerald hover:text-ivory">
            Open in Google Maps
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="card p-8">
          <h2 className="font-display text-2xl font-bold">Official social media</h2>
          <p className="mt-4 leading-relaxed text-ivory/70">These are the only official {site.name} profiles.</p>
          <ul className="mt-5 space-y-2">
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer me" className="text-ivory/80 hover:text-emerald">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-6" />
        </div>

        <div data-reveal style={{ ["--reveal-i" as string]: 2 }} className="card p-8">
          <h2 className="font-display text-2xl font-bold">Contact</h2>
          <ul className="mt-5 space-y-3 text-ivory/80">
            <li>
              <a href={whatsappLink()} data-track="whatsapp:brand-page" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-emerald">
                <MessageCircle aria-hidden className="size-4 text-emerald" /> WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.tel}`} data-track="phone:brand-page" className="inline-flex items-center gap-2.5 hover:text-emerald">
                <Phone aria-hidden className="size-4 text-emerald" /> {site.phone.display}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} data-track="email:brand-page" className="inline-flex items-center gap-2.5 break-all hover:text-emerald">
                  <Mail aria-hidden className="size-4 shrink-0 text-emerald" /> {site.email}
                </a>
              </li>
            )}
          </ul>
          <ArrowLink href="/contact/" className="mt-6">Request a custom quote</ArrowLink>
        </div>
      </section>

      <PageFaqs path={path} title={`Questions about ${site.name}`} />
      <CtaPanel />
      <JsonLd data={[aboutPageLd(path, title, description), breadcrumbLd(crumbs), founderLd(), localBusinessLd()]} />
    </>
  );
}
