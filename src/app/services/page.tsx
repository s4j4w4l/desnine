import { BentoSection } from "@/components/sections/bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { Metadata } from "next";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Design Studio Services - Branding, Web Design, SEO & AI Automation | Desnine",
  description: "Desnine is an independent, multi-disciplinary design studio offering branding & identity design, website design & development, SEO optimization, AI automation, and print & packaging design. Clear strategy, clean execution.",
  keywords: [
    "design studio services",
    "SEO optimization services",
    "website design services",
    "web development services",
    "AI automation services",
    "branding services",
    "logo design services",
    "print design services",
    "packaging design services",
    "digital design services",
    "advertising design services",
    "content creation services",
    "social media management services",
    "smart analytics services",
    "ecommerce website design",
    "lead generation services",
    "conversion optimization",
    "business growth marketing",
  ],
  openGraph: {
    title: "Design Studio Services - Branding, Web Design, SEO & AI Automation",
    description: "Desnine is an independent, multi-disciplinary design studio. Branding, web design, SEO, AI automation, and more, built for brands that want to stand out.",
  },
};

export default function ServicePage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <ServiceHeroSection />
      <BentoSection />
      <ContactUsSection />
      
      <FooterSection />

    </main>
  );
}
