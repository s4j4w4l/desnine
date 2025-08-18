"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ContactFromCRM } from "@/components/contactfrom-crm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    serviceNeeded: "",
    projectDetails: "",
    email: "",
    phone: "",
  });

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "a3e22b83-6e31-445a-acd0-336cbe81c329");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="relative flex flex-col items-center w-full px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-[400px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
          </div>
          <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-8 items-center justify-center">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </p>
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-balance text-center text-primary">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
                Got a bold idea, a creative challenge, or just want to say hi? We're all ears. Wheater you're looking to biolf a brand from scratch or support with ongoing design work, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactFromCRM />

      <FooterSection />
    </main>
  );
}      
{/* 
      <section className="w-full py-4 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceNeeded">Service Needed *</Label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-[3px]"
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

             

              <div className="space-y-2">
                <Label htmlFor="projectDetails">Tell Us About Your Project *</Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Describe your project goals, requirements, timeline, and any specific features you need..."
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="min-h-[120px]"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-secondary text-primary-foreground dark:text-secondary-foreground hover:bg-secondary/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                >
                  Send Message
                </Button>
                {result && (
                  <p className="mt-4 text-center text-sm">
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section> }

      <ContactFromCRM />

      <FooterSection />
    </main>
  );
*/}
