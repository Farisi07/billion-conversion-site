/**
 * Thin analytics layer. Pushes events to the GTM dataLayer; GTM forwards them to GA4.
 * Nothing is sent unless GTM is configured (NEXT_PUBLIC_GTM_ID) and consent is granted.
 *
 * Event names (configure as GA4 key events where relevant):
 *  cta_click, form_start, generate_lead, whatsapp_click, phone_click, email_click,
 *  case_study_view, outbound_click
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, page_path: window.location.pathname, ...params });
  if (process.env.NODE_ENV !== "production") console.debug("[track]", event, params);
}
