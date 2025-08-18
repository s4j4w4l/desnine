"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimatedText() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track progress across this tall section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // 0 when bottom hits viewport, 1 when top leaves
  });

  // Symmetric, constant-speed travel across the screen center
  const x = useTransform(scrollYProgress, [0, 1], ["50vw", "-50vw"], {
    ease: (t) => t,
  });

  const text = "Are you ready to stand out?";

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[200vh]           /* gives you 'scroll room' for the animation */
        snap-start          /* locks viewport to this section at its start */
        overflow-x-hidden
      "
    >
      {/* Sticky viewport: keeps text perfectly centered while the user scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.h2
          style={{ x }}
          className="
            whitespace-nowrap
            text-center
            text-6xl md:text-9xl
            font-extrabold tracking-tight
            transform-gpu will-change-transform
          "
          aria-label={text}
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
}
