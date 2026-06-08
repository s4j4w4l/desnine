"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function WhyUsSection() {
  const { t } = useLang();
  const w = t.whyUs;

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-20 h-64 w-64 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff0d,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Top: intro + hero */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] items-start">
          {/* Left column */}
          <div className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              {w.badge}
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-medium text-neutral-400">
                {w.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
                {w.heading}{" "}
                <span className="inline-flex items-center gap-2">
                  Desnine Studio
                  <Sparkles className="h-5 w-5 text-red-400" />
                </span>
                ?
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-neutral-300">
                {w.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                {w.ctaLetsTalk}
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/60 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                {w.ctaSeeWork}
              </Link>

              <p className="text-xs text-neutral-500 sm:pl-1">{w.ctaNote}</p>
            </div>
          </div>

          {/* Right column – principles */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 sm:p-6 lg:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  {w.principlesTitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {w.principlesSubtitle}
                </p>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/90 px-3 py-1 text-[11px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                {w.principlesTag}
              </div>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {w.principles.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 sm:p-4.5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-red-500/60"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_60%)]" />
                  <div className="relative space-y-1.5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {item.tag}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-50">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: comparison */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                {w.comparisonTitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-300">
                {w.comparisonSubtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
              <span>{w.comparisonNote}</span>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                {w.mostAgencies}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                {w.mostAgenciesItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl border border-red-500/50 bg-gradient-to-br from-red-500/15 via-neutral-900 to-neutral-950 p-4 sm:p-5">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.3),_transparent_60%)]" />
              <div className="relative space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-red-300">
                  {w.desnineWay}
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-50">
                  {w.desnineWayItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="pt-1 text-[11px] text-red-200/80">{w.desnineWayNote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
          <div className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              {w.howWeWorkTitle}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50 text-balance">
              {w.howWeWorkHeading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">{w.howWeWorkDesc}</p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {w.steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex gap-3 sm:gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-3.5 sm:p-4.5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.16),_transparent_65%)]" />
                <div className="relative">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-[11px] sm:text-xs font-medium text-neutral-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative space-y-1.5">
                  <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    {step.label}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-50">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership + CTA */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              {w.partnershipTitle}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50">
              {w.partnershipHeading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">{w.partnershipDesc}</p>

            <div className="flex flex-wrap gap-2 pt-1.5">
              {w.partnershipBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] sm:text-xs text-neutral-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-5 sm:p-7 space-y-5">
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                {w.ctaBoxTitle}
              </p>
              <p className="text-sm sm:text-base text-neutral-200">{w.ctaBoxDesc}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                {w.ctaStartProject}
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/70 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                {w.ctaExploreServices}
              </Link>
            </div>

            <p className="text-[11px] text-neutral-500">{w.ctaBoxNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
