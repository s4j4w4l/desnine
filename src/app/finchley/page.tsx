"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";

interface BannerProps {
  src: string;
  alt?: string;
  aspect?: string;
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div className={`relative w-full ${aspect} overflow-hidden ${rounded ? "rounded-lg" : ""}`}>
      <Image src={src} alt={alt} fill priority={false} className={`object-cover ${rounded ? "rounded-lg" : ""}`} />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute left-4 md:left-6
        top-[calc(env(safe-area-inset-top,0px)+12px)]
        md:top-[calc(env(safe-area-inset-top,0px)+16px)]
        z-20
      "
    >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium hover:opacity-75 transition"
        aria-label="Go back"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back
      </button>
    </div>
  );
}

export default function ServicePage() {
  const title = "Finchley";

  // Hide the global header/nav while on this page
  useEffect(() => {
    const selectors = ["header", 'nav[role="navigation"]', "#site-header", ".site-header"];
    const hiddenEls: HTMLElement[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset._hiddenByPage === "1") return;
        el.dataset._hiddenByPage = "1";
        el.dataset._prevDisplay = el.style.display;
        el.style.display = "none";
        hiddenEls.push(el);
      });
    });

    return () => {
      hiddenEls.forEach((el) => {
        el.style.display = el.dataset._prevDisplay ?? "";
        delete el.dataset._hiddenByPage;
        delete el.dataset._prevDisplay;
      });
    };
  }, []);

  // Scroll animation for first banner
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner (no rounded corners, scroll animation) */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src="/Finchley/Frame 92.png" alt="Banner Image" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up" style={{ animationDelay: "120ms" }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary Section */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              At Finchley Hub, Co, our focus is on establishing a venue that harmonizes community engagement with innovative endeavors.
            </p>
            <p className="text-base leading-relaxed text-justify">
              We strive to offer an environment conducive to nurturing creativity, fostering collaboration, and facilitating growth for both
              individuals and businesses. Our mission is to build a hub that serves as the vibrant core of our community, a space where ideas
              flourish and dreams transform into reality.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">What We Did :</h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">Category</h3>
              <p className="text-base leading-relaxed">Community &amp; Innovation, Collaboration, Entrepreneurship &amp; Networking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Finchley/Frame 93.png" alt="" />
        <Banner src="/Finchley/Frame 57.png" alt="" />
      </section>

      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Banner src="/Finchley/Frame 001.png" alt="" aspect="aspect-[4/3]" />
          <Banner src="/Finchley/Frame 002.png" alt="" aspect="aspect-[4/3]" />
          <Banner src="/Finchley/Frame 003.png" alt="" aspect="aspect-[4/3]" />
          <Banner src="/Finchley/Frame 004.png" alt="" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="w-full space-y-8 px-6 md:px-12 mb-12">
        <Banner src="/Finchley/Frame 89.png" alt="" />
        <Banner src="/Finchley/Frame 79.png" alt="" />
        <Banner src="/Finchley/Frame 75.png" alt="" />
        <Banner src="/Finchley/Frame 74.png" alt="" />
        <Banner src="/Finchley/Frame 86.png" alt="" />
      </section>


      <RelatedProjectsSection />
      {/* Contact & Footer */}
      <ContactUsSection />
      <FooterSection />

      {/* CSS-only animation */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
            will-change: transform, opacity;
          }
        }
      `}</style>
    </main>
  );
}
