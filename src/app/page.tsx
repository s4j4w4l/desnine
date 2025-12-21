import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextReveal } from "@/components/magicui/text-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Hero2Section } from "@/components/sections/hero2-section";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowWeWorkBentoSection } from "@/components/sections/howWeWork";
import { Hero3Section } from "@/components/sections/hero3-section";
import { Highlighter } from "@/components/magicui/Highlighter";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { BlogSection } from "@/components/BlogSection";
import { ClientFeedback } from "@/components/ClientFeedback";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      {/* <ScrollTextAnimation /> */}
      {/* <CompanyShowcase /> */}
      <Hero2Section />
      <BentoSection count={4} /> 
      {/* <Hero3Section />
      <HowWeWorkBentoSection /> */}
      
      {/* <p>
        The{" "}
        <Highlighter action="underline" color="#FF9800">
          Magic UI Highlighter
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="highlight" color="#87CEFA">
          text stand out
        </Highlighter>{" "}
        effortlessly.
      </p> */}

      {/* <BenefitsSection /> */}
      {/* <QuoteSection /> */}
      <ClientFeedback />
      {/* <FeatureSection /> */}
      {/* <BlogSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
      {/* <ContactSection /> */}
      {/* <ScrollTextAnimation /> */}
      {/* Top filler for scrolling */}
      <TextReveal>So, are you ready to stand out?</TextReveal>
       


      <FooterSection />
    </main>
  );
}
