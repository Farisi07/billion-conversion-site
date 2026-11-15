import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { businessModels, getModel, getService } from "@/lib/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { Button, CtaPanel, PageHero, WhatsAppButton } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PageFaqs } from "@/components/PageFaqs";

// Fully static pages (generateStaticParams); allow a blocking navigation instead of a streamed shell
export const instant = false;

export function generateStaticParams() {
  return businessModels.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/business-models/[slug]">) {
  const { slug } = await params;
  const m = getModel(slug);
  if (!m) return {};
  return buildMetadata({ title: m.meta.title, description: m.meta.description, path: `/business-models/${m.slug}/` });
}

export default async function ModelPage({ params }: PageProps<"/business-models/[slug]">) {
  const { slug } = await params;
  const m = getModel(slug);
  if (!m) notFound();
  const path = `/business-models/${m.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Who We Help", path: "/business-models/" },
    { name: m.name, path },
  ];

  return (
    <>
      <PageHero eyebrow="Who we help" title={m.h1} intro={m.intro} crumbs={crumbs}>
        <Button href="/contact/" track={`cta:model-${m.slug}`}>Get a custom growth plan</Button>
        <WhatsAppButton context={`model-${m.slug}`} message={`Hi Billion Conversion, I run a ${m.name.replace(/s$/, "")} business and want to grow. (from ${path})`} />
      </PageHero>

      <section className="container-site grid gap-12 py-20 lg:grid-cols-2">
        <div data-reveal>
          <h2 className="font-display text-h2 font-bold">Common challenges</h2>
          <ul className="mt-8 space-y-4">
            {m.challenges.map((c) => (
              <li key={c} className="flex gap-3 rounded-xl border border-line-soft p-4 text-ivory/80">
                <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0 text-emerald" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-h2 font-bold" data-reveal>Our approach</h2>
          <ol className="mt-8 space-y-4">
            {m.approach.map((a, i) => (
              <li key={a.title} data-reveal style={{ ["--reveal-i" as string]: i }} className="card flex gap-5 p-6">
                <span className="font-display text-2xl font-extrabold text-emerald">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <h3 className="font-display text-lg font-bold">{a.title}</h3>
                  <p className="mt-1 leading-relaxed text-ivory/70">{a.body}</p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line-soft bg-forest/25 py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold">What we track</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {m.metrics.map((x) => (
              <li key={x} className="rounded-full border border-emerald/40 px-4 py-2 text-sm text-ivory/85">{x}</li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-2xl font-bold">Services involved</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {m.services.map(getService).filter((x) => x !== undefined).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="card block h-full p-5 font-semibold hover:border-emerald/60">
                  {s.slug === "performance-marketing" ? "Performance Marketing" : s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageFaqs path={path} title={`${m.name}: frequently asked questions`} />
      <CtaPanel />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
