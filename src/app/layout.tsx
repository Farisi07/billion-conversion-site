import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroLoader, introBootScript } from "@/components/IntroLoader";
import { ClientEffects } from "@/components/ClientEffects";
import { Analytics } from "@/components/Analytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Growth Marketing Agency in Kerala, India`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#050806",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      </head>
      <body className="min-h-dvh">
        <IntroLoader />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ClientEffects />
        <Analytics />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  );
}
