"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-neutral-50 py-16 sm:py-20 lg:py-24">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-20 h-64 w-64 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff0d,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Top: intro + hero */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] items-start">
          {/* Left column – heading & CTAs */}
          <div className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              Why us
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-medium text-neutral-400">
                Creative direction for modern brands
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
                Why choose{" "}
                <span className="inline-flex items-center gap-2">
                  Desnine Studio
                  <Sparkles className="h-5 w-5 text-red-400" />
                </span>
                ?
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-neutral-300">
                We blend brand strategy, design craft, and automation so every
                touchpoint is clearer, faster, and more effective.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Let’s talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/60 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Start a project
              </Link>

              <p className="text-xs text-neutral-500 sm:pl-1">
                Clear scopes, honest timelines, no fluff.
              </p>
            </div>
          </div>

          {/* Right column – “What we stand for” card grid */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-4 sm:p-6 lg:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  What we stand for
                </p>
                <p className="text-xs sm:text-sm text-neutral-300">
                  The principles that shape our decisions, timelines, and the
                  work you ship.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/90 px-3 py-1 text-[11px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Outcomes over aesthetics
              </div>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {principles.map((item) => (
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

        {/* Middle: side-by-side comparison */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                What makes us different
              </p>
              <p className="text-xs sm:text-sm text-neutral-300">
                We remove the noise and build systems that grow with you.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
              <span>Lean, transparent workflow</span>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {/* Most agencies */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Most agencies
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                <li>• Rituals over results</li>
                <li>• Rigid retainers &amp; add-ons</li>
                <li>• Bloated processes</li>
                <li>• Surface-level design</li>
                <li>• Opaque pricing</li>
              </ul>
            </div>

            {/* The Desnine way */}
            <div className="relative rounded-2xl border border-red-500/50 bg-gradient-to-br from-red-500/15 via-neutral-900 to-neutral-950 p-4 sm:p-5">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.3),_transparent_60%)]" />
              <div className="relative space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-red-300">
                  The Desnine way
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-50">
                  <li>• Outcomes &gt; output</li>
                  <li>• Flexible, tailored scopes</li>
                  <li>• Lean, transparent workflow</li>
                  <li>• Brand systems that scale</li>
                  <li>• Clear budgets &amp; timelines</li>
                </ul>
                <p className="pt-1 text-[11px] text-red-200/80">
                  Built for founders who want momentum, not meetings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How we work – 4-step flow */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
          <div className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              How we work
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50 text-balance">
              A lean four-step flow that keeps momentum high and surprises low.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              From first call to post-launch support, we keep you in the loop
              and focused on what matters: shipping work that moves the
              business.
            </p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {steps.map((step, index) => (
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
                  <p className="text-xs sm:text-sm text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership + CTA */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Built on partnership
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-50">
              We treat your brand like it’s ours.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              We ask better questions, make braver choices, and stay after
              launch to keep compounding results. Post-launch support, responsive
              communication, and a streamlined workflow are baked into how we
              work — not sold as add-ons.
            </p>

            <div className="flex flex-wrap gap-2 pt-1.5">
              {[
                "Post-launch support",
                "Responsive comms",
                "Streamlined workflow",
              ].map((badge) => (
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
                Let’s shape your story
              </p>
              <p className="text-sm sm:text-base text-neutral-200">
                Whether you need a brand foundation, a conversion-ready website,
                or packaging that sells, we’ll guide you from idea to impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-neutral-50 transition hover:bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-red-500/70 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Explore services
              </Link>
            </div>

            <p className="text-[11px] text-neutral-500">
              One focused studio, no bloated team. Just senior direction and a
              clear line to the people doing the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    tag: "Principle 01",
    title: "Clarity over clutter",
    description: "Simple, strategic design that moves people and markets.",
  },
  {
    tag: "Principle 02",
    title: "Partnership mindset",
    description: "We listen first, create second. Guided, not sold to.",
  },
  {
    tag: "Principle 03",
    title: "Innovation with purpose",
    description: "Creativity + AI + automation aimed at real outcomes.",
  },
  {
    tag: "Principle 04",
    title: "Reliability first",
    description: "Clear timelines, tight scope, proactive communication.",
  },
  {
    tag: "Principle 05",
    title: "Data-led decisions",
    description: "We measure what matters and iterate to lift ROI.",
  },
  {
    tag: "Principle 06",
    title: "Transparent pricing",
    description: "No surprises. Crystal-clear scopes and milestones.",
  },
];

const steps = [
  {
    label: "Step 01",
    title: "Discovery",
    description:
      "Map goals, audience, and success metrics so we’re aligned on a clear brief before any pixels move.",
  },
  {
    label: "Step 02",
    title: "Strategy",
    description:
      "Positioning, messaging, and creative direction with sharp focus — the blueprint for every asset.",
  },
  {
    label: "Step 03",
    title: "Design & Build",
    description:
      "Identity, website, packaging, and automations crafted to convert and stay consistent at scale.",
  },
  {
    label: "Step 04",
    title: "Launch & Support",
    description:
      "QA, handover, and post-launch optimization so momentum doesn’t die the day the project goes live.",
  },
];
