import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Search, Sparkles, Hexagon } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { businessModels, featuredServices, processSteps, trustIndustries } from "@/lib/content";
import { ArrowLink, Button, CtaPanel, SectionHeader, icons } from "@/components/ui";
import { HeroVisual } from "@/components/HeroVisual";
import { FounderSection } from "@/components/Founder";
import { ModelArt, ServiceArt } from "@/components/Art";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: `Growth Marketing Agency in Kozhikode | ${site.name}`,
  absoluteTitle: true,
  description:
    "Growth marketing agency in Kozhikode (Calicut) helping D2C, B2B and local brands in Kerala, UAE, Bahrain & the GCC win more leads and sales. Get a custom quote.",
  path: "/",
});

const homeCards: Record<string, { title: string; body: string }> = {
  "performance-marketing": { title: "Growth & Performance", body: "Performance marketing, paid acquisition, campaign strategy and lead generation." },
  "seo-ai-search": { title: "SEO, AEO & GEO", body: "Technical SEO, local SEO, AEO, GEO and long-term organic visibility across search and AI platforms." },
  "conversion-rate-optimization": { title: "Conversion Optimisation", body: "CRO, landing pages, analytics, user experience and conversion tracking." },
  "web-development": { title: "Web & E-commerce", body: "Website development, Shopify development and high-converting e-commerce experiences." },
};

