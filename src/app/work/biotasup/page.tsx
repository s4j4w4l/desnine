"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";
import { useLang } from "@/contexts/LanguageContext";

const identityGraphic = "/biotasups/biota-14.png";

const media = {
  hero: "/biotasups/biota-02.jpg",
  intro: "/biotasups/biota-03.jpg",
  strategyVideo: "/biotasups/strategy-motion.mp4",
  outcome: "/biotasups/biota-11.jpg",
  identity: [
    "/biotasups/biota-04.jpg",
    "/biotasups/biota-05.jpg",
  ],
  application: [
    "/biotasups/biota-06.jpg",
    "/biotasups/biota-07.jpg",
    "/biotasups/biota-08.jpg",
    "/biotasups/biota-09.jpg",
    "/biotasups/biota-10.jpg",
    identityGraphic,
    "/biotasups/biota-12.jpg",
    "/biotasups/biota-13.jpg",
  ],
};

const copy = {
  en: {
    subtitle: "Everyday wellness, made simple",
    labels: {
      challenge: "Challenge",
      strategy: "Strategy",
      identity: "Identity",
      application: "Application",
      outcome: "Outcome",
    },
    summary: [
      "The wellness category is crowded with complex claims and clinical-looking products. Biotasup needed a brand that could communicate trust and efficacy while still feeling clear, warm, and approachable.",
      "The challenge was to create a distinctive identity that simplifies the shopping experience and gives every product a recognizable place within one cohesive system.",
    ],
    strategy: [
      "The strategy positions Biotasup as a practical guide to everyday wellbeing. Clear information, confident color, and a consistent product architecture help customers quickly understand what each formula is for and how it fits into their routine.",
    ],
    identity: [
      "A clean wordmark and flexible visual system balance scientific credibility with a natural, optimistic character. The identity is designed to feel contemporary without following short-lived category trends.",
      "Color coding, generous typography, and simple graphic ingredients make the range easy to navigate across packaging, campaigns, and digital touchpoints.",
    ],
    application: [
      "The system scales from individual packs to a complete product family, social content, campaign graphics, and ecommerce. Each application stays unmistakably Biotasup while giving product benefits room to lead.",
    ],
    outcome: [
      "Biotasup now has a confident and extensible identity built for growth: easy to recognize, easy to understand, and consistent wherever customers meet the brand.",
    ],
    work:
      "Branding & Identity, Print & Packaging Design, Website Design & Development",
    category: "Health & Wellness · 2026",
  },
  fr: {
    subtitle: "Le bien-être au quotidien, en toute simplicité",
    labels: {
      challenge: "Défi",
      strategy: "Stratégie",
      identity: "Identité",
      application: "Application",
      outcome: "Résultat",
    },
    summary: [
      "Le secteur du bien-être est saturé de promesses complexes et de produits à l'apparence clinique. Biotasup avait besoin d'une marque capable d'inspirer confiance tout en restant claire, chaleureuse et accessible.",
      "Le défi était de créer une identité distinctive qui simplifie le choix et donne à chaque produit une place reconnaissable dans un système cohérent.",
    ],
    strategy: [
      "La stratégie positionne Biotasup comme un guide pratique du bien-être quotidien. Une information claire, des couleurs affirmées et une architecture constante permettent de comprendre rapidement le rôle de chaque formule.",
    ],
    identity: [
      "Un logotype épuré et un système visuel flexible équilibrent crédibilité scientifique et caractère naturel. L'identité est contemporaine sans dépendre des tendances éphémères du secteur.",
      "Le code couleur, la typographie généreuse et les éléments graphiques simples facilitent la navigation sur les emballages, les campagnes et les supports numériques.",
    ],
    application: [
      "Le système s'adapte à chaque emballage comme à l'ensemble de la gamme, aux réseaux sociaux, aux campagnes et au commerce en ligne. Chaque support reste immédiatement reconnaissable.",
    ],
    outcome: [
      "Biotasup dispose désormais d'une identité forte et évolutive : facile à reconnaître, simple à comprendre et cohérente partout où la marque rencontre son public.",
    ],
    work: "Branding & Identité, Packaging, Design numérique",
    category: "Santé & Bien-être · 2026",
  },
};

