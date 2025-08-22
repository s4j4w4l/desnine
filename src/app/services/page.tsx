import { BentoSection } from "@/components/sections/bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { Metadata } from "next";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, Web Design, AI Automation & Branding | Desnine",
  description: "Comprehensive digital marketing services including SEO optimization, website design & development, AI automation, branding & identity design, print & packaging design. Transform your business with proven results.",
  keywords: [
    "digital marketing services",
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
    title: "Digital Marketing Services - SEO, Web Design, AI Automation & Branding",
    description: "Transform your business with our comprehensive digital marketing services. Expert SEO, web design, AI automation, branding & more. Get proven results and grow your business.",
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
