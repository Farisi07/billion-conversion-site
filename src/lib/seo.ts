import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the "| Billion Conversion" suffix */
  absoluteTitle?: boolean;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({ title, description, path, absoluteTitle, noindex, type = "website", publishedTime, modifiedTime }: MetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

/* ---------------- JSON-LD builders (only verified fields) ---------------- */

const orgId = `${site.url}/#organization`;
const founderId = `${site.url}/#founder`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/brand/logo-full.png"),
    slogan: site.tagline,
    founder: { "@type": "Person", "@id": founderId, name: site.founder.name },
    description: site.about.intro,
    telephone: site.phone.tel,
    areaServed: site.areaServed,
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", telephone: site.phone.tel, areaServed: ["IN", "AE", "BH"], availableLanguage: ["en", "ml"] },
    ],
    ...(site.email ? { email: site.email } : {}),
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

export function founderLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: site.founder.name,
    jobTitle: site.founder.role,
    worksFor: { "@id": orgId },
    url: absoluteUrl("/about/"),
    ...(site.founder.image ? { image: absoluteUrl(site.founder.image) } : {}),
    sameAs: site.founder.social.map((s) => s.href),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

/** LocalBusiness only for the staffed Kozhikode office. */
export function localBusinessLd() {
  const o = site.offices.operational;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#kozhikode`,
    name: site.name,
    parentOrganization: { "@id": orgId },
    url: absoluteUrl("/locations/kozhikode/"),
    image: absoluteUrl("/brand/logo-full.png"),
    telephone: site.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.streetAddress,
      addressLocality: o.locality,
      addressRegion: o.region,
      addressCountry: o.country,
      ...(o.postalCode ? { postalCode: o.postalCode } : {}),
    },
    areaServed: site.areaServed,
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": orgId },
    areaServed: site.areaServed,
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function articleLd(a: { title: string; description: string; path: string; published: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    mainEntityOfPage: absoluteUrl(a.path),
    datePublished: a.published,
    dateModified: a.updated,
    // TODO: replace with a named author (Person) once supplied
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
