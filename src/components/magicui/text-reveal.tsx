"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"; // ✅ add this
import { InteractiveHoverButton } from "./interactive-hover-button";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;   // optional override
  buttonClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  showButton = true,
  buttonLabel = "Lets Talk",
  onButtonClick,
  buttonClassName,
  ...rest
}) => {
  const router = useRouter(); // ✅ router for navigation
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  // Button appears toward the end of the reveal
  const btnOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.55, 0.75], [16, 0]);
  const btnPointer = useTransform(scrollYProgress, [0.55, 0.75], ["none", "auto"]);

  // ✅ default behavior: go to /contact unless a custom onClick is provided
  const handleClick = () => {
    if (onButtonClick) return onButtonClick();
    router.push("/contact");
  };

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)} {...rest}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">
        {/* Animated headline */}
        <span
          className="
            flex flex-wrap items-center justify-center text-center
            text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8vw]
            leading-[0.9] tracking-tighter font-extrabold
            text-black/20 dark:text-white/20
          "
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>

        {/* CTA Button (centred under the text, inside the same sticky section) */}
        {showButton && (
          <motion.div
            style={{ opacity: btnOpacity, y: btnY, pointerEvents: btnPointer }}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-20",
              buttonClassName
            )}
          >
            <InteractiveHoverButton onClick={handleClick}>
              {buttonLabel}
            </InteractiveHoverButton>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-2">
      {/* faint shadow layer */}
      <span className="absolute opacity-30 select-none" aria-hidden>
        {children}
      </span>
      <motion.span
        style={{ opacity, willChange: "opacity" }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
