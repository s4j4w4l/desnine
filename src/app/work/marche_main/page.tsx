"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import RelatedProjectsSection from "@/components/sections/related-projects-section";
import { useLang } from "@/contexts/LanguageContext";
import marche001 from "../../../../public/marche_main/001.png";
import marche003 from "../../../../public/marche_main/003.png";
import marche004 from "../../../../public/marche_main/004.png";
import marche005 from "../../../../public/marche_main/005.png";
import marche006 from "../../../../public/marche_main/006.png";
import marche007 from "../../../../public/marche_main/007.png";
import marche008 from "../../../../public/marche_main/008.png";
import marche009 from "../../../../public/marche_main/009.png";
import marche010 from "../../../../public/marche_main/010.png";
import marche011 from "../../../../public/marche_main/011.png";
import marche014 from "../../../../public/marche_main/014.png";
import marche019 from "../../../../public/marche_main/019.png";
import marche020 from "../../../../public/marche_main/020.png";
import marche021 from "../../../../public/marche_main/021.png";
import marche022 from "../../../../public/marche_main/022.png";
import marche0015 from "../../../../public/marche_main/0015.png";

interface BannerProps {
  src: StaticImageData;
  alt?: string;
  aspectRatio?: string;
  objectPosition?: string;
  imageClassName?: string;
  rounded?: boolean;
  roundedClassName?: string;
}

