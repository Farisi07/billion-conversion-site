import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs end in "/" (e.g. /services/seo-ai-search/)
  trailingSlash: true,
  // Static export for GitHub Pages (no server). Output goes to /out
  output: "export",
  // Set by the GitHub Pages workflow: "/billion-conversion-site" on github.io, "" on a custom domain
  basePath: process.env.PAGES_BASE_PATH || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: process.env.PAGES_BASE_PATH || "" },
  // GitHub Pages has no image optimisation server
  images: { unoptimized: true },
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
};

export default nextConfig;
