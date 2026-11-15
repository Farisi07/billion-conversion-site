import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Canonical URLs end in "/" (e.g. /services/seo-ai-search/)
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  // Hide the Next.js "N" dev badge (it never appears in production anyway)
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // UAE intent is covered by the Dubai & UAE page (avoids a thin duplicate page)
    return [{ source: "/locations/uae/", destination: "/locations/dubai/", permanent: true }];
  },
};

export default nextConfig;
