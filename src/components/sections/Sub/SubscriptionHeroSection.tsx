"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const wordBreaks = [false, true, false, false];

export function SubscriptionHeroSection() {
  const { t } = useLang();
  const words = t.sub.words;

  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background px-6 py-28 md:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_35%,var(--secondary)_100%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          className="mb-6 inline-flex h-10 items-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Sparkles className="h-4 w-4 text-[#B91C1C] dark:text-[#EF4444]" />
          {t.sub.badge}
        </motion.div>

        <motion.h1
          className="text-[clamp(42px,7vw,96px)] font-bold leading-[0.92] tracking-[-0.07em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {words.map((text, i) => {
            const colors = [
              "text-zinc-950 dark:text-white",
              "text-zinc-500 dark:text-zinc-400",
              "text-zinc-950 dark:text-white",
              "text-[#B91C1C] dark:text-[#EF4444]",
            ];
            return (
              <span key={text}>
                <motion.span
                  className={`inline-block ${colors[i]}`}
                  variants={{
                    hidden: { opacity: 0, y: 42, filter: "blur(8px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {text}
                </motion.span>
                {wordBreaks[i] ? <br /> : " "}
              </span>
            );
          })}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-balance text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.sub.description}
        </motion.p>

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
            {t.sub.getInTouch}
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent"
          >
            {t.sub.seePricing}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
