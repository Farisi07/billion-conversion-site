import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ambient">
      <div className="container-site flex min-h-[80vh] flex-col items-start justify-center pt-[var(--header-h)]">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-display font-bold">This page didn&apos;t convert.</h1>
        <p className="mt-5 max-w-xl text-lg text-ivory/75">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact/" variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