function Banner({
  src,
  alt = "Project Banner",
  aspectRatio,
  objectPosition = "center",
  imageClassName = "",
  rounded = true,
  roundedClassName = "rounded-lg",
}: BannerProps) {
  const radiusClassName = rounded ? roundedClassName : "";

  if (aspectRatio) {
    return (
      <div
        className={`relative w-full max-w-full overflow-hidden ${radiusClassName}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="100vw"
          className={`object-cover ${imageClassName}`}
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div className={`w-full max-w-full overflow-hidden ${radiusClassName}`}>
      <Image
        src={src}
        alt={alt}
        unoptimized
        sizes="100vw"
        className={`block h-auto w-full max-w-full ${radiusClassName}`}
      />
    </div>
  );
}

const marcheMainCopy = {
  en: {
    subtitle: "Your neighbourhood grocer on Main Road",
    labels: {
      challenge: "Challenge",
      strategy: "Strategy",
      identity: "Identity",
      application: "Application",
      outcome: "Outcome",
    },
    projectSummary: [
      "Groceries should feel like a place you go, not a task you get through. But the neighbourhood grocer is under pressure. The big chains beat them on price, the delivery apps beat them on convenience, and little by little they get pushed off the street they've been part of for years.",
      "Hudson is a bilingual town, and Main Road is where everything happens. This grocer already had the good stuff: the right spot, great produce, and customers who genuinely cared. What was missing was a brand with enough presence to actually stand out and hold its ground.",
      "So the challenge was pretty clear, make shopping local feel like the obvious choice, not a favour you're doing someone.",
    ],
    projectStrategy: [
      'The strategy started with the name and never let go of it: main by name, main by nature. "Marché" is the market. "Main" is the street it sits on and the point. Marché Main isn\'t a store on Main Road; it\'s the main event of Main Road. The one you walk to, the one you talk about, the reason the street has a pulse.',
      "That double meaning does double duty in a town that lives in two languages. French marché, English main; a brand that sounds like Hudson talks. For shoppers it means fresh, local, proud. For the street it means an anchor. One idea that turns a corner grocer into a landmark: we put the main in Main Road.",
    ],
    projectIdentity: [
      "Marché Main is bold by name, bold by nature. A heavy, hand-cut slab wordmark carries the weight of a market awning, with the accented é sprouting a single leaf, fresh baked right into the logotype. A produce-face monogram gives the brand a character you can wave at across the aisle.",
      'The palette is picked straight from the crates: chartreuse, deep field green and a ripe orange pop. Type gets loud and cheeky where the deals are ("Pick! Bag! Go — 100% local? Oui."), while a custom icon set keeps everything legible from the shelf to the phone. Illustration and photography that make everyday groceries feel warm, human and a little bit fun; never precious, never corporate.',
    ],
    projectApplication: [
      "The brand lives where the neighbourhood does. It's the storefront you spot from down the street, the billboard that owns the drive in Main Road. Main Store. Marché Main. The price tags, the bags people carry home like a badge, the shelf-edge signage, and an Instagram feed that sounds like a neighbour, not a chain. Every touchpoint says the same thing in the same voice: fresh, local, main.",
    ],
    projectConclusion: [
      "Marché Main turned a neighbourhood grocery run into something with a name, a voice, and a sense of humour. The brand claims its street instead of blending into it, proof that local doesn't have to mean quiet, and that the smallest shop on Main can still own the whole road.",
    ],
    projectWork: "Branding & Identity",
    projectCategory: "Retail / Food · 2026",
  },
  fr: {
    subtitle: "Votre épicerie de quartier sur Main Road",
    labels: {
      challenge: "Défi",
      strategy: "Stratégie",
      identity: "Identité",
      application: "Application",
      outcome: "Résultat",
    },
    projectSummary: [
      "Faire l'épicerie devrait ressembler à un endroit où l'on va, pas à une tâche à expédier. Mais l'épicier de quartier est sous pression. Les grandes chaînes gagnent sur le prix, les applications de livraison sur la commodité, et peu à peu, les commerces locaux se font pousser hors de la rue dont ils font partie depuis des années.",
      "Hudson est une ville bilingue, et Main Road est l'endroit où tout se passe. Cette épicerie avait déjà les bons ingrédients : le bon emplacement, de beaux produits frais, et des clients qui y tenaient vraiment. Ce qui manquait, c'était une marque avec assez de présence pour se démarquer et tenir sa place.",
      "Le défi était donc clair : faire en sorte qu'acheter local semble être le choix évident, pas une faveur que l'on rend à quelqu'un.",
    ],
    projectStrategy: [
      "La stratégie est partie du nom et ne l'a jamais lâché : main par le nom, main par la nature. « Marché », c'est le marché. « Main », c'est la rue où il se trouve, mais aussi l'idée d'être central. Marché Main n'est pas seulement un commerce sur Main Road; c'est l'événement principal de Main Road. Celui vers lequel on marche, celui dont on parle, celui qui donne du pouls à la rue.",
      "Ce double sens travaille parfaitement dans une ville qui vit dans deux langues. Le français avec marché, l'anglais avec main; une marque qui sonne comme Hudson parle. Pour les clients, cela veut dire frais, local et fier. Pour la rue, cela veut dire ancrage. Une seule idée transforme une épicerie de coin en repère : mettre le main dans Main Road.",
    ],
    projectIdentity: [
      "Marché Main est audacieux par son nom et par sa nature. Un wordmark massif, découpé à la main, porte le poids d'un auvent de marché, tandis que l'accent du é fait pousser une feuille unique, fraîchement intégrée au logotype. Un monogramme en visage de fruits et légumes donne à la marque un personnage que l'on reconnaît d'un bout à l'autre des allées.",
      "La palette vient directement des cagettes : chartreuse, vert profond des champs et une touche d'orange bien mûr. La typographie devient vive et maligne là où les offres parlent fort (« Pick! Bag! Go — 100% local? Oui. »), tandis qu'un système d'icônes sur mesure garde tout lisible, de l'étagère au téléphone. L'illustration et la photographie rendent l'épicerie quotidienne chaleureuse, humaine et un peu joueuse; jamais précieuse, jamais corporative.",
    ],
    projectApplication: [
      "La marque vit là où vit le quartier. C'est la devanture que l'on aperçoit au bout de la rue, l'affiche qui marque l'arrivée sur Main Road. Main Store. Marché Main. Les étiquettes de prix, les sacs que les gens rapportent chez eux comme un signe d'appartenance, la signalétique en rayon et un fil Instagram qui parle comme un voisin, pas comme une chaîne. Chaque point de contact répète la même idée avec la même voix : frais, local, central.",
    ],
    projectConclusion: [
      "Marché Main a transformé une course d'épicerie de quartier en une expérience avec un nom, une voix et un vrai sens de l'humour. La marque revendique sa rue au lieu de s'y fondre, preuve que local ne veut pas dire discret, et que le plus petit commerce sur Main peut quand même faire rayonner toute la rue.",
    ],
    projectWork: "Branding & Identité",
    projectCategory: "Commerce de détail / Alimentation · 2026",
  },
};

export default function ServicePage() {
  const title = "Marché Main";
  const { lang, t } = useLang();
  const wc = t.workCase;
  const copy = marcheMainCopy[lang];

  // Parallax scroll for hero
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Banner */}
      <section
        ref={ref}
        className="relative mx-auto h-[58svh] min-h-[360px] w-full max-w-[1920px] overflow-hidden md:h-auto md:min-h-0"
        style={{ aspectRatio: `${marche001.width} / ${marche001.height}` }}
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={marche022}
            alt="Banner Image"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover opacity-85"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute bottom-8 left-9 right-9 text-white md:bottom-6 md:left-12 md:right-auto">
          {/* extra indentation on heading */}
          <h1
            className="text-[1.75rem] font-bold leading-tight drop-shadow-lg animate-fade-up md:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {title}
          </h1>
          <p
            className="mt-2 max-w-[30rem] text-sm font-medium leading-6 text-white/85 drop-shadow-lg animate-fade-up md:mt-3 md:text-xl md:leading-relaxed"
            style={{ animationDelay: "180ms" }}
          >
            {copy.subtitle}
          </p>
        </div>
      </section>

      {/* Project Summary */}
      <section className="w-full bg-transparent px-9 pb-16 pt-12 text-foreground sm:px-10 md:px-12 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-6xl min-w-0 grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="min-w-0 space-y-4 md:space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
              {copy.labels.challenge}
            </h2>
            {copy.projectSummary.map((p, i) => (
              <p key={i} className="max-w-full break-words text-[0.9rem] leading-6 text-left md:text-justify md:text-base md:leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-7 md:gap-10">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
                {wc.whatWeDid}
              </h3>
              <p className="break-words text-[0.9rem] leading-6 md:text-base md:leading-relaxed">{copy.projectWork}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
                {wc.category}
              </h3>
              <p className="break-words text-[0.9rem] leading-6 md:text-base md:leading-relaxed">{copy.projectCategory}</p>
            </div>
          </div>

          <div className="min-w-0 space-y-4 border-t border-border pt-8 md:col-span-2 md:space-y-5 md:pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
              {copy.labels.strategy}
            </h2>
            {copy.projectStrategy.map((p, i) => (
              <p key={i} className="max-w-full break-words text-[0.9rem] leading-6 text-left md:text-justify md:text-base md:leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-8 md:px-12">
        <Banner src={marche001} alt="Marché Main identity image" />
        <div className="w-full max-w-full overflow-hidden rounded-lg">
          <video
            className="block h-auto w-full max-w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Marché Main project video 026"
          >
            <source src="/marche_main/026.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="w-full px-9 pb-12 pt-12 sm:px-10 md:px-12 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl min-w-0 space-y-4 border-t border-border pt-8 md:space-y-5 md:pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
            {copy.labels.identity}
          </h2>
          {copy.projectIdentity.map((p, i) => (
            <p key={i} className="max-w-full break-words text-[0.9rem] leading-6 text-left md:text-justify md:text-base md:leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-4 md:px-12">
        <Banner
          src={marche003}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
        <Banner
          src={marche004}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
      </section>

      <section className="w-full max-w-full px-9 py-5 sm:px-10 md:px-12 md:py-5">
        <div className="grid min-w-0 grid-cols-2 gap-3 md:gap-4">
          <Banner
            src={marche005}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
          <Banner
            src={marche006}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
        </div>
      </section>
      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-4 md:px-12">
        <Banner
          src={marche007}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
      </section>

      <section className="w-full max-w-full px-9 py-5 sm:px-10 md:px-12 md:py-5">
        <div className="grid min-w-0 grid-cols-2 gap-3 md:gap-4">
          <Banner
            src={marche008}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
          <Banner
            src={marche009}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
        </div>
      </section>

      <section className="w-full px-9 pb-12 pt-12 sm:px-10 md:px-12 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl min-w-0 space-y-4 border-t border-border pt-8 md:space-y-5 md:pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
            {copy.labels.application}
          </h2>
          {copy.projectApplication.map((p, i) => (
            <p key={i} className="max-w-full break-words text-[0.9rem] leading-6 text-left md:text-justify md:text-base md:leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-4 md:px-12">
        <Banner
          src={marche010}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
        <Banner
          src={marche011}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
        <div className="w-full max-w-full overflow-hidden rounded-xl md:rounded-3xl">
          <video
            className="block h-auto w-full max-w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Marché Main project video 025"
          >
            <source src="/marche_main/025.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="w-full max-w-full px-9 py-5 sm:px-10 md:px-12 md:py-5">
        <div className="grid min-w-0 grid-cols-2 gap-3 md:gap-4">
          <div className="w-full max-w-full overflow-hidden rounded-xl md:rounded-3xl">
            <video
              className="block h-auto w-full max-w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Marché Main project video 024"
            >
              <source src="/marche_main/024.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full max-w-full overflow-hidden rounded-xl md:rounded-3xl">
            <video
              className="block h-auto w-full max-w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Marché Main project video 023"
            >
              <source src="/marche_main/023.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      
{/* add heew */}
      <section className="w-full max-w-full px-9 py-5 sm:px-10 md:px-12 md:py-5">
        <div className="grid min-w-0 grid-cols-2 gap-3 md:gap-4">
          <Banner
            src={marche014}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
          <Banner
            src={marche0015}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
        </div>
      </section>
      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-4 md:px-12">
        <Banner
          src={marche021}
          alt="Marché Main"
          aspectRatio="1920 / 1080"
          roundedClassName="rounded-xl md:rounded-3xl"
        />
      </section>
      <section className="w-full max-w-full px-9 py-5 sm:px-10 md:px-12 md:py-5">
        <div className="grid min-w-0 grid-cols-2 gap-3 md:gap-4">
          <Banner
            src={marche019}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
          <Banner
            src={marche020}
            alt="Marché Main"
            roundedClassName="rounded-xl md:rounded-3xl"
          />
        </div>
      </section>

      


      <section className="w-full px-9 pb-12 pt-12 sm:px-10 md:px-12 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl min-w-0 space-y-4 border-t border-border pt-8 md:space-y-5 md:pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 md:text-base">
            {copy.labels.outcome}
          </h2>
          {copy.projectConclusion.map((p, i) => (
            <p key={i} className="max-w-full break-words text-[0.9rem] leading-6 text-left md:text-justify md:text-base md:leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="w-full max-w-full space-y-4 px-9 sm:px-10 md:space-y-4 md:px-12">
        <Banner
          src={marche022}
          alt="Marché Main"
          aspectRatio={`${marche022.width} / ${marche022.height}`}
          roundedClassName="rounded-xl md:rounded-3xl"
        />
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
