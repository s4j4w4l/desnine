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
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/cta-section";
import { ClientFeedback } from "@/components/ClientFeedback";
import { DesnineAdvantageSection } from "@/components/ADVANTAGES";
import { ProcessSection } from "@/components/PROCESS";


import { FAQSection } from "@/components/FAQ";
import Desnine3DRotatingBG from "@/components/ Desnine3DRotatingBGProps ";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import HeroScrollTransition from "@/components/ui/HeroScrollTransition";
import { BadBrandingSection } from "@/components/sections/CostOfBadBranding";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsBarSection } from "@/components/sections/StatsSection";
import RelatedProjectsSection from "@/components/sections/related-projects-section";
import HomeProjectsSection from "@/components/sections/home-work-section";
import { TestimonialCard } from "@/components/testimonial-scroll";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      
      {/* <HeroScrollTransition>
        <HeroSection />
      </HeroScrollTransition> */}

      <HeroSection />

      {/* <Desnine3DRotatingBG logoSrc="/D.png" /> */}
      


      {/* <ScrollTextAnimation /> */}
      {/* <CompanyShowcase /> */}

      <ClientFeedback />



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
      
      {/* <TestimonialsSection /> */}

      <ProcessSection />

      <BadBrandingSection />

      <HomeProjectsSection />
{/* 
      <BenefitsSection /> */}


      <FAQSection />



      {/* <DesnineAdvantageSection /> */}

      {/* <FeatureSection /> */}
      {/* <BlogSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FAQSection /> */}

      {/* <ScrollTextAnimation /> */}
      {/* Top filler for scrolling */}
      <TextReveal>So, are you ready to stand out?</TextReveal>
       


      <FooterSection />
    </main>
  );
}