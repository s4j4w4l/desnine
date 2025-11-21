"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormSection() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("fullName") || ""),
      companyName: String(fd.get("companyName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      serviceNeeded: String(fd.get("serviceNeeded") || ""),
      budget: String(fd.get("budget") || ""), // <-- STILL INCLUDED
      timeline: String(fd.get("timeline") || ""),
      projectDetails: String(fd.get("projectDetails") || ""),
    };

    if (!payload.fullName || !payload.email || !payload.serviceNeeded || !payload.projectDetails) {
      setResult("Please fill all required fields.");
      return;
    }

    try {
      setSending(true);
      setResult("Sending...");

      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setResult(data?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setResult("Form submitted successfully!");
      form.reset();
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
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
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" type="text" required placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" type="text" placeholder="Enter your company name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceNeeded">Service Needed *</Label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="AI Automation & Bots">AI Automation & Bots</option>
                  <option value="Smart Analytics">Smart Analytics</option>
                  <option value="Branding & Identity">Branding & Identity</option>
                  <option value="Print & Packaging Design">Print & Packaging Design</option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Advertising Design">Advertising Design</option>
                  <option value="Content Creation & Visual Support">Content Creation & Visual Support</option>
                  <option value="Industry-Specific Design">Industry-Specific Design</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* 🔥 Hidden Budget Field (still works, still submits) */}
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="budget">Estimated Budget (optional)</Label>
              <select
                id="budget"
                name="budget"
                className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
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
                className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
              >
                <option value="">Select a window</option>
                <option value="ASAP">ASAP</option>
                <option value="2–4 weeks">2–4 weeks</option>
                <option value="4–8 weeks">4–8 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">Tell Us About Your Project *</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                rows={6}
                required
                placeholder="Describe your goals, requirements, timeline..."
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

              <p className="mt-2 text-xs text-center text-muted-foreground leading-relaxed">
                By submitting this form, you consent to Desnine storing your information to respond to your inquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
