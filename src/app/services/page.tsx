import { BentoSection } from "@/components/sections/bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Design Studio Services — Branding, Web Design, SEO & AI",
  description: "Desnine Studio is a multi-disciplinary, independent design studio offering brand identity, website design and development, SEO, AI automation, and packaging design.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Design Studio Services — Branding, Web Design, SEO & AI | Desnine Studio",
    description: "Desnine Studio is a multi-disciplinary, independent design studio offering branding, web design, SEO, AI automation, and packaging design.",
    url: "/services",
  },
};

export default function ServicePage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <ServiceHeroSection />
      <section className="w-full px-7 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Core services</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Choose the discipline that matches the problem.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">Each service has its own process, deliverables, and commercial purpose. Explore the details, then tell us where your business needs to go next.</p>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(services).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-border p-6 transition hover:bg-accent/50">
                <h3 className="text-xl font-semibold group-hover:text-secondary">{service.name} <span aria-hidden="true">↗</span></h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BentoSection />
      <ContactUsSection />
      
      <FooterSection />

    </main>
  );
}
