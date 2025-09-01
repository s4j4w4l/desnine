"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Rocket,
  Handshake,
  Workflow,
  Clock3,
  Gauge,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

/**
 * Desnine Studio — Why Us (V4, Red Accent)
 * Next.js App Router + Tailwind + Framer Motion + shadcn/ui
 * — Centralized headings
 * — Red accent integrated across background, CTAs, chips, and rings
 * — Parallax blobs (respect reduced motion)
 * — Micro‑interactions on cards/steps (no icon borders in process)
 * — Accessible aria labels / reduced motion support
 */

/* ----------------------- Content ----------------------- */
const VALUES = [
  { icon: Sparkles, title: "Clarity over clutter", desc: "Simple, strategic design that moves people and markets." },
  { icon: Handshake, title: "Partnership mindset", desc: "We listen first, create second. Guided, not sold to." },
  { icon: Lightbulb, title: "Innovation with purpose", desc: "Creativity + AI + automation aimed at outcomes." },
  { icon: Clock3, title: "Reliability first", desc: "Clear timelines, tight scope, proactive communication." },
  { icon: Gauge, title: "Data‑led decisions", desc: "We measure what matters and iterate to lift ROI." },
  { icon: ShieldCheck, title: "Transparent pricing", desc: "No surprises, crystal clear scopes and milestones." },
];

const CONTRAST = {
  leftTitle: "Most agencies",
  left: [
    "Rituals over results",
    "Rigid retainers & add‑ons",
    "Bloated processes",
    "Surface level design",
    "Opaque pricing",
  ],
  rightTitle: "The Desnine way",
  right: [
    "Outcomes > output",
    "Flexible, tailored scopes",
    "Lean, transparent workflow",
    "Brand systems that scale",
    "Clear budgets & timelines",
  ],
};

const STEPS = [
  { step: "01", title: "Discovery", desc: "Map goals, audience, and success metrics to align on a clear brief.", icon: Workflow },
  { step: "02", title: "Strategy", desc: "Positioning, messaging, and creative direction with sharp focus.", icon: Lightbulb },
  { step: "03", title: "Design & Build", desc: "Identity, website, packaging, and automations crafted to convert.", icon: Sparkles },
  { step: "04", title: "Launch & Support", desc: "QA, handover, and post launch optimization to maintain momentum.", icon: ShieldCheck },
];

const STATS = [
  { value: "100%", label: "On time delivery" },
  { value: "70%", label: "Repeat clients" },
  { value: "50+", label: "Projects shipped" },
  { value: "<48h", label: "Avg. response" },
];

const TESTIMONIALS = [
  { quote: "They translated our messy vision into a clean brand system and a site that actually drives leads.", author: "Founder, SaaS", role: "B2B Software" },
  { quote: "Timelines were real, comms were clear, and the result felt premium without the fluff.", author: "Owner, Retail", role: "D2C / Packaging" },
  { quote: "Launch felt effortless. They stayed after go‑live to refine and optimize.", author: "Director, Marketing", role: "Hospitality" },
];

/* ----------------------- Animation presets ----------------------- */
function useAnimPresets() {
  const prefersReduced = useReducedMotion();
  const appear = {
    initial: { opacity: 0, y: prefersReduced ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: prefersReduced ? 0.01 : 0.55, ease: "easeOut" },
  } as const;
  const fade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: prefersReduced ? 0.01 : 0.6, ease: "easeOut" },
  } as const;
  return { appear, fade, prefersReduced };
}

