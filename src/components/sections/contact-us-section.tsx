"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";

const wordColors = [
  "text-zinc-950 dark:text-white",
  "text-zinc-500 dark:text-zinc-400",
  "text-[#B91C1C] dark:text-[#EF4444]",
  "text-zinc-950 dark:text-white",
  "text-[#B91C1C] dark:text-[#EF4444]",
];

export function ContactUsSection() {
  const { t } = useLang();
  const words = t.contactUs.words;

  return (
    <section
      id="contact-us-section"
      className="group w-full border-t border-border bg-background px-6 py-24 transition-transform duration-300 hover:bg-muted/30 md:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
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
        </motion.h2>

        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
            {t.contactUs.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button className="rounded-xl px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary">
              {t.contactUs.cta}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
