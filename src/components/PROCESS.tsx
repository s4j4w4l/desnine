"use client";

import { motion } from "framer-motion";

const DESNINE_RED = "#B42B25";

const PROCESS = [
  {
    title: "DISCOVERY + DIRECTION",
    desc: "We learn your goals, your audience, and what success looks like.",
  },
  {
    title: "DESIGN SYSTEM",
    desc: "We set the look and rules: layout, type, spacing, and consistency.",
  },
  {
    title: "BUILD + IMPLEMENT",
    desc: "We build it responsive, fast, and polished across devices.",
  },
  {
    title: "REVISIONS + QA",
    desc: "You review, we refine, then we test everything before launch.",
  },
  {
    title: "LAUNCH + SUPPORT",
    desc: "We go live, hand over files, and stay available if you need updates.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-10 py-16 lg:py-24">
        {/* Header */}
        <div className="pb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Process
              <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: DESNINE_RED }} />
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
              Clear steps.
              <br />
              Clean delivery<span style={{ color: DESNINE_RED }}>.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A simple flow that keeps everything moving—no confusion, no delays.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-border/60" />
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {PROCESS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group rounded-2xl border border-border bg-transparent p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    {/* Number */}
                    <span
                      className="text-xs font-semibold tracking-[0.22em]"
                      style={{ color: DESNINE_RED }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>

                {/* Accent */}
                <span
                  className="mt-2 h-2.5 w-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: DESNINE_RED }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
