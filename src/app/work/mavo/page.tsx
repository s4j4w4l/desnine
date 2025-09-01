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
  aspect?: string;   // tailwind aspect utility, e.g. "aspect-[16/9]"
  rounded?: boolean;
}

function Banner({
  src,
  alt = "Project Banner",
  aspect = "aspect-[16/9]",
  rounded = true,
}: BannerProps) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${rounded ? "rounded-lg" : ""}`}
      />
    </div>
  );
}

function TopOnlyBackButton() {
  const router = useRouter();
  return (
    <div
      className="
        absolute
        left-6 md:left-10        /* slightly more indentation */
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
  const title = "Mavo";

  // Hide global header/nav while on this page
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

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex flex-col min-h-screen w-full">
      {/* Hero Banner */}
      <section ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <TopOnlyBackButton />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/Mavo/5620db213698209.6757693cba376.jpg"
            alt="Banner Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-8 md:left-12 text-white">
          {/* extra indentation on heading */}
          <h1
            className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent text-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <h2 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
              The Project Summary :
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Mavo is a financial management app built to simplify money control for individuals and businesses. The identity features a bold M logo symbolizing stability and growth, supported by a vibrant color palette, clean typography, and visuals inspired by financial data flows. The brand system spans digital product UI, stationery, and marketing assets, creating a cohesive and approachable look.
            </p>
            
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                What We Did :
              </h3>
              <p className="text-base leading-relaxed">Logo &amp; Branding</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                Category
              </h3>
              <p className="text-base leading-relaxed">
                Markiting Collateral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Mavo/756a3d213698209.6757693cc2a9f.jpg" alt="Project image 93" />
        <Banner src="/Mavo/4aabf8213698209.6757693cbf3ed.gif" alt="Project image 93" />
        <Banner src="/Mavo/85afca213698209.6757693cb5a29.gif" alt="Project image 93" />
        <Banner src="/Mavo/938be5213698209.674af38148c1d.gif" alt="Project image 93" />
        <Banner src="/Mavo/d456be213698209.6757693cc7e7b.jpg" alt="Project image 93" />
        <Banner src="/Mavo/54ce47213698209.6757693cc4e93.gif" alt="Project image 93" />
        <Banner src="/Mavo/276228213698209.6757693cbc7fc.jpg" alt="Project image 93" />
        <Banner src="/Mavo/cecc02213698209.6757693cc5bc2.gif" alt="Project image 93" />
        <Banner src="/Mavo/a40ce8213698209.6757693cbe7a6.jpg" alt="Project image 93" />
        <Banner src="/Mavo/b632c4213698209.6757693ccbd76.jpg" alt="Project image 93" />
        <Banner src="/Mavo/dfb98e213698209.6757693cc11af.jpg" alt="Project image 93" />
        <Banner src="/Mavo/9a1f44213698209.6757693cc9bae.jpg" alt="Project image 93" />
        <Banner src="/Mavo/f2bf91213698209.6757693cb5294.jpg" alt="Project image 93" />
        <Banner src="/Mavo/e67670213698209.6757693cb871f.gif" alt="Project image 93" />
   </section>

    

      <RelatedProjectsSection />
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
