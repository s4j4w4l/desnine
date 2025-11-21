"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/sections/contact/accordion-item";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What services do you offer?", a: "Our Studio offers branding & identity, web design & development, design systems, packaging, and ongoing creative support. We also partner on content and production." },
    { q: "How does Desnine process work?", a: "We start with a discovery phase to understand your business and audience, followed by research, concept development, design refinement, and final asset delivery." },
    { q: "What is the typical project timeline?", a: "Timelines vary by project scope, but a full branding engagement typically takes 4–6 weeks from kickoff to final deliverables." },
    { q: "How does the Monthly Retainer work?", a: "We align on the scope of your project ahead of kickoff and prepare a transparent timeline and design plan based on your needs. It doesn't matter whether it's branding, website design, UI/UX, or marketing materials, it's all included." },
    { q: "Do you offer logo design only?", a: "Yes, we can create a standalone logo, but we recommend a comprehensive visual identity system for consistent application across touchpoints." },
    { q: "What if I'm not happy with the work?", a: "At Desnine Studio, we keep refining until it feels right. Design is subjective, and sometimes your vision evolves, that’s normal. We collaborate closely, make thoughtful revisions, and bridge any taste gaps to ensure the final result matches your expectations perfectly." },
    { q: "Is there a limit to how much I can ask for?", a: "Not really, you’re free to ask for anything you need. We’ll always be transparent about what’s included in your plan and what falls outside the original scope. For custom projects, any additional requests can be handled through a change order or by adding a retainer option to keep everything smooth and organized." },
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
