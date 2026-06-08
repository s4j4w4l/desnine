"use client";

import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const wordColors = [
  "text-zinc-950 dark:text-white",
  "text-zinc-500 dark:text-zinc-400",
  "text-[#B91C1C] dark:text-[#EF4444]",
  "text-zinc-950 dark:text-white",
  "text-[#B91C1C] dark:text-[#EF4444]",
];

export function ServiceHeroSection() {
  const { servicehero } = siteConfig;
  const { t } = useLang();
  const words = t.serviceHero.words;

  return (
    <section id="servicehero" className="relative w-full">
      <div className="relative flex w-full flex-col items-center px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
          <p className="flex h-8 items-center gap-2 rounded-full border border-border bg-accent px-3 text-sm">
            {servicehero.badgeIcon}
            {servicehero.badge}
          </p>

          <div className="flex flex-col items-center justify-center gap-5">
            <motion.h1
              className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
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
              className="flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
                {t.serviceHero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <HeroVideoSection />
    </section>
  );
}
