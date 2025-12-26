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

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DESNINE_RED = "#B42B25";

const PROCESS = [
  { title: "DISCOVERY + DIRECTION", desc: "We learn your goals, your audience, and what success looks like." },
  { title: "DESIGN SYSTEM", desc: "We set the look and rules: layout, type, spacing, and consistency." },
  { title: "BUILD + IMPLEMENT", desc: "We build it responsive, fast, and polished across devices." },
  { title: "REVISIONS + QA", desc: "You review, we refine, then we test everything before launch." },
  { title: "LAUNCH + SUPPORT", desc: "We go live, hand over files, and stay available if you need updates." },
];

function ProcessRow({
  i,
  title,
  desc,
}: {
  i: number;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="group rounded-2xl border border-border bg-transparent p-6 md:p-7"
    >
      <div className="flex items-start justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold tracking-[0.22em]"
              style={{ color: DESNINE_RED }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-primary">
              {title}
            </h3>
          </div>

          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
            {desc}
          </p>
        </div>

        <span
          className="mt-2 h-2.5 w-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: DESNINE_RED }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full bg-transparent overflow-x-hidden"
    >
      {/* ⬅️➡️ LEFT / RIGHT PADDING LIVES HERE */}
      <div className="
        mx-auto w-full max-w-10xl
        px-12 sm:px-12 md:px-12 lg:px-12
        py-12 lg:py-12
      ">
        {/* Header */}
        <div className="pb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Process
              <span
                className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: DESNINE_RED }}
              />
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
              Clear steps.
              <br />
              Clean delivery<span style={{ color: DESNINE_RED }}>.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A simple flow that keeps everything moving, no confusion, no delays.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-border/60" />
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {PROCESS.map((item, i) => (
            <ProcessRow
              key={item.title}
              i={i}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
