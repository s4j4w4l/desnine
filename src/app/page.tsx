import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Hero2Section } from "@/components/sections/hero2-section";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/PROCESS";
import { FAQSection } from "@/components/FAQ";
import { ClientFeedback } from "@/components/ClientFeedback";
import LockPageTo2D from "@/components/LockPageTo2D";

// ✅ Add this small client helper component (create this file as shown below)]

// ❌ Remove / fix this (it was broken)
// import Desnine3DRotatingBG from "@/components/ Desnine3DRotatingBGProps ";
// ✅ If you want it later, it should be:
// import Desnine3DRotatingBG from "@/components/Desnine3DRotatingBG";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* 🔒 Locks the whole page to 2D (prevents perspective / 3D tilt movement) */}
      <LockPageTo2D />

      <HeroSection />
      {/* <Desnine3DRotatingBG logoSrc="/D.png" /> */}

      <ClientFeedback />

      <Hero2Section />
      <BentoSection count={4} />

      <ProcessSection />
      <BenefitsSection />
      <FAQSection />

      <TextReveal>So, are you ready to stand out?</TextReveal>

      <FooterSection />
    </main>
  );
}