export default function Home() {
  return (
    <>
      {/* C. Hero */}
      <section className="relative isolate overflow-hidden bg-obsidian">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_80%_30%,rgb(9_37_28/0.9),transparent_70%)]" />
        <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full opacity-70 md:w-[70%] md:opacity-100">
          <HeroVisual />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent md:via-obsidian/20" />

        <div className="container-site flex min-h-[min(100svh,860px)] flex-col justify-center pt-[calc(var(--header-h)+40px)] pb-20">
          <p className="eyebrow hero-rise">Growth Marketing Agency</p>
          <h1 className="mt-6 max-w-[15ch] font-display text-display font-extrabold md:max-w-[17ch]">
            <span className="hero-rise block" style={{ ["--d" as string]: 1 }}>Attract the Right Audience.</span>{" "}
            <span className="hero-rise block" style={{ ["--d" as string]: 2 }}>Convert More.</span>{" "}
            <span className="hero-rise block italic text-emerald" style={{ ["--d" as string]: 3 }}>Scale Faster.</span>
          </h1>
          <p className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-ivory/80" style={{ ["--d" as string]: 4 }}>
            We help D2C, B2B and e-commerce businesses generate quality leads, win more customers and grow revenue through SEO, AEO, GEO, performance marketing and conversion optimisation.
          </p>
          <div className="hero-rise mt-9 flex flex-wrap gap-4" style={{ ["--d" as string]: 5 }}>
            <Button href="/contact/" track="cta:hero-primary">Let&apos;s Grow Your Business</Button>
            <Button href="/services/" variant="outline" track="cta:hero-secondary" arrow={false}>Explore Our Services</Button>
          </div>
          <p className="hero-rise mt-10 text-xs font-semibold tracking-[0.22em] text-slate" style={{ ["--d" as string]: 6 }}>
            STRATEGY · SEO · AEO · GEO · PERFORMANCE · CRO
          </p>
        </div>

        <a href="#trust" className="absolute bottom-24 right-6 hidden flex-col items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] text-ivory/60 hover:text-emerald md:right-10 md:flex">
          SCROLL<br />DOWN
          <ArrowDown aria-hidden className="size-4 motion-safe:animate-[cue_2s_ease-in-out_infinite]" />
        </a>
      </section>

      {/* D. Industries strip */}
      <section id="trust" aria-labelledby="trust-title" className="border-y border-line-soft bg-obsidian">
        <div className="container-site flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:gap-10">
          <h2 id="trust-title" className="shrink-0 text-xs font-bold leading-relaxed tracking-[0.16em] text-ivory/85 lg:border-r lg:border-line lg:pr-10">
            TRUSTED BY BUSINESSES<br className="hidden lg:block" /> ACROSS INDUSTRIES
          </h2>
          <ul className="scroll-fade -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-1 lg:justify-between lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {trustIndustries.map((it) => {
              const Icon = icons[it.icon];
              return (
                <li key={it.label} className="flex shrink-0 snap-start flex-col items-center gap-2 rounded-xl border border-line-soft px-4 py-3 text-center text-sm text-ivory/75 lg:border-0 lg:px-2">
                  <Icon aria-hidden className="size-6 text-ivory" strokeWidth={1.4} />
                  {it.label}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* E. Services */}
      <section className="bg-ambient py-20 md:py-28">
        <div className="container-site">
          <SectionHeader eyebrow="What we do" title="End-to-end growth for modern businesses.">
            A connected set of marketing, technology and optimisation services designed to attract, convert and scale customers.
          </SectionHeader>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s, i) => {
              const Icon = icons[s.icon];
              const card = homeCards[s.slug];
              return (
                <li key={s.slug} data-reveal style={{ ["--reveal-i" as string]: i }}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="card group flex h-full min-h-[330px] flex-col overflow-hidden p-6 hover:-translate-y-1 hover:border-emerald/60 hover:shadow-[0_20px_60px_-25px_rgb(16_185_129/0.55)] focus-visible:border-emerald/60"
                  >
                    <Icon aria-hidden className="size-8 text-emerald" strokeWidth={1.6} />
                    <h3 className="mt-5 font-display text-h3 font-bold">{card.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/70">{card.body}</p>
                    <ServiceArt kind={s.icon} />
                    <span className="relative mt-auto inline-flex size-10 items-center justify-center self-end rounded-full border border-ivory/30 text-ivory transition-all duration-300 group-hover:border-emerald group-hover:bg-emerald group-hover:text-obsidian">
                      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
                      <span className="sr-only">Learn about {card.title}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* F. Business models */}
      <section className="bg-obsidian py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div data-reveal>
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="max-w-2xl font-display text-h2 font-bold text-balance">Growth solutions for different business models.</h2>
            </div>
            <ArrowLink href="/business-models/">Explore all solutions</ArrowLink>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessModels.map((m, i) => (
              <li key={m.slug} data-reveal style={{ ["--reveal-i" as string]: i }}>
                <Link href={`/business-models/${m.slug}/`} className="card group block h-full overflow-hidden hover:border-emerald/60">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <ModelArt index={i} accent={m.accent} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                      {m.name}
                      <ArrowUpRight aria-hidden className="size-4 text-emerald transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/70">{m.short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* G. Founder (case studies hidden until verified client content is ready) */}
      <section className="bg-ambient py-20 md:py-28">
        <div className="container-site">
          <FounderSection />
        </div>
      </section>

      {/* H. Process */}
      <section className="border-y border-line-soft bg-obsidian py-20 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.75fr_2fr]">
          <div data-reveal>
            <p className="eyebrow mb-4">Our approach</p>
            <h2 className="font-display text-h2 font-bold">A simple, proven growth process.</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((s, i) => (
              <li key={s.n} data-reveal style={{ ["--reveal-i" as string]: i }} className="group relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald font-display text-sm font-bold text-obsidian">{s.n}</span>
                  <span aria-hidden className="h-px flex-1 origin-left scale-x-0 bg-gradient-to-r from-emerald to-transparent transition-transform delay-300 duration-1000 group-data-shown:scale-x-100" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ivory/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* I. Search visibility */}
      <section className="bg-ambient py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div data-reveal>
            <p className="eyebrow mb-4">Search visibility has evolved</p>
            <h2 className="font-display text-h2 font-bold text-balance">Be discoverable wherever your customers search.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
              From traditional search engines to AI-powered answer platforms, we help businesses build a stronger and more useful search presence.
            </p>
            <ArrowLink href="/services/seo-ai-search/" className="mt-8">How we approach SEO, AEO &amp; GEO</ArrowLink>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "SEO", d: "Search engines", Icon: Search, body: "Technical health, relevance and local signals for Google and Bing." },
              { k: "AEO", d: "Answer engines", Icon: Sparkles, body: "Clear, structured answers to the questions buyers actually ask." },
              { k: "GEO", d: "Generative search", Icon: Hexagon, body: "Consistent entity data and original evidence AI tools can cite." },
            ].map(({ k, d, Icon, body }, i) => (
              <li key={k} data-reveal style={{ ["--reveal-i" as string]: i + 1 }} className="card p-6 text-center hover:border-emerald/60">
                <Icon aria-hidden className="mx-auto size-9 text-emerald" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl font-extrabold">{k}</h3>
                <p className="text-sm font-semibold text-ivory/80">{d}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{body}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="container-site mt-10 text-sm text-slate">
          No one can guarantee rankings or mentions in Google, ChatGPT, Gemini or Perplexity. We focus on the work you can control and measure it honestly.
        </p>
      </section>

      {/* Location band */}
      <section className="border-t border-line-soft bg-obsidian py-14">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4" data-reveal>
            <MapPin aria-hidden className="mt-1 size-6 shrink-0 text-emerald" />
            <p className="max-w-2xl text-lg leading-relaxed text-ivory/80">
              Based in <strong className="text-ivory">Kozhikode, Kerala</strong> — a digital marketing agency in Calicut serving businesses across <strong className="text-ivory">Kerala, India</strong>, the <strong className="text-ivory">UAE</strong>, <strong className="text-ivory">Bahrain</strong> and the wider <strong className="text-ivory">GCC</strong>.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2" data-reveal>
            <ArrowLink href="/locations/kozhikode/">Kozhikode</ArrowLink>
            <ArrowLink href="/locations/dubai/">Dubai</ArrowLink>
            <ArrowLink href="/locations/bahrain/">Bahrain</ArrowLink>
          </div>
        </div>
      </section>

      {/* J. Final CTA */}
      <PageFaqs path="/" title="Questions about growing with Billion Conversion" />
      <CtaPanel />
    </>
  );
}
