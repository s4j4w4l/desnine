"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-4xl px-10 space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-muted-foreground">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Questions? Answered<span style={{ color: DESNINE_RED }}>.</span>
          </h2>
        </div>

        {/* List */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-primary">{item.q}</span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: DESNINE_RED }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
