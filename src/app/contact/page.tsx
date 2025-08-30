"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ShieldCheck, Users, Clock } from "lucide-react";

/** ------- Small Accordion Item (single-open) ------- */
type AccordionItemProps = {
  index: number;
  openIndex: number | null;
  setOpenIndex: (n: number | null) => void;
  question: string;
  answer: string;
};

function AccordionItem({
  index,
  openIndex,
  setOpenIndex,
  question,
  answer,
}: AccordionItemProps) {
  const open = openIndex === index;

  return (
    <div className="p-5">
      <button
        type="button"
        onClick={() => setOpenIndex(open ? null : index)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium">{question}</span>
        <span
          className={`ml-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Animated container: 0fr -> 1fr for height, with fade/slide */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  // ---- SETTINGS ----
  const DESTINATION_URL = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "a3e22b83-6e31-445a-acd0-336cbe81c329"; // your key
  const REDIRECT_AFTER = "/thank-you";

  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setResult("Sending...");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Web3Forms required & meta
      fd.append("access_key", ACCESS_KEY);
      if (!fd.get("subject")) fd.append("subject", "New Contact Submission from Desnine");
      if (!fd.get("from_name")) fd.append("from_name", "Desnine Contact Page");
      fd.append("redirect", REDIRECT_AFTER);

      const res = await fetch(DESTINATION_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
        window.location.href = REDIRECT_AFTER;
      } else {
        setResult(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  // FAQ data + single-open state
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
    <main
      className={`
        relative isolate flex flex-col min-h-screen w-full

        /* Background lives on <main>, covers the very top, and moves with scroll */
        bg-[radial-gradient(1200px_800px_at_50%_-160px,rgba(255,255,255,0.09),transparent_70%),linear-gradient(to_bottom,var(--secondary)_0%,var(--background)_40%)]
        bg-top bg-no-repeat bg-repeat-y

        /* If your navbar is fixed, pull the background behind it and offset content */
        -mt-16 pt-16 md:-mt-20 md:pt-20

        /* Remove any accidental spacing that could create a gap */
        m-0
      `}
    >
      {/* 1px shim to defeat subpixel AA seams under some GPUs */}
      <div aria-hidden className="-mt-px h-px w-full bg-transparent" />

      {/* HERO */}
      <section className="relative w-full">
        <div className="px-6">
          <div className="mx-auto max-w-4xl pt-10 md:pt-14 pb-16 text-center">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium">
              <span className="inline-block size-1.5 rounded-full bg-primary" />
              Get in touch
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tighter text-primary">
              Let’s Build Something Remarkable
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed tracking-tight text-balance">
              Have a bold idea or need ongoing creative support? Desnine is a creative studio
              crafting brands, websites, and visual systems that connect and convert.
            </p>

            {/* TRUST ICONS */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center max-sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <p className="mt-2 text-xs md:text-sm font-medium">Trusted Quality</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-primary" />
                <p className="mt-2 text-xs md:text-sm font-medium">Client-Focused</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-primary" />
                <p className="mt-2 text-xs md:text-sm font-medium">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="w-full px-6 pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="mb-5 text-center">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below, we’ll get back within 24–48 hours.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" type="text" placeholder="Enter your full name" required />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" name="companyName" type="text" placeholder="Enter your company name" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                {/* Service Needed */}
                <div className="space-y-2">
                  <Label htmlFor="serviceNeeded">Service Needed *</Label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-[3px]"
                  >
                    <option value="">Select a service</option>
                    <option value="seo-optimization">SEO Optimization</option>
                    <option value="website-design-development">Website Design & Development</option>
                    <option value="ai-automation-bots">AI Automation & Bots</option>
                    <option value="smart-analytics">Smart Analytics</option>
                    <option value="branding-identity">Branding & Identity</option>
                    <option value="print-packaging-design">Print & Packaging Design</option>
                    <option value="digital-design">Digital Design</option>
                    <option value="advertising-design">Advertising Design</option>
                    <option value="content-creation">Content Creation & Visual Support</option>
                    <option value="industry-specific-design">Industry-Specific Design</option>
                    <option value="social-media-management">Social Media Management</option>
                    <option value="multiple-services">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (optional)</Label>
                  <select
                    id="budget"
                    name="budget"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] md:text-sm focus-visible:ring-[3px]"
                  >
                    <option value="">Select a range</option>
                    <option value="$3k–$5k">$3k–$5k</option>
                    <option value="$5k–$10k">$5k–$10k</option>
                    <option value="$10k+">$10k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Ideal Timeline (optional)</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] md:text-sm focus-visible:ring-[3px]"
                  >
                    <option value="">Select a window</option>
                    <option value="ASAP">ASAP</option>
                    <option value="2–4 weeks">2–4 weeks</option>
                    <option value="4–8 weeks">4–8 weeks</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="projectDetails">Tell Us About Your Project *</Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Describe your goals, requirements, timeline, and any specific features you need..."
                  rows={6}
                  required
                  className="min-h-[120px]"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full rounded-full hover:bg-white hover:text-primary border border-white/10"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                {result && <p className="mt-4 text-center text-sm">{result}</p>}

                {/* Disclaimer with small space */}
                <p className="mt-2 text-xs text-center text-muted-foreground leading-relaxed">
                  By submitting this form, you consent to Desnine storing your information to respond to
                  your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      <FooterSection />
    </main>
  );
}
