import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <CompanyShowcase />
      <BentoSection count={4} />
      {/* <QuoteSection /> */}
      {/* <FeatureSection /> */}
      <GrowthSection />
      {/* <PricingSection /> */}
      <TestimonialSection />
      {/* <FAQSection /> */}
      <CTASection />
      {/* <ContactSection /> */}
      <FooterSection />
    </main>
  );
}
