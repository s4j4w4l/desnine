"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ContactFromCRM } from "@/components/contactfrom-crm";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);

  async function handleMiniBrief(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Fake post; replace with your endpoint if you want this mini-brief active.
    setTimeout(() => {
      setSent("Thanks! We’ll get back to you shortly.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  }

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* HERO */}
      <section className="relative w-full">
        <div className="absolute inset-0 -z-10 h-[420px] w-full rounded-b-2xl [background:radial-gradient(120%_120%_at_50%_0%,var(--background)_35%,var(--secondary)_100%)]" />
        <div className="px-6">
          <div className="mx-auto max-w-4xl pt-28 pb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium">
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

            {/* Quick actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:studio@desnine.com">
                <Button variant="outline" className="rounded-full">
                  Email Us
                </Button>
              </a>
              <a href="tel:+10000000000">
                <Button variant="ghost" className="rounded-full">
                  Call Us
                </Button>
              </a>
              <a href="#crm-form">
                <Button className="rounded-full hover:bg-white hover:text-primary">
                  Start Your Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / USPs */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold tracking-tight">Design that performs</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear creative systems that drive brand recognition and measurable results.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold tracking-tight">Web that converts</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              UX-first websites engineered for speed, clarity, and conversion.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="text-sm font-semibold tracking-tight">Partnership, not handoffs</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We collaborate closely from strategy to launch — and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* MINI BRIEF (optional) */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="mb-5 text-center">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                Tell us about your project (optional)
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer a quick start? Share a few details — or skip to the full form below.
              </p>
            </div>
            <form onSubmit={handleMiniBrief} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="mini-company">Company</Label>
                <Input id="mini-company" name="company" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mini-email">Email *</Label>
                <Input id="mini-email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="mini-goal">What do you need?</Label>
                <Textarea id="mini-goal" name="goal" rows={4} placeholder="Brand, website, campaign… brief us here." />
              </div>
              <div className="md:col-span-2 flex items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your inquiry.
                </p>
                <Button type="submit" disabled={sending} className="rounded-full">
                  {sending ? "Sending…" : "Send quick brief"}
                </Button>
              </div>
            </form>
            {sent && <p className="mt-3 text-center text-sm text-primary">{sent}</p>}
          </div>
        </div>
      </section>

      {/* FULL CRM FORM (your component) */}
      <section id="crm-form" className="px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <ContactFromCRM />
        </div>
      </section>

      {/* FAQ (CSS-only; no extra libs) */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary text-center">
            Frequently Asked Questions
          </h3>
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card/40">
            <details className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium">What services do you offer?</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Branding & identity, web design & development, design systems, packaging,
                and ongoing creative support. We also partner on content and production.
              </p>
            </details>
            <details className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium">What’s your typical timeline?</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Small engagements can be 2–4 weeks. Brand + site builds are commonly 6–12 weeks,
                depending on scope and content readiness.
              </p>
            </details>
            <details className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium">Do you work with startups & enterprise?</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Yes — from seed-stage to global teams. Our process adapts to your pace and constraints.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative px-6 pb-16">
        <div className="absolute inset-x-0 bottom-6 -z-10">
          <div className="mx-auto h-24 w-[85%] max-w-5xl rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 blur-3xl opacity-20" />
        </div>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 p-8 text-center">
          <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
            Ready to get started?
          </h4>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Share your goals — we’ll propose the sharpest path from idea to launch.
          </p>
          <div className="mt-6 flex justify-center">
            <a href="/contact">
              <Button className="rounded-full px-8 py-3 hover:bg-white hover:text-primary">
                Talk to the team
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
