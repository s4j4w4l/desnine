"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/sections/contact/accordion-item";
import { useLang } from "@/contexts/LanguageContext";

const wordColors = [
  "text-zinc-950 dark:text-white",
  "text-zinc-500 dark:text-zinc-400",
  "text-[#B91C1C] dark:text-[#EF4444]",
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLang();
  const words = t.contactFaq.words;

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-4 text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t.contactFaq.label}
        </motion.p>

        <motion.h3
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
              {i !== words.length - 1 && " "}
            </motion.span>
          ))}
        </motion.h3>

        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
            {t.contactFaq.subtitle}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/40"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {t.contactFaq.items.map((f, i) => (
          <AccordionItem
            key={i}
            index={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question={f.q}
            answer={f.a}
          />
        ))}
      </motion.div>
    </section>
  );
}
