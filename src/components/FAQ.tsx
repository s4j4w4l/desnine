"use client";

import {
  useState,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const DESNINE_RED = "#B42B25";

type FAQItem = { q: string; a: string };

type FAQItemProps = {
  item: FAQItem;
  i: number;
  open: number | null;
  setOpen: Dispatch<SetStateAction<number | null>>;
  scrollYProgress: MotionValue<number>;
};

function FAQRow({ item, i, open, setOpen, scrollYProgress }: FAQItemProps) {
  const isOpen = open === i;

  const y = useTransform(scrollYProgress, [0, 1], [-12 + i * 4, 12 - i * 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.15 + i * 0.05, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="overflow-hidden rounded-xl border border-border bg-background"
    >
      <button
        onClick={() => setOpen(isOpen ? null : i)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="font-medium text-primary">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl font-bold"
          style={{ color: DESNINE_RED }}
        >
          {isOpen ? "–" : "+"}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: "easeOut" },
              opacity: { duration: 0.2, delay: 0.05 },
            }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingColors = [
    "text-zinc-950 dark:text-white",
    "text-[#B91C1C] dark:text-[#EF4444]",
    "text-zinc-950 dark:text-white",
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-10 px-10 md:px-8 lg:px-0">
        <div className="text-center">
          <motion.p
            className="mb-4 text-sm font-medium text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.faq.label}
          </motion.p>

          <motion.h2
            className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t.faq.heading.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className={`inline-block ${headingColors[i]}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
                {i !== t.faq.heading.length - 1 && " "}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              {t.faq.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <FAQRow
              key={item.q}
              item={item}
              i={i}
              open={open}
              setOpen={setOpen}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
