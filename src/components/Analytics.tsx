"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const ENABLED = Boolean(GTM_ID || CLARITY_ID);
const CONSENT_KEY = "bc-consent";

/**
 * Google Tag Manager (Consent Mode v2) and Microsoft Clarity (Consent API v2).
 * Both start with analytics/ads storage denied (cookieless) and switch to
 * granted only after the visitor accepts the cookie banner.
 * Renders nothing until NEXT_PUBLIC_GTM_ID or NEXT_PUBLIC_CLARITY_ID is set.
 */
export function Analytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | null | "unknown">("unknown");

  useEffect(() => {
    if (!ENABLED) return;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(CONSENT_KEY);
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser-only storage after mount
    setChoice(saved === "granted" || saved === "denied" ? saved : null);
  }, []);

  if (!ENABLED) return null;

  const decide = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    setChoice(value);
    const w = window as unknown as { gtag?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void };
    w.gtag?.("consent", "update", {
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
    w.clarity?.("consentv2", { ad_Storage: value, analytics_Storage: value });
  };

  return (
    <>
      {GTM_ID && (
        <>
          <Script id="consent-default" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var c=null;try{c=localStorage.getItem('${CONSENT_KEY}')}catch(e){}
var v=c==='granted'?'granted':'denied';
gtag('consent','default',{analytics_storage:v,ad_storage:v,ad_user_data:v,ad_personalization:v,wait_for_update:500});`}
          </Script>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        </>
      )}
      {/* Script id must not be "clarity": element ids become window globals and would shadow window.clarity */}
      {CLARITY_ID && (
        <Script id="ms-clarity-tag" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");
var c=null;try{c=localStorage.getItem('${CONSENT_KEY}')}catch(e){}
var v=c==='granted'?'granted':'denied';
window.clarity('consentv2',{ad_Storage:v,analytics_Storage:v});`}
        </Script>
      )}
      {choice === null && (
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-line bg-obsidian/95 p-5 shadow-2xl backdrop-blur md:left-6 md:right-auto">
          <p className="text-sm leading-relaxed text-ivory/80">
            We use analytics cookies to understand which pages help visitors and to measure enquiries. You can accept or decline.{" "}
            <Link href="/privacy/" className="text-emerald underline underline-offset-2">Privacy Policy</Link>
          </p>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => decide("granted")} className="rounded-lg bg-emerald px-4 py-2 text-sm font-semibold text-obsidian">Accept</button>
            <button type="button" onClick={() => decide("denied")} className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ivory">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
