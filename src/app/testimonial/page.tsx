import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import ProgressOnboardingSection from "@/components/sections/progressonboarding";



export default function TestimonialPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* <ProcessSection /> */}
      <ProgressOnboardingSection />

      <FooterSection />
    </main>
  );
}
