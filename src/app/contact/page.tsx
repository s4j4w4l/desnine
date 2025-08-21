"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  // ---- SETTINGS ----
  const DESTINATION_URL = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "a3e22b83-6e31-445a-acd0-336cbe81c329"; // your key
  const REDIRECT_AFTER = "/thank-you"; // set your thank-you route

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

      // Web3Forms required key
      fd.append("access_key", ACCESS_KEY);

      // Nice-to-have email meta
      if (!fd.get("subject")) fd.append("subject", "New Contact Submission from Desnine");
      if (!fd.get("from_name")) fd.append("from_name", "Desnine Contact Page");

      // Optional: server-side redirect via Web3Forms
      fd.append("redirect", REDIRECT_AFTER);

      const res = await fetch(DESTINATION_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
        // client-side redirect as fallback (in case redirect key is ignored)
        window.location.href = REDIRECT_AFTER;
      } else {
        setResult(data.message ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
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
              <a href="#contact-form">
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

      {/* FULL CONTACT FORM (captures ALL CRM fields; no embed visible) */}
      <section id="contact-form" className="w-full px-6 pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="mb-5 text-center">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below — we’ll follow up right away.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service Needed */}
                <div className="space-y-2">
                  <Label htmlFor="serviceNeeded">Service Needed *</Label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-[3px]"
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

              {/* Hidden extras for Web3Forms */}
              <input type="hidden" name="subject" value="New Contact Submission from Desnine" />
              <input type="hidden" name="from_name" value="Desnine Contact Page" />
              {/* redirect is also appended in code, but adding here is fine too */}
              <input type="hidden" name="redirect" value={REDIRECT_AFTER} />

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full rounded-full hover:bg-white hover:text-primary border border-white/10"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
                {result && (
                  <p className="mt-4 text-center text-sm">{result}</p>
                )}
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
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card/40">
            <details className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium">What services do you offer?</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Branding & identity, web design & development, design systems, packaging, and ongoing creative support.
              </p>
            </details>
            <details className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-sm font-medium">What’s your typical timeline?</span>
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Small engagements can be 2–4 weeks. Brand + site builds are commonly 6–12 weeks, depending on scope and content readiness.
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
            <a href="#contact-form" className="inline-block">
              <Button className="rounded-full px-8 py-3 hover:bg-white hover:text-primary">
                Send Message
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
