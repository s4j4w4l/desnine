import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ScrollTextAnimation } from "@/components/scroll-text-animation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <ScrollTextAnimation />
      {/* <CompanyShowcase /> */}
      <BentoSection count={4} />
      {/* <QuoteSection /> */}
      {/* <FeatureSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
      {/* <ContactSection /> */}
      {/* <ScrollTextAnimation /> */}
      <FooterSection />
    </main>
  );
}
