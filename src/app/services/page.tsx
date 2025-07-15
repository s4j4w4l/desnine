import { BentoSection } from "@/components/sections/bento-section";
import { FooterSection } from "@/components/sections/footer-section";


export default function ServicePage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <BentoSection />
      <FooterSection />

    </main>
  );
}
