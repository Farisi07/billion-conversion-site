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
const logoLd = () => ({ "@type": "ImageObject", "@id": `${site.url}/#logo`, url: absoluteUrl("/brand/logo-full.png"), width: 838, height: 720, caption: site.name });
const officeAddressLd = () => {
  const o = site.offices.operational;
  return {
    "@type": "PostalAddress",
    streetAddress: o.streetAddress,
    addressLocality: o.locality,
    addressRegion: o.region,
    addressCountry: o.country,
    ...(o.postalCode ? { postalCode: o.postalCode } : {}),
  };
};
const contactPointsLd = () => [
  { "@type": "ContactPoint", contactType: "sales", telephone: site.phone.tel, areaServed: ["IN", "AE", "BH"], availableLanguage: ["en", "ml"] },
  { "@type": "ContactPoint", contactType: "customer service", name: "WhatsApp", telephone: `+${site.whatsapp.number}`, areaServed: ["IN", "AE", "BH"], availableLanguage: ["en", "ml"] },
];

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: logoLd(),
    image: { "@id": `${site.url}/#logo` },
    slogan: site.tagline,
    founder: { "@type": "Person", "@id": founderId, name: site.founder.name },
    ...(site.foundingYear ? { foundingDate: site.foundingYear } : {}),
    ...(site.llpin ? { identifier: { "@type": "PropertyValue", propertyID: "LLPIN", value: site.llpin } } : {}),
    description: site.about.intro,
    address: officeAddressLd(),
    telephone: site.phone.tel,
    areaServed: site.areaServed,
    knowsAbout: [
      "Growth marketing",
      "Digital marketing",
      "Performance marketing",
      "Google Ads",
      "Meta Ads",
      "Search engine optimisation (SEO)",
      "Answer engine optimisation (AEO)",
      "Generative engine optimisation (GEO)",
      "Conversion rate optimisation (CRO)",
      "Website development",
      "Shopify development",
      "E-commerce marketing",
      "Social media marketing",
    ],
    contactPoint: contactPointsLd(),
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
    description: site.description,
    publisher: { "@id": orgId },
    about: { "@id": orgId },
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
    description: site.description,
    image: absoluteUrl("/brand/logo-full.png"),
    logo: absoluteUrl("/brand/logo-full.png"),
    telephone: site.phone.tel,
    ...(site.email ? { email: site.email } : {}),
    address: officeAddressLd(),
    hasMap: o.mapsUrl,
    areaServed: site.areaServed,
    founder: { "@id": founderId },
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

/** AboutPage wrapper for brand/entity pages: tells search engines the page is about the organisation. */
export function aboutPageLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": orgId },
    mainEntity: { "@id": orgId },
    inLanguage: "en",
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
