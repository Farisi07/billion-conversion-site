import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, Globe2, MapPin } from "lucide-react";
import { getCase, getLocation, getService, locations } from "@/lib/content";
import { site } from "@/lib/site";
import { breadcrumbLd, buildMetadata, localBusinessLd } from "@/lib/seo";
import { Button, CtaPanel, PageHero, WhatsAppButton } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PageFaqs } from "@/components/PageFaqs";

// Fully static pages (generateStaticParams); allow a blocking navigation instead of a streamed shell
export const instant = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return buildMetadata({ title: l.meta.title, description: l.meta.description, path: `/locations/${l.slug}/` });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const path = `/locations/${l.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Who We Help", path: "/business-models/" },
    { name: l.name, path },
  ];
  const proof = (site.features.caseStudies ? l.proofSlugs : []).map(getCase).filter((x) => x !== undefined);
  const isKozhikode = l.slug === "kozhikode";

  return (
    <>
      <PageHero eyebrow={l.presence === "office" ? "Kerala, India" : "UAE · Bahrain · GCC"} title={l.h1} intro={l.intro} crumbs={crumbs}>
        <Button href="/contact/" track={`cta:location-${l.slug}`}>Get a custom quote</Button>
        <WhatsAppButton context={`location-${l.slug}`} message={`Hi Billion Conversion, I'm a business in ${l.name} and would like to talk. (from ${path})`} />
      </PageHero>

      <section className="container-site py-16">
        <div className="flex gap-4 rounded-2xl border border-line bg-forest/30 p-6" data-reveal>
          {l.presence === "office" ? <Building2 aria-hidden className="size-6 shrink-0 text-emerald" /> : <Globe2 aria-hidden className="size-6 shrink-0 text-emerald" />}
          <p className="leading-relaxed text-ivory/85">{l.presenceNote}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {l.context.map((c, i) => (
            <li key={c.title} data-reveal style={{ ["--reveal-i" as string]: i }} className="card p-6">
              <h2 className="font-display text-lg font-bold">{c.title}</h2>
              <p className="mt-2 leading-relaxed text-ivory/70">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line-soft bg-forest/25 py-16">
        <div className="container-site grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Services for {l.name} businesses</h2>
            <ul className="mt-6 space-y-3">
              {l.services.map(getService).filter((x) => x !== undefined).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="flex items-center justify-between rounded-xl border border-line p-4 hover:border-emerald hover:text-emerald">
                    {s.slug === "performance-marketing" ? "Performance Marketing" : s.name} <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Industries we work with</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {l.industries.map((x) => (
                <li key={x} className="rounded-full border border-emerald/40 px-4 py-2 text-sm text-ivory/85">{x}</li>
              ))}
            </ul>
            {proof.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-2xl font-bold">Our work in {l.name}</h2>
                <ul className="mt-6 space-y-3">
                  {proof.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/work/${c.slug}/`} className="card block p-5 hover:border-emerald/60">
                        <span className="font-display text-lg font-bold">{c.client}</span>
                        <span className="mt-1 block text-sm text-slate">{c.category} · {c.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {isKozhikode && (
        <section className="container-site py-16">
          <div className="card grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
                <MapPin aria-hidden className="size-6 text-emerald" /> Visit our Kozhikode office
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-ivory/80">
                {site.offices.operational.lines.join(", ")}
              </address>
              <p className="mt-2 text-sm text-slate">Visits by appointment — message us on WhatsApp first.</p>
            </div>
            <Button href={site.offices.operational.mapsUrl} external variant="outline" track="cta:maps">Open in Google Maps</Button>
          </div>
        </section>
      )}

      <PageFaqs path={path} title={`Digital marketing in ${l.name}: FAQs`} />
      <CtaPanel />
      <JsonLd data={[breadcrumbLd(crumbs), ...(isKozhikode ? [localBusinessLd()] : [])]} />
    </>
  );
}
