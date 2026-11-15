import Link from "next/link";
import { insights } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { CtaPanel, PageHero } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { formatDate } from "@/lib/format";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Insights – Growth, SEO, AEO & GEO",
  description: "Practical guides on growth marketing, search and AI visibility, WhatsApp marketing and choosing a digital marketing partner.",
  path: "/insights/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insights", path: "/insights/" },
];

export default function InsightsIndex() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Practical guides for growing businesses." intro="Clear answers on search, AI visibility, performance marketing and choosing the right partner — written for business owners, not marketers." crumbs={crumbs} />
      <section className="container-site py-20">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((a, i) => (
            <li key={a.slug} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <Link href={`/insights/${a.slug}/`} className="card group flex h-full flex-col p-7 hover:border-emerald/60">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald">{a.category}</span>
                <h2 className="mt-4 font-display text-xl font-bold leading-snug group-hover:text-emerald">{a.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ivory/70">{a.description}</p>
                <p className="mt-6 text-sm text-slate">
                  <time dateTime={a.published}>{formatDate(a.published)}</time> · {a.readMins} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PageFaqs path="/insights/" title="Questions about our insights" />
      <CtaPanel />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
