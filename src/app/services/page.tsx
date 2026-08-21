import { BentoSection } from "@/components/sections/bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Branding, Web Design, SEO & AI Services",
  description: "Desnine Studio is a multi-disciplinary, independent design studio offering branding, web design, development, packaging, SEO, and AI automation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Branding, Web Design, SEO & AI Services | Desnine Studio",
    description: "Desnine Studio is a multi-disciplinary, independent design studio offering branding, web design, development, packaging, SEO, and AI automation.",
    url: "/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Studio Services | Desnine Studio",
    description: "Desnine Studio is a multi-disciplinary, independent design studio offering branding, web design, development, packaging, SEO, and AI automation.",
    images: ["/opengraph-image"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Branding, Web Design, SEO and AI Automation",
  description:
    "Brand identity, web design and development, SEO, packaging design, and AI automation services by Desnine Studio.",
  provider: {
    "@type": "ProfessionalService",
    name: "Desnine Studio",
    url: siteConfig.url,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Quebec, Canada" },
  url: `${siteConfig.url}/services`,
};

export default function ServicePage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <ServiceHeroSection />
      <BentoSection />
      <ContactUsSection />
      
      <FooterSection />

    </main>
  );
}
