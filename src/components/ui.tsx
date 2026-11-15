import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Building2,
  Code2,
  Compass,
  GraduationCap,
  HeartPulse,
  Search,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Store,
  Target,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { site, whatsappLink, asset } from "@/lib/site";
import type { Faq } from "@/lib/content";

export const icons: Record<string, LucideIcon> = {
  chart: BarChart3,
  search: Search,
  target: Target,
  code: Code2,
  store: Store,
  cart: ShoppingCart,
  share: Share2,
  compass: Compass,
  heart: HeartPulse,
  bag: ShoppingBag,
  utensils: UtensilsCrossed,
  cap: GraduationCap,
  building: Building2,
  boxes: Boxes,
};

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={asset("/brand/logo-horizontal.png")}
      alt={site.name}
      width={1062}
      height={240}
      priority={priority}
      className={cn("h-9 w-auto md:h-10", className)}
    />
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "ghost";
  className?: string;
  track?: string;
  external?: boolean;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", className, track, external, arrow = true }: BtnProps) {
  const styles = {
    primary: "bg-emerald text-obsidian hover:bg-[#2fd09a] shadow-[0_0_0_1px_rgb(16_185_129/0.4),0_10px_30px_-10px_rgb(16_185_129/0.6)]",
    outline: "border border-ivory/25 text-ivory hover:border-emerald hover:text-emerald",
    dark: "bg-obsidian text-ivory hover:bg-forest",
    ghost: "text-emerald hover:text-ivory",
  }[variant];
  const cls = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300",
    styles,
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );
  if (external)
    return (
      <a href={href} className={cls} data-track={track} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls} data-track={track}>
      {inner}
    </Link>
  );
}

export function WhatsAppButton({ message, children = "Chat on WhatsApp", variant = "outline", className, context }: { message?: string; children?: ReactNode; variant?: BtnProps["variant"]; className?: string; context: string }) {
  return (
    <Button href={whatsappLink(message)} external variant={variant} className={className} track={`whatsapp:${context}`}>
      {children}
    </Button>
  );
}

export function SectionHeader({ eyebrow, title, children, className, as: As = "h2" }: { eyebrow?: string; title: ReactNode; children?: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-12", className)}>
      <div data-reveal>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <As className="font-display text-h2 font-bold text-balance text-ivory">{title}</As>
      </div>
      {children && (
        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="text-lg leading-relaxed text-ivory/70 lg:border-l lg:border-line lg:pl-10">
          {children}
        </div>
      )}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-ivory/25">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ivory/80">{it.name}</span>
            ) : (
              <Link href={it.path} className="hover:text-emerald">{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs, children }: { eyebrow: string; title: string; intro: string; crumbs: { name: string; path: string }[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft bg-ambient pt-[calc(var(--header-h)+48px)] pb-16 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-emerald/10 blur-[120px]" />
      <div className="container-site relative">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mb-5 hero-rise">{eyebrow}</p>
        <h1 className="font-display max-w-4xl text-display font-bold text-balance hero-rise" style={{ ["--d" as string]: 1 }}>
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75 hero-rise" style={{ ["--d" as string]: 2 }}>
          {intro}
        </p>
        {children && (
          <div className="mt-9 flex flex-wrap gap-4 hero-rise" style={{ ["--d" as string]: 3 }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-semibold text-ivory">
            <h3>{f.q}</h3>
            <span aria-hidden className="mt-1 text-emerald transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ivory/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaPanel({
  title = "Ready to turn growth into numbers?",
  body = "Let's identify growth opportunities, build the right strategy and turn it into measurable business results.",
  cta = "Book Your Growth Call",
  href = "/contact/",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="container-site py-20 md:py-28">
      <div data-reveal className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#34d399] via-emerald to-[#0d9488] p-8 text-obsidian md:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent motion-safe:animate-[sweep_7s_ease-in-out_infinite]" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-center md:gap-10">
          <h2 className="font-display text-h2 font-extrabold text-balance">{title}</h2>
          <p className="text-lg leading-relaxed text-obsidian/80 md:border-l md:border-obsidian/20 md:pl-8">{body}</p>
          <Button href={href} variant="dark" track="cta:final" className="justify-self-start px-7 py-4">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-2 font-semibold text-emerald hover:text-ivory", className)}>
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
