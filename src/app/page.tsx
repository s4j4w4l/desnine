import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Hero2Section } from "@/components/sections/hero2-section";
import { ClientFeedback } from "@/components/ClientFeedback";
import { ProcessSection } from "@/components/PROCESS";
import { FAQSection } from "@/components/FAQ";
import HomeProjectsSection from "@/components/sections/home-work-section";

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

      {/* <BadBrandingSection /> */}

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
