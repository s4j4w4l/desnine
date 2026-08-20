import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Hero2Section } from "@/components/sections/hero2-section";
import { ClientFeedback } from "@/components/ClientFeedback";
import { ProcessSection } from "@/components/PROCESS";
import { FAQSection } from "@/components/FAQ";
import TextRevealSection from "@/components/sections/text-reveal-section";
import { WorkBentoSection } from "@/components/sections/work-bento-section";
import { HeroWorkSection } from "@/components/sections/herowork-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />

      <ClientFeedback />

      <HeroWorkSection />
      <WorkBentoSection carousel />
      
      <Hero2Section />
      <BentoSection count={4} />

      
      


      <ProcessSection />

      <FAQSection />

      <TextRevealSection />

      <FooterSection />
    </main>
  );
}
