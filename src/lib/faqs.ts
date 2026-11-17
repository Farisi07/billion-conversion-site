/**
 * Page-level FAQs (minimum 8 per page) for SEO, AEO and GEO.
 * Each answer leads with a direct, self-contained answer so search and AI
 * systems can quote it. Rules: no guarantees, no invented results or prices.
 * Rendered by <PageFaqs path="..."> with FAQPage JSON-LD.
 */
import { businessModels, locations, services, type Faq } from "./content";

const svc = (slug: string) => services.find((s) => s.slug === slug)?.faqs ?? [];
const mdl = (slug: string) => businessModels.find((s) => s.slug === slug)?.faqs ?? [];
const loc = (slug: string) => locations.find((s) => s.slug === slug)?.faqs ?? [];

const quoteFaq: Faq = {
  q: "How much does it cost to work with Billion Conversion?",
  a: "Every engagement is custom-quoted. The price depends on your goals, the channels involved, the markets you target, the amount of content or development needed and your separate advertising budget. Message us on WhatsApp or use the contact form for a quote.",
};

export const pageFaqs: Record<string, Faq[]> = {
  /* ------------------------------------------------------------ Home */
  "/": [
    { q: "What does Billion Conversion do?", a: "Billion Conversion is a growth marketing agency based in Kozhikode, Kerala. We help D2C, B2B and e-commerce businesses attract the right audience, convert more visitors into leads and customers, and scale through SEO, AEO, GEO, performance marketing, conversion optimisation, websites and Shopify." },
    { q: "Where is Billion Conversion located?", a: "Our operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode (Calicut), Kerala, India. We serve businesses across Kerala, India, the UAE, Bahrain and the wider GCC." },
    { q: "What is growth marketing?", a: "Growth marketing treats acquisition, conversion and retention as one connected system. Instead of running channels in isolation, every activity is planned, tested and measured by its contribution to qualified leads, customers and revenue." },
    { q: "What are SEO, AEO and GEO?", a: "SEO (search engine optimisation) helps your pages rank in search results. AEO (answer engine optimisation) structures content so search engines can show it as a direct answer. GEO (generative engine optimisation) helps AI tools such as Google AI Overviews and ChatGPT understand and cite your business." },
    { q: "Which types of businesses do you work with?", a: "We work with D2C brands, B2B companies, e-commerce and Shopify stores, product businesses and local businesses such as clinics, restaurants, real estate, retail, jewellery and education providers." },
    { q: "Do you work with businesses in the UAE, Bahrain and the GCC?", a: "Yes. We serve businesses across Kerala, India, the UAE, Bahrain and the wider GCC with strategy, campaigns, websites and reporting." },
    quoteFaq,
    { q: "How do I get started?", a: "Book a growth call through the contact page or message us on WhatsApp at +91 95670 33002. We start by understanding your business, audience and growth barriers, then recommend a plan and send a custom quote." },
    { q: "Do you guarantee results?", a: "No honest agency can guarantee rankings, AI mentions or ad results, because platforms like Google and Meta control them. We commit to transparent tracking, structured testing and clear reporting on leads and revenue." },
    { q: "Will I own my ad accounts, website and data?", a: "Yes. Your ad accounts, website, analytics and data belong to your business. We work inside accounts you own." },
  ],

  /* -------------------------------------------------------- Services */
  "/services/": [
    { q: "What services does Billion Conversion offer?", a: "We offer growth marketing, performance marketing (Google, Meta and Click-to-WhatsApp ads), SEO, AEO and GEO, conversion rate optimisation, website development, Shopify development, e-commerce marketing and social media marketing." },
    { q: "Can I hire you for just one service?", a: "Yes. You can start with a single service, such as Google Ads or a new website, or combine several into one growth plan." },
    { q: "Which service should I start with?", a: "It depends on where growth is blocked. If you have little traffic, start with search or paid acquisition. If you have traffic but few enquiries, start with conversion optimisation. We recommend a starting point after a short discovery call." },
    { q: "Do you build websites as well as run marketing?", a: "Yes. We design and develop business websites, landing pages and Shopify stores, and connect them to SEO, ads and analytics so they are built to generate enquiries." },
    { q: "Do you offer local SEO for Kozhikode businesses?", a: "Yes. Local SEO includes Google Business Profile optimisation, local landing pages, review processes and Google Maps visibility for businesses in Kozhikode, Calicut and across Kerala." },
    { q: "How do you report on results?", a: "We provide plain-language reports focused on leads, cost per lead, conversion rate and revenue where data allows, alongside channel metrics such as clicks and impressions." },
    quoteFaq,
    { q: "Do you work with businesses outside India?", a: "Yes. We serve businesses in the UAE, Bahrain and the wider GCC, with calls scheduled in their time zone." },
  ],

  "/services/growth-marketing/": [
    ...svc("growth-marketing"),
    { q: "What does a growth marketing engagement include?", a: "Typically a growth audit, an acquisition plan, a conversion layer (landing pages, offers, WhatsApp and form journeys), retention flows and a measurement framework built around leads and revenue." },
    { q: "Who is growth marketing best suited to?", a: "Businesses that already sell and want to grow predictably: founders who want one accountable partner, brands spending on ads without clear attribution, and companies expanding between Kerala and the GCC." },
    { q: "How long before growth marketing shows results?", a: "Paid acquisition and conversion fixes can show changes within weeks. SEO and retention build over months. We agree milestones for each stage at the start." },
    { q: "Which metrics do you use to measure growth?", a: "Qualified leads and cost per qualified lead, conversion rate by channel and landing page, and revenue, customer acquisition cost and payback period where your data allows." },
    { q: "Do you need access to my sales data?", a: "It helps. Connecting enquiries to sales — even through a simple WhatsApp label system or spreadsheet — lets us optimise for customers rather than clicks." },
  ],

  "/services/performance-marketing/": [
    ...svc("performance-marketing"),
    { q: "Which ad platforms do you manage?", a: "Google Ads (Search, Performance Max, YouTube), Meta Ads (Facebook and Instagram, including Click-to-WhatsApp), and LinkedIn Ads where the audience and deal value justify it." },
    { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to Google, Meta or LinkedIn from your own account. Our management fee is separate and custom-quoted." },
    { q: "How do you improve lead quality?", a: "By tightening targeting and keywords, adding negative keywords, using qualifying questions in forms and chats, aligning landing pages with ads, and feeding back which leads became customers." },
    { q: "How quickly can campaigns go live?", a: "Once tracking, access and creative are ready, campaigns can usually launch within days. We set up conversion tracking before spending budget." },
    { q: "What is a good cost per lead?", a: "It varies by industry, location and offer. We set a target based on your margins and sales conversion rate, then improve it through testing." },
  ],

  "/services/seo-ai-search/": [
    ...svc("seo-ai-search"),
    { q: "How do I appear on Google Maps in Kozhikode?", a: "Create and verify a Google Business Profile at a genuine, staffed address, choose accurate categories and services, add photos, collect genuine reviews and keep your name, address and phone consistent across your website and listings." },
    { q: "How do I get my business mentioned in ChatGPT or Google AI Overviews?", a: "There is no special switch. Make sure your site can be crawled (including OpenAI's OAI-SearchBot), keep business information consistent, publish clear answers to real questions and share original evidence such as case studies. Inclusion is never guaranteed." },
    { q: "Do I need special schema or an llms.txt file for AI search?", a: "Google says no special markup is required for AI Overviews or AI Mode; normal SEO best practice applies. Accurate structured data that matches your visible content is still useful." },
    { q: "Is technical SEO still important?", a: "Yes. If search engines cannot crawl, render or index your pages efficiently, content quality cannot help. Technical SEO covers crawlability, speed, structured data, canonicals and internal links." },
    { q: "How do you measure AI search visibility?", a: "We track AI referral traffic in Google Analytics (for example visits tagged utm_source=chatgpt.com), Search Console data for AI features, and a documented set of prompt checks as a directional signal." },
  ],

  "/services/conversion-rate-optimization/": [
    ...svc("conversion-rate-optimization"),
    { q: "What is conversion rate optimisation (CRO)?", a: "CRO is the process of increasing the percentage of visitors who take a valuable action — such as submitting a form, starting a WhatsApp chat, calling or buying — by finding and removing friction." },
    { q: "How do you find what's stopping visitors from converting?", a: "We review analytics funnels, heatmaps, session recordings, page speed, forms and mobile journeys, then prioritise fixes by likely impact." },
    { q: "Can CRO help my Google and Meta ads perform better?", a: "Yes. Better landing pages convert more of the clicks you already pay for, which lowers cost per lead without increasing spend." },
    { q: "What tracking do you set up?", a: "GA4 events for form starts and submissions, WhatsApp clicks, phone clicks and purchases, connected to Google Ads and Meta where relevant." },
    { q: "Do I need a lot of traffic for A/B testing?", a: "Formal A/B tests need enough traffic to reach reliable results. With lower traffic, we focus on evidence-based improvements and monitor results over time." },
    { q: "Do you design landing pages?", a: "Yes. We design and build fast, focused landing pages with clear offers and WhatsApp, call and form options." },
  ],

  "/services/web-development/": [
    ...svc("web-development"),
    { q: "What kind of websites do you build?", a: "Business websites, service and lead-generation sites, landing pages and e-commerce stores — designed for mobile first and built to turn visitors into WhatsApp, call and form enquiries." },
    { q: "Will my new website be SEO-friendly?", a: "Yes. We include clean URLs, metadata, structured data, sitemaps, redirects from old pages and Core Web Vitals optimisation as part of the build." },
    { q: "Do you build websites for businesses in Bahrain and Dubai?", a: "Yes. We design, build and support websites for businesses in Bahrain, the UAE and the wider GCC, including ongoing updates after launch." },
    { q: "Do you provide website maintenance and updates?", a: "Yes. We offer ongoing content updates, improvements, monitoring and support after your website goes live." },
    { q: "What do you need from me to start a website?", a: "Your goals, brand assets (logo, colours), any existing content and photos, examples of sites you like, and access to your domain and hosting if you have them." },
    { q: "How much does a website cost?", a: "Each website is custom-quoted based on the number of pages, features, integrations, content and languages required." },
  ],

  "/services/shopify-development/": [
    ...svc("shopify-development"),
    { q: "Why use Shopify for an online store?", a: "Shopify is reliable, secure and easy for teams to manage, with built-in payments, inventory and a large app ecosystem — a strong choice for most D2C brands." },
    { q: "Can you migrate my store to Shopify?", a: "Yes. We migrate products, collections, customers and content, and set up redirects so you keep existing search visibility." },
    { q: "Do you customise Shopify themes?", a: "Yes. We customise themes or build sections to match your brand, improve product pages and speed up the store." },
    { q: "Can you integrate WhatsApp with Shopify?", a: "Yes. We can add WhatsApp chat buttons and connect WhatsApp messaging tools for order updates, abandoned carts and customer support." },
    { q: "Do you handle Shopify SEO?", a: "Yes. We optimise collection and product structure, titles, descriptions, structured data, image alt text and site speed." },
    { q: "Can Shopify sell to customers in the UAE and Bahrain?", a: "Yes. Shopify supports multiple currencies, markets and shipping zones, which we can configure for India and the GCC." },
    { q: "How long does a Shopify store take to build?", a: "Timelines depend on catalogue size, customisation and integrations. We provide a timeline with your quote." },
  ],

  "/services/ecommerce-marketing/": [
    ...svc("ecommerce-marketing"),
    { q: "What is e-commerce marketing?", a: "E-commerce marketing covers everything that brings shoppers to an online store and turns them into repeat customers: product feeds, Shopping and catalogue ads, e-commerce SEO, conversion optimisation and retention messaging." },
    { q: "What is a product feed and why does it matter?", a: "A product feed is a structured file of your products, prices and availability used by Google Merchant Center and Meta catalogues. Accurate feeds are essential for Shopping ads and free product listings." },
    { q: "Do you run Google Shopping and Performance Max campaigns?", a: "Yes, along with Meta Advantage+ catalogue campaigns, built on clean product feeds and accurate conversion tracking." },
    { q: "How do you reduce abandoned carts?", a: "By improving checkout friction, shipping clarity and trust signals, then adding WhatsApp and email reminders for shoppers who leave." },
    { q: "How do you increase repeat purchases?", a: "Post-purchase flows, replenishment reminders, loyalty offers and segmented WhatsApp and email campaigns to existing customers." },
    { q: "Which metrics matter most for an online store?", a: "Revenue, return on ad spend, store conversion rate, average order value, repeat purchase rate and customer acquisition cost." },
    { q: "Do you work with stores selling to the GCC?", a: "Yes. We can plan campaigns, feeds and store settings for customers in India, the UAE and Bahrain." },
  ],

  "/services/social-media-marketing/": [
    ...svc("social-media-marketing"),
    { q: "Which social platforms do you manage?", a: "Mainly Instagram and Facebook, with LinkedIn for B2B brands. Platform choice depends on where your customers spend time." },
    { q: "Do you create Instagram Reels?", a: "Yes. We plan, script and edit Reels and short-form video, and can coordinate shoots in and around Kozhikode." },
    { q: "How do you turn social media followers into customers?", a: "By planning content around buyer questions, adding clear calls to action, routing interest into WhatsApp conversations and amplifying top content with paid ads." },
    { q: "How often should my business post?", a: "Consistency matters more than volume. We recommend a realistic schedule based on your goals, resources and audience." },
    { q: "Do you manage comments and messages?", a: "We set up response guidelines and workflows, and can manage community responses depending on the agreed scope." },
    { q: "Can social media content be in Malayalam?", a: "Yes. We plan content in English, Malayalam or a mix, depending on how your customers engage." },
    { q: "How do you measure social media success?", a: "Beyond reach and engagement, we track enquiries, WhatsApp conversations and sales that come from social channels." },
  ],

  /* ------------------------------------------------- Business models */
  "/business-models/": [
    { q: "Which business models do you specialise in?", a: "D2C brands, B2B businesses, e-commerce and Shopify stores, and product businesses — plus local service businesses in Kerala." },
    { q: "Why does business model matter for marketing?", a: "Each model buys differently. D2C depends on acquisition cost and repeat purchase, B2B on lead quality and sales cycles, e-commerce on product discovery and conversion. Strategy should follow how your customers buy." },
    { q: "Do you work with small businesses?", a: "Yes. Many of our clients are small and growing businesses. Plans are scoped to fit your goals and stage." },
    { q: "Which markets do you serve?", a: "Kerala, India, the UAE, Bahrain and the wider GCC." },
    { q: "Can you help a Kerala business expand to the GCC?", a: "Yes. We plan localised campaigns, landing pages and messaging for customers in the UAE and Bahrain." },
    { q: "What if my business fits more than one model?", a: "That's common — for example a brand selling both D2C and wholesale. We plan each journey separately and connect them in one measurement framework." },
    { q: "What industries do you work with?", a: "Healthcare and clinics, Ayurveda, restaurants and hospitality, real estate, retail and jewellery, boutiques and textiles, education, and D2C consumer brands." },
    quoteFaq,
  ],

  "/business-models/d2c-growth/": [
    ...mdl("d2c-growth"),
    { q: "What is a D2C brand?", a: "A direct-to-consumer (D2C) brand sells its own products straight to customers — usually through its website, Instagram and WhatsApp — rather than only through retailers or marketplaces." },
    { q: "How do you lower customer acquisition cost for D2C brands?", a: "Through structured creative testing, better audience strategy, landing and product pages that convert, and retention that increases lifetime value." },
    { q: "Do you help D2C brands with retention?", a: "Yes. We build WhatsApp and email flows for post-purchase, replenishment, cross-sell and win-back." },
    { q: "Which platforms work best for D2C brands in India?", a: "Instagram and Facebook ads, Google Search and Shopping, YouTube and WhatsApp are common, but the right mix depends on your product, price point and audience." },
    { q: "Should a D2C brand use Shopify?", a: "For most D2C brands, yes. Shopify offers a reliable store, payments and integrations. We build and optimise Shopify stores." },
    { q: "How do you measure D2C growth?", a: "Customer acquisition cost, average order value, conversion rate, repeat purchase rate and return on ad spend." },
    { q: "Can you help launch a new D2C product?", a: "Yes. We plan positioning, launch content, creator collaborations and paid acquisition for new products." },
  ],

  "/business-models/b2b-growth/": [
    ...mdl("b2b-growth"),
    { q: "What is B2B lead generation?", a: "B2B lead generation is the process of attracting and qualifying businesses that could become customers, then passing those leads to sales with the right context." },
    { q: "How do you improve B2B lead quality?", a: "By defining the ideal customer profile, targeting high-intent searches, using qualifying form or chat questions, and getting feedback from your sales team on which leads converted." },
    { q: "What is demand generation?", a: "Demand generation builds awareness and interest among potential buyers before they are actively searching, so they consider you when they are ready to buy." },
    { q: "Does SEO work for B2B companies?", a: "Yes. B2B buyers research extensively. Pages that answer their questions, compare options and show expertise attract high-intent visitors." },
    { q: "How do you handle long B2B sales cycles?", a: "With retargeting, useful content, case studies and nurture sequences that keep your business in front of decision-makers until they're ready." },
    { q: "Can you connect leads to our CRM?", a: "Yes. Our forms can send leads to a CRM, spreadsheet or webhook, and we can route enquiries through WhatsApp." },
    { q: "Do you work with manufacturers and exporters?", a: "Yes, where we can help reach business buyers through search, LinkedIn and targeted campaigns." },
  ],

  "/business-models/ecommerce-growth/": [
    ...mdl("ecommerce-growth"),
    { q: "How can I increase sales on my online store?", a: "Improve product discovery (feeds, Shopping ads, SEO), make product pages and checkout easier, and bring customers back with retention messaging." },
    { q: "Why is my store getting traffic but no sales?", a: "Common causes include slow pages, unclear product information, unexpected shipping costs, limited payment options, weak trust signals and traffic that doesn't match the offer." },
    { q: "Do you work with stores not built on Shopify?", a: "Yes. Most e-commerce marketing work is platform-agnostic, though we specialise in Shopify development." },
    { q: "What is a good e-commerce conversion rate?", a: "It varies by product, price and traffic source. We benchmark against your own data and improve from there." },
    { q: "Do you manage marketplace listings?", a: "Our focus is your own store and its marketing. We can advise on how marketplaces fit into your wider strategy." },
    { q: "How do you track e-commerce performance?", a: "GA4 e-commerce tracking from product view to purchase, connected to Google Ads, Meta and Merchant Center." },
    { q: "Can you help sell to customers in the UAE and Bahrain?", a: "Yes. We can set up markets, currencies, shipping and campaigns for GCC customers." },
  ],

  "/business-models/product-business-growth/": [
    ...mdl("product-business-growth"),
    { q: "How do you position a product against competitors?", a: "We research your audience and competitors, identify a clear difference that matters to buyers and turn it into messaging, offers and creative." },
    { q: "What does a product launch plan include?", a: "Positioning, launch timeline, website or landing page, content and creator plans, paid campaigns and measurement for the launch period." },
    { q: "Can you help a product business expand to a new market?", a: "Yes. We plan market-entry campaigns and localised pages — for example taking a Kerala product to customers in the UAE or Bahrain." },
    { q: "Do you work with creators and influencers?", a: "We can plan creator collaborations as part of a launch or growth campaign and measure their contribution." },
    { q: "What is a creative system?", a: "A repeatable framework of formats, hooks and visual templates that lets you produce and test new ads quickly without starting from scratch each time." },
    { q: "Should I sell direct or through retailers?", a: "Often both. We help you plan direct channels while supporting retail or distributor sales with awareness and search visibility." },
    { q: "How do you measure a product launch?", a: "Launch-period sales or enquiries, cost per acquisition, search demand for your brand and early repeat-purchase signals." },
  ],

  /* ------------------------------------------------------- Locations */
  "/locations/kozhikode/": [
    ...loc("kozhikode"),
    { q: "Is Billion Conversion a digital marketing agency in Calicut?", a: "Yes. Kozhikode and Calicut are the same city. Our operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode." },
    { q: "Can you help my Kozhikode business rank on Google Maps?", a: "Yes. We optimise your Google Business Profile, local pages and reviews process to improve visibility for local searches." },
    { q: "Do you meet clients in person in Kozhikode?", a: "Yes, by appointment. Message us on WhatsApp to arrange a visit to our KINFRA office." },
    { q: "Which Kozhikode industries do you work with?", a: "Healthcare and clinics, restaurants and cafés, real estate, boutiques, textiles and jewellery, and education and coaching institutes, among others." },
    { q: "Do you run WhatsApp marketing for Kozhikode businesses?", a: "Yes. Click-to-WhatsApp ads and WhatsApp follow-up journeys are among the most effective lead channels for local businesses here." },
    { q: "Can you create content in Malayalam?", a: "Yes. We can plan and produce content and ads in Malayalam, English or both." },
  ],

  "/locations/kerala/": [
    ...loc("kerala"),
    { q: "Where in Kerala are you based?", a: "Our operational office is in Kozhikode, at KINFRA Advanced Technology Park, Ramanattukara." },
    { q: "Do you work with businesses in Kochi, Thrissur, Malappuram and Thiruvananthapuram?", a: "Yes. We work with businesses across Kerala, with in-person meetings where practical." },
    { q: "Which industries in Kerala do you work with?", a: "Healthcare and Ayurveda, hotels and tourism, real estate, retail and jewellery, education and D2C brands." },
    { q: "Do you support Malayalam search and content?", a: "Yes. We plan keywords, content and ads in the language mix your customers use." },
    { q: "Can a Kerala business target customers in the Gulf?", a: "Yes. Many Kerala businesses serve customers or families in the GCC. We plan campaigns that reach both audiences." },
    { q: "What is the best digital marketing channel for Kerala businesses?", a: "It depends on the business. Google search and Maps, Instagram, Meta ads and WhatsApp are commonly effective; we recommend a mix after understanding your goals." },
    quoteFaq,
  ],

  "/locations/dubai/": [
    ...loc("dubai"),
    { q: "Do you work with businesses in Dubai?", a: "Yes. We work with clients in Dubai and the wider UAE, delivering strategy, campaigns, websites and reporting." },
    { q: "How do you communicate with UAE clients?", a: "Through WhatsApp, video calls and email, with calls scheduled in Gulf Standard Time. India is 1.5 hours ahead of the UAE." },
    { q: "Which services do UAE businesses use most?", a: "Performance marketing (Google and Meta), SEO, website development and Shopify development." },
    { q: "Can you target Arabic-speaking audiences?", a: "We can plan targeting and advise on Arabic localisation. For Arabic copywriting we work with native-language content where needed." },
    { q: "Do you understand UAE advertising costs?", a: "Yes. UAE ad auctions can be competitive, so we focus on tight targeting, strong landing pages and lead qualification to control cost per lead." },
    { q: "Can you help a Kerala brand expand to Dubai?", a: "Yes. We plan localised pages and campaigns for brands entering the UAE market." },
    quoteFaq,
  ],

  "/locations/bahrain/": [
    ...loc("bahrain"),
    { q: "Do you build websites for businesses in Bahrain?", a: "Yes. We design, develop and support websites for Bahrain businesses, including ongoing updates after launch." },
    { q: "Can you provide ongoing website updates for a Bahrain business?", a: "Yes. We offer continuing content updates, improvements and support." },
    { q: "How do you work with Bahrain clients?", a: "Through WhatsApp, video calls and email, with calls scheduled in Arabia Standard Time. India is 2.5 hours ahead of Bahrain." },
    { q: "Do you offer SEO and ads for Bahrain?", a: "Yes. We run search engine optimisation and Google and Meta campaigns targeted to Bahrain." },
    { q: "Can my website be in English and Arabic?", a: "Yes. We can build multilingual websites and advise on Arabic localisation for your audience." },
    { q: "Which industries in Bahrain do you work with?", a: "Retail and trading, professional services, hospitality and consumer brands, among others." },
    quoteFaq,
  ],

  /* -------------------------------------------------------- Insights */
  "/insights/": [
    { q: "What topics does the Billion Conversion Insights section cover?", a: "Practical guides on growth marketing, SEO, AEO and GEO, performance marketing, WhatsApp marketing, websites and choosing a marketing partner." },
    { q: "Who writes the Insights articles?", a: "Articles are written by the Billion Conversion team." },
    { q: "How often are articles updated?", a: "We review articles when platforms or best practices change and show the updated date on each article." },
    { q: "Are the articles specific to Kerala and the GCC?", a: "Many are, because that's where our clients are, but most advice applies to businesses anywhere." },
    { q: "Can I suggest a topic?", a: "Yes. Message us on WhatsApp with the question you'd like answered." },
    { q: "Is the advice in the articles free to use?", a: "Yes. The guides are free to read and apply to your business." },
    { q: "Where can I get help applying the advice?", a: "Book a growth call or message us on WhatsApp and we'll help you decide what to do first." },
    { q: "Do you share insights on social media?", a: "Yes. Follow Billion Conversion on Instagram, Facebook and LinkedIn." },
  ],

  "/insights/seo-vs-aeo-vs-geo/": [
    { q: "What is the difference between SEO, AEO and GEO?", a: "SEO helps pages rank in search results, AEO structures content to be shown as a direct answer, and GEO helps generative AI tools understand and cite your business." },
    { q: "Is GEO replacing SEO?", a: "No. AI search features rely on the same foundations as SEO: crawlable pages, helpful content and trustworthy information. GEO builds on SEO rather than replacing it." },
    { q: "What is answer engine optimisation (AEO)?", a: "AEO is writing and structuring content so that it directly answers specific questions, with a clear answer near the top, descriptive headings, lists and tables." },
    { q: "What is generative engine optimisation (GEO)?", a: "GEO is improving how AI systems such as Google AI Overviews, ChatGPT search, Perplexity and Gemini understand, trust and reference your business." },
    { q: "Does Google require special markup for AI Overviews?", a: "No. Google states there are no additional requirements; a page must be indexed and eligible to show a snippet, and normal SEO best practice applies." },
    { q: "Should I block AI crawlers?", a: "Only if you don't want your content used by those systems. If you want visibility in AI search, allow crawlers such as Googlebot and OAI-SearchBot." },
    { q: "How can I track traffic from ChatGPT?", a: "ChatGPT adds utm_source=chatgpt.com to links it sends, so you can see those visits in Google Analytics." },
    { q: "Can anyone guarantee I'll appear in AI answers?", a: "No. AI answers vary by query and change over time. You can improve the factors you control and measure the results." },
  ],

  "/insights/what-are-click-to-whatsapp-ads/": [
    { q: "What are Click-to-WhatsApp ads?", a: "Facebook and Instagram ads with a button that opens a WhatsApp chat with your business instead of a website." },
    { q: "Which businesses benefit most from Click-to-WhatsApp ads?", a: "Businesses where customers want to ask before buying or booking — clinics, real estate, education, retail, services and restaurants." },
    { q: "Do I need the WhatsApp Business app?", a: "You need a WhatsApp Business account (app or platform) connected to your Facebook page or Meta Business account." },
    { q: "Are Click-to-WhatsApp ads better than lead forms?", a: "Not always. They are better when conversation drives sales; lead forms or websites can be better when you need detailed information or online checkout." },
    { q: "How fast should I reply to WhatsApp leads?", a: "As fast as possible. Response speed strongly affects whether a chat becomes a customer, so set up greetings, quick replies and staff availability." },
    { q: "How do I measure Click-to-WhatsApp ads?", a: "Track conversations started in Meta Ads Manager, label chats in WhatsApp Business (New, Quoted, Won, Lost) and review cost per qualified lead." },
    { q: "Can I know which ad a WhatsApp lead came from?", a: "Yes, by using a different pre-filled message for each campaign or ad." },
    { q: "Do Click-to-WhatsApp ads work in the UAE and Bahrain?", a: "Yes. WhatsApp is widely used across the GCC, and the same ad format is available." },
  ],

  "/insights/how-digital-marketing-is-priced/": [
    { q: "How much does digital marketing cost in Kozhikode?", a: "It depends on the channels you need, the markets you target, the content volume, any website work and your separate ad budget. Ask agencies for an itemised quote." },
    { q: "Is ad spend included in an agency's fee?", a: "Usually not. Ad spend is paid directly to Google or Meta. Make sure every quote separates the agency fee from ad spend." },
    { q: "What should a digital marketing quote include?", a: "Deliverables per month, channels covered, reporting frequency, who owns accounts and data, contract length and any one-off setup costs." },
    { q: "Why do agency prices vary so much?", a: "Scope, experience, team size, content production and the level of strategy and reporting all differ between agencies." },
    { q: "Should I choose the cheapest agency?", a: "Choose on value: clear deliverables, honest reporting, relevant experience and focus on leads and sales rather than vanity metrics." },
    { q: "Are there one-time costs?", a: "Often. Tracking setup, website or landing page builds and initial audits are commonly one-time costs." },
    { q: "Do I need a long contract?", a: "Not necessarily. Ask about minimum terms and notice periods before signing." },
    { q: "How does Billion Conversion price its services?", a: "We provide a custom quotation after understanding your goals, market and current setup." },
  ],

  /* --------------------------------------------------------- Company */
  "/about/": [
    { q: "Who founded Billion Conversion?", a: "Billion Conversion was founded by Salmanul Faris B." },
    { q: "What is Billion Conversion's legal name?", a: "Billion Conversion is a brand of Billiyon Conversion LLP." },
    { q: "Where is Billion Conversion based?", a: "Our operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode, Kerala." },
    { q: "What does \"We Turn Growth Into Numbers\" mean?", a: "It means we measure our work by business outcomes — qualified leads, customers and revenue — and report them clearly." },
    { q: "What makes Billion Conversion different?", a: "We plan search, ads, websites and follow-up together as one growth system, report honestly and make sure clients own their accounts and data." },
    { q: "Which markets does Billion Conversion serve?", a: "Kerala, India, the UAE, Bahrain and the wider GCC." },
    { q: "How does Billion Conversion work with clients?", a: "In four steps: Discover your business and barriers, Strategise the right plan, Execute campaigns, content and websites, and Optimise based on measured results." },
    { q: "Where can I follow Billion Conversion?", a: "On Instagram (@billion_conversion), Facebook and LinkedIn." },
  ],

  "/about-billion-conversion/": [
    { q: "Who is Billion Conversion?", a: "Billion Conversion is a growth marketing agency based in Kerala, India. It helps businesses scale through digital marketing, performance marketing, SEO and conversion-focused strategies, and measures its work by qualified leads, customers and revenue." },
    { q: "Who is the founder of Billion Conversion?", a: "Billion Conversion was founded by Salmanul Faris B, who leads the agency's growth strategy and works directly with clients." },
    { q: "When was Billion Conversion founded?", a: "Billion Conversion was founded in 2026 by Salmanul Faris B in Kerala, India." },
    { q: "Is Billion Conversion a registered company?", a: "Yes. Billion Conversion is a brand of Billiyon Conversion LLP (LLPIN ADD-1911), a limited liability partnership with its registered office in Kerala, India." },
    { q: "Where is Billion Conversion located?", a: "Billion Conversion's operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode (Calicut), Kerala, India." },
    { q: "What services does Billion Conversion offer?", a: "Growth marketing, performance marketing (Google Ads and Meta Ads), SEO, AEO and GEO, conversion rate optimisation, website and Shopify development, e-commerce marketing and social media marketing." },
    { q: "Which countries does Billion Conversion serve?", a: "Billion Conversion serves businesses across Kerala and the rest of India, the United Arab Emirates, Bahrain and the wider GCC." },
    { q: "What are Billion Conversion's official social media accounts?", a: "Instagram (@billion_conversion), Facebook and LinkedIn (Billion Conversion). Links to each official profile are on this page and in the website footer." },
    { q: "How do I contact Billion Conversion?", a: "Message Billion Conversion on WhatsApp at +91 95670 33002, call +91 73063 39060, email info@billionconversion.com, or use the contact form at billionconversion.com/contact/." },
  ],

  "/contact/": [
    { q: "What is the fastest way to contact Billion Conversion?", a: "WhatsApp at +91 95670 33002. You can also call +91 73063 39060, email info@billionconversion.com or use the contact form." },
    { q: "How quickly will you reply?", a: "We aim to reply to WhatsApp and form enquiries as quickly as possible during business hours (IST)." },
    { q: "Can I visit your office?", a: "Yes, by appointment. Our operational office is at KINFRA Advanced Technology Park, Ramanattukara, Kozhikode. Message us on WhatsApp first." },
    { q: "What happens after I submit the form?", a: "You'll see a confirmation and can continue on WhatsApp with your details already written. We then arrange a short call to understand your goals." },
    { q: "Can I share my website or files before the call?", a: "Yes. Send your website link, ad account screenshots or files on WhatsApp so we can review them before we speak." },
    { q: "What information should I prepare for the call?", a: "Your goals, current marketing channels, website, rough budget range and any results data you have." },
    { q: "Can I get a quote without a call?", a: "For simple requests, yes — share details on WhatsApp. Most plans are best quoted after a short conversation." },
    { q: "Do you take calls from the UAE, Bahrain and the GCC?", a: "Yes. We schedule calls in Gulf or Arabia Standard Time." },
  ],

  "/privacy/": [
    { q: "What personal data does this website collect?", a: "Only what you choose to send us — your name, business, phone or WhatsApp number, optional email, country, service of interest and message — plus, only if you accept the cookie banner, analytics about how you use the site." },
    { q: "Does the contact form store my details on your website?", a: "No. The form checks your details in your browser and prepares a WhatsApp message. Your details reach us only when you press Send in WhatsApp." },
    { q: "Why do you collect my contact details?", a: "To respond to your enquiry, prepare a quotation and follow up about it. You can ask us to stop contacting you at any time." },
    { q: "Do you sell personal data?", a: "No. We never sell or rent personal data." },
    { q: "Do you use cookies?", a: "Only with your consent. If you accept the cookie banner, Google Analytics and Microsoft Clarity set analytics cookies. If you decline, they run in a cookieless mode. We do not use advertising cookies on this website." },
    { q: "Who processes my data?", a: "Billiyon Conversion LLP, with service providers that help us run the website and communicate with you: WhatsApp (Meta), Google (Analytics and Tag Manager), Microsoft Clarity, our email service provider and our website hosting providers." },
    { q: "How long do you keep enquiry data?", a: "Enquiries that do not become projects are kept for up to 24 months after our last contact. Client records are kept as long as the law requires. You can ask us to delete your data sooner." },
    { q: "How can I access, correct or delete my data?", a: "Email info@billionconversion.com or message us on WhatsApp at +91 95670 33002. We aim to respond within 30 days." },
    { q: "Which privacy laws apply?", a: "We follow India's Digital Personal Data Protection Act, 2023 and, where they apply to you, the data protection laws of the UAE and Bahrain." },
  ],

  "/terms/": [
    { q: "Who operates the Billion Conversion website?", a: "Billiyon Conversion LLP, doing business as Billion Conversion." },
    { q: "Does Billion Conversion guarantee leads, rankings or results?", a: "No. Unless expressly stated in a separate written agreement, we do not guarantee leads, sales, search or AI visibility, advertising performance, revenue or specific delivery dates." },
    { q: "Does submitting an enquiry make me a client?", a: "No. Submitting an enquiry or contact form does not create a client relationship or guarantee acceptance of a project." },
    { q: "What governs the scope and fees of a project?", a: "The relevant proposal, quotation, statement of work or signed client agreement. If it conflicts with these website Terms, the client agreement governs." },
    { q: "Can I copy content from this website?", a: "You may view and use content for personal or internal business reference, but you must not copy, republish, modify or commercially exploit it without prior written permission." },
    { q: "Who is responsible for materials I provide for a project?", a: "You confirm you have the rights to provide text, images, logos, videos or data, and remain responsible for ensuring they don't infringe third-party rights." },
    { q: "Is Billion Conversion responsible for third-party platform issues?", a: "No. Platforms such as ad networks, search engines, social media and hosting providers operate under their own terms, and we are not responsible for their independent changes, outages or account decisions." },
    { q: "Which law and courts govern these Terms?", a: "The laws of India, with courts of competent jurisdiction in Thiruvananthapuram, Kerala, subject to any mandatory rights you have under the law of your jurisdiction." },
    { q: "How do I contact Billion Conversion about these Terms?", a: "Email info@billionconversion.com, call +91 73063 39060 or WhatsApp +91 95670 33002." },
  ],
};

export function getPageFaqs(path: string): Faq[] {
  return pageFaqs[path] ?? [];
}
