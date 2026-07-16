import { FooterSection } from "@/components/sections/footer-section";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-5xl flex-col items-center justify-center px-8 py-20 text-center md:px-16">
        <p className="mb-6 text-sm font-medium text-secondary">404 — Page not found</p>

        <h1 className="max-w-4xl text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.07em]">
          Looks like you&apos;re lost.
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Explore our work
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Have a project in mind?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-secondary"
            >
              Contact us
            </Link>
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
