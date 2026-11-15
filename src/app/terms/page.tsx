import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms & Conditions for using the ${site.name} website, operated by ${site.legalName}.`,
  path: "/terms/",
});

const TERMS_EMAIL = site.email;

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Website Terms & Conditions"
        intro={`${site.name} — operated by ${site.legalName}.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms/" }]}
      />
      <div className="container-site max-w-3xl py-16">
        <dl className="mb-10 grid gap-4 rounded-2xl border border-line p-6 text-sm sm:grid-cols-3">
          <div><dt className="text-slate">Effective date</dt><dd className="mt-1 font-semibold text-ivory"><time dateTime="2026-11-15">15 November 2026</time></dd></div>
          <div><dt className="text-slate">Last updated</dt><dd className="mt-1 font-semibold text-ivory"><time dateTime="2026-11-15">15 November 2026</time></dd></div>
          <div><dt className="text-slate">Website</dt><dd className="mt-1 font-semibold text-ivory">billionconversion.com</dd></div>
        </dl>

        <div className="prose-bc">
          <h2>1. Acceptance of These Terms</h2>
          <p>These Terms &amp; Conditions govern your access to and use of the Billion Conversion website.</p>
          <p>The website is operated by Billiyon Conversion LLP, doing business as Billion Conversion (“Billion Conversion”, “we”, “our” or “us”).</p>
          <p>By accessing or using this website, you agree to these Terms. If you do not agree, please discontinue using the website.</p>

          <h2>2. About Our Services</h2>
          <p>Billion Conversion provides business and marketing services, which may include:</p>
          <ul>
            <li>Growth and performance marketing.</li>
            <li>Search Engine Optimisation (SEO).</li>
            <li>Answer Engine Optimisation (AEO).</li>
            <li>Generative Engine Optimisation (GEO).</li>
            <li>Paid advertising and campaign management.</li>
            <li>Conversion Rate Optimisation (CRO).</li>
            <li>Social media and content marketing.</li>
            <li>Website and e-commerce development.</li>
            <li>Shopify development and related digital services.</li>
          </ul>
          <p>The availability and scope of services may change over time.</p>

          <h2>3. Website Information and Marketing Claims</h2>
          <p>Information on this website is provided for general business and informational purposes.</p>
          <p>Service descriptions, strategies, examples and marketing materials are not guarantees of specific commercial results.</p>
          <p>Unless expressly stated in a separate written agreement, we do not guarantee:</p>
          <ul>
            <li>A specific number of leads, sales or enquiries.</li>
            <li>Search engine rankings or AI-generated search visibility.</li>
            <li>Advertising performance or return on investment.</li>
            <li>Revenue, profit or conversion improvements.</li>
            <li>Specific delivery dates or commercial outcomes.</li>
          </ul>
          <p>Results depend on factors including market conditions, competition, budgets, client cooperation, platform policies, website performance and other circumstances outside our control.</p>

          <h2>4. Enquiries and Consultations</h2>
          <p>Submitting an enquiry or contact form does not create a client relationship or guarantee acceptance of a project.</p>
          <p>We may contact you to understand your requirements, discuss possible services or prepare a proposal.</p>
          <p>You agree to provide accurate information when submitting an enquiry and not to impersonate another person or submit misleading information.</p>

          <h2>5. Proposals, Pricing and Client Agreements</h2>
          <p>Any pricing, package, estimate or proposal displayed or communicated through the website is subject to confirmation.</p>
          <p>The final scope of work, deliverables, fees, payment schedule, timelines, revisions, responsibilities and termination conditions will be governed by the relevant proposal, quotation, statement of work or signed client agreement.</p>
          <p>Where a separate written client agreement exists, that agreement will govern the relevant service relationship if it conflicts with these general website Terms.</p>

          <h2>6. Intellectual Property</h2>
          <p>Unless otherwise stated, the website&apos;s text, branding, logos, graphics, design elements, layouts, original materials and other content are owned by or licensed to Billion Conversion.</p>
          <p>You may view and use website content for personal or internal business reference.</p>
          <p>You must not, without prior written permission:</p>
          <ul>
            <li>Copy or republish substantial website content.</li>
            <li>Reproduce or commercially exploit our branding or creative materials.</li>
            <li>Modify, distribute or sell our proprietary materials.</li>
            <li>Use our website content to misrepresent an affiliation with Billion Conversion.</li>
          </ul>
          <p>Client-owned materials and project deliverables are governed by the relevant client agreement.</p>

          <h2>7. Client Materials and Permissions</h2>
          <p>If you provide us with text, images, logos, videos, data or other materials, you confirm that you have the necessary rights and permissions to provide and authorise their use for the agreed project.</p>
          <p>You remain responsible for ensuring that materials you provide do not unlawfully infringe third-party rights or violate applicable laws.</p>

          <h2>8. Acceptable Website Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for unlawful, fraudulent or misleading purposes.</li>
            <li>Attempt to gain unauthorised access to our systems or data.</li>
            <li>Introduce malware, malicious code or harmful content.</li>
            <li>Interfere with website operation or security.</li>
            <li>Scrape, harvest or misuse personal information.</li>
            <li>Submit spam, false enquiries or abusive content.</li>
            <li>Copy or exploit website content in violation of intellectual property rights.</li>
          </ul>
          <p>We may restrict or suspend access where we reasonably believe that website use violates these Terms or creates a security or legal risk.</p>

          <h2>9. Third-Party Platforms and Services</h2>
          <p>Our services and website may rely on third-party platforms, including advertising networks, analytics tools, hosting providers, search engines, social media platforms and communication services.</p>
          <p>Those services operate under their own terms and policies. We are not responsible for independent changes, outages, restrictions, account suspensions, policy decisions or technical failures of third-party platforms.</p>
          <p>Where a project depends on a third-party platform, its performance and availability may affect the project.</p>

          <h2>10. Confidentiality</h2>
          <p>Information shared during a prospective or existing business relationship may be subject to separate confidentiality obligations or a non-disclosure agreement.</p>
          <p>Do not submit highly confidential information through general website forms unless we have agreed on an appropriate method for receiving it.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>We make reasonable efforts to keep website information accurate and available. However, the website is provided on an “as available” basis.</p>
          <p>To the extent permitted by applicable law, we do not warrant that the website will always be uninterrupted, error-free, secure or compatible with every device or browser.</p>
          <p>Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Billion Conversion will not be liable for indirect, incidental, special or consequential losses arising from the use of this website, including loss of profits, business opportunities, data or goodwill.</p>
          <p>This provision does not exclude or restrict liability that cannot legally be excluded or restricted, including liability arising from fraud, wilful misconduct or other non-excludable legal obligations.</p>
          <p>Any liability relating to paid services will be determined under the applicable client agreement and mandatory law.</p>

          <h2>13. Indemnity</h2>
          <p>To the extent permitted by applicable law, you agree to be responsible for losses and reasonable costs arising directly from your unlawful use of the website, your material breach of these Terms, or your infringement of third-party rights through materials you submit.</p>
          <p>This provision does not apply to the extent a loss results from our own unlawful conduct or liability that cannot legally be transferred.</p>

          <h2>14. Privacy</h2>
          <p>Your use of the website is also subject to our <Link href="/privacy/">Privacy Policy</Link>, which explains how we collect, use, store and share personal information.</p>
          <p>Please review the Privacy Policy before submitting personal information through the website.</p>

          <h2>15. Changes to the Website and Terms</h2>
          <p>We may update website content, features and services without prior notice.</p>
          <p>We may also revise these Terms to reflect changes in our operations, technology or legal obligations. Updated Terms will be published on this page with a revised date.</p>
          <p>Your continued use of the website after updated Terms are published constitutes acceptance where permitted by applicable law.</p>

          <h2>16. Governing Law and Jurisdiction</h2>
          <p>These Terms are governed by the laws of India, subject to mandatory consumer protection, privacy and other applicable laws that may apply in the user&apos;s jurisdiction.</p>
          <p>Subject to applicable law, courts of competent jurisdiction in Thiruvananthapuram, Kerala, India, shall have jurisdiction over disputes relating to these website Terms.</p>
          <p>This clause does not remove any mandatory right a user may have to bring a claim before another competent court or authority.</p>

          <h2>17. Severability</h2>
          <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue to apply to the extent legally permissible.</p>

          <h2>18. Contact Information</h2>
          <address className="not-italic">
            <strong>{site.legalName}</strong>
            <br />Trading as {site.name}
            <br />Registered office: {site.offices.registered.lines.join(", ")}
            <br />Operational office: {site.offices.operational.lines.join(", ")}
            {TERMS_EMAIL && <><br />Email: <a href={`mailto:${TERMS_EMAIL}`}>{TERMS_EMAIL}</a></>}
            <br />Phone: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            <br />WhatsApp: {site.whatsapp.display}
          </address>
        </div>
      </div>
      <PageFaqs path="/terms/" title="Questions about these terms" className="container-site max-w-3xl pb-20" />
    </>
  );
}
