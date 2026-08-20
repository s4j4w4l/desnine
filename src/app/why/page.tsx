import type { Metadata } from "next";
import { FooterSection } from "@/components/sections/footer-section";
import ProgressOnboardingSection from "@/components/sections/progressonboarding";

export const metadata: Metadata = {
  title: "Why Work With Us — Our Process & Approach",
  description:
    "Why work with Desnine Studio, a multi-disciplinary, independent design studio. Explore our process, principles, and collaborative approach.",
  alternates: { canonical: "/why" },
  openGraph: {
    title: "Why Desnine Studio — Our Process & Approach",
    description: "Learn how Desnine Studio approaches strategy, collaboration, and design for modern brands.",
    url: "/why",
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
