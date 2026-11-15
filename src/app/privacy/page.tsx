import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({ title: "Privacy Policy", description: `How ${site.name} (${site.legalName}) collects and uses personal data.`, path: "/privacy/" });

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro={`This policy explains how ${site.legalName} (“${site.name}”, “we”) handles personal data collected through this website.`} crumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy/" }]} />
      <div className="container-site max-w-3xl py-16">
        <p className="mb-8 rounded-xl border border-champagne/40 bg-champagne/10 p-4 text-sm text-champagne">
          Draft template — must be reviewed by a legal adviser for India (DPDP Act 2023), UAE (PDPL) and Bahrain (PDPL) before launch.
        </p>
        <div className="prose-bc">
          <h2>What we collect</h2>
          <ul>
            <li>Details you submit in our contact form: name, business name, phone/WhatsApp number, email (optional), country, service of interest and message.</li>
            <li>Messages you send us on WhatsApp.</li>
            <li>With your consent, analytics data about how you use the site (pages viewed, buttons clicked) via Google Analytics and Microsoft Clarity (session recordings and heatmaps).</li>
          </ul>
          <h2>Why we use it</h2>
          <ul>
            <li>To reply to your enquiry and prepare a quotation.</li>
            <li>To understand which pages and campaigns help visitors, so we can improve them.</li>
          </ul>
          <h2>Sharing</h2>
          <p>We do not sell personal data. We use service providers (for example website hosting, email delivery and Google Analytics) that process data on our behalf.</p>
          <h2>Retention</h2>
          <p>Enquiry data is kept only as long as needed to respond and for legitimate business records. [Retention period to be confirmed.]</p>
          <h2>Your rights</h2>
          <p>You can ask to access, correct or delete your personal data, or withdraw consent, by contacting us on WhatsApp at {site.whatsapp.display} or by phone at {site.phone.display}.</p>
          <h2>Cookies</h2>
          <p>Analytics cookies are only set if you accept them in the cookie banner. You can change your choice by clearing this site&apos;s data in your browser.</p>
          <h2>Contact</h2>
          <p>{site.legalName}, trading as {site.name}. Email {site.email}, WhatsApp {site.whatsapp.display} or phone {site.phone.display}.</p>
        </div>
      </div>
      <PageFaqs path="/privacy/" title="Privacy questions" className="container-site max-w-3xl pb-20" />
    </>
  );
}
