"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { useLang } from "@/contexts/LanguageContext";

const DESNINE_RED = "#B42B25";

function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function parseStatValue(raw: string) {
  const s = String(raw).trim();
  const numMatch = s.match(/-?\d+(\.\d+)?/);
  const target = numMatch ? Number(numMatch[0]) : 0;

  const startIdx = numMatch ? numMatch.index ?? 0 : 0;
  const endIdx = numMatch ? startIdx + numMatch[0].length : 0;

  const prefix = numMatch ? s.slice(0, startIdx) : "";
  const suffix = numMatch ? s.slice(endIdx) : s;

  const decimals = numMatch?.[0]?.includes(".")
    ? numMatch[0].split(".")[1]?.length ?? 0
    : 0;

  return { target, prefix, suffix, decimals };
}

function CountUpText({
  value,
  duration = 1100,
  className = "",
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const { target, prefix, suffix, decimals } = useMemo(
    () => parseStatValue(value),
    [value]
  );

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const formatted = useMemo(() => {
    const n = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
    return `${prefix}${n}${suffix}`;
  }, [display, decimals, prefix, suffix]);

  return (
    <div ref={ref} className={className} style={style}>
      {inView
        ? formatted
        : `${prefix}${decimals > 0 ? (0).toFixed(decimals) : "0"}${suffix}`}
    </div>
  );
}

const glassCard =
  "relative overflow-hidden rounded-2xl border border-white/40 bg-white/35 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]";

export function ClientFeedback() {
  const { t } = useLang();
  const { clientFeedback } = siteConfig;
  const { title } = t.clientFeedback;
  const stats = useMemo(
    () => clientFeedback.stats.map((s, i) => ({
      value: s.value,
      label: t.clientFeedback.stats[i]?.label ?? s.label,
      note: t.clientFeedback.stats[i]?.note ?? s.note,
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [clientFeedback.stats, t]
  );

  return (
    <section id="client-feedback" className="w-full bg-background py-10">
      <div className="w-full px-6 md:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <motion.div
            className="py-16 text-center md:py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]">
              <span className="text-zinc-950 dark:text-white">{title.word1}</span>{" "}
              <span className="text-zinc-500 dark:text-zinc-400">{title.word2}</span>{" "}
              <span className="text-[#B91C1C] dark:text-[#EF4444]">{title.word3}</span>{" "}
              <span className="text-zinc-950 dark:text-white">{title.word4}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              className={`${glassCard} flex min-h-[260px] flex-col items-center justify-center p-6 sm:min-h-[300px] sm:p-7 md:min-h-[340px] md:p-10`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  background: `radial-gradient(circle at top left, rgba(180,43,37,0.22) 0%, rgba(180,43,37,0.12) 25%, rgba(180,43,37,0.04) 45%, transparent 75%)`,
                }}
              />

              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 select-none text-[340px] font-black leading-none opacity-[0.07] md:text-[500px]"
                style={{ color: DESNINE_RED }}
              >
                "
              </span>

              <p className="relative z-10 text-balance text-center text-base font-medium leading-relaxed tracking-tight text-primary sm:text-lg md:text-xl">
                {t.clientFeedback.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`${glassCard} flex min-h-[150px] flex-col justify-between p-6 md:min-h-[160px] md:p-7`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent dark:from-white/10 dark:via-white/[0.03]" />

                  <div className="relative z-10">
                    <CountUpText
                      value={stat.value}
                      duration={4000}
                      className="text-4xl font-extrabold leading-none sm:text-6xl md:text-7xl"
                      style={{ color: DESNINE_RED, textShadow: "0 10px 28px rgba(180,43,37,0.18)" }}
                    />
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-primary">{stat.label}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{stat.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
