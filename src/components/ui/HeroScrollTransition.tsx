"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DESNINE_RED = "#B42B25";

type HeroScrollTransitionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function HeroScrollTransition({
  title = "Desnine Studio",
  subtitle = "Clean websites. Strong brands. Built to convert.",
  children,
}: HeroScrollTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /** HERO GOES AWAY */
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.6], [0, -4]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  /** NEXT SECTION COMES IN */
  const nextScale = useTransform(scrollYProgress, [0.35, 1], [0.92, 1]);
  const nextRotate = useTransform(scrollYProgress, [0.35, 1], [4, 0]);
  const nextY = useTransform(scrollYProgress, [0.35, 1], [40, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  return (
    <main
      ref={containerRef}
      className="relative h-[200vh] w-full overflow-x-hidden bg-background"
    >
      {/* HERO */}
      <motion.section
        style={{
          scale: heroScale,
          rotate: heroRotate,
          opacity: heroOpacity,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f2] to-[#e9e9e9] dark:from-[#0b0b12] dark:to-[#06060e]" /> */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            {title}
            <span style={{ color: DESNINE_RED }}>.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            {subtitle}
          </p>

          <p className="mt-10 text-sm text-muted-foreground">
            Scroll down <span style={{ color: DESNINE_RED }}>↓</span>
          </p>
        </div>
      </motion.section>

      {/* NEXT SECTION */}
      <motion.section
        style={{
          scale: nextScale,
          rotate: nextRotate,
          y: nextY,
          opacity: nextOpacity,
        }}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#101018] to-[#06060e]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 h-full flex items-center">
          {children ?? <DefaultNext />}
        </div>
      </motion.section>
    </main>
  );
}

function DefaultNext() {
  return (
    <div className="grid md:grid-cols-2 gap-8 text-white">
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          The hero transitions into real content<span style={{ color: DESNINE_RED }}>.</span>
        </h2>
        <p className="mt-5 text-white/70 text-lg">
          Replace this block with your Bento, Process, or Services section.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="font-semibold">Next Section Placeholder</p>
        <p className="mt-3 text-white/70">
          Drop your real component here.
        </p>
      </div>
    </div>
  );
}
