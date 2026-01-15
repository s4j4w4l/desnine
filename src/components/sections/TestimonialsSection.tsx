"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatarText?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Najor",
    role: "CEO of Stapel",
    quote:
      "One the best I have worked with! Attention to the clients needs throughout the whole process. Communication was super fast at all times. Highly recommend using him for your logo needs to build a brand.",
    avatarText: "AN",
  },
  {
    name: "Sophie M.",
    role: "Founder",
    quote:
      "The design feels premium and intentional. Everything is consistent now — we finally look like a real brand.",
    avatarText: "SM",
  },
  {
    name: "Daniel R.",
    role: "E-commerce Owner",
    quote:
      "Fast delivery and super clean work. The new site instantly raised trust and conversions.",
    avatarText: "DR",
  },
  {
    name: "Hira A.",
    role: "Marketing Lead",
    quote:
      "Great communication, sharp eye for detail, and a smooth process from start to finish.",
    avatarText: "HA",
  },
];

function getPair<T>(arr: T[], start: number) {
  const a = arr[start % arr.length];
  const b = arr[(start + 1) % arr.length];
  return [a, b];
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const pair = useMemo(() => getPair(testimonials, index), [index]);

  const next = () => setIndex((i) => (i + 2) % testimonials.length);
  const prev = () => setIndex((i) => (i - 2 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center text-4xl md:text-6xl font-light tracking-tight text-white"
        >
          Clients Who Trusted
          <span className="block text-white/55">Us</span>
        </motion.h2>

        {/* Cards (always 2) */}
        <div className="mt-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid w-full max-w-5xl grid-cols-2 gap-6"
            >
              {pair.map((t, i) => (
                <motion.article
                  key={t.name + i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    p-7 md:p-9
                    shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
                    backdrop-blur
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-400/90 text-black flex items-center justify-center font-semibold">
                      {t.avatarText ??
                        t.name
                          .split(" ")
                          .map((s) => s[0])
                          .slice(0, 2)
                          .join("")}
                    </div>

                    <div className="leading-tight">
                      <p className="text-base font-medium text-white/90">
                        {t.name}
                      </p>
                      <p className="text-sm text-white/45">{t.role}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                    {t.quote}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="
              h-12 w-12 rounded-xl
              bg-white/[0.06] hover:bg-white/[0.10]
              text-white/80
              border border-white/10
              transition
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="
              h-12 w-12 rounded-xl
              bg-white text-black
              border border-white/10
              transition
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
