"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BannerHeading() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Decorative layers (theme-aware) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-red-600/70 via-red-600/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/40 dark:to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 py-12 md:py-16 text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          Articles
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 text-4xl md:text-6xl font-extrabold leading-[1.1] text-foreground"
        >
          <span className="relative inline-block">
            Articles &amp; Resources
            {/* animated underline under the H1 */}
            <motion.span
              aria-hidden
              className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-red-500/80"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={reduceMotion ? false : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Deep-dives and practical playbooks on branding, web, and AI.
        </p>
      </div>
    </section>
  );
}
