import { Check } from "lucide-react";
import { processSteps } from "@/lib/content";
import { site } from "@/lib/site";
import { breadcrumbLd, buildMetadata, founderLd } from "@/lib/seo";
import { ArrowLink, Button, CtaPanel, PageHero } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { FounderSection } from "@/components/Founder";
import { SocialLinks } from "@/components/Social";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "About Billion Conversion | Growth Marketing Agency in Kerala",
  absoluteTitle: true,
  description: "Billion Conversion is a growth marketing agency in Kozhikode, Kerala, working with D2C, B2B and e-commerce brands across India, the UAE, Bahrain and the GCC.",
  path: "/about/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
];

const principles = [
  { title: "Numbers over noise", body: "We judge our work by qualified leads, customers and revenue — not likes or impressions." },
  { title: "Honest reporting", body: "Clear, plain-language reports. If something isn't working, we say so and change it." },
  { title: "Connected thinking", body: "Search, ads, website and follow-up are planned together, not as separate projects." },
  { title: "You own your assets", body: "Your ad accounts, website, analytics and data belong to you." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${site.name}`}
        title="We turn growth into numbers."
        intro={site.about.intro}
        crumbs={crumbs}
      >
        <Button href="/contact/" track="cta:about">Book a Growth Call</Button>
      </PageHero>

      <section className="container-site grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow mb-4">Who we are</p>
          <h2 className="font-display text-h2 font-bold text-balance">Beyond clicks and impressions.</h2>
        </div>
        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="space-y-5 text-lg leading-relaxed text-ivory/80">
          {site.about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-display text-xl font-semibold text-emerald">{site.tagline}</p>
          <ArrowLink href="/about-billion-conversion/">Who is {site.name}? Company facts, founder and contacts</ArrowLink>
        </div>
      </section>

      <section className="container-site pb-20">
        <h2 className="font-display text-h2 font-bold" data-reveal>What we believe</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title} data-reveal style={{ ["--reveal-i" as string]: i % 2 }} className="card flex gap-4 p-6">
              <Check aria-hidden className="mt-1 size-5 shrink-0 text-emerald" />
              <span>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-ivory/70">{p.body}</p>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ambient py-20 md:py-28">
        <div className="container-site">
          <FounderSection />
        </div>
      </section>

      <section className="border-y border-line-soft bg-forest/25 py-20">
        <div className="container-site">
          <h2 className="font-display text-h2 font-bold">How we work</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.n}>
                <span className="font-display text-3xl font-extrabold text-emerald">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ivory/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site grid gap-10 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">Company details</h2>
          <dl className="mt-6 space-y-4 text-ivory/80">
            <div><dt className="text-sm text-slate">Brand</dt><dd>{site.name}</dd></div>
            <div><dt className="text-sm text-slate">Legal entity</dt><dd>{site.legalName}</dd></div>
            {site.llpin && <div><dt className="text-sm text-slate">LLPIN</dt><dd>{site.llpin}</dd></div>}
            <div><dt className="text-sm text-slate">Office</dt><dd>{site.offices.operational.lines.join(", ")}</dd></div>
            <div><dt className="text-sm text-slate">Markets served</dt><dd>Kerala (India), the UAE, Bahrain and the wider GCC</dd></div>
          </dl>
        </div>
        <div className="card p-8">
          <h2 className="font-display text-2xl font-bold">Find us online</h2>
          <p className="mt-4 leading-relaxed text-ivory/70">Follow our work and growth insights, or message us on WhatsApp to speak directly with the founder.</p>
          <SocialLinks className="mt-6" />
        </div>
      </section>

      <PageFaqs path="/about/" title="Questions about Billion Conversion" />
      <CtaPanel />
      <JsonLd data={[breadcrumbLd(crumbs), founderLd()]} />
    </>
  );
}
