"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    id: "01",
    title: "Convert Focused",
    description:
      "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
    icon: "/Benefits/signal-status%20(2).png",
  },
  {
    id: "02",
    title: "Quick Launch Or Retainer",
    description:
      "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
    icon: "/Benefits/click.png",
  },
  {
    id: "03",
    title: "Real-Time Collaboration",
    description:
      "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
    icon: "/Benefits/clock%20(1).png",
  },
  {
    id: "04",
    title: "Complete Creative Solution",
    description:
      "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
    icon: "/Benefits/lightbulb.png",
  },
  {
    id: "05",
    title: "Transparent Pricing",
    description:
      "Fixed monthly rates or clear project fees. No surprise charges, no scope creep. You know exactly what you're investing.",
    icon: "/Benefits/price-tag.png",
  },
  {
    id: "06",
    title: "Real Human Connection",
    description:
      "A streamlined communication system keeps every decision aligned with your vision. Real conversations with real people, not just project management tools.",
    icon: "/Benefits/social-network.png",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="w-full border-t border-border bg-background"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10 lg:px-16 xl:px-0 py-16 lg:py-24">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-accent px-4 text-[11px] sm:text-xs font-medium text-foreground">
            <span className="text-sm">☰</span>
            <span>BENEFITS</span>
          </p>

          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-primary">
            Because Your Success Matters
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-4 pt-6 grid-cols-2 md:grid-cols-3">
          {BENEFITS.map((item, i) => (
            <motion.article
              key={item.id}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-4 sm:p-6 text-sm shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: i * 0.12,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* ID */}
              <div className="mb-3 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-destructive">
                / {item.id}
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-foreground/90 shadow-inner">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[11px] sm:text-[13px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
