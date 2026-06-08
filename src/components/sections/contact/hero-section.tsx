"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const wordColors = [
  "text-zinc-950 dark:text-white",
  "text-zinc-500 dark:text-zinc-400",
  "text-[#B91C1C] dark:text-[#EF4444]",
  "text-zinc-950 dark:text-white",
];

export function ContactHeroSection() {
  const { t } = useLang();
  const words = t.contactHero.words;

  return (
    <section className="relative w-full">
      <div className="px-6">
        <div className="mx-auto max-w-4xl pb-16 pt-10 text-center md:pt-14">
          <motion.span
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            {t.contactHero.badge}
          </motion.span>

          <motion.h1
            className="mt-6 text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {words.map((text, i) => (
              <motion.span
                key={`${text}-${i}`}
                className={`inline-block ${wordColors[i]}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
                {i !== words.length - 1 && " "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              {t.contactHero.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
