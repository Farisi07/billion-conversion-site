import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { PageFaqs } from "@/components/PageFaqs";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} (${site.legalName}) collects, uses, shares and protects personal data, and how to exercise your privacy rights.`,
  path: "/privacy/",
});

/** Update both dates whenever the policy changes. */
const EFFECTIVE = { iso: "2026-11-17", label: "17 November 2026" };
const UPDATED = { iso: "2026-11-17", label: "17 November 2026" };

export default function PrivacyPage() {
  const o = site.offices;
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How ${site.name} — operated by ${site.legalName} — collects, uses and protects your personal data.`}
        crumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy/" }]}
      />
      <div className="container-site max-w-3xl py-16">
        <dl className="mb-10 grid gap-4 rounded-2xl border border-line p-6 text-sm sm:grid-cols-3">
          <div><dt className="text-slate">Effective date</dt><dd className="mt-1 font-semibold text-ivory"><time dateTime={EFFECTIVE.iso}>{EFFECTIVE.label}</time></dd></div>
          <div><dt className="text-slate">Last updated</dt><dd className="mt-1 font-semibold text-ivory"><time dateTime={UPDATED.iso}>{UPDATED.label}</time></dd></div>
          <div><dt className="text-slate">Website</dt><dd className="mt-1 font-semibold text-ivory">billionconversion.com</dd></div>
        </dl>

        <div className="prose-bc">
          <h2>1. Who We Are</h2>
          <p>
            This website is operated by {site.legalName}
            {site.llpin ? ` (LLPIN ${site.llpin})` : ""}, doing business as {site.name} (“{site.name}”, “we”, “our” or “us”).
          </p>
          <p>
            For the personal data described in this policy, {site.legalName} is the data fiduciary (also called the data controller): we decide why and how
            that data is used.
          </p>
          <ul>
            <li>Registered office: {o.registered.lines.join(", ")}</li>
            <li>Operational office: {o.operational.lines.join(", ")}</li>
            <li>Email: {site.email}</li>
          </ul>

          <h2>2. Scope of This Policy</h2>
          <p>This policy applies to personal data we handle when you:</p>
          <ul>
            <li>visit and browse this website;</li>
            <li>use our contact form;</li>
            <li>contact us by WhatsApp, phone or email; or</li>
            <li>interact with our official social media profiles and are redirected to this website.</li>
          </ul>
          <p>
            Personal data we process while delivering services to clients (for example, access to a client&apos;s ad accounts or analytics) is governed by the
            agreement with that client, not by this policy.
          </p>

          <h2>3. Personal Data We Collect</h2>
          <h3>3.1 Information you give us</h3>
          <ul>
            <li>
              <strong>Contact form:</strong> name, business name, phone or WhatsApp number, email address (optional), country, the service you are interested in
              and your message.
            </li>
            <li>
              <strong>WhatsApp, phone and email:</strong> your name, number or email address, and anything you choose to tell us in the conversation, such as
              details about your business, goals and budget.
            </li>
          </ul>
          <p>
            Please do not send us sensitive personal data (such as health, financial account or identity document details). We do not need it to answer an
            enquiry.
          </p>

          <h3>3.2 How the contact form works</h3>
          <p>
            Our contact form checks your details in your browser and then prepares a pre-written WhatsApp message. The form itself does not send your details to
            our servers or store them on this website. Your details reach us only when you press <strong>Send</strong> in WhatsApp. From that point, the
            message is handled under Section 3.1 and WhatsApp&apos;s own privacy policy.
          </p>

          <h3>3.3 Information collected automatically (only with your consent)</h3>
          <p>If you click <strong>Accept</strong> on our cookie banner, we use:</p>
          <ul>
            <li>
              <strong>Google Tag Manager and Google Analytics 4</strong> to measure visits and actions such as pages viewed, buttons clicked, form starts and
              WhatsApp clicks. This includes information such as device and browser type, approximate location (derived from your IP address), referring
              website and campaign tags in the page address (for example, <code>utm_source</code>).
            </li>
            <li>
              <strong>Microsoft Clarity</strong> to produce heatmaps and session recordings that show how visitors scroll, click and move around pages, so we can
              find and fix problems. Clarity masks the text you type into form fields.
            </li>
          </ul>
          <p>
            If you click <strong>Decline</strong>, or have not made a choice yet, these tools run in a restricted, cookieless mode: they do not set analytics or
            advertising cookies and do not link your visits together. Our analytics events never include your name, phone number, email address or message.
          </p>

          <h3>3.4 Technical data</h3>
          <p>
            Like all websites, our hosting providers automatically receive technical information needed to deliver pages securely, such as your IP address,
            browser type and the time of the request. This is used for security and reliability.
          </p>

          <h2>4. Why We Use Your Data and Our Legal Basis</h2>
          <ul>
            <li>
              <strong>Responding to your enquiry and preparing a quotation</strong> — based on your consent and your request to be contacted, which you give when
              you tick the consent box on the form or message us yourself.
            </li>
            <li>
              <strong>Following up about your enquiry</strong> by WhatsApp, phone or email — based on your consent. You can ask us to stop at any time.
            </li>
            <li>
              <strong>Analytics and website improvement</strong> using Google Analytics and Microsoft Clarity — based on your consent through the cookie banner.
            </li>
            <li>
              <strong>Website security, fraud and spam prevention</strong> — necessary to operate the website safely (a legitimate use).
            </li>
            <li>
              <strong>Meeting legal obligations</strong>, such as keeping business and tax records or responding to lawful requests from authorities.
            </li>
          </ul>
          <p>We do not use your data for automated decisions that have legal or similarly significant effects on you.</p>

          <h2>5. Cookies and Similar Technologies</h2>
          <p>We use a small number of technologies, grouped as follows:</p>
          <ul>
            <li>
              <strong>Strictly necessary (always on):</strong> your browser&apos;s storage remembers your cookie choice and whether you have already seen the
              opening animation in this session. These do not track you.
            </li>
            <li>
              <strong>Analytics (only after you accept):</strong> cookies set by Google Analytics and Microsoft Clarity, used as described in Section 3.3.
            </li>
          </ul>
          <p>
            We do not currently use advertising or remarketing cookies on this website. If we add them, we will update this policy and ask for your consent
            first.
          </p>
          <p>
            <strong>Changing your choice:</strong> clear this website&apos;s data in your browser settings and reload the page. The cookie banner will appear
            again. You can also block cookies in your browser, or install the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out add-on</a>.
          </p>

          <h2>6. Who We Share Data With</h2>
          <p>We do not sell or rent your personal data. We share it only with service providers that help us run the website and our business:</p>
          <ul>
            <li><strong>WhatsApp (Meta Platforms)</strong> — messaging, when you contact us on WhatsApp.</li>
            <li><strong>Google</strong> — Google Tag Manager and Google Analytics.</li>
            <li><strong>Our email service provider</strong> — to send and receive email at {site.email}.</li>
            <li><strong>Microsoft</strong> — Microsoft Clarity.</li>
            <li><strong>Website hosting providers</strong> — to serve this website securely.</li>
          </ul>
          <p>
            These providers process data under their own terms and privacy policies. We may also disclose personal data if required by law, court order or a
            lawful request from a government authority, or to protect our rights, users or the public. If our business is restructured, merged or sold,
            personal data may be transferred to the new owner under the same protections.
          </p>

          <h2>7. International Transfers</h2>
          <p>
            We are based in India and serve clients in India, the UAE, Bahrain and the wider GCC. Some of our service providers (for example Google, Microsoft and
            Meta) store or process data on servers outside your country, including in the United States. Where we transfer personal data internationally, we
            rely on providers that apply recognised safeguards and do so only as permitted by applicable law.
          </p>

          <h2>8. How Long We Keep Data</h2>
          <ul>
            <li>
              <strong>Enquiries that do not become projects:</strong> up to 24 months after our last contact, so we can refer back to the conversation if you get
              in touch again. You can ask us to delete it sooner.
            </li>
            <li>
              <strong>Client records:</strong> for the duration of the engagement and afterwards for as long as required by law for accounting, tax and
              contractual records.
            </li>
            <li>
              <strong>Analytics data:</strong> according to the retention settings of Google Analytics and Microsoft Clarity, which we keep at the shortest periods
              that still let us compare performance over time.
            </li>
          </ul>
          <p>When data is no longer needed, we delete it or anonymise it.</p>

          <h2>9. How We Protect Your Data</h2>
          <p>
            We use reasonable technical and organisational safeguards, including encrypted connections (HTTPS) for this website, access to business accounts
            limited to people who need it, and keeping enquiry data only as long as needed. No method of transmission or storage is
            completely secure, but we work to protect your data and will act promptly if a breach occurs, including notifying affected people and authorities
            where the law requires it.
          </p>

          <h2>10. Your Rights</h2>
          <p>Depending on the laws that apply to you, you can ask us to:</p>
          <ul>
            <li>confirm whether we hold your personal data and give you a summary of it and how we use it;</li>
            <li>correct, complete or update inaccurate or incomplete data;</li>
            <li>delete your data, where we no longer need it or you withdraw consent;</li>
            <li>withdraw your consent at any time — this does not affect anything we did before you withdrew it;</li>
            <li>stop sending you follow-up messages;</li>
            <li>nominate another person to exercise your rights if you die or become unable to do so (under India&apos;s DPDP Act); and</li>
            <li>raise a grievance with us about how your data has been handled.</li>
          </ul>
          <p>
            To make a request, contact us using the details in Section 13. We may need to confirm your identity before acting on it. We aim to respond within 30
            days. We will not treat you differently for exercising your rights.
          </p>

          <h2>11. Grievances and Complaints</h2>
          <p>
            If you have a concern about how we handle your personal data, please contact our grievance contact first, {site.founder.name} ({site.founder.role}),
            at {site.email}. We will acknowledge your grievance and aim to resolve it within 30 days.
          </p>
          <p>
            If you are not satisfied with our response, you may complain to the relevant authority. In India this is the Data Protection Board of India. In the UAE
            and Bahrain, it is the data protection authority that applies to you.
          </p>

          <h2>12. Children</h2>
          <p>
            This website and our services are intended for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you believe
            a child has sent us personal data, please contact us and we will delete it.
          </p>

          <h2>13. Contact Us</h2>
          <p>For privacy questions, requests or grievances:</p>
          <ul>
            <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>WhatsApp: {site.whatsapp.display}</li>
            <li>Phone: {site.phone.display}</li>
            <li>Post: {site.legalName}, {o.registered.lines.join(", ")}</li>
          </ul>

          <h2>14. Third-Party Websites</h2>
          <p>
            Our website links to other websites and platforms, such as WhatsApp, Instagram, Facebook, LinkedIn and Google Maps. Their privacy practices are their
            own, and we encourage you to read their policies.
          </p>

          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this policy when our practices, tools or the law change. The “Last updated” date at the top shows when it last changed. If we make a
            significant change, such as using your data for a new purpose, we will highlight it on this website and ask for your consent where required.
          </p>
          <p>
            See also our <Link href="/terms/">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </div>
      <PageFaqs path="/privacy/" title="Privacy questions" className="container-site max-w-3xl pb-20" />
    </>
  );
}
