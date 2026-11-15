"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

/** Native scroll-snap carousel: swipe/drag on touch, buttons + arrow keys on desktop. */
export function CaseCarousel({ items }: { items: CaseStudy[] }) {
  const track = useRef<HTMLUListElement>(null);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Selected work"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((c, i) => (
          <li key={c.slug} className="card w-[88%] shrink-0 snap-start overflow-hidden md:w-[640px]">
            <div className="grid h-full md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-48 overflow-hidden bg-forest">
                <CaseArt index={i} />
                <span className="absolute bottom-4 left-4 font-display text-3xl font-bold text-ivory/90">{c.client}</span>
              </div>
              <div className="flex flex-col gap-4 p-6 md:p-7">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md border border-emerald/40 px-2 py-1 font-semibold text-emerald">{c.category}</span>
                  <span className="rounded-md border border-line-soft px-2 py-1 text-slate">{c.market}</span>
                </div>
                <h3 className="font-display text-h3 font-bold">{c.client}</h3>
                <p className="leading-relaxed text-ivory/70">{c.summary}</p>
                {c.results.length > 0 ? (
                  <dl className="grid grid-cols-3 gap-3">
                    {c.results.slice(0, 3).map((r) => (
                      <div key={r.label}>
                        <dt className="text-xs text-slate">{r.label}</dt>
                        <dd className="font-display text-2xl font-bold text-emerald">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="rounded-lg border border-dashed border-line px-3 py-2 text-sm text-slate">Verified results will be published with the full case study.</p>
                )}
                <Link href={`/work/${c.slug}/`} className="mt-auto inline-flex items-center gap-1.5 font-semibold text-emerald hover:text-ivory">
                  View project <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous project" className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-emerald hover:text-emerald">
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next project" className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-emerald hover:text-emerald">
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}

/** Abstract placeholder art until real project imagery is supplied. */
export function CaseArt({ index }: { index: number }) {
  return (
    <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`cg${index}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#10b981" stopOpacity="0" />
          <stop offset="0.6" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="1" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#09251c" />
      {Array.from({ length: 7 }).map((_, k) => (
        <path
          key={k}
          d={`M-20 ${250 - k * 8} C 110 ${210 - k * 12 - index * 20}, 220 ${170 - k * 6}, 420 ${60 + k * 10 - index * 15}`}
          fill="none"
          stroke={`url(#cg${index})`}
          strokeWidth={k === 3 ? 2 : 0.8}
          opacity={1 - k * 0.1}
        />
      ))}
    </svg>
  );
}
