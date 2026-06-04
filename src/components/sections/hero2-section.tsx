// import { siteConfig } from "@/lib/config";
// import Link from "next/link";

// export function Hero2Section() {
//   const { hero2 } = siteConfig;

//   return (
//     <section
//       id="hero2"
//       className="relative w-full overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="h-[600px] md:h-[800px] w-full rounded-b-xl 
//           [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
//         ></div>
//       </div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 flex flex-col items-center px-6 py-15 max-w-3xl mx-auto gap-10">
        
//         {/* Badge
//         {hero2.badge && (
//           <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
//             {hero2.badgeIcon}
//             {hero2.badge}
//           </p>
          
//         )} */}

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-center text-primary text-balance">
//           {hero2.title}
//         </h1>
//          <div className="flex flex-col items-center justify-center gap-5">
//             <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
//               {hero2.description}
//             </p>
//           </div>

       
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function Hero2Section() {
  const { hero2 } = siteConfig;

  const titleWords = String(hero2.title || "").split(" ");

  return (
    <section id="hero2" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-10 px-6 py-16 md:py-24">
        {/* {hero2.badge && (
          <motion.p
            className="flex h-8 items-center gap-2 rounded-full border border-border bg-accent px-3 text-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {hero2.badgeIcon}
            {hero2.badge}
          </motion.p>
        )} */}

        <motion.h1
          className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
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
              <span
                className={
                  i % 3 === 1
                    ? "text-zinc-500 dark:text-zinc-400"
                    : i % 3 === 2
                    ? "text-[#B91C1C] dark:text-[#EF4444]"
                    : "text-zinc-950 dark:text-white"
                }
              >
                {word}
              </span>
              {i !== titleWords.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
            {hero2.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}