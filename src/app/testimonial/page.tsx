import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";


export default function TestimonialPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <TestimonialSection />
      <FooterSection />
    </main>
  );
}
