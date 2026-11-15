import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/content";
import { articleLd, breadcrumbLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumbs, CtaPanel } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { formatDate } from "@/lib/format";
import { PageFaqs } from "@/components/PageFaqs";


export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.description, path: `/insights/${a.slug}/`, type: "article", publishedTime: a.published, modifiedTime: a.updated });
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const path = `/insights/${a.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights/" },
    { name: a.title, path },
  ];
  const more = insights.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <article className="bg-ambient pt-[calc(var(--header-h)+48px)]">
        <div className="container-site max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">{a.category}</p>
          <h1 className="mt-5 font-display text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-bold leading-[1.1] text-balance">{a.title}</h1>
          <p className="mt-5 text-sm text-slate">
            By {site.name} team · Published <time dateTime={a.published}>{formatDate(a.published)}</time>
            {a.updated !== a.published && <> · Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time></>} · {a.readMins} min read
          </p>

          <div className="mt-10 rounded-2xl border border-emerald/40 bg-forest/40 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald">Short answer</p>
            <p className="mt-2 text-lg leading-relaxed text-ivory">{a.answer}</p>
          </div>

          <div className="prose-bc mt-6 pb-16" dangerouslySetInnerHTML={{ __html: a.body }} />
        </div>
      </article>

      {more.length > 0 && (
        <section className="container-site max-w-3xl border-t border-line-soft py-14">
          <h2 className="font-display text-2xl font-bold">Keep reading</h2>
          <ul className="mt-6 space-y-3">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/insights/${m.slug}/`} className="card block p-5 font-semibold hover:border-emerald/60">{m.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <PageFaqs path={path} title="Related questions" className="container-site max-w-3xl py-16" />
      <CtaPanel />
      <JsonLd data={[articleLd({ title: a.title, description: a.description, path, published: a.published, updated: a.updated }), breadcrumbLd(crumbs)]} />
    </>
  );
}
