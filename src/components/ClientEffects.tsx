"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Site-wide progressive enhancements, mounted once in the root layout:
 *  - scroll-reveal for [data-reveal] elements (IntersectionObserver, no scroll hijacking)
 *  - delegated click tracking for CTAs, phone, WhatsApp, email and outbound links
 */
export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-shown", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("a, button");
      if (!el) return;
      const tag = el.dataset.track;
      const href = el instanceof HTMLAnchorElement ? el.href : "";
      if (tag) {
        const [kind, location] = tag.split(":");
        if (kind === "whatsapp") track("whatsapp_click", { location });
        else if (kind === "phone") track("phone_click", { location });
        else if (kind === "email") track("email_click", { location });
        else track("cta_click", { location, label: el.textContent?.trim() });
        return;
      }
      if (href.startsWith("tel:")) track("phone_click", { location: "inline" });
      else if (href.includes("wa.me/")) track("whatsapp_click", { location: "inline" });
      else if (href.startsWith("mailto:")) track("email_click", { location: "inline" });
      else if (href && new URL(href).host !== window.location.host) track("outbound_click", { url: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
