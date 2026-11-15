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
- The contact form validates on the server, has honeypot + timing spam protection, and on success offers **Continue on WhatsApp** with the enquiry pre-written.
- Lead delivery: set `LEAD_WEBHOOK_URL` (Zapier/Make/n8n/Google Sheet/CRM) and/or `RESEND_API_KEY` + `LEAD_EMAIL_TO`. With neither set, leads are only continued on WhatsApp.
- Analytics: set `NEXT_PUBLIC_GTM_ID`. Consent Mode v2 defaults to denied; a cookie banner appears only when GTM is configured.
- Events pushed to `dataLayer`: `cta_click`, `form_start`, `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`, `case_study_view`, `outbound_click`. In GA4 mark `generate_lead` and `whatsapp_click` as key events and create a segment for `utm_source=chatgpt.com`.

## Moving content to a CMS (Sanity)

Types in `src/lib/content.ts` map 1:1 to Sanity document types: `service`, `businessModel`, `location`, `caseStudy`, `insight`, plus a `siteSettings` singleton for `site.ts`. Replace the `get*` helpers with GROQ queries wrapped in `"use cache"` and keep `generateStaticParams`.

## Deployment

Vercel (recommended) or any Node 20.9+ host.
1. Set env vars from `.env.example` (on preview deployments set `NEXT_PUBLIC_ALLOW_INDEXING=false`).
2. Point `billionconversion.com` at the deployment; redirect `www` → apex (or the reverse) at the DNS/host level.
3. Verify in Google Search Console and submit `/sitemap.xml`.
4. Check that the CDN/firewall does not block Googlebot, Bingbot, OAI-SearchBot, PerplexityBot or ClaudeBot.

## Content still required (placeholders in code are marked `TODO`)

| Item | Where |
|---|---|
| Case studies are hidden (`site.features.caseStudies = false`; pages live in `src/app/_work-hidden` — rename to `work` to restore). Escala: sector, market, challenge, work delivered, period, 2–3 verified KPIs, quote, imagery, written permission | `content.ts → caseStudies` |
| Bufarhan: written permission, live URL, sector/brief, screenshots, launch date, outcomes, quote | `content.ts → caseStudies` |
| Set `status: "published"` once a case study is complete (removes noindex, adds to sitemap) | `content.ts` |
| Operational office PIN code; full registered address + PIN; LLPIN (from MCA record) | `site.ts` |
| Founder bio (current text is a placeholder) and named article authors | `site.ts → founder.bio`, `seo.ts → articleLd` |
| Business hours | `contact/page.tsx` |
| Art-directed photography for business-model cards and case studies (abstract visuals used for now) | `components/Art.tsx` |
| Typical price ranges (optional; helps AEO) | `content.ts → how-digital-marketing-is-priced` |
| Final Privacy Policy text (Terms & Conditions are final) | `privacy/` |
| Official SVG logos | `public/brand/` |
| Google Business Profile for the KINFRA office (name exactly "Billion Conversion") | external |
