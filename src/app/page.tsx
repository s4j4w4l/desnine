import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextReveal } from "@/components/magicui/text-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      {/* <ScrollTextAnimation /> */}
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
      {/* Top filler for scrolling */}
       <TextReveal>Are you ready to stand out?</TextReveal>
       


      <FooterSection />
    </main>
  );
}
