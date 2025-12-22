// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const BENEFITS = [
//   {
//     id: "01",
//     title: "Convert Focused",
//     description:
//       "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
//     icon: "/Benefits/signal-status%20(2).png",
//   },
//   {
//     id: "02",
//     title: "Quick Launch",
//     description:
//       "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
//     icon: "/Benefits/click.png",
//   },
//   {
//     id: "03",
//     title: "Real-Time Collaboration",
//     description:
//       "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
//     icon: "/Benefits/clock%20(1).png",
//   },
//   {
//     id: "04",
//     title: "Creative Solution",
//     description:
//       "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
//     icon: "/Benefits/lightbulb.png",
//   },
// ];

// export function BenefitsSection() {
//   return (
//     <section id="benefits" className="w-full border-t border-border bg-background">
//       {/* SAME SIDE PADDINGS AS ClientFeedback */}
//       <div className="w-full px-10 md:px-10">
//         <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-16 lg:py-24">
//           {/* Header */}
//           <motion.div
//             className="flex flex-col items-center gap-4 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <p className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-transparent px-4 text-[11px] sm:text-xs font-medium text-foreground">
//               <span className="text-sm">☰</span>
//               <span>BENEFITS</span>
//             </p>

//             <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-primary">
//               Because Your Success Matters
//             </h2>
//           </motion.div>

//           {/* Benefits Grid */}
//           <div className="grid gap-4 pt-6 grid-cols-2 md:grid-cols-4">
//             {BENEFITS.map((item, i) => (
//               <motion.article
//                 key={item.id}
//                 className="flex h-full flex-col rounded-3xl border border-border bg-transparent p-4 sm:p-6 text-sm"
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: "easeOut",
//                   delay: i * 0.1,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 whileHover={{ y: -4 }}
//               >
//                 {/* ID */}
//                 <div className="mb-3 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-destructive">
//                   / {item.id}
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border border-border">
//                   <Image
//                     src={item.icon}
//                     alt={item.title}
//                     width={18}
//                     height={18}
//                     className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] object-contain"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h4 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
//                   {item.title}
//                 </h4>

//                 {/* Description */}
//                 <p className="text-[11px] sm:text-[13px] leading-relaxed text-muted-foreground">
//                   {item.description}
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Convert Focused",
    description:
      "Speed means nothing without conversions. Our integrated design, development, and copy work together to drive revenue, not just win design awards.",
    icon: "/Benefits/signal-status%20(2).png",
  },
  {
    title: "Quick Launch",
    description:
      "Scale up for major launches or down for maintenance. Whether it's a quick landing page or complete rebrand, we adapt to your business needs.",
    icon: "/Benefits/click.png",
  },
  {
    title: "Real Time Collaboration",
    description:
      "Daily check-ins and rapid iterations keep projects moving. You're always in the loop with feedback cycles that eliminate delays.",
    icon: "/Benefits/clock%20(1).png",
  },
  {
    title: "Complete Creative Solution",
    description:
      "While others just do design, we handle copy too. Your entire funnel works together with cohesive messaging that actually converts.",
    icon: "/Benefits/lightbulb.png",
  },
];

export function BenefitsSection() {
  const { b2 } = siteConfig;

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden border-t border-border bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[600px] md:h-[800px] w-full rounded-b-xl
          [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
        />
      </div>

      {/* Same side padding as ClientFeedback */}
      <div className="relative z-10 w-full px-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl py-16 lg:py-24">
          {/* Hero text */}
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-primary text-balance">
              {b2.title}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {b2.description}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((item, i) => (
              <motion.article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-border bg-transparent p-4 sm:p-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl border border-border">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="mb-2 text-sm sm:text-base font-semibold text-foreground">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] sm:text-[13px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
