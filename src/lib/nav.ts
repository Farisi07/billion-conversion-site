import { businessModels, services } from "./content";

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/",
    children: services.map((s) => ({ label: s.slug === "performance-marketing" ? "Performance Marketing" : s.name, href: `/services/${s.slug}/`, desc: s.short })),
  },
  {
    label: "Who We Help",
    href: "/business-models/",
    children: businessModels.map((m) => ({ label: m.name, href: `/business-models/${m.slug}/`, desc: m.short })),
  },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" },
];
