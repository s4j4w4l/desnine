// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const DESNINE_RED = "#B42B25";

// const PROCESS = [
//   {
//     title: "DISCOVERY + DIRECTION",
//     desc: "We learn your goals, your audience, and what success looks like.",
//   },
//   {
//     title: "DESIGN SYSTEM",
//     desc: "We set the look and rules: layout, type, spacing, and consistency.",
//   },
//   {
//     title: "BUILD + IMPLEMENT",
//     desc: "We build it responsive, fast, and polished across devices.",
//   },
//   {
//     title: "REVISIONS + QA",
//     desc: "You review, we refine, then we test everything before launch.",
//   },
//   {
//     title: "LAUNCH + SUPPORT",
//     desc: "We go live, hand over files, and stay available if you need updates.",
//   },
// ];

// function ProcessRow({
//   i,
//   title,
//   desc,
// }: {
//   i: number;
//   title: string;
//   desc: string;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   // Progress of this row as it enters/leaves the viewport
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 85%", "end 55%"],
//   });

//   // Slide RIGHT -> LEFT while scrolling down
//   const x = useTransform(scrollYProgress, [0, 1], [45, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ x, opacity }}
//       className="group rounded-2xl border border-border bg-transparent p-6 md:p-7 will-change-transform"
//     >
//       <div className="flex items-start justify-between gap-6">
//         <div className="flex-1">
//           <div className="flex items-center gap-3">
//             <span
//               className="text-xs font-semibold tracking-[0.22em]"
//               style={{ color: DESNINE_RED }}
//             >
//               {String(i + 1).padStart(2, "0")}
//             </span>

//             <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
//               {title}
//             </h3>
//           </div>

//           <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
//             {desc}
//           </p>
//         </div>

//         <span
//           className="mt-2 h-2.5 w-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
//           style={{ backgroundColor: DESNINE_RED }}
//           aria-hidden="true"
//         />
//       </div>
//     </motion.div>
//   );
// }

// export function ProcessSection() {
//   return (
//     <section id="process" className="w-full bg-transparent">
//       <div className="mx-auto w-full max-w-6xl px-10 py-16 lg:py-24">
//         {/* Header */}
//         <div className="pb-10">
//           <div className="max-w-3xl">
//             <p className="text-sm font-medium text-muted-foreground">
//               Process
//               <span
//                 className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
//                 style={{ backgroundColor: DESNINE_RED }}
//               />
//             </p>

//             <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
//               Clear steps.
//               <br />
//               Clean delivery<span style={{ color: DESNINE_RED }}>.</span>
//             </h2>

//             <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
//               A simple flow that keeps everything moving, no confusion, no delays.
//             </p>
//           </div>

//           <div className="mt-10 h-px w-full bg-border/60" />
//         </div>

//         {/* Rows */}
//         <div className="space-y-4">
//           {PROCESS.map((item, i) => (
//             <ProcessRow key={item.title} i={i} title={item.title} desc={item.desc} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const DESNINE_RED = "#7A0000";

const PROCESS = [
  {
    title: "DISCOVERY + DIRECTION",
    desc: "We learn your goals, your audience, and what success looks like.",
  },
  {
    title: "DESIGN SYSTEM",
    desc: "We set the look and rules: layout, type, spacing, and consistency.",
  },
  {
    title: "BUILD + IMPLEMENT",
    desc: "We build it responsive, fast, and polished across devices.",
  },
  {
    title: "REVISIONS + QA",
    desc: "You review, we refine, then we test everything before launch.",
  },
  {
    title: "LAUNCH + SUPPORT",
    desc: "We go live, hand over files, and stay available if you need updates.",
  },
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

  const x = useTransform(smoothProgress, [0, 1], [18, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="group rounded-2xl border border-border bg-background p-4 transition-shadow duration-300 hover:shadow-lg sm:p-5 md:p-6"
    >
      <div className="flex items-start justify-between gap-4 sm:gap-6 md:gap-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base md:text-lg">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 md:text-base">
            {desc}
          </p>
        </div>

        <span
          className="mt-2 h-2 w-2 shrink-0 rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-100 sm:h-2.5 sm:w-2.5"
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
}: {
  i: number;
  progress: MotionValue<number>;
}) {
  const total = PROCESS.length;
  const touchPoint = total === 1 ? 0 : i / (total - 1);

  const fillStart = Math.max(0, touchPoint - 0.018);
  const fillEnd = Math.min(1, touchPoint + 0.012);

  const fill = useTransform(progress, [fillStart, fillEnd], [0, 1]);

  const smoothFill = useSpring(fill, {
    stiffness: 260,
    damping: 15,
    mass: 0.16,
  });

  const textColor = useTransform(smoothFill, [0, 1], ["#71717a", "#ffffff"]);
  const borderColor = useTransform(smoothFill, [0, 1], [
    "hsl(var(--border))",
    DESNINE_RED,
  ]);

  return (
    <div className="relative z-10 shrink-0">
      <motion.div
        className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border bg-background text-sm font-semibold shadow-sm sm:h-14 sm:w-14 sm:text-lg md:h-16 md:w-16"
        style={{ color: textColor, borderColor }}
      >
        <motion.div
          className="absolute inset-0 origin-bottom"
          style={{
            scaleY: smoothFill,
            backgroundColor: DESNINE_RED,
          }}
        />

        <span className="relative z-10">
          {String(i + 1).padStart(2, "0")}
        </span>
      </motion.div>
    </div>
  );
}

export function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 95%", "end 70%"],
  });

  const rawScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const smoothScaleY = useSpring(rawScaleY, {
    stiffness: 220,
    damping: 16,
    mass: 0.18,
  });

  return (
    <section id="process" className="w-full overflow-x-hidden bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-10">
        <div className="pb-10">
          <div className="mx-auto max-w-4xl text-center">
             <motion.p
                className="mb-4 text-center text-sm font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                (Process)
              </motion.p>

            <motion.h2
              className="mt-4 text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {[
                {
                  text: "Clear",
                  className: "text-zinc-950 dark:text-white",
                },
                {
                  text: "Steps.",
                  className: "text-[#B91C1C] dark:text-[#EF4444]",
                },
                {
                  text: "Clean",
                  className: "text-zinc-500 dark:text-zinc-400",
                },
                {
                  text: "Delivery.",
                  className: "text-zinc-950 dark:text-white",
                },
              ].map((word, i) => (
                <motion.span
                  key={`${word.text}-${i}`}
                  className={`inline-block ${word.className}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                      filter: "blur(8px)",
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word.text}
                  {i !== 3 && "\u00A0"}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <p className="text-balance text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
                A simple flow that keeps everything moving, no confusion, no
                delays.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 h-px w-full bg-border/60" />
        </div>

        <div ref={timelineRef} className="relative">
          <div
            className="absolute left-[22px] top-0 w-px bg-border sm:left-[27px] md:left-[31px]"
            style={{ height: "calc(100% - 2.75rem)" }}
          />

          <motion.div
            className="absolute left-[21px] top-0 w-[3px] origin-top rounded-full sm:left-[26px] md:left-[30px]"
            style={{
              backgroundColor: DESNINE_RED,
              scaleY: smoothScaleY,
              height: "calc(100% - 2.75rem)",
            }}
          />

          <div className="space-y-5">
            {PROCESS.map((item, i) => (
              <div
                key={item.title}
                className="relative flex gap-4 sm:gap-6 md:gap-8"
              >
                <TimelineCircle i={i} progress={smoothScaleY} />

                <div className="min-w-0 flex-1">
                  <ProcessRow title={item.title} desc={item.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}