import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaPanel, PageHero, icons } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Growth Marketing Services",
  description: "Growth marketing, performance marketing, SEO/AEO/GEO, CRO, web and Shopify development, e-commerce and social media services from Billion Conversion.",
  path: "/services/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
];

export default function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="Services" title="Connected services that attract, convert and scale customers." intro="Choose a single service or combine them into one growth plan. Every engagement is custom-quoted to your goals and markets." crumbs={crumbs} />
      <section className="container-site py-20">
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.slug} data-reveal style={{ ["--reveal-i" as string]: i % 2 }}>
                <Link href={`/services/${s.slug}/`} className="card group flex h-full gap-5 p-7 hover:border-emerald/60">
                  <Icon aria-hidden className="size-8 shrink-0 text-emerald" strokeWidth={1.6} />
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-4 font-display text-xl font-bold">
                      {s.slug === "performance-marketing" ? "Performance Marketing" : s.name}
                      <ArrowUpRight aria-hidden className="size-5 text-emerald transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-2 block leading-relaxed text-ivory/70">{s.short}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <PageFaqs path="/services/" title="Questions about our services" />
      <CtaPanel />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
