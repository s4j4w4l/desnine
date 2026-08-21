import type { Metadata } from "next";
import { FooterSection } from "@/components/sections/footer-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { ProcessSection } from "@/components/sections/process-section";
import ProgressOnboardingSection from "@/components/sections/progressonboarding";

export const metadata: Metadata = {
  title: "Our Design Process & Approach",
  description:
    "Learn how Desnine Studio, a multi-disciplinary, independent design studio, approaches strategy, collaboration, design, development, and project delivery.",
  alternates: { canonical: "/why" },
  openGraph: {
    title: "Why Work With Desnine Studio",
    description: "Learn how Desnine Studio, a multi-disciplinary, independent design studio, approaches strategy, collaboration, design, and delivery.",
    url: "/why",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Desnine Studio design process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Work With Desnine Studio",
    description: "Explore the process and principles of Desnine Studio, a multi-disciplinary, independent design studio.",
    images: ["/opengraph-image"],
  },
};

export default function TestimonialPage() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      {/* <ProcessSection /> */}
      <ProgressOnboardingSection />

      <FooterSection />
    </main>
  );
}
