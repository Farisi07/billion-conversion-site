import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "./ui";
import { SocialLinks } from "./Social";

/** Founder section — used on the homepage and the About page. */
export function FounderSection({ headingLevel = "h2", className }: { headingLevel?: "h2" | "h3"; className?: string }) {
  const f = site.founder;
  const H = headingLevel;
  const initials = f.name
    .split(" ")
    .filter((p) => p.length > 1)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16", className)}>
      <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div aria-hidden className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald/30 via-teal/10 to-transparent blur-2xl" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-forest">
          {f.image ? (
            <Image src={f.image} alt={`${f.name}, ${f.role} of ${site.name}`} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          ) : (
            // Placeholder until the founder photo is added (site.founder.image)
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(80%_60%_at_50%_30%,rgb(16_185_129/0.25),transparent)]">
              <span className="font-display text-7xl font-extrabold text-emerald">{initials}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate">Photo coming soon</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/95 to-transparent p-6 pt-16">
            <p className="font-display text-xl font-bold text-ivory">{f.name}</p>
            <p className="text-sm text-emerald">
              {f.role}, {site.name}
            </p>
          </div>
        </div>
      </div>

      <div data-reveal style={{ ["--reveal-i" as string]: 1 }}>
        <p className="eyebrow mb-4">Meet the founder</p>
        <H className="font-display text-h2 font-bold text-balance">Growth you can talk to directly.</H>
        <p className="mt-6 text-lg leading-relaxed text-ivory/80">{f.bio}</p>
        <blockquote className="mt-8 border-l-2 border-emerald pl-6 font-display text-xl font-semibold leading-snug text-ivory">
          “{site.tagline}”
        </blockquote>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/contact/" track="cta:founder">Book a Growth Call</Button>
          <Button href={whatsappLink(`Hi ${f.name.split(" ")[0]}, I'd like to talk about growing my business.`)} external variant="outline" track="whatsapp:founder">
            Message on WhatsApp
          </Button>
        </div>
        <div className="mt-8">
          <p className="mb-3 text-sm text-slate">Connect with {f.name.split(" ")[0]}</p>
          <SocialLinks links={f.social} owner={f.name} />
        </div>
      </div>
    </div>
  );
}
