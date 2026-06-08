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
  const title = "Quixel";
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
            src="/Quixel/66ca32212225893.6757693b01009.png"
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
            {wc.quixel.summary.map((p, i) => (
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
              <p className="text-base leading-relaxed">{wc.quixel.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full space-y-8 px-6 md:px-12">
        <Banner src="/Quixel/b17ddc212225893.6757693aeb8be.png" alt="Project image 93" />
        <Banner src="/Quixel/a17123212225893.6757693b026a3.png" alt="Project image 57" />
        <Banner src="/Quixel/b536bd212225893.6757693aed217.png" alt="Project image 93" />
        <Banner src="/Quixel/7c465e212225893.6757693aecc37.png" alt="Project image 57" />
        <Banner src="/Quixel/d4aa80212225893.6757693aebf30.png" alt="Project image 93" />
        <Banner src="/Quixel/8c2e72212225893.6757693b04371.png" alt="Project image 57" />
        <Banner src="/Quixel/6c1f39212225893.6757693af16c0.png" alt="Project image 93" />
        <Banner src="/Quixel/7ee22c212225893.6757693af3967.png" alt="Project image 57" />
        <Banner src="/Quixel/38c587212225893.6757693aefab5.png" alt="Project image 93" />
        <Banner src="/Quixel/9b3540212225893.6757693b0382c.png" alt="Project image 57" />
        <Banner src="/Quixel/915e13212225893.6757693aed81f.png" alt="Project image 93" />
        <Banner src="/Quixel/07837a212225893.6757693aee378.png" alt="Project image 57" />
        <Banner src="/Quixel/b5bbab212225893.6757693af009c.png" alt="Project image 93" />
        <Banner src="/Quixel/fc7357212225893.6757693b03256.png" alt="Project image 57" />
        <Banner src="/Quixel/24c553212225893.6757693af2e32.png" alt="Project image 93" />
        <Banner src="/Quixel/25186e212225893.6757693b020e6.png" alt="Project image 57" />
        <Banner src="/Quixel/234d4e212225893.6757693aef49c.png" alt="Project image 93" />
        <Banner src="/Quixel/4a2762212225893.6757693b00218.png" alt="Project image 57" />
        <Banner src="/Quixel/b530a0212225893.6757693aee988.png" alt="Project image 93" />
        <Banner src="/Quixel/e0bb38212225893.6757693b02c5f.png" alt="Project image 57" />
        <Banner src="/Quixel/88c134212225893.6757693af0b97.png" alt="Project image 57" />
        <Banner src="/Quixel/664621212225893.6757693af21f5.png" alt="Project image 93" />
        <Banner src="/Quixel/eceb35212225893.6757693af2844.png" alt="Project image 57" />
        <Banner src="/Quixel/649135212225893.6757693b01b31.png" alt="Project image 93" />
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
