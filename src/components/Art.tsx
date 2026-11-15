import { cn } from "@/lib/cn";

/** Bespoke abstract art for service cards (no stock imagery). */
export function ServiceArt({ kind }: { kind: string }) {
  if (kind === "chart")
    return (
      <div aria-hidden className="pointer-events-none mt-6 flex h-20 items-end gap-2">
        {[28, 40, 34, 52, 64, 78].map((h, i) => (
          <span
            key={i}
            className="w-full rounded-t-sm border border-emerald/50 bg-gradient-to-t from-emerald/5 to-emerald/45 transition-transform duration-500 group-hover:-translate-y-1"
            style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
    );
  if (kind === "search")
    return (
      <svg aria-hidden viewBox="0 0 240 80" className="pointer-events-none mt-6 h-20 w-full transition-transform duration-700 group-hover:translate-x-1">
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} d={`M0 ${70 - k * 3} C 60 ${70 - k * 3}, 90 ${20 + k * 4}, 150 ${30 + k * 2} S 220 ${10 + k * 5}, 240 ${8 + k * 4}`} fill="none" stroke="#10b981" strokeOpacity={0.75 - k * 0.13} strokeWidth={k === 0 ? 1.6 : 0.8} />
        ))}
      </svg>
    );
  return (
    <div aria-hidden className="pointer-events-none relative mt-6 h-20">
      {[0, 1, 2].map((k) => (
        <span
          key={k}
          className="absolute bottom-0 h-14 w-28 -skew-y-6 rounded-md border border-emerald/40 bg-gradient-to-br from-emerald/25 to-forest/20 transition-transform duration-500 group-hover:-translate-y-1"
          style={{ left: `${k * 26}%`, opacity: 0.55 + k * 0.2, transitionDelay: `${k * 60}ms` }}
        />
      ))}
    </div>
  );
}

/** Abstract visuals for business-model cards until art-directed photography is supplied. */
export function ModelArt({ index, accent }: { index: number; accent: string }) {
  return (
    <div className={cn("relative h-full w-full bg-forest bg-gradient-to-br", accent)}>
      <svg aria-hidden viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id={`mg${index}`} cx="0.7" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.35" />
            <stop offset="1" stopColor="#050806" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="240" fill={`url(#mg${index})`} />
        {index === 0 && (
          // D2C: repeat-purchase loop
          <g fill="none" stroke="#34d399" strokeOpacity="0.7">
            <circle cx="160" cy="120" r="58" strokeWidth="1.5" />
            <circle cx="160" cy="120" r="84" strokeOpacity="0.3" strokeDasharray="3 6" />
            <circle cx="218" cy="120" r="6" fill="#10b981" />
            <circle cx="102" cy="120" r="4" fill="#a7f3d0" />
          </g>
        )}
        {index === 1 && (
          // B2B: funnel
          <g fill="none" stroke="#2dd4bf" strokeOpacity="0.7" strokeWidth="1.2">
            {[0, 1, 2, 3].map((k) => (
              <rect key={k} x={70 + k * 22} y={50 + k * 38} width={180 - k * 44} height="26" rx="6" fillOpacity="0.08" fill="#14b8a6" />
            ))}
          </g>
        )}
        {index === 2 && (
          // E-commerce: product grid + cart path
          <g fill="none" stroke="#34d399" strokeOpacity="0.6">
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={92 + c * 50} y={44 + r * 52} width="40" height="40" rx="8" fill="#10b981" fillOpacity={r === 1 && c === 2 ? 0.45 : 0.06} />),
            )}
          </g>
        )}
        {index === 3 && (
          // Product business: launch trajectory
          <g fill="none">
            <path d="M40 210 C 120 200, 170 150, 280 40" stroke="#c6b58a" strokeOpacity="0.8" strokeWidth="1.5" />
            <path d="M40 220 C 130 212, 190 170, 290 70" stroke="#10b981" strokeOpacity="0.5" />
            <circle cx="280" cy="40" r="5" fill="#c6b58a" />
          </g>
        )}
      </svg>
    </div>
  );
}
