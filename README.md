# Billion Conversion — website

Production website for **Billion Conversion** (legal entity: Billiyon Conversion LLP), built from the Master Development Prompt and the Website Strategy Report.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.4 (App Router, Cache Components, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4 — design tokens in `src/app/globals.css` (`@theme`) |
| Motion | CSS animations + IntersectionObserver + one throttled `<canvas>` (no animation library needed) |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (headings), Inter (body) via `next/font` (self-hosted, no layout shift) |
| Content | Typed data in `src/lib/content.ts` (CMS-ready — see below) |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000
```

```bash
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Project structure

```
src/
  app/                    routes (all statically prerendered)
    page.tsx              homepage (sections A–K of the brief)
    services/[slug]       8 service pages
    business-models/[slug]  D2C, B2B, e-commerce, product businesses
    locations/[slug]      Kozhikode, Kerala, Dubai & UAE, Bahrain (/locations/uae/ → /locations/dubai/)
    work/[slug]           case studies (drafts are noindexed + excluded from sitemap)
    insights/[slug]       articles (AEO "short answer" block + BlogPosting schema)
    contact/              form + server action (actions.ts)
    sitemap.ts, robots.ts, icon.png, apple-icon.png
  components/             Header, Footer, IntroLoader, HeroVisual, CaseCarousel, Analytics, ui.tsx …
  lib/
    site.ts               brand, contact, offices — single source of truth
    content.ts            services, business models, locations, case studies, insights
    seo.ts                metadata builder + JSON-LD (Organization, ProfessionalService, Service, BreadcrumbList, BlogPosting)
    analytics.ts          dataLayer event helper
scripts/prepare-logos.mjs regenerates transparent logo PNGs from the original files
public/brand/             logo-icon, logo-full, logo-wordmark, logo-horizontal (transparent PNG)
```

## Logo assets

The supplied logos are raster files on black. `scripts/prepare-logos.mjs` removes the black background without redrawing or recolouring (solid artwork kept fully opaque; anti-aliased edges un-multiplied against black). The header uses the original mark and wordmark placed side by side, matching the approved homepage reference.

```bash
node scripts/prepare-logos.mjs <path-to-kit>/assets
```

**Request from the brand owner:** official transparent SVG files (icon, stacked lockup, horizontal lockup). Replace the PNGs in `public/brand/` when received.

## Leads, WhatsApp and analytics

- All CTAs lead to `/contact/` or WhatsApp (`+91 95670 33002`) with pre-filled messages that name the page/service.
- The contact form validates in the browser, has honeypot + timing spam protection, and on success offers **Continue on WhatsApp** with the enquiry pre-written. The site is static, so there is no server-side lead delivery.
- Analytics: `NEXT_PUBLIC_GTM_ID` (GTM) and `NEXT_PUBLIC_CLARITY_ID` (Microsoft Clarity); defaults are set in the workflows and a GitHub repo variable overrides them. Both start cookieless and switch to full tracking only when the visitor accepts the cookie banner. Consent Mode v2 defaults to denied; a cookie banner appears only when GTM is configured.
- Events pushed to `dataLayer`: `cta_click`, `form_start`, `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`, `case_study_view`, `outbound_click`. In GA4 mark `generate_lead` and `whatsapp_click` as key events and create a segment for `utm_source=chatgpt.com`.

## Moving content to a CMS (Sanity)

Types in `src/lib/content.ts` map 1:1 to Sanity document types: `service`, `businessModel`, `location`, `caseStudy`, `insight`, plus a `siteSettings` singleton for `site.ts`. Replace the `get*` helpers with GROQ queries wrapped in `"use cache"` and keep `generateStaticParams`.

## Deployment (GitHub Pages)

The site is a static export (`output: "export"`, built to `out/`). `.github/workflows/deploy.yml` builds and publishes it on every push to `main`.

1. Repo **Settings > Pages > Source: GitHub Actions** (one time).
2. Optional repo variables (**Settings > Secrets and variables > Actions > Variables**): `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`.
3. Custom domain: **Settings > Pages > Custom domain** = `billionconversion.com`, then at your DNS provider add `A` records for `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and a `CNAME` for `www` to `<username>.github.io`. Tick **Enforce HTTPS** once the certificate is issued, then re-run the workflow so links drop the `/billion-conversion-site` prefix.
4. Verify in Google Search Console and submit `/sitemap.xml`.

Local check of the production build: `npm run build`, then serve `out/` with any static server.