function ProjectImage({
  src,
  alt,
  priority = false,
  portrait = false,
  wide = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  portrait?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl md:rounded-3xl ${
        portrait
          ? "aspect-[3800/4320]"
          : wide
            ? "aspect-[21696/8904]"
            : "aspect-[16/9]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) calc(100vw - 4.5rem), calc(100vw - 6rem)"
        className="object-cover"
      />
    </div>
  );
}

function TextSection({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <section className="w-full px-9 pb-12 pt-12 sm:px-10 md:px-12 md:pb-10 md:pt-10">
      <div className="mx-auto max-w-6xl space-y-4 border-t border-border pt-8 md:space-y-5 md:pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
          {label}
        </h2>
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[0.9rem] leading-6 md:text-justify md:text-base md:leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function MediaGrid({
  images,
  label,
  pairFromStart = false,
}: {
  images: string[];
  label: string;
  pairFromStart?: boolean;
}) {
  return (
    <section className="w-full space-y-4 px-9 sm:px-10 md:px-12">
      {images.map((src, index) =>
        (pairFromStart ? index % 3 === 0 : index >= 2 && index % 3 === 2) ? (
          <div key={src} className="grid grid-cols-2 gap-3 md:gap-4">
            {[src, images[index + 1]].filter(Boolean).map((pairedSrc, pairIndex) => (
              <ProjectImage
                key={pairedSrc}
                src={pairedSrc}
                alt={`${label} ${index + pairIndex + 1}`}
                portrait
              />
            ))}
          </div>
        ) : (pairFromStart ? index % 3 === 1 : index >= 3 && index % 3 === 0) ? null : (
          <ProjectImage
            key={src}
            src={src}
            alt={`${label} ${index + 1}`}
            wide={src === identityGraphic}
          />
        ),
      )}
    </section>
  );
}

export default function BiotasupPage() {
  const { lang, t } = useLang();
  const content = copy[lang];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative mx-auto h-[58svh] min-h-[360px] w-full max-w-[1920px] overflow-hidden md:aspect-[16/9] md:h-auto md:min-h-0"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={media.hero}
            alt="Biotasup brand identity"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute bottom-8 left-9 right-9 text-white md:bottom-6 md:left-12">
          <h1 className="animate-fade-up text-[1.75rem] font-bold leading-tight drop-shadow-lg md:text-5xl">
            Biotasup
          </h1>
          <p className="mt-2 max-w-[30rem] animate-fade-up text-sm font-medium leading-6 text-white/85 drop-shadow-lg md:mt-3 md:text-xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="w-full px-9 pb-16 pt-12 sm:px-10 md:px-12 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 md:space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
              {content.labels.challenge}
            </h2>
            {content.summary.map((paragraph) => (
              <p key={paragraph} className="text-[0.9rem] leading-6 md:text-justify md:text-base md:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-7 md:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">{t.workCase.whatWeDid}</h3>
              <p className="mt-2 text-[0.9rem] leading-6 md:text-base">{content.work}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">{t.workCase.category}</h3>
              <p className="mt-2 text-[0.9rem] leading-6 md:text-base">{content.category}</p>
            </div>
          </div>
        </div>
      </section>

      <TextSection label={content.labels.strategy} paragraphs={content.strategy} />
      <section className="w-full space-y-4 px-9 sm:px-10 md:px-12">
        <ProjectImage src={media.intro} alt="Biotasup visual system" />
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:rounded-3xl">
          <video
            src={media.strategyVideo}
            aria-label="Biotasup brand animation"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
        </div>
      </section>
      <TextSection label={content.labels.identity} paragraphs={content.identity} />
      <MediaGrid images={media.identity} label="Biotasup identity application" />
      <TextSection label={content.labels.application} paragraphs={content.application} />
      <MediaGrid
        images={media.application}
        label="Biotasup brand application"
        pairFromStart
      />
      <TextSection label={content.labels.outcome} paragraphs={content.outcome} />
      <section className="w-full px-9 sm:px-10 md:px-12">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl md:rounded-3xl">
          <Image
            src={media.outcome}
            alt="Biotasup wellness campaign"
            fill
            sizes="(max-width: 767px) calc(100vw - 4.5rem), calc(100vw - 6rem)"
            className="object-cover"
          />
        </div>
      </section>

      <RelatedProjectsSection />
      <ContactUsSection />
      <FooterSection />

      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fade-up 0.8s ease-out both; }
        }
      `}</style>
    </main>
  );
}
