"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close menus on route change (state adjusted during render, React-recommended pattern)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes dropdowns / mobile menu; click outside closes dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [mobileOpen]);

  // Mobile menu: lock scroll + focus first link + trap focus
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>("a, button") ?? []);
    focusables()[0]?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const els = [toggleRef.current!, ...focusables()];
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", trap);
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        solid ? "border-b border-line-soft bg-obsidian/85 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald focus:px-4 focus:py-2 focus:text-obsidian">
        Skip to content
      </a>
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Logo priority className="h-8 md:h-10" />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.href} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.92rem] text-ivory/85 transition-colors hover:text-emerald",
                      isActive(item.href) && "text-emerald",
                    )}
                  >
                    {item.label}
                    <ChevronDown aria-hidden className={cn("size-4 transition-transform", openMenu === item.label && "rotate-180")} />
                  </button>
                  <div
                    id={`menu-${item.label}`}
                    hidden={openMenu !== item.label}
                    className="absolute left-1/2 top-full mt-3 w-[min(640px,80vw)] -translate-x-1/2 rounded-2xl border border-line bg-obsidian/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-xl p-3 transition-colors hover:bg-forest/70 focus-visible:bg-forest/70">
                            <span className="block font-semibold text-ivory">{c.label}</span>
                            {c.desc && <span className="mt-1 block text-sm leading-snug text-slate">{c.desc}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.href} className="mt-1 flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-emerald hover:bg-forest/70">
                      View all {item.label.toLowerCase()} <ArrowUpRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn("rounded-lg px-3.5 py-2 text-[0.92rem] text-ivory/85 transition-colors hover:text-emerald", isActive(item.href) && "text-emerald")}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.primaryCta.href}
            data-track="cta:header"
            className="hidden items-center gap-1.5 rounded-xl border border-emerald/70 px-4 py-2.5 text-sm font-semibold text-emerald transition-colors hover:bg-emerald hover:text-obsidian sm:inline-flex"
          >
            {site.primaryCta.label} <ArrowUpRight aria-hidden className="size-4" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-line-soft text-ivory lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!mobileOpen}
        className="h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line-soft bg-obsidian lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <details className="group rounded-xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-2 py-3 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown aria-hidden className="size-5 text-emerald transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mb-2 ml-2 border-l border-line pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-2.5 text-ivory/80 hover:text-emerald">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={item.href} className="block py-2.5 font-semibold text-emerald">
                          View all
                        </Link>
                      </li>
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="block rounded-xl px-2 py-3 font-display text-xl font-semibold hover:text-emerald">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact/" className="block rounded-xl px-2 py-3 font-display text-xl font-semibold hover:text-emerald">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href={site.primaryCta.href}
            data-track="cta:mobile-menu"
            className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald px-6 font-semibold text-obsidian"
          >
            {site.primaryCta.label} <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
