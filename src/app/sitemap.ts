import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { businessModels, caseStudies, insights, locations, services } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services/", "/business-models/", "/insights/", "/about/", "/about-billion-conversion/", "/contact/", "/privacy/", "/terms/"];
  const entries = [
    ...staticPaths.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}/`), priority: 0.9 })),
    ...businessModels.map((m) => ({ url: absoluteUrl(`/business-models/${m.slug}/`), priority: 0.8 })),
    ...locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}/`), priority: 0.8 })),
    // Draft case studies are noindexed, so keep them out of the sitemap
    ...caseStudies.filter((c) => site.features.caseStudies && c.status === "published").map((c) => ({ url: absoluteUrl(`/work/${c.slug}/`), priority: 0.7 })),
    ...insights.map((a) => ({ url: absoluteUrl(`/insights/${a.slug}/`), lastModified: a.updated, priority: 0.6 })),
  ];
  return entries;
}
