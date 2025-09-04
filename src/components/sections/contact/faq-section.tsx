"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/sections/contact/accordion-item";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What services do you offer?", a: "Our Studio offers branding & identity, web design & development, design systems, packaging, and ongoing creative support. We also partner on content and production." },
    { q: "How does your branding process work?", a: "We start with a discovery phase to understand your business and audience, followed by research, concept development, design refinement, and final asset delivery." },
    { q: "What is the typical project timeline?", a: "Timelines vary by project scope, but a full branding engagement typically takes 4–6 weeks from kickoff to final deliverables." },
    { q: "How much does branding cost?", a: "Our pricing is customized based on project scope and deliverables. Brand packages start at $3,000. Contact us for a detailed quote tailored to your needs." },
    { q: "Do you offer logo design only?", a: "Yes, we can create a standalone logo, but we recommend a comprehensive visual identity system for consistent application across touchpoints." },
    { q: "Will I receive brand guidelines?", a: "Every project includes a detailed brand guidelines document covering logo usage, typography, color palette, and tone of voice." },
    { q: "How do you measure the success of branding?", a: "We track metrics like brand awareness, website traffic, social engagement, and customer perception to evaluate the impact of our branding efforts." },
  ];

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary text-center">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="mx-auto mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/40">
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
      </div>
    </section>
  );
}
