"use client";

import { motion } from "framer-motion";
import { FooterSection } from "@/components/sections/footer-section";
import { WorkBentoSection } from "@/components/sections/work-bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <section className="w-full px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              { text: "Our", className: "text-zinc-950 dark:text-white" },
              { text: "Work", className: "text-[#B91C1C] dark:text-[#EF4444]" },
            ].map((word, i) => (
              <motion.span
                key={`${word.text}-${i}`}
                className={`inline-block ${word.className}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word.text}
                {i !== 1 && "\u00A0"}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              <span className="font-bold text-foreground">
                Creative that connects. Design that delivers.
              </span>
              <br />
              We don’t just design, we build visual stories that move people and
              grow brands. Each project below reflects our commitment to
              clarity, impact, and craft.
            </p>
          </motion.div>
        </div>
      </section>

      <WorkBentoSection count={4} />

      <div className="w-full px-5 py-16 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        {/* <motion.h2
          className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            {
              text: "Coming",
              className: "text-zinc-500 dark:text-zinc-400",
            },
            {
              text: "Soon!",
              className: "text-[#B91C1C] dark:text-[#EF4444]",
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
              {i !== 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h2> */}

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          More projects and case studies are currently in development and
          will be added soon.
        </motion.p>
      </div>
    </div>

      <ContactUsSection />
      <FooterSection />
    </main>
  );
}