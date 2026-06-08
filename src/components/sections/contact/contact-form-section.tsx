"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/contexts/LanguageContext";

// English service option values (sent to backend — always English for consistency)
const SERVICE_VALUES = [
  "SEO Optimization",
  "Website Design & Development",
  "AI Automation & Bots",
  "Smart Analytics",
  "Branding & Identity",
  "Print & Packaging Design",
  "Digital Design",
  "Advertising Design",
  "Content Creation & Visual Support",
  "Industry-Specific Design",
  "Social Media Management",
  "Multiple Services",
  "Other",
] as const;

const TIMELINE_VALUES = ["ASAP", "2–4 weeks", "4–8 weeks", "Flexible"] as const;

export function ContactFormSection() {
  const { t } = useLang();
  const cf = t.contactForm;
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
      budget: String(fd.get("budget") || ""),
      timeline: String(fd.get("timeline") || ""),
      projectDetails: String(fd.get("projectDetails") || ""),
    };

    if (!payload.fullName || !payload.email || !payload.serviceNeeded || !payload.projectDetails) {
      setResult(cf.errorRequired);
      return;
    }

    try {
      setSending(true);
      setResult(cf.sending);

      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setResult(data?.message ?? cf.unknownError);
        return;
      }

      setResult(cf.successMsg);
      form.reset();
    } catch {
      setResult(cf.networkError);
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
              {cf.heading}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {cf.subtitle}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">{cf.fullName}</Label>
                <Input id="fullName" name="fullName" type="text" required placeholder={cf.fullNamePlaceholder} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">{cf.companyName}</Label>
                <Input id="companyName" name="companyName" type="text" placeholder={cf.companyNamePlaceholder} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{cf.emailAddress}</Label>
                <Input id="email" name="email" type="email" required placeholder={cf.emailPlaceholder} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">{cf.phoneNumber}</Label>
                <Input id="phone" name="phone" type="tel" placeholder={cf.phonePlaceholder} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceNeeded">{cf.serviceNeeded}</Label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
                >
                  <option value="">{cf.selectService}</option>
                  {SERVICE_VALUES.map((val, i) => (
                    <option key={val} value={val}>{cf.services[i]}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hidden Budget Field (still works, still submits) */}
            <div className="hidden" aria-hidden="true">
              <select id="budget" name="budget" className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm">
                <option value="">Select a range</option>
                <option value="$3k–$5k">$3k–$5k</option>
                <option value="$5k–$10k">$5k–$10k</option>
                <option value="$10k+">$10k+</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">{cf.timeline}</Label>
              <select
                id="timeline"
                name="timeline"
                className="border-input flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs md:text-sm"
              >
                <option value="">{cf.selectWindow}</option>
                {TIMELINE_VALUES.map((val, i) => (
                  <option key={val} value={val}>{cf.timelineOptions[i]}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">{cf.projectDetails}</Label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                rows={6}
                required
                placeholder={cf.projectDetailsPlaceholder}
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
                {sending ? cf.sending : cf.sendMessage}
              </Button>

              {result && <p className="mt-4 text-center text-sm">{result}</p>}

              <p className="mt-2 text-xs text-center text-muted-foreground leading-relaxed">
                {cf.consent}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
