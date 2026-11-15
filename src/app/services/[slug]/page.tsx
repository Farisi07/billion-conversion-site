import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getService, services } from "@/lib/content";
import { breadcrumbLd, buildMetadata, serviceLd } from "@/lib/seo";
import { Button, CtaPanel, PageHero, WhatsAppButton, icons } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PageFaqs } from "@/components/PageFaqs";


export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.meta.title, description: s.meta.description, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: s.slug === "performance-marketing" ? "Performance Marketing" : s.name, path },
  ];
  const related = s.related.map(getService).filter((x) => x !== undefined);

  return (
    <>
      <PageHero eyebrow="Service" title={s.h1} intro={s.intro} crumbs={crumbs}>
        <Button href="/contact/" track={`cta:service-${s.slug}`}>Get a custom quote</Button>
        <WhatsAppButton context={`service-${s.slug}`} message={`Hi Billion Conversion, I'd like to know more about ${s.name}. (from ${path})`} />
      </PageHero>

      <section className="container-site grid gap-12 py-20 lg:grid-cols-[1fr_2fr]">
        <div data-reveal>
          <h2 className="font-display text-2xl font-bold">Who it&apos;s for</h2>
          <ul className="mt-6 space-y-4">
            {s.forWho.map((w) => (
              <li key={w} className="flex gap-3 leading-relaxed text-ivory/80">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-emerald" /> {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold" data-reveal>What&apos;s included</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.deliverables.map((d, i) => (
              <li key={d.title} data-reveal style={{ ["--reveal-i" as string]: i % 2 }} className="card p-6">
                <h3 className="font-display text-lg font-bold">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-ivory/70">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line-soft bg-forest/25 py-16">
        <div className="container-site grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
          <h2 className="font-display text-2xl font-bold" data-reveal>How we measure success</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {s.howWeMeasure.map((m) => (
              <li key={m} data-reveal className="rounded-xl border border-line p-5 text-ivory/85">{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-site pb-4">
          <h2 className="font-display text-2xl font-bold">Related services</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const Icon = icons[r.icon];
              return (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}/`} className="card flex h-full gap-4 p-5 hover:border-emerald/60">
                    <Icon aria-hidden className="size-6 shrink-0 text-emerald" />
                    <span>
                      <span className="block font-semibold">{r.slug === "performance-marketing" ? "Performance Marketing" : r.name}</span>
                      <span className="mt-1 block text-sm text-slate">{r.short}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <PageFaqs path={path} title={`Questions about ${s.slug === "performance-marketing" ? "performance marketing" : s.name.toLowerCase()}`} />
      <CtaPanel />
      <JsonLd data={[serviceLd(s.name, s.meta.description, path), breadcrumbLd(crumbs)]} />
    </>
  );
}
