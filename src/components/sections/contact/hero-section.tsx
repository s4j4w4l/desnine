"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative w-full">
      <div className="px-6">
        <div className="mx-auto max-w-4xl pb-16 pt-10 text-center md:pt-14">
          <motion.span
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            Get in touch
          </motion.span>

          <motion.h1
            className="mt-6 text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              {
                text: "Let's",
                className: "text-zinc-950 dark:text-white",
              },
              {
                text: "Build",
                className: "text-zinc-500 dark:text-zinc-400",
              },
              {
                text: "Something",
                className: "text-[#B91C1C] dark:text-[#EF4444]",
              },
              {
                text: "Remarkable",
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
          </motion.h1>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              Have a bold idea or need ongoing creative support? Desnine is a
              creative studio crafting brands, websites, and visual systems
              that connect, engage, and drive meaningful growth.
            </p>
          </motion.div>

          {/*
          <div className="mt-8 grid grid-cols-3 gap-6 text-center max-sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                Trusted Quality
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                Client-Focused
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                On-Time Delivery
              </p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}