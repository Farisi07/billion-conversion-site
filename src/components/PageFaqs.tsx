import { getPageFaqs } from "@/lib/faqs";
import { FaqList } from "./ui";
import { JsonLd } from "./JsonLd";

/** Page FAQ block + FAQPage structured data. Content lives in src/lib/faqs.ts keyed by path. */
export function PageFaqs({ path, title = "Frequently asked questions", className = "container-site py-20" }: { path: string; title?: string; className?: string }) {
  const faqs = getPageFaqs(path);
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-title" className={className}>
      <p className="eyebrow mb-4">FAQ</p>
      <h2 id="faq-title" className="mb-10 font-display text-h2 font-bold text-balance">{title}</h2>
      <FaqList faqs={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}
