"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SubscriptionHeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 py-28 md:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_35%,var(--secondary)_100%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex h-10 items-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Sparkles className="h-4 w-4 text-[#B91C1C] dark:text-[#EF4444]" />
          Design Subscription
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[clamp(42px,7vw,96px)] font-bold leading-[0.92] tracking-[-0.07em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            {
              text: "Subscription",
              className: "text-zinc-950 dark:text-white",
              breakAfter: false,
            },
            {
              text: "Design",
              className: "text-zinc-500 dark:text-zinc-400",
              breakAfter: true,
            },
            {
              text: "That",
              className: "text-zinc-950 dark:text-white",
              breakAfter: false,
            },
            {
              text: "Drives Results",
              className: "text-[#B91C1C] dark:text-[#EF4444]",
              breakAfter: false,
            },
          ].map((word, i) => (
            <span key={word.text}>
              <motion.span
                className={`inline-block ${word.className}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 42,
                    filter: "blur(8px)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  },
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word.text}
              </motion.span>
              {word.breakAfter ? <br /> : "\u00A0"}
            </span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-7 max-w-2xl text-balance text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A modern design subscription for teams that need consistent,
          high-quality design without long contracts or unnecessary friction.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#B91C1C] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#991B1B]"
          >
            Get in Touch
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent"
          >
            See Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}