import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { businessModels, services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { SocialLinks } from "./Social";

export function Footer() {
  const year = 2026; // static to keep the footer prerenderable; update yearly or via build env
  const o = site.offices;
  return (
    <footer className="border-t border-line-soft bg-[#030504]">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-full.png" alt={site.name} width={838} height={720} className="h-auto w-36" />
          <p className="mt-5 font-display text-lg font-semibold text-ivory">{site.tagline}</p>
          <ul className="mt-6 space-y-3 text-[0.95rem]">
            <li>
              <a href={`tel:${site.phone.tel}`} data-track="phone:footer" className="inline-flex items-center gap-2.5 text-ivory/80 hover:text-emerald">
                <Phone aria-hidden className="size-4 text-emerald" /> {site.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} data-track="whatsapp:footer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ivory/80 hover:text-emerald">
                <MessageCircle aria-hidden className="size-4 text-emerald" /> WhatsApp {site.whatsapp.display}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} data-track="email:footer" className="text-ivory/80 hover:text-emerald">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
          <SocialLinks className="mt-6" />
        </div>

        <FooterCol title="Services" links={services.map((s) => ({ label: s.slug === "performance-marketing" ? "Performance Marketing" : s.name, href: `/services/${s.slug}/` }))} />
        <FooterCol
          title="Who we help"
          links={[
            ...businessModels.map((m) => ({ label: m.name, href: `/business-models/${m.slug}/` })),
            { label: "Kozhikode", href: "/locations/kozhikode/" },
            { label: "Kerala", href: "/locations/kerala/" },
            { label: "Dubai & UAE", href: "/locations/dubai/" },
            { label: "Bahrain", href: "/locations/bahrain/" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "About & Founder", href: "/about/" },
            { label: "Insights", href: "/insights/" },
            { label: "Contact", href: "/contact/" },
          ]}
        />
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-line-soft py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-ivory/80">
          <span className="font-semibold text-emerald">Office:</span> {o.operational.lines.join(", ")}
        </p>
        <p className="text-ivory/60">Serving Kerala, India, the UAE, Bahrain and the wider GCC.</p>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-line-soft py-6 text-xs text-slate md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p>
            © {year} {site.legalName}. “{site.name}” is a brand of {site.legalName}.
          </p>
          {/* Legal entity details kept as small print to avoid confusion with the operational office */}
          <p className="text-slate/80">
            Registered office: {o.registered.lines.join(", ")}
            {site.llpin && <> · LLPIN: {site.llpin}</>}
          </p>
        </div>
        <ul className="flex shrink-0 gap-6 text-sm">
          <li><Link href="/privacy/" className="hover:text-emerald">Privacy Policy</Link></li>
          <li><Link href="/terms/" className="hover:text-emerald">Terms &amp; Conditions</Link></li>
        </ul>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ivory">{title}</p>
      <ul className="mt-5 space-y-2.5 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ivory/70 transition-colors hover:text-emerald">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
