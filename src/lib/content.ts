/**
 * Website content, typed so each collection can later move to a headless CMS
 * (Sanity schemas mirror these types — see README).
 * Rule: no invented metrics, clients, testimonials, or locations.
 */

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: "chart" | "search" | "target" | "code" | "store" | "cart" | "share" | "compass";
  featured?: boolean;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  forWho: string[];
  deliverables: { title: string; body: string }[];
  howWeMeasure: string[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "growth-marketing",
    name: "Growth Marketing",
    short: "Connected acquisition, conversion and retention plans built around measurable revenue goals.",
    icon: "compass",
    meta: {
      title: "Growth Marketing Agency in Kozhikode",
      description:
        "Growth marketing for D2C, B2B and e-commerce brands in Kerala, the UAE, Bahrain and the GCC: acquisition, conversion, retention and measurement in one plan.",
    },
    h1: "Growth marketing that connects every channel to revenue",
    intro:
      "Most businesses don't need more disconnected campaigns. They need one growth system where search, paid media, website experience and follow-up all point at the same commercial goal. We plan, run and measure that system with you.",
    forWho: [
      "Founders who want one accountable partner instead of several vendors",
      "Brands spending on ads but unsure what is actually driving enquiries or sales",
      "Teams preparing to expand from Kerala into the GCC (or the other way round)",
    ],
    deliverables: [
      { title: "Growth audit & opportunity map", body: "Channel, funnel, tracking and competitor review that ranks opportunities by likely impact and effort." },
      { title: "Acquisition plan", body: "The right mix of search, paid social, local visibility and content for your market and budget." },
      { title: "Conversion layer", body: "Landing pages, offers, WhatsApp and form journeys designed to turn attention into qualified enquiries." },
      { title: "Retention & re-engagement", body: "WhatsApp, email and remarketing flows that bring past customers and warm leads back." },
      { title: "Measurement framework", body: "GA4, conversion events and a reporting view built around leads, cost per lead and revenue — not vanity metrics." },
    ],
    howWeMeasure: ["Qualified leads and cost per qualified lead", "Conversion rate by channel and landing page", "Revenue, CAC and payback where data allows"],
    faqs: [
      { q: "What is the difference between growth marketing and digital marketing?", a: "Digital marketing often means running individual channels. Growth marketing treats acquisition, conversion and retention as one system, tests continuously and judges every activity by its contribution to leads and revenue." },
      { q: "Do you work with businesses outside Kerala?", a: "Yes. We serve businesses across Kerala, India, the UAE, Bahrain and the wider GCC." },
      { q: "How do you price growth marketing?", a: "Every engagement is custom-quoted. Scope depends on your goals, the channels involved, the markets you sell in and how much creative and development work is needed." },
    ],
    related: ["performance-marketing", "seo-ai-search", "conversion-rate-optimization"],
  },
  {
    slug: "performance-marketing",
    name: "Growth & Performance",
    short: "Performance marketing, paid acquisition, campaign strategy and lead generation.",
    icon: "chart",
    featured: true,
    meta: {
      title: "Performance Marketing Agency – Google & Meta Ads",
      description:
        "Google Ads, Meta Ads and Click-to-WhatsApp campaigns managed for lead quality and cost per lead. Serving Kozhikode, Kerala, the UAE, Bahrain and the GCC.",
    },
    h1: "Performance marketing that brings qualified leads, not just clicks",
    intro:
      "We plan, launch and optimise paid campaigns on Google, Meta (Facebook & Instagram), YouTube and LinkedIn — with tracking set up properly first, so every rupee or dirham can be traced to an enquiry.",
    forWho: [
      "Clinics, real-estate, education and retail businesses that need steady enquiries",
      "D2C and e-commerce brands scaling paid acquisition",
      "B2B companies looking for high-intent search demand",
    ],
    deliverables: [
      { title: "Google Search, Performance Max & YouTube", body: "Keyword and audience strategy, ad copy, negative keywords, bidding and landing-page alignment." },
      { title: "Meta Ads & Click-to-WhatsApp", body: "Lead and conversation campaigns for Facebook and Instagram, including WhatsApp-first journeys popular across Kerala and the GCC." },
      { title: "Creative testing", body: "Structured tests of hooks, formats and offers so budget shifts towards what works." },
      { title: "Conversion tracking", body: "GA4, Google Ads and Meta conversion events, including WhatsApp clicks, calls and form submissions." },
      { title: "Reporting", body: "Plain-language reports on spend, leads, cost per lead and lead quality." },
    ],
    howWeMeasure: ["Cost per lead and cost per qualified lead", "Conversion rate by campaign and creative", "Return on ad spend for e-commerce"],
    faqs: [
      { q: "What are Click-to-WhatsApp ads?", a: "They are Meta ads that open a WhatsApp chat with your business instead of a website. They suit businesses whose customers prefer to ask questions before buying." },
      { q: "How much should I spend on ads?", a: "It depends on your market, competition and how many leads you need. We recommend a test budget first, then scale what performs. Ad spend is paid directly to Google or Meta and is separate from our fee." },
      { q: "Do you guarantee leads?", a: "No honest agency can guarantee results from ad platforms. We commit to transparent tracking, rapid testing and clear reporting." },
    ],
    related: ["conversion-rate-optimization", "growth-marketing", "social-media-marketing"],
  },
  {
    slug: "seo-ai-search",
    name: "SEO, AEO & GEO",
    short: "Technical SEO, local SEO, AEO, GEO and long-term organic visibility across search and AI platforms.",
    icon: "search",
    featured: true,
    meta: {
      title: "SEO, AEO & GEO Services – Search & AI Visibility",
      description:
        "Technical SEO, local SEO and Google Maps, answer-engine (AEO) and generative-engine (GEO) optimisation for businesses in Kerala, the UAE, Bahrain and the GCC.",
    },
    h1: "SEO, AEO and GEO: be discoverable wherever customers search",
    intro:
      "Customers now find businesses through Google results, Google Maps, AI Overviews and assistants such as ChatGPT. The foundations are the same — a crawlable site, genuinely useful content and consistent business information — and we build all three.",
    forWho: [
      "Local businesses that want to appear on Google Maps in Kozhikode and Kerala",
      "Brands whose competitors appear in search and AI answers when they don't",
      "E-commerce stores that need product and category pages to rank",
    ],
    deliverables: [
      { title: "Technical SEO", body: "Crawlability, indexation, site speed, structured data, canonical tags, sitemaps and internal linking." },
      { title: "Local SEO & Google Business Profile", body: "Profile optimisation, categories, services, photos, review process and local landing pages." },
      { title: "AEO (answer engine optimisation)", body: "Pages that answer real buyer questions clearly, with headings, tables and direct answers search engines can understand." },
      { title: "GEO (generative engine optimisation)", body: "Consistent entity information, crawler access, original evidence and content that AI systems can cite." },
      { title: "Content & authority", body: "Keyword-mapped content plan, case studies and relevant industry mentions." },
    ],
    howWeMeasure: ["Search Console impressions, clicks and queries", "Google Business Profile calls, directions and website clicks", "Organic and AI-referral leads (e.g. traffic tagged utm_source=chatgpt.com)"],
    faqs: [
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO improves visibility in search engine results. AEO structures content to directly answer questions. GEO helps generative AI tools understand, trust and cite your business. They share the same foundation: helpful content on a technically sound site." },
      { q: "Can you guarantee a #1 ranking or a ChatGPT mention?", a: "No. Nobody controls Google's rankings or AI answers. We improve the factors you can control and measure visibility honestly." },
      { q: "How long does SEO take?", a: "Technical fixes can show impact within weeks; competitive rankings usually take several months of consistent work." },
    ],
    related: ["growth-marketing", "web-development", "ecommerce-marketing"],
  },
  {
    slug: "conversion-rate-optimization",
    name: "Conversion Optimisation",
    short: "CRO, landing pages, analytics, user experience and conversion tracking.",
    icon: "target",
    featured: true,
    meta: {
      title: "Conversion Rate Optimisation (CRO) & Landing Pages",
      description:
        "Turn more visitors into enquiries and sales with CRO, landing pages, UX improvements and accurate conversion tracking.",
    },
    h1: "Conversion optimisation: more customers from the traffic you already have",
    intro:
      "Doubling traffic is expensive. Improving how well your website and landing pages convert is usually faster and cheaper. We find where visitors drop off, fix the friction and test improvements.",
    forWho: [
      "Businesses with traffic but few enquiries",
      "Stores with high cart abandonment",
      "Advertisers whose landing pages don't match their ads",
    ],
    deliverables: [
      { title: "Conversion audit", body: "Analytics, heatmap and session review to find where and why visitors leave." },
      { title: "Landing pages", body: "Fast, focused pages for campaigns with clear offers and WhatsApp, call and form options." },
      { title: "UX & copy improvements", body: "Clearer value propositions, trust signals, forms and mobile journeys." },
      { title: "A/B testing", body: "Structured experiments where traffic allows; prioritised fixes where it doesn't." },
      { title: "Tracking", body: "GA4 events for forms, calls, WhatsApp clicks and purchases so improvements can be measured." },
    ],
    howWeMeasure: ["Conversion rate by page and device", "Form starts vs completions", "WhatsApp and call clicks per visitor"],
    faqs: [
      { q: "What is a good conversion rate?", a: "It varies widely by industry, offer and traffic source. We benchmark against your own data and improve from there rather than chasing generic averages." },
      { q: "Do I need a new website for CRO?", a: "Not usually. Many gains come from improving existing pages. If the platform itself limits you, we'll say so." },
    ],
    related: ["web-development", "performance-marketing", "shopify-development"],
  },
  {
    slug: "web-development",
    name: "Web & E-commerce",
    short: "Website development, Shopify development and high-converting e-commerce experiences.",
    icon: "code",
    featured: true,
    meta: {
      title: "Website Design & Development in Kozhikode",
      description:
        "Fast, mobile-first websites built to turn visitors into WhatsApp, call and form enquiries — for businesses in Kerala, the UAE, Bahrain and the GCC.",
    },
    h1: "Websites designed and developed to generate enquiries",
    intro:
      "Your website is your hardest-working salesperson. We design and build fast, search-friendly and easy-to-update websites that make it simple for customers to understand what you do and contact you.",
    forWho: [
      "Businesses whose current website is slow, outdated or hard to update",
      "Companies launching in a new market such as Bahrain or the UAE",
      "Brands that need landing pages for campaigns",
    ],
    deliverables: [
      { title: "Strategy & structure", body: "Sitemap, page goals and keyword mapping before design starts." },
      { title: "UI/UX design", body: "Original, on-brand design for desktop and mobile." },
      { title: "Development", body: "Modern, fast builds with an easy content-management system." },
      { title: "SEO foundations", body: "Metadata, structured data, sitemaps, redirects and Core Web Vitals." },
      { title: "Ongoing updates & support", body: "Content updates, improvements and maintenance after launch." },
    ],
    howWeMeasure: ["Core Web Vitals and page speed", "Enquiries from the website", "Organic visibility after launch"],
    faqs: [
      { q: "How long does a website take?", a: "A focused business website typically takes a few weeks; larger or e-commerce builds take longer. We'll give you a timeline with your quote." },
      { q: "Can I update the website myself?", a: "Yes. We set up a content-management system and show your team how to use it." },
    ],
    related: ["shopify-development", "conversion-rate-optimization", "seo-ai-search"],
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    short: "Shopify store design, development, optimisation and technical SEO.",
    icon: "store",
    meta: {
      title: "Shopify Development & Store Optimisation",
      description:
        "Shopify store design, development, technical SEO and conversion optimisation for D2C and e-commerce brands in Kerala, the UAE, Bahrain and the GCC.",
    },
    h1: "Shopify development for brands that want to sell more",
    intro:
      "We build and improve Shopify stores with clean themes, fast product pages, clear navigation and the integrations you need — then optimise them for search and conversion.",
    forWho: ["New D2C brands launching online", "Brands migrating to Shopify", "Existing stores with low conversion rates"],
    deliverables: [
      { title: "Store setup & theme", body: "Theme selection or customisation, navigation, collections and product templates." },
      { title: "Product pages", body: "Persuasive product content, imagery layout, reviews and trust elements." },
      { title: "Apps & integrations", body: "Payments, shipping, WhatsApp, reviews, email and analytics." },
      { title: "Technical SEO", body: "Structured data, collection architecture, speed and duplicate-content handling." },
      { title: "CRO", body: "Cart and checkout friction review and improvements." },
    ],
    howWeMeasure: ["Store conversion rate", "Average order value", "Organic product and collection traffic"],
    faqs: [
      { q: "Do you only work with Shopify?", a: "Shopify is our recommended platform for most D2C brands, but we also build custom websites where they fit better." },
    ],
    related: ["ecommerce-marketing", "conversion-rate-optimization", "web-development"],
  },
  {
    slug: "ecommerce-marketing",
    name: "E-commerce Marketing",
    short: "E-commerce SEO, product feeds, paid shopping, CRO and retention.",
    icon: "cart",
    meta: {
      title: "E-commerce Marketing – SEO, Shopping Ads & Retention",
      description:
        "E-commerce growth: product feeds, Shopping and Meta catalogue ads, e-commerce SEO, CRO and retention flows for online stores.",
    },
    h1: "E-commerce marketing from first visit to repeat purchase",
    intro:
      "Online stores grow when product discovery, conversion and retention work together. We connect feeds, ads, SEO and post-purchase journeys into one plan.",
    forWho: ["D2C brands", "Retailers and jewellery stores selling online", "Marketplaces and catalogues with many products"],
    deliverables: [
      { title: "Product feeds & Merchant Center", body: "Clean, accurate feeds for Google Shopping and Meta catalogues." },
      { title: "Shopping & catalogue ads", body: "Performance Max, Shopping and Advantage+ catalogue campaigns." },
      { title: "E-commerce SEO", body: "Category architecture, product content and structured data." },
      { title: "Retention", body: "WhatsApp and email flows for abandoned carts, post-purchase and win-back." },
      { title: "Analytics", body: "GA4 e-commerce tracking from product view to purchase." },
    ],
    howWeMeasure: ["Revenue and return on ad spend", "Repeat purchase rate", "Cart abandonment recovery"],
    faqs: [
      { q: "Can you work with my existing store platform?", a: "Yes — most of our e-commerce marketing work is platform-agnostic, although Shopify is the most common." },
    ],
    related: ["shopify-development", "performance-marketing", "seo-ai-search"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Instagram, Reels and social content planned around your customers and your sales goals.",
    icon: "share",
    meta: {
      title: "Social Media Marketing & Instagram Reels",
      description:
        "Social media management, Instagram and Reels content and community management for businesses in Kozhikode, Kerala and the GCC.",
    },
    h1: "Social media marketing that builds demand, not just followers",
    intro:
      "We plan content around your customers' questions and buying journey, produce posts and Reels, and connect social activity to enquiries through WhatsApp and paid amplification.",
    forWho: ["Restaurants, boutiques, clinics and lifestyle brands", "D2C brands building awareness", "Businesses posting without a plan"],
    deliverables: [
      { title: "Content strategy", body: "Monthly themes, formats and calendar tied to business goals." },
      { title: "Reels & posts", body: "Short-form video and static content production." },
      { title: "Community management", body: "Comment and message handling guidelines and response workflows." },
      { title: "Paid amplification", body: "Boosting top content to the right audiences." },
      { title: "Reporting", body: "Reach, engagement and — most importantly — enquiries from social." },
    ],
    howWeMeasure: ["Enquiries and WhatsApp conversations from social", "Engagement and saves on content", "Follower quality, not just count"],
    faqs: [
      { q: "Do you shoot content on location?", a: "We can plan and coordinate shoots in and around Kozhikode. For GCC clients we work with supplied footage or local creators." },
    ],
    related: ["performance-marketing", "growth-marketing", "ecommerce-marketing"],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export type BusinessModel = {
  slug: string;
  name: string;
  short: string;
  accent: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  challenges: string[];
  approach: { title: string; body: string }[];
  metrics: string[];
  services: string[];
  faqs: Faq[];
};

export const businessModels: BusinessModel[] = [
  {
    slug: "d2c-growth",
    name: "D2C Brands",
    short: "Customer acquisition, repeat purchases and conversion growth.",
    accent: "from-emerald/30 via-teal/10 to-transparent",
    meta: {
      title: "D2C Growth Marketing Agency",
      description: "Growth marketing for direct-to-consumer brands: acquisition, product-page CRO, WhatsApp and email retention, analytics and creative testing.",
    },
    h1: "Growth marketing for D2C brands",
    intro: "Direct-to-consumer brands win when acquisition costs stay under control and customers come back. We work on both sides of that equation.",
    challenges: ["Rising cost to acquire customers on Meta and Google", "Product pages that get traffic but not sales", "One-time buyers who never return", "Unclear attribution between channels"],
    approach: [
      { title: "Acquire", body: "Paid social and search with structured creative testing and audience strategy." },
      { title: "Convert", body: "Product-page, cart and checkout optimisation; offers and trust signals." },
      { title: "Retain", body: "WhatsApp and email flows for post-purchase, replenishment and win-back." },
      { title: "Measure", body: "Customer acquisition cost, average order value, conversion rate and repeat-purchase tracking." },
    ],
    metrics: ["Customer acquisition cost (CAC)", "Average order value (AOV)", "Conversion rate", "Repeat purchase rate"],
    services: ["performance-marketing", "shopify-development", "ecommerce-marketing", "conversion-rate-optimization"],
    faqs: [{ q: "Do you work with early-stage D2C brands?", a: "Yes. For early-stage brands we usually start with tracking, a focused acquisition test and product-page improvements before scaling spend." }],
  },
  {
    slug: "b2b-growth",
    name: "B2B Businesses",
    short: "Demand generation, qualified leads and sales funnel growth.",
    accent: "from-teal/30 via-navy/40 to-transparent",
    meta: {
      title: "B2B Lead Generation & Demand Generation",
      description: "B2B growth: high-intent search, LinkedIn and paid campaigns, landing pages, lead qualification and CRM-ready tracking.",
    },
    h1: "B2B lead generation and demand generation",
    intro: "B2B buyers research for longer and involve more people. We build the visibility, content and lead journeys that turn that research into qualified sales conversations.",
    challenges: ["Leads that sales teams say are unqualified", "Long sales cycles with little visibility", "Websites that explain features but not outcomes", "No link between marketing spend and pipeline"],
    approach: [
      { title: "Define the ICP", body: "Agree who the ideal customer is and what a qualified lead looks like." },
      { title: "Capture demand", body: "High-intent search, LinkedIn and retargeting campaigns." },
      { title: "Convert", body: "Landing pages, case studies and consultation offers built for decision-makers." },
      { title: "Qualify & hand over", body: "Lead scoring, WhatsApp/CRM routing and feedback loops with sales." },
    ],
    metrics: ["Qualified leads", "Cost per qualified lead", "Lead-to-meeting rate", "Pipeline influenced"],
    services: ["performance-marketing", "seo-ai-search", "conversion-rate-optimization", "web-development"],
    faqs: [{ q: "Do you run LinkedIn ads?", a: "Yes, where your buyers are reachable there and the deal value justifies the cost." }],
  },
  {
    slug: "ecommerce-growth",
    name: "E-commerce & Shopify",
    short: "Store development, product discovery and revenue optimisation.",
    accent: "from-emerald/25 via-forest/40 to-transparent",
    meta: {
      title: "E-commerce & Shopify Growth",
      description: "E-commerce growth for online stores: Shopify development, product feeds, Shopping ads, e-commerce SEO, CRO and retention.",
    },
    h1: "E-commerce and Shopify growth",
    intro: "From the storefront to the feed to the follow-up message, we improve each part of the journey that turns a product view into a repeat order.",
    challenges: ["Low store conversion rate", "Feed errors limiting Shopping ads", "Poor category and product rankings", "High cart abandonment"],
    approach: [
      { title: "Store experience", body: "Shopify development, navigation, product pages and speed." },
      { title: "Product discovery", body: "Feeds, Shopping ads and e-commerce SEO." },
      { title: "Revenue optimisation", body: "Checkout, upsell and bundle improvements." },
      { title: "Retention", body: "Abandoned-cart and post-purchase flows." },
    ],
    metrics: ["Revenue", "Return on ad spend", "Store conversion rate", "Average order value"],
    services: ["shopify-development", "ecommerce-marketing", "conversion-rate-optimization", "seo-ai-search"],
    faqs: [{ q: "Can you improve an existing Shopify store rather than rebuilding it?", a: "Usually, yes. We start with an audit and fix what limits performance before recommending a rebuild." }],
  },
  {
    slug: "product-business-growth",
    name: "Product Businesses",
    short: "Brand positioning, launch strategy and market expansion.",
    accent: "from-champagne/20 via-forest/40 to-transparent",
    meta: {
      title: "Product Launch & Market Expansion Marketing",
      description: "Positioning, launch strategy, creative systems, paid acquisition and market expansion for product businesses in India and the GCC.",
    },
    h1: "Growth for product businesses: launch, position and expand",
    intro: "Whether you're launching a new product or taking an existing one into a new market, we help you position it clearly and build demand efficiently.",
    challenges: ["Unclear positioning against competitors", "Launches that get attention but not sales", "Expanding into the UAE or Bahrain without local insight", "Creative that doesn't scale across channels"],
    approach: [
      { title: "Position", body: "Audience research, messaging and offer development." },
      { title: "Launch", body: "Launch plan across search, social, creators and PR-style content." },
      { title: "Scale", body: "Paid acquisition with creative systems that can be refreshed quickly." },
      { title: "Expand", body: "Market-entry plans for new regions with localised pages and campaigns." },
    ],
    metrics: ["Launch-period sales or enquiries", "Cost per acquisition", "Share of search for the brand"],
    services: ["growth-marketing", "performance-marketing", "social-media-marketing", "web-development"],
    faqs: [{ q: "Do you help with market expansion to the GCC?", a: "Yes. We work with clients in the UAE, Bahrain and the wider GCC and can plan localised campaigns and pages for those markets." }],
  },
];

export type Location = {
  slug: string;
  name: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  presence: "office" | "market";
  presenceNote: string;
  context: { title: string; body: string }[];
  services: string[];
  industries: string[];
  proofSlugs: string[];
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "kozhikode",
    name: "Kozhikode (Calicut)",
    meta: {
      title: "Digital Marketing Company in Kozhikode (Calicut)",
      description: "Digital and growth marketing from our Kozhikode team at KINFRA, Ramanattukara: local SEO, Google Maps, Meta and Google Ads, websites and Shopify.",
    },
    h1: "Digital marketing in Kozhikode and Calicut",
    intro: "Billion Conversion's team works from KINFRA Advanced Technology Park, Ramanattukara, Kozhikode. We help local businesses get found on Google and Google Maps, generate WhatsApp and phone enquiries, and build websites that convert.",
    presence: "office",
    presenceNote: "Operational office: KINFRA Advanced Technology Park, Ramanattukara, Kozhikode. Visits by appointment.",
    context: [
      { title: "Local search & Google Maps", body: "Many Kozhikode customers search on Google Maps before visiting or calling. A complete, accurate Google Business Profile and genuine reviews matter as much as your website." },
      { title: "WhatsApp-first enquiries", body: "Customers here often prefer to message before they call or visit. We build campaigns and websites around Click-to-WhatsApp journeys." },
      { title: "Both names: Kozhikode and Calicut", body: "People search using both names, plus area names. Our local pages and profiles are written for how your customers actually search." },
    ],
    services: ["seo-ai-search", "performance-marketing", "social-media-marketing", "web-development"],
    industries: ["Healthcare & clinics", "Restaurants & cafés", "Real estate", "Boutiques, textiles & jewellery", "Education & coaching"],
    proofSlugs: [],
    faqs: [
      { q: "Where is your office in Kozhikode?", a: "Our operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode, Kerala. Please message us on WhatsApp to arrange a visit." },
      { q: "Do you only work with large businesses?", a: "No. Many of our clients are small and growing businesses. Every plan is custom-quoted to fit your goals." },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    meta: {
      title: "Growth Marketing Agency in Kerala",
      description: "Growth and digital marketing for businesses across Kerala — SEO, Google and Meta Ads, WhatsApp marketing, websites and Shopify — from our Kozhikode team.",
    },
    h1: "Growth marketing for businesses across Kerala",
    intro: "From our Kozhikode base we work with businesses across Kerala — meeting in person wherever it helps.",
    presence: "office",
    presenceNote: "Based in Kozhikode; serving clients across Kerala.",
    context: [
      { title: "Malayalam and English", body: "Kerala customers search and engage in both Malayalam and English. We plan content and ads for the language mix your customers use." },
      { title: "Strong local sectors", body: "Healthcare, Ayurveda, education, hospitality, real estate, retail and jewellery are major sectors with distinct buying journeys." },
      { title: "Gulf connection", body: "Many Kerala brands sell to — or are owned by — customers in the GCC. We plan campaigns that work across both markets." },
    ],
    services: ["growth-marketing", "seo-ai-search", "performance-marketing", "web-development"],
    industries: ["Healthcare & Ayurveda", "Hotels & tourism", "Real estate", "Retail & jewellery", "Education"],
    proofSlugs: [],
    faqs: [{ q: "Do you work with businesses outside Kozhikode?", a: "Yes. We serve clients across Kerala, as well as in the UAE, Bahrain and the wider GCC." }],
  },
  {
    slug: "dubai",
    name: "Dubai & UAE",
    meta: {
      title: "Growth Marketing for Dubai & UAE Businesses",
      description: "Growth marketing for businesses in Dubai, the UAE and the wider GCC: performance marketing, SEO, websites and Shopify from Billion Conversion.",
    },
    h1: "Growth marketing for businesses in Dubai and the UAE",
    intro: "We work with businesses in Dubai, across the UAE and in the wider GCC, delivering growth strategy, performance campaigns, SEO, websites and reporting.",
    presence: "market",
    presenceNote: "We serve businesses across Dubai, the wider UAE and the GCC, with calls and reporting scheduled in Gulf Standard Time.",
    context: [
      { title: "Competitive, high-cost media", body: "Ad costs in the UAE can be high, so campaign structure, landing pages and lead qualification matter even more." },
      { title: "Multilingual audiences", body: "UAE audiences are diverse. We plan targeting and messaging for the languages and communities you serve." },
      { title: "Indian-time delivery advantage", body: "Our team works in IST, 1.5 hours ahead of GST, which gives an early start on reporting and changes." },
    ],
    services: ["performance-marketing", "seo-ai-search", "web-development", "shopify-development"],
    industries: ["D2C & consumer brands", "Real estate", "Hospitality", "Professional services"],
    proofSlugs: [],
    faqs: [{ q: "Do you serve the wider GCC as well as the UAE?", a: "Yes. Alongside Dubai and the rest of the UAE, we serve businesses in Bahrain and across the wider GCC." }],
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    meta: {
      title: "Website Development & Growth Marketing in Bahrain",
      description: "Websites, SEO and performance marketing for Bahrain businesses from Billion Conversion — including ongoing website updates and support.",
    },
    h1: "Websites and growth marketing for businesses in Bahrain",
    intro: "We design, build and support websites for Bahrain businesses and run the search and paid campaigns that bring them customers.",
    presence: "market",
    presenceNote: "We serve businesses across Bahrain and the wider GCC, with calls and reporting scheduled in Arabia Standard Time.",
    context: [
      { title: "Ongoing website support", body: "Many businesses need more than a launch. We provide continuing updates and improvements after the site goes live." },
      { title: "A smaller, relationship-driven market", body: "In Bahrain, reputation and clear communication matter. Websites must build trust quickly and make contact easy." },
      { title: "English and Arabic audiences", body: "We plan content for English-speaking audiences and can advise on Arabic localisation where your customers need it." },
    ],
    services: ["web-development", "seo-ai-search", "performance-marketing", "conversion-rate-optimization"],
    industries: ["Retail & trading", "Professional services", "Hospitality", "D2C & consumer brands"],
    proofSlugs: ["bufarhan"],
    faqs: [{ q: "Do you serve businesses across the GCC?", a: "Yes. We serve businesses in Bahrain, the UAE and the wider GCC." }],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  market: string;
  services: string[];
  summary: string;
  challenge: string | null;
  work: string[];
  /** Only verified, permission-approved metrics. Empty until supplied. */
  results: { value: string; label: string; definition: string }[];
  quote: { text: string; name: string; role: string } | null;
  liveUrl: string | null;
  /** Drafts are shown in the carousel but their detail pages are noindexed. */
  status: "draft" | "published";
  missing: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bufarhan",
    client: "Bufarhan",
    category: "Website development",
    market: "Bahrain",
    services: ["web-development"],
    summary: "Website design and development for a Bahrain business, with ongoing updates and support after launch.",
    challenge: null,
    work: ["Website design and development", "Ongoing content updates and improvements"],
    results: [],
    quote: null,
    liveUrl: null,
    status: "draft",
    missing: ["Written permission to publish", "Live website URL", "Sector and project brief", "Desktop and mobile screenshots", "Launch date", "Any measurable outcomes (enquiries, speed scores)", "Client quote"],
  },
  {
    slug: "escala",
    client: "Escala",
    category: "Growth marketing",
    market: "To be confirmed",
    services: ["growth-marketing"],
    summary: "Growth marketing engagement. Full case study, including verified results, is being prepared with the client.",
    challenge: null,
    work: [],
    results: [],
    quote: null,
    liveUrl: null,
    status: "draft",
    missing: ["Sector and market", "Business challenge", "Channels and work delivered", "Time period", "2–3 verified KPIs with definitions and source", "Client quote", "Project imagery"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readMins: number;
  answer: string;
  body: string; // trusted, hand-written HTML
};

export const insights: Insight[] = [
  {
    slug: "seo-vs-aeo-vs-geo",
    title: "SEO vs AEO vs GEO: what's the difference, and what should a business do?",
    description: "A plain-language explanation of SEO, answer engine optimisation (AEO) and generative engine optimisation (GEO), and the practical steps that support all three.",
    category: "Search visibility",
    published: "2026-11-15",
    updated: "2026-11-15",
    readMins: 6,
    answer:
      "SEO helps your pages rank in search results. AEO structures content so search engines can lift a direct answer to a question. GEO helps AI tools such as Google AI Overviews and ChatGPT understand, trust and cite your business. All three rest on the same foundation: a crawlable website, genuinely useful content and consistent business information.",
    body: `
<h2>The short version</h2>
<div class="table-scroll"><table>
<thead><tr><th></th><th>SEO</th><th>AEO</th><th>GEO</th></tr></thead>
<tbody>
<tr><td><strong>Goal</strong></td><td>Rank pages in search results</td><td>Be the direct answer to a question</td><td>Be understood and cited by AI-generated answers</td></tr>
<tr><td><strong>Where it shows</strong></td><td>Google and Bing results, Google Maps</td><td>Featured answers, “People also ask”, voice</td><td>Google AI Overviews and AI Mode, ChatGPT search, Perplexity, Gemini</td></tr>
<tr><td><strong>Main levers</strong></td><td>Technical health, relevance, links, local signals</td><td>Clear questions and concise answers, structure</td><td>Crawler access, entity consistency, original evidence</td></tr>
</tbody></table></div>

<h2>What Google says about AI features</h2>
<p>Google's guidance for site owners says there are no special requirements or special markup needed to appear in AI Overviews or AI Mode: a page needs to be indexed and eligible to show a snippet, and normal SEO best practice applies. Traffic from these features is reported inside Search Console's normal Performance report.</p>

<h2>What to do in practice</h2>
<ol>
<li><strong>Make sure you can be crawled.</strong> Check robots.txt and any CDN or firewall rules so that Googlebot, Bingbot and the AI search crawlers you want (for example OpenAI's OAI-SearchBot) are not blocked.</li>
<li><strong>Keep business information consistent.</strong> Use the same brand name, services, contact details and locations on your website, Google Business Profile and social profiles.</li>
<li><strong>Answer real questions.</strong> Write pages that answer what buyers ask — cost, process, timelines, comparisons — with a direct answer near the top, followed by detail.</li>
<li><strong>Publish original evidence.</strong> Case studies, data and expert explanations are more likely to be referenced than generic content.</li>
<li><strong>Measure.</strong> Track Search Console queries, Google Business Profile actions and AI referrals (ChatGPT adds <code>utm_source=chatgpt.com</code> to links it sends).</li>
</ol>

<h2>What not to do</h2>
<ul>
<li>Don't mass-produce thin pages for every keyword or location.</li>
<li>Don't add structured data that doesn't match the visible page.</li>
<li>Be wary of anyone who guarantees rankings or AI mentions — no one controls them.</li>
</ul>
`,
  },
  {
    slug: "what-are-click-to-whatsapp-ads",
    title: "What are Click-to-WhatsApp ads, and when should you use them?",
    description: "How Click-to-WhatsApp ads on Facebook and Instagram work, which businesses they suit, and how to measure them properly.",
    category: "Performance marketing",
    published: "2026-11-15",
    updated: "2026-11-15",
    readMins: 5,
    answer:
      "Click-to-WhatsApp ads are Facebook and Instagram ads that open a WhatsApp chat with your business instead of a website. They work well when customers want to ask a question before they buy or book — common for clinics, real estate, education, retail and services in Kerala and the GCC.",
    body: `
<h2>How they work</h2>
<p>You run an ad on Facebook or Instagram with a “Send WhatsApp message” button. When someone taps it, WhatsApp opens with a pre-filled message to your business number. Your team (or an automated greeting) replies and continues the conversation.</p>

<h2>When they work best</h2>
<ul>
<li>Your product or service needs a conversation before purchase (price, availability, appointments).</li>
<li>Your customers already use WhatsApp to contact businesses.</li>
<li>You can reply quickly — speed of response strongly affects results.</li>
</ul>

<h2>When a website or form may be better</h2>
<ul>
<li>You need detailed qualification information before a call.</li>
<li>You sell many products online and want people to browse and buy directly.</li>
<li>You don't have someone available to reply to chats promptly.</li>
</ul>

<h2>How to measure them</h2>
<ol>
<li>Track conversations started in Meta Ads Manager.</li>
<li>Use WhatsApp Business labels (for example New lead, Quoted, Won, Lost) so you can count qualified leads and sales, not just chats.</li>
<li>Use distinct pre-filled messages per campaign so you know which ad each lead came from.</li>
<li>Review cost per conversation <em>and</em> cost per qualified lead every week.</li>
</ol>
`,
  },
  {
    slug: "how-digital-marketing-is-priced",
    title: "How much does digital marketing cost in Kozhikode? What drives the price",
    description: "The factors that determine digital marketing costs for businesses in Kozhikode and Kerala, and how to compare agency quotes fairly.",
    category: "Buying guide",
    published: "2026-11-15",
    updated: "2026-11-15",
    readMins: 5,
    answer:
      "Digital marketing cost depends on the channels you need, the number of markets you target, how much creative and content is produced, whether a website or landing pages are included, and your separate advertising budget. Ask every agency to separate their fee from ad spend and to list exactly what is included.",
    body: `
<h2>The main cost drivers</h2>
<div class="table-scroll"><table>
<thead><tr><th>Factor</th><th>Why it changes the price</th></tr></thead>
<tbody>
<tr><td>Channels</td><td>SEO, Google Ads, Meta Ads, social content and email each need different skills and time.</td></tr>
<tr><td>Markets</td><td>Targeting Kozhikode only is different from Kerala-wide or Kerala plus the UAE, Bahrain and the wider GCC.</td></tr>
<tr><td>Content volume</td><td>The number of Reels, posts, articles and ad creatives per month.</td></tr>
<tr><td>Website work</td><td>New landing pages, a website rebuild or Shopify development add one-off costs.</td></tr>
<tr><td>Ad spend</td><td>Paid to Google or Meta directly; separate from the agency fee.</td></tr>
<tr><td>Reporting & tracking</td><td>Proper conversion tracking takes setup time but makes everything else measurable.</td></tr>
</tbody></table></div>

<h2>How to compare quotes</h2>
<ul>
<li>Is the agency fee clearly separated from ad spend?</li>
<li>What exactly is delivered each month (number of posts, campaigns, reports)?</li>
<li>Who owns the ad accounts, website and data? (You should.)</li>
<li>Is there a lock-in period?</li>
<li>How will results be measured — leads and sales, or likes and impressions?</li>
</ul>

<h2>How Billion Conversion quotes</h2>
<p>We provide a custom quotation after understanding your goals, market and current setup. <a href="${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/contact/">Request a custom quote</a> or message us on WhatsApp.</p>
<!-- TODO: add typical price ranges once the business approves publishing them; this greatly helps answer engines. -->
`,
  },
];

export const trustIndustries = [
  { label: "Healthcare", icon: "heart" },
  { label: "Retail & Jewellery", icon: "bag" },
  { label: "F&B & Hospitality", icon: "utensils" },
  { label: "Education", icon: "cap" },
  { label: "Real Estate", icon: "building" },
  { label: "D2C & Consumer Brands", icon: "boxes" },
] as const;

export const processSteps = [
  { n: "01", title: "Discover", body: "Understand your business, audience and growth barriers." },
  { n: "02", title: "Strategise", body: "Build the right acquisition and conversion strategy." },
  { n: "03", title: "Execute", body: "Launch campaigns, content, websites and systems." },
  { n: "04", title: "Optimise", body: "Measure performance and continuously improve." },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getModel = (slug: string) => businessModels.find((s) => s.slug === slug);
export const getLocation = (slug: string) => locations.find((s) => s.slug === slug);
export const getCase = (slug: string) => caseStudies.find((s) => s.slug === slug);
export const getInsight = (slug: string) => insights.find((s) => s.slug === slug);
