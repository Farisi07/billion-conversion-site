import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCase, getService } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { Button, CtaPanel, PageHero } from "@/components/ui";
import { CaseArt } from "@/components/CaseCarousel";
import { CaseViewTracker } from "@/components/CaseViewTracker";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return buildMetadata({
    title: `${c.client} – ${c.category} Case Study`,
    description: c.summary,
    path: `/work/${c.slug}/`,
    // Draft case studies stay out of search until verified details are published
    noindex: c.status === "draft",
  });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const path = `/work/${c.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/work/" },
    { name: c.client, path },
  ];
  const idx = caseStudies.findIndex((x) => x.slug === c.slug);

  return (
    <>
      <CaseViewTracker slug={c.slug} />
      <PageHero eyebrow={`${c.category} · ${c.market}`} title={c.client} intro={c.summary} crumbs={crumbs}>
        {c.liveUrl && <Button href={c.liveUrl} external variant="outline">Visit live site</Button>}
      </PageHero>

      <section className="container-site py-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-line">
          <CaseArt index={idx} />
        </div>
      </section>

      <section className="container-site grid gap-12 pb-16 lg:grid-cols-[2fr_1fr]">
        <div className="prose-bc">
          <h2>The challenge</h2>
          <p>{c.challenge ?? "Details of the client's business challenge will be added once approved by the client."}</p>
          <h2>What we did</h2>
          {c.work.length ? (
            <ul>{c.work.map((w) => <li key={w}>{w}</li>)}</ul>
          ) : (
            <p>Scope and channels will be listed here once the case study is finalised.</p>
          )}
          <h2>Results</h2>
          {c.results.length ? (
            <div className="table-scroll">
              <table>
                <thead><tr><th>Metric</th><th>Result</th><th>Definition</th></tr></thead>
                <tbody>{c.results.map((r) => <tr key={r.label}><td>{r.label}</td><td>{r.value}</td><td>{r.definition}</td></tr>)}</tbody>
              </table>
            </div>
          ) : (
            <p>We publish results only after they are verified and approved by the client. This section will be updated.</p>
          )}
          {c.quote && (
            <blockquote className="mt-8 border-l-2 border-emerald pl-6 text-xl text-ivory">
              “{c.quote.text}”
              <footer className="mt-3 text-sm text-slate">— {c.quote.name}, {c.quote.role}</footer>
            </blockquote>
          )}
        </div>
        <aside className="card h-fit p-6">
          <dl className="space-y-4 text-sm">
            <div><dt className="text-slate">Client</dt><dd className="mt-1 font-semibold">{c.client}</dd></div>
            <div><dt className="text-slate">Market</dt><dd className="mt-1 font-semibold">{c.market}</dd></div>
            <div>
              <dt className="text-slate">Services</dt>
              <dd className="mt-1 space-y-1">
                {c.services.map(getService).filter((x) => x !== undefined).map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}/`} className="block font-semibold text-emerald hover:text-ivory">{s.name}</Link>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <CtaPanel title="Want results like these for your business?" cta="Get a custom quote" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
