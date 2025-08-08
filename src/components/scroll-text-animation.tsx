"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ScrollTextAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const text = "Scroll me to reveal text";
  const letters = text.split("");

  return (
    <div ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {letters.map((letter, index) => {
              const letterProgress = useTransform(
                scrollYProgress,
                [index * 0.02, (index + 1) * 0.02],
                [0, 1]
              );
              
              const x = useTransform(
                letterProgress,
                [0, 1],
                [-100, 0]
              );
              
              const opacity = useTransform(
                letterProgress,
                [0, 1],
                [0, 1]
              );

              return (
                <motion.span
                  key={index}
                  style={{ x, opacity }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 