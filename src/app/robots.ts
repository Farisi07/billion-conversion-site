import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Crawler policy (decision 15 Nov 2026): search AND AI training crawlers are allowed.
 * Set NEXT_PUBLIC_ALLOW_INDEXING=false on staging/preview deployments to block everything.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === "false") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended"], allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
