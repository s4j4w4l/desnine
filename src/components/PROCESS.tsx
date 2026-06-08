"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const DESNINE_RED = "#7A0000";

const headingColors = [
  "text-zinc-950 dark:text-white",
  "text-[#B91C1C] dark:text-[#EF4444]",
  "text-zinc-500 dark:text-zinc-400",
  "text-zinc-950 dark:text-white",
];

function ProcessRow({ title, desc }: { title: string; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 16,
    mass: 0.18,
  });

  const x = useTransform(smoothProgress, [0, 1], [6, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="group w-full max-w-full rounded-2xl border border-border bg-background p-4 transition-shadow duration-300 hover:shadow-lg sm:p-5 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base md:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {desc}
          </p>
        </div>
        <span
          className="mt-2 h-2 w-2 shrink-0 rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: DESNINE_RED }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

function TimelineCircle({
  i,
  progress,
  total,
}: {
  i: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const touchPoint = total === 1 ? 0 : i / (total - 1);
  const fillStart = Math.max(0, touchPoint - 0.018);
  const fillEnd = Math.min(1, touchPoint + 0.012);

  const fill = useTransform(progress, [fillStart, fillEnd], [0, 1]);
  const smoothFill = useSpring(fill, { stiffness: 260, damping: 15, mass: 0.16 });

  const textColor = useTransform(smoothFill, [0, 1], ["#71717a", "#ffffff"]);
  const borderColor = useTransform(smoothFill, [0, 1], ["hsl(var(--border))", DESNINE_RED]);

  return (
    <div className="relative z-10 shrink-0">
      <motion.div
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border bg-background text-sm font-semibold shadow-sm sm:h-11 sm:w-11 md:h-12 md:w-12"
        style={{ color: textColor, borderColor }}
      >
        <motion.div
          className="absolute inset-0 origin-bottom"
          style={{ scaleY: smoothFill, backgroundColor: DESNINE_RED }}
        />
        <span className="relative z-10">{String(i + 1).padStart(2, "0")}</span>
      </motion.div>
    </div>
  );
}

export function ProcessSection() {
  const { t } = useLang();
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 95%", "end 70%"],
  });

  const rawScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothScaleY = useSpring(rawScaleY, { stiffness: 220, damping: 16, mass: 0.18 });

  return (
    <section id="process" className="w-full overflow-hidden bg-background">
      <div className="mx-auto w-full max-w-5xl px-8 py-12 sm:px-10 md:px-12 lg:px-8">
        <div className="pb-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="mb-4 text-center text-sm font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {t.process.label}
            </motion.p>

            <motion.h2
              className="mt-4 text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {t.process.heading.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className={`inline-block ${headingColors[i]}`}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                  {i !== t.process.heading.length - 1 && " "}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="max-w-2xl text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
                {t.process.subtitle}
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-10 h-px w-full max-w-4xl bg-border/60" />
        </div>

        <div className="w-full overflow-hidden rounded-3xl border border-border bg-background p-4 sm:p-6 md:p-8">
          <div ref={timelineRef} className="relative w-full overflow-hidden">
            <div
              className="absolute left-[19px] top-0 w-px bg-border sm:left-[21.5px] md:left-[23.5px]"
              style={{ height: "calc(100% - 2.5rem)" }}
            />
            <motion.div
              className="absolute left-[18px] top-0 w-[3px] origin-top rounded-full sm:left-[20.5px] md:left-[22.5px]"
              style={{
                backgroundColor: DESNINE_RED,
                scaleY: smoothScaleY,
                height: "calc(100% - 2.5rem)",
              }}
            />
            <div className="space-y-4 sm:space-y-5">
              {t.process.steps.map((item, i) => (
                <div
                  key={item.title}
                  className="relative flex w-full min-w-0 gap-4 sm:gap-5 md:gap-6"
                >
                  <TimelineCircle
                    i={i}
                    progress={smoothScaleY}
                    total={t.process.steps.length}
                  />
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <ProcessRow title={item.title} desc={item.desc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