/* ----------------------- Page ----------------------- */
export default function WhyUsPage() {
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIndex((p) => (p + 1) % TESTIMONIALS.length), 4200);
    return () => clearInterval(id);
  }, []);

  const { appear, fade, prefersReduced } = useAnimPresets();

  // Parallax background (smoothed & disabled if reduced motion)
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 });
  const yTop = useTransform(prefersReduced ? scrollYProgress : smooth, [0, 1], [0, prefersReduced ? 0 : -130]);
  const yBottom = useTransform(prefersReduced ? scrollYProgress : smooth, [0, 1], [0, prefersReduced ? 0 : 90]);

  const t = TESTIMONIALS[tIndex];

  return (
    <main className="relative w-full overflow-hidden bg-background text-foreground">
      {/* Parallax backdrop with red accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div style={{ y: yTop }} className="absolute -top-44 left-1/2 h-[560px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-red-600/20 via-rose-500/10 to-fuchsia-500/10 blur-3xl" />
        <motion.div style={{ y: yBottom }} className="absolute -bottom-32 right-[-10%] h-[440px] w-[700px] rotate-12 rounded-full bg-gradient-to-tr from-red-500/10 via-rose-500/10 to-pink-500/20 blur-2xl" />
        <motion.div style={{ y: yBottom }} className="absolute top-1/3 left-[-15%] h-[320px] w-[320px] rounded-full bg-red-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-12 text-center">
        <motion.div {...appear} className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
            <span>Creative direction for modern brands</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Why choose <span className="text-red-600">Desnine Studio</span>?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We blend brand strategy, design craft, and automation so every touchpoint is clearer, faster, and more effective.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" aria-label="Contact Desnine Studio">
              <Button className="group bg-red-600 hover:bg-red-700 text-white">
                Let’s talk
                <ArrowRight aria-hidden className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/work" aria-label="View Desnine Studio work">
              <Button variant="outline" className="border-red-200/60 hover:bg-red-50/40">See our work</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-10 lg:px-16 py-16 text-center">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we stand for</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The principles that shape our decisions, timelines, and the work you ship.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.45, delay: prefersReduced ? 0 : i * 0.03 }}
                whileHover={prefersReduced ? undefined : { y: -6, scale: 1.02 }}
                className="rounded-2xl border bg-card p-6 text-left shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon aria-hidden className="h-6 w-6 mx-auto mb-3 text-red-600" />
                <h3 className="font-medium text-lg text-center">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-6 md:px-10 lg:px-16 py-16 text-center">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">What makes us different</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We remove the noise and build systems that grow with you.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <motion.div whileHover={prefersReduced ? undefined : { y: -4 }} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">{CONTRAST.leftTitle}</h3>
              <ul className="space-y-2 text-sm">
                {CONTRAST.left.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div whileHover={prefersReduced ? undefined : { y: -4 }} className="rounded-2xl border bg-card p-6 ring-2 ring-red-500/25">
              <h3 className="text-lg font-semibold mb-3">{CONTRAST.rightTitle}</h3>
              <ul className="space-y-2 text-sm">
                {CONTRAST.right.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600/80" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-10 lg:px-16 py-16 text-center">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">A lean four‑step flow that keeps momentum high and surprises low.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {STEPS.map(({ step, title, desc, icon: Icon }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: prefersReduced ? 0.01 : 0.5, delay: prefersReduced ? 0 : i * 0.05 }}
                whileHover={prefersReduced ? undefined : { y: -6, scale: 1.02 }}
                className="rounded-2xl border bg-card p-6"
              >
                <Icon aria-hidden className="h-6 w-6 mx-auto mb-3 text-red-600" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground text-center">Step {step}</p>
                <h3 className="mt-1 font-semibold text-center">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-center">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RESULTS + TESTIMONIAL
      <section className="px-6 md:px-10 lg:px-16 py-16 text-center">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Results you can feel</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Clear milestones, fewer revisions, stronger outcomes.</p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            <motion.div whileHover={prefersReduced ? undefined : { y: -4 }} className="rounded-2xl border bg-card p-6 lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border bg-background p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">{s.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold">What clients say</h3>
              <blockquote className="mt-3 text-sm italic leading-relaxed">“{t.quote}”</blockquote>
              <div className="mt-3 text-xs text-muted-foreground">— {t.author} • {t.role}</div>
              <div className="mt-4 text-xs text-muted-foreground">Real voices, anonymized.</div>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* PARTNERSHIP */}
      <section className="px-6 md:px-10 lg:px-16 py-16">
        <motion.div {...fade} className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-card">
          <div className="relative p-8 md:p-12 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <motion.div style={{ y: yTop }} className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gradient-to-tr from-red-500/10 to-rose-500/10 blur-2xl" />
              <motion.div style={{ y: yBottom }} className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-gradient-to-br from-pink-500/10 to-red-500/10 blur-2xl" />
            </div>
            <div className="relative z-10">
              <div className="mx-auto mb-6 w-fit rounded-2xl border bg-background p-4"><Handshake aria-hidden className="h-8 w-8 text-red-600" /></div>
              <h2 className="text-3xl font-semibold tracking-tight">Built on partnership</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                We treat your brand like it’s ours: asking better questions, making braver choices, and staying after launch to keep compounding results.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs"><ShieldCheck aria-hidden className="h-3.5 w-3.5 text-red-600" /> Post‑launch support</span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs"><Clock3 aria-hidden className="h-3.5 w-3.5 text-red-600" /> Responsive comms</span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs"><Workflow aria-hidden className="h-3.5 w-3.5 text-red-600" /> Streamlined workflow</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28 text-center">
        <motion.div {...fade} className="mx-auto max-w-5xl rounded-3xl border bg-card p-10 ring-1 ring-red-500/20">
          <h2 className="text-3xl font-semibold tracking-tight">Let’s shape your story</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Whether you need a brand foundation, a conversion ready website, or packaging that sells, we’ll guide you from idea to impact.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" aria-label="Start a project with Desnine Studio"><Button className="group bg-red-600 hover:bg-red-700 text-white">Start a project<ArrowRight aria-hidden className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Button></Link>
            <Link href="/services" aria-label="Explore Desnine Studio services"><Button variant="outline" className="border-red-200/60 hover:bg-red-50/40">Explore services</Button></Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
