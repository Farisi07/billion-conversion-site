"use client";

import Image from "next/image";
import { useEffect } from "react";
import { site } from "@/lib/site";

/**
 * Once-per-session brand reveal.
 * An inline script in <head> adds `intro-playing` to <html> before first paint
 * (only when the intro hasn't played this session and reduced motion is off),
 * so returning visitors never see a flash. The overlay is pure CSS animation;
 * this component just records the session flag and handles skip.
 */
export const INTRO_KEY = "bc-intro-played";

export const introBootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(!sessionStorage.getItem('${INTRO_KEY}')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro-playing');}}catch(e){}})();`;

export function IntroLoader() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro-playing")) return;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {}
    const t = window.setTimeout(() => root.classList.remove("intro-playing"), 2700);
    return () => window.clearTimeout(t);
  }, []);

  const skip = () => document.documentElement.classList.remove("intro-playing");

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-trail" />
      <div className="intro-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ ["--i" as string]: i }} />
        ))}
      </div>
      <div className="relative flex flex-col items-center">
        <div className="intro-mark">
          <Image src="/brand/logo-icon.png" alt="" width={419} height={512} priority className="h-24 w-auto md:h-28" />
        </div>
        <Image src="/brand/logo-wordmark.png" alt="" width={838} height={188} className="intro-word mt-6 h-auto w-56 md:w-64" />
        <p className="intro-tag mt-5 font-display text-sm font-semibold tracking-wide text-ivory/80 md:text-base">{site.tagline}</p>
      </div>
      <button type="button" onClick={skip} tabIndex={-1} className="intro-skip">
        Skip intro
      </button>
    </div>
  );
}
