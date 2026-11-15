import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessModels, locations } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaPanel, PageHero } from "@/components/ui";
import { ModelArt } from "@/components/Art";
import { JsonLd } from "@/components/JsonLd";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Who We Help – D2C, B2B, E-commerce & Product Businesses",
  description: "Growth marketing tailored to D2C brands, B2B companies, e-commerce and Shopify stores and product businesses in Kerala, the UAE, Bahrain and the GCC.",
  path: "/business-models/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Who We Help", path: "/business-models/" },
];

export default function ModelsIndex() {
  return (
    <>
      <PageHero eyebrow="Who we help" title="Growth solutions for different business models." intro="A D2C brand, a B2B manufacturer and a Shopify store grow in different ways. We shape strategy around how your customers actually buy." crumbs={crumbs} />
      <section className="container-site py-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {businessModels.map((m, i) => (
            <li key={m.slug} data-reveal style={{ ["--reveal-i" as string]: i % 2 }}>
              <Link href={`/business-models/${m.slug}/`} className="card group grid h-full overflow-hidden hover:border-emerald/60 sm:grid-cols-[0.8fr_1fr]">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
                    <ModelArt index={i} accent={m.accent} />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="flex items-center gap-2 font-display text-xl font-bold">
                    {m.name} <ArrowUpRight aria-hidden className="size-4 text-emerald" />
                  </h2>
                  <p className="mt-2 leading-relaxed text-ivory/70">{m.short}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-20 font-display text-2xl font-bold">Markets we serve</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {locations.map((l) => (
            <li key={l.slug}>
              <Link href={`/locations/${l.slug}/`} className="inline-block rounded-full border border-line px-5 py-2.5 hover:border-emerald hover:text-emerald">{l.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <PageFaqs path="/business-models/" title="Questions about who we help" />
      <CtaPanel />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
