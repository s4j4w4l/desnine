"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const DESNINE_RED = "#B42B25";

const FAQS = [
  {
    q: "What does Desnine Studio specialize in?",
    a: "Desnine Studio focuses on clean, modern design for websites and brands. We help businesses look professional, clear, and trustworthy online.",
  },
  {
    q: "Can I start with a small project?",
    a: "Yes. Many clients start small and grow over time. We’re happy to work together step by step.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 1–4 weeks, depending on what’s needed. We agree on timelines before starting.",
  },
  {
    q: "Do you work with existing brands and websites?",
    a: "Yes. We can improve or update what you already have without starting from scratch.",
  },
  {
    q: "How do we work together?",
    a: "We start by understanding your goal, then move step by step with clear communication and regular updates.",
  },
  {
    q: "Is Desnine Studio a good fit for my business?",
    a: "If you want clear design, honest communication, and a smooth process, we’ll work well together.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="w-full py-12">
      <div className="mx-auto max-w-4xl px-10 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Questions? Answered<span style={{ color: DESNINE_RED }}>.</span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [-12 + i * 4, 12 - i * 4]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.15 + i * 0.05, 1],
              [0, 1, 1]
            );

            return (
              <motion.div
                key={item.q}
                style={{ y, opacity }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="rounded-xl border border-border overflow-hidden bg-background"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-primary">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl font-bold"
                    style={{ color: DESNINE_RED }}
                  >
                    {isOpen ? "–" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.05 },
                      }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
