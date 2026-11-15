import type { Metadata } from "next";
import { site } from "@/lib/site";

const path = "/locations/dubai/";
const target = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// UAE intent is covered by the Dubai & UAE page. Static hosts cannot send a
// server 301, so this page redirects instantly and points Google to the right URL.
export const metadata: Metadata = {
  title: "Dubai & UAE",
  robots: { index: false, follow: true },
  alternates: { canonical: `${site.url}${path}` },
  other: { refresh: `0;url=${target}` },
};

export default function UaeRedirect() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <p>
        Moved to <a className="underline" href={target}>Dubai &amp; UAE</a>.
      </p>
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)})` }} />
    </main>
  );
}
