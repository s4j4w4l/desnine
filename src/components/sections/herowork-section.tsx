"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function HeroWorkSection() {
  const { herowork } = siteConfig;
  const titleWords = herowork.title.split(" ");

  return (
    <section id="herowork" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-10 px-6 py-16 md:py-24">
        <motion.h2
          className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={
                  word.toLowerCase() === "work"
                    ? "text-[#B91C1C] dark:text-[#EF4444]"
                    : i % 3 === 1
                    ? "text-zinc-500 dark:text-zinc-400"
                    : "text-zinc-950 dark:text-white"
                }
              >
                {word}
              </span>
              {i !== titleWords.length - 1 && " "}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className="flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
            {herowork.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
