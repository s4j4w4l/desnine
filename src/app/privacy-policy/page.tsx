"use client";

import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { PrivacyHeaderSection } from "@/components/sections/privacy/privacy-header-section";
import { PrivacyArticleSection } from "@/components/sections/privacy/privacy-article-section";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(260_90%_18%/.25),transparent),radial-gradient(1200px_600px_at_120%_10%,hsl(0_0%_100%/.06),transparent)]">
      <PrivacyHeaderSection />
      <PrivacyArticleSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
