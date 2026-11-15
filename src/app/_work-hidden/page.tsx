import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaPanel, PageHero } from "@/components/ui";
import { CaseArt } from "@/components/CaseCarousel";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Our Work – Case Studies",
  description: "Client projects and case studies from Billion Conversion, including website development in Bahrain and growth marketing engagements.",
  path: "/work/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Work", path: "/work/" },
];

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Work that speaks in numbers." intro="Real projects for real clients. Results are published only when they are verified and approved by the client — so some case studies are still being prepared." crumbs={crumbs} />
      <section className="container-site py-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <li key={c.slug} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <Link href={`/work/${c.slug}/`} className="card group block h-full overflow-hidden hover:border-emerald/60">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                    <CaseArt index={i} />
                  </div>
                  <span className="absolute bottom-5 left-5 font-display text-4xl font-bold">{c.client}</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-md border border-emerald/40 px-2 py-1 font-semibold text-emerald">{c.category}</span>
                    <span className="rounded-md border border-line-soft px-2 py-1 text-slate">{c.market}</span>
                    {c.status === "draft" && <span className="rounded-md border border-champagne/40 px-2 py-1 text-champagne">Full case study coming soon</span>}
                  </div>
                  <h2 className="mt-4 flex items-center gap-2 font-display text-xl font-bold">
                    {c.client} <ArrowUpRight aria-hidden className="size-4 text-emerald" />
                  </h2>
                  <p className="mt-2 leading-relaxed text-ivory/70">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaPanel />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
