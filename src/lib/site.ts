/**
 * Central site configuration.
 * Values marked `null` are NOT yet verified — they render as nothing (or a
 * clearly-labelled placeholder) until the brand owner supplies them.
 */
export const site = {
  name: "Billion Conversion",
  legalName: "Billiyon Conversion LLP",
  tagline: "We Turn Growth Into Numbers.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://billionconversion.com").replace(/\/$/, ""),
  description:
    "Billion Conversion is a growth marketing agency helping businesses scale through digital marketing, performance marketing, SEO and conversion-focused strategies.",
  locale: "en_IN",

  phone: { display: "+91 73063 39060", tel: "+917306339060" },
  whatsapp: { display: "+91 95670 33002", number: "919567033002" },
  email: "info@billionconversion.com" as string | null,

  offices: {
    operational: {
      label: "Operational office",
      lines: ["KINFRA Advanced Technology Park", "Ramanattukara, Kozhikode", "Kerala, India"],
      locality: "Ramanattukara, Kozhikode",
      region: "Kerala",
      country: "IN",
      postalCode: null as string | null, // TODO: confirm PIN
      streetAddress: "KINFRA Advanced Technology Park",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=KINFRA+Advanced+Technology+Park+Ramanattukara+Kozhikode",
    },
    registered: {
      label: "Registered office",
      lines: ["Mudapuram P.O., Attingal", "Thiruvananthapuram, Kerala, India"],
      // TODO: confirm complete registered address + PIN against MCA record
    },
  },
  llpin: "ADD-1911" as string | null, // MCA LLP Identification Number
  /** Year the business started, e.g. "2024". Shown on the brand page and in schema once supplied. */
  foundingYear: "2026" as string | null,

  markets: ["Kerala, India", "UAE", "Bahrain", "GCC"],
  areaServed: ["Kerala, India", "United Arab Emirates", "Bahrain", "Gulf Cooperation Council (GCC)"],

  social: [
    { label: "Instagram", href: "https://www.instagram.com/billion_conversion/" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594997592760" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/billion-conversion" },
  ] as { label: "Instagram" | "Facebook" | "LinkedIn"; href: string }[],

  founder: {
    name: "Salmanul Faris B",
    role: "Founder",
    /** Drop the photo at public/team/salmanul-faris-b.jpg and set this path */
    image: "/team/salmanul-faris-b.webp" as string | null,
    /** Founder bio (approved by the founder, 17 Nov 2026). Each string is one paragraph. */
    bio: [
      "Salmanul Faris B is the founder of Billion Conversion. With a background in commerce, software engineering and digital marketing, he brings together three skills most agencies keep apart: understanding how a business makes money, building the websites and tracking that capture demand, and running the campaigns that create it.",
      "He founded Billion Conversion in 2026 in Kerala to give businesses a growth partner that is measured by leads, customers and revenue, not likes and impressions. Today he leads the agency's strategy and works directly with clients across Kerala, India, the UAE, Bahrain and the wider GCC.",
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/salmanul.faris.b/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/salmanul-faris-basheer" },
      { label: "Facebook", href: "https://www.facebook.com/salmanul.faris.basheer/" },
    ] as { label: "Instagram" | "Facebook" | "LinkedIn"; href: string }[],
  },

  /** Company description (supplied by Billion Conversion, 15 Nov 2026) */
  about: {
    intro:
      "Billion Conversion is a full-service growth marketing agency based in Kerala, helping businesses scale through data-driven digital marketing, performance advertising, SEO and conversion rate optimisation (CRO). We combine strategy, creativity, technology and analytics to turn online visibility into measurable business growth.",
    body: [
      "From building high-converting websites and Shopify stores to managing Google Ads, Meta Ads, social media marketing, SEO and AI-powered creative production, we help brands attract the right audience, generate qualified leads and increase revenue.",
      "Our approach goes beyond clicks and impressions. We focus on what actually matters to businesses: leads, conversions, customer acquisition and sustainable growth.",
      "We serve businesses across Kerala, India, the UAE, Bahrain and the wider GCC.",
    ],
  },

  /** Feature switches — case studies stay hidden until verified client content is ready */
  features: { caseStudies: false },

  primaryCta: { label: "Book a Growth Call", href: "/contact/" },
};

/** Prefix a /public file path with the deploy sub-folder (GitHub Pages project URL). */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function whatsappLink(message?: string) {
  const text = message ?? "Hi Billion Conversion, I'd like to talk about growing my business.";
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
