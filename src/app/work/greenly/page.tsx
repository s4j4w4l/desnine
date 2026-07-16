"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const isVideo = src.endsWith(".mp4");
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover ${rounded ? "rounded-lg" : ""}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover ${rounded ? "rounded-lg" : ""}`}
        />
      )}
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
  const title = "Greenly";
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
            src="/Greenly/5fc68c214303945.67576a30c7901.png"
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
            {wc.greenly.summary.map((p, i) => (
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
              <p className="text-base leading-relaxed">{wc.greenly.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/30f05f214303945.67576a30c2fc1.png" alt="Project image 93" />
        <Banner src="/Greenly/aefd64214303945.67576a30c5d08.png" alt="Project image 93" />
        <Banner src="/Greenly/48e058214303945.67576a30c8ae4.png" alt="Project image 93" />
      </section>

      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/a1a4a9214303945.675610954d200.mp4"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/fa977d214303945.675610954c9e4.mp4"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-4 gap-6 items-stretch">
            {/* First Banner - horizontal rectangle */}
            <div className="col-span-1 flex">
            <Banner
                src="/Greenly/ca74e0214303945.67561094b1529.png"
                alt="Project image 93"
            />
            </div>

            {/* Second Banner - square but matches the same height */}
            <div className="col-span-3 flex">
            <Banner
                src="/Greenly/e8b5f8214303945.67561094b1bb0.mp4"
                alt="Project image 57"
            />
            </div>
        </div>
        </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/391c39214303945.67576a30c937b.png" alt="Project image 93" />
        </section>

      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/5f6d06214303945.675610960976c.mp4"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/5d5225214303945.6756109608da3.png"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/06f873214303945.67576a30c213b.png" alt="Project image 93" />
        </section>
      <section className="w-full px-6 md:px-12 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Banner
            src="/Greenly/def5aa214303945.67561097a8729.mp4"
            alt="Project image 93"
            aspect="aspect-square"
            />
            <Banner
            src="/Greenly/116b0d214303945.67561097a8eb1.mp4"
            alt="Project image 57"
            aspect="aspect-square"
            />
        </div>
      </section>

        <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Greenly/8db5b7214303945.67576a30c81d2.png" alt="Project image 93" />
        <Banner src="/Greenly/6fca27214303945.67576a30c441b.mp4" alt="Project image 93" />
        <Banner src="/Greenly/3294d4214303945.67576a30c3b28.png" alt="Project image 93" />
        <Banner src="/Greenly/f0ccd2214303945.67576a30c6ae6.mp4" alt="Project image 93" />
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
