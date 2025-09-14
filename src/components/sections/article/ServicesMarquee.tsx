"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/articlesData";

export default function ServicesMarquee() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30">
      {/* edge fades (theme background token) */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[hsl(var(--background))] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[hsl(var(--background))] to-transparent pointer-events-none" />
      <div className="py-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex items-center gap-8 pr-8">
              {SERVICES.map((s) => (
                <li key={`${s}-${dup}`} className="text-xs md:text-sm uppercase tracking-wide">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
