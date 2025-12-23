"use client";

import { motion } from "framer-motion";

const DESNINE_RED = "#B42B25";

const PROCESS = [
  {
    title: "DISCOVERY + DIRECTION",
    desc: "We learn your goals, your audience, and what “success” means for you.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1 5v4.2l3 3-.9.9L11 11V7h2Z"
        />
      </svg>
    ),
  },
  {
    title: "DESIGN SYSTEM",
    desc: "We create a clean visual style: layout, typography, and brand consistency.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16v4H4V5Zm0 6h10v8H4v-8Zm12 0h4v8h-4v-8Z"
        />
      </svg>
    ),
  },
  {
    title: "BUILD + IMPLEMENT",
    desc: "We design and build with detail responsive, fast, and polished.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6h18v12H3V6Zm2 2v8h14V8H5Zm2 2h4v4H7v-4Z"
        />
      </svg>
    ),
  },
  {
    title: "REVISIONS + QA",
    desc: "You give feedback. We refine. Then we test everything before launch.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 00-7.07 17.07l1.41-1.41A8 8 0 1112 20v2A10 10 0 0012 2Zm-1 5h2v6h-2V7Zm0 8h2v2h-2v-2Z"
        />
      </svg>
    ),
  },
  {
    title: "LAUNCH + SUPPORT",
    desc: "We publish, hand over files, and stay available for updates if needed.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Zm0 11-8-4V7l8 4 8-4v9l-8 4Z"
        />
      </svg>
    ),
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-10 py-16 lg:py-24">
        {/* Header (transparent background, works in light/dark) */}
        <div className="relative pb-10">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-[0.95]">
                WHAT MAKES
                <br />
                US UNIQUE
                <span style={{ color: DESNINE_RED }}>.</span>
              </h2>

              {/* Script-like accent word */}
              <div className="-mt-6 md:-mt-8">
                <span
                  className="text-3xl md:text-4xl font-semibold italic"
                  style={{ color: DESNINE_RED }}
                >
                  process
                </span>
              </div>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A simple, clear flow that keeps things moving; no confusion, no delays.
              </p>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-border/60" />
        </div>

        {/* List */}
        <div className="divide-y divide-border/60">
          {PROCESS.map((item, i) => (
            <motion.div
              key={item.title}
              className="py-10 flex items-start gap-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Icon (subtle, respects theme) */}
              <div className="mt-1 text-muted-foreground/70">{item.icon}</div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>

              {/* Tiny accent dot (optional) */}
              <div
                className="hidden md:block mt-2 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: `${DESNINE_RED}55` }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
