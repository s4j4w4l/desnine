"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "@/components/sections/contact/accordion-item";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "Our Studio offers branding & identity, web design & development, design systems, packaging, and ongoing creative support. We also partner on content and production.",
    },
    {
      q: "How does Desnine process work?",
      a: "We start with a discovery phase to understand your business and audience, followed by research, concept development, design refinement, and final asset delivery.",
    },
    {
      q: "What is the typical project timeline?",
      a: "Timelines vary by project scope, but a full branding engagement typically takes 4–6 weeks from kickoff to final deliverables.",
    },
    {
      q: "How does the Monthly Retainer work?",
      a: "We align on the scope of your project ahead of kickoff and prepare a transparent timeline and design plan based on your needs. It doesn't matter whether it's branding, website design, UI/UX, or marketing materials, it's all included.",
    },
    {
      q: "Do you offer logo design only?",
      a: "Yes, we can create a standalone logo, but we recommend a comprehensive visual identity system for consistent application across touchpoints.",
    },
    {
      q: "What if I'm not happy with the work?",
      a: "At Desnine Studio, we keep refining until it feels right. Design is subjective, and sometimes your vision evolves, that’s normal. We collaborate closely, make thoughtful revisions, and bridge any taste gaps to ensure the final result matches your expectations perfectly.",
    },
    {
      q: "Is there a limit to how much I can ask for?",
      a: "Not really, you’re free to ask for anything you need. We’ll always be transparent about what’s included in your plan and what falls outside the original scope. For custom projects, any additional requests can be handled through a change order or by adding a retainer option to keep everything smooth and organized.",
    },
  ];

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
          (FAQs)
        </motion.p>

        <motion.h3
          className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            {
              text: "Frequently",
              className: "text-zinc-950 dark:text-white",
            },
            {
              text: "Asked",
              className: "text-zinc-500 dark:text-zinc-400",
            },
            {
              text: "Questions",
              className: "text-[#B91C1C] dark:text-[#EF4444]",
            },
          ].map((word, i) => (
            <motion.span
              key={`${word.text}-${i}`}
              className={`inline-block ${word.className}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
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
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word.text}
              {i !== 2 && "\u00A0"}
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
            Clear answers about our process, timelines, services, and how we
            work with you from the first idea to final delivery.
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
        {faqs.map((f, i) => (
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