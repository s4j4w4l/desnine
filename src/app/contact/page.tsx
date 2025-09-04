import { FooterSection } from "@/components/sections/footer-section";
import { ContactHeroSection } from "@/components/sections/contact/hero-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { FAQSection } from "@/components/sections/contact/faq-section";

export default function ContactPage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full m-0 bg-background pt-16 md:pt-20">
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
