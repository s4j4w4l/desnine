"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";
import { useLang } from "@/contexts/LanguageContext";

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
  const { t } = useLang();
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
        {t.workCase.goBack}
      </button>
    </div>
  );
}

export default function ServicePage() {
  // Not published for now; page kept in the codebase but not shown online.
  notFound();
  const title = "Core Secure";
  const { t } = useLang();
  const wc = t.workCase;

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
            src="/Coresecure/c84778211607369.67576a9fb7366.png"
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
              {wc.projectSummary}
            </h2>
            {wc.coresecure.summary.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-justify">{p}</p>
            ))}
            
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                {wc.whatWeDid}
              </h3>
              <p className="text-base leading-relaxed">{wc.logoBranding}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-zinc-400">
                {wc.category}
              </h3>
              <p className="text-base leading-relaxed">{wc.coresecure.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Coresecure/ad453c211607369.67576a9fa24a4.png" alt="Project image 93" />
        <Banner src="/Coresecure/4556bc211607369.67576a9fb35ae.png" alt="Project image 57" />
        <Banner src="/Coresecure/42afdf211607369.67576a9fa3ce7.png" alt="Project image 93" />
        <Banner src="/Coresecure/a29ed1211607369.67576a9fa62e3.png" alt="Project image 57" />
        <Banner src="/Coresecure/79a73e211607369.67576a9fafa9e.png" alt="Project image 93" />
        <Banner src="/Coresecure/8d991a211607369.67576a9fa7808.png" alt="Project image 57" />
        <Banner src="/Coresecure/e23456211607369.67576a9faacc2.png" alt="Project image 93" />
        <Banner src="/Coresecure/b02f6c211607369.67576a9fac281.png" alt="Project image 93" />
        <Banner src="/Coresecure/75b080211607369.67576a9fb4811.png" alt="Project image 57" />
        <Banner src="/Coresecure/38b83b211607369.67576a9fb5b4b.png" alt="Project image 93" />
        <Banner src="/Coresecure/3ab509211607369.67576a9fb2b32.png" alt="Project image 57" />
        <Banner src="/Coresecure/c4d7f6211607369.67576a9fa9fcc.png" alt="Project image 93" />
        <Banner src="/Coresecure/5490f0211607369.67576a9fa4e3d.png" alt="Project image 57" />
        <Banner src="/Coresecure/e66d2b211607369.67576a9fad53c.png" alt="Project image 93" />
        <Banner src="/Coresecure/8b2a65211607369.67576a9fa8a0d.png" alt="Project image 57" />
        <Banner src="/Coresecure/14b766211607369.67576a9fb1e95.png" alt="Project image 93" />
        <Banner src="/Coresecure/9e0f2d211607369.67576a9fb0c06.png" alt="Project image 57" />
        <Banner src="/Coresecure/80f7c2211607369.67576a9fb672a.png" alt="Project image 93" />
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
