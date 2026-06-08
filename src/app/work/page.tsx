"use client";

import { motion } from "framer-motion";
import { FooterSection } from "@/components/sections/footer-section";
import { WorkBentoSection } from "@/components/sections/work-bento-section";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { useLang } from "@/contexts/LanguageContext";

const headingColors = [
  "text-zinc-950 dark:text-white",
  "text-[#B91C1C] dark:text-[#EF4444]",
];

export default function WorkPage() {
  const { t } = useLang();

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
            {t.work.heading.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className={`inline-block ${headingColors[i]}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
                {i !== t.work.heading.length - 1 && " "}
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
              <span className="font-bold text-foreground">{t.work.descBold}</span>
              <br />
              {t.work.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <WorkBentoSection count={4} />

      <div className="w-full px-5 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.work.moreProjects}
          </motion.p>
        </div>
      </div>

      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
