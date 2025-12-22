"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 4000;
const DESNINE_RED = "#7A0000";

/** ---- In-View (run once) ---- */
function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          obs.disconnect(); // run once
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
  const [display, setDisplay] = useState(() => 0);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = target;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (to - from) * eased;

      setDisplay(next);

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

/** ---- Main Component ---- */
export function ClientFeedback() {
  const { clientFeedback } = siteConfig;

  const reviews = useMemo(() => clientFeedback.reviews ?? [], [clientFeedback.reviews]);
  const stats = useMemo(() => clientFeedback.stats ?? [], [clientFeedback.stats]);

  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = reviews.length;
  const current = total ? reviews[active] : null;

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    if (total <= 1) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, AUTO_DELAY);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <section id="client-feedback" className="w-full bg-background py-10">
      {/* Bento-like outer padding (kept same) */}
      <div className="w-full px-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          {/* Header (added same reveal animation style) */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              {clientFeedback.title ?? "What our clients say"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Review Card (added in-view + hover lift) */}
            <motion.div
              className="rounded-2xl p-6 sm:p-7 md:p-10 flex flex-col min-h-[260px] sm:min-h-[300px] md:min-h-[340px] relative overflow-hidden border border-zinc-300 dark:border-zinc-700"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote */}
              <div className="flex gap-3">
                <span
                  className="text-3xl leading-none font-bold shrink-0"
                  style={{ color: DESNINE_RED }}
                >
                  “
                </span>

                <p className="text-base sm:text-lg md:text-xl text-primary leading-relaxed tracking-tight font-medium">
                  {current?.quote}
                </p>
              </div>

              {/* Bottom pinned */}
              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className="size-10 rounded-full overflow-hidden shrink-0 grid place-items-center"
                      style={{ backgroundColor: DESNINE_RED }}
                    >
                      {current?.author?.image ? (
                        <img
                          src={current.author.image}
                          alt={current.author.name}
                          className="size-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="size-full rounded-full bg-white/10" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary truncate">
                        {current?.author?.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {current?.author?.role}
                      </p>
                    </div>
                  </div>

                  {/* Arrows (pinned) */}
                  <div className="flex gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setActive((i) => (i - 1 + total) % total);
                        startTimer();
                      }}
                      aria-label="Previous review"
                      className="size-10 rounded-full transition-colors"
                      style={{
                        border: `1px solid ${DESNINE_RED}55`,
                        color: DESNINE_RED,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = `${DESNINE_RED}10`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActive((i) => (i + 1) % total);
                        startTimer();
                      }}
                      aria-label="Next review"
                      className="size-10 rounded-full transition-colors"
                      style={{
                        border: `1px solid ${DESNINE_RED}55`,
                        color: DESNINE_RED,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = `${DESNINE_RED}10`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Dots */}
                {total > 1 && (
                  <div className="mt-6 flex gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setActive(i);
                          startTimer();
                        }}
                        aria-label={`Go to review ${i + 1}`}
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: i === active ? 32 : 12,
                          backgroundColor: i === active ? DESNINE_RED : `${DESNINE_RED}30`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Stats (added same staggered reveal + hover lift on each card) */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl p-6 md:p-7 flex flex-col justify-between min-h-[150px] md:min-h-[160px] border border-zinc-300 dark:border-zinc-700"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <CountUpText
                    value={stat.value}
                    duration={4000}
                    className="stat-outline text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none"
                    style={{
                      WebkitTextStroke: "1.2px #7A0000",
                      color: "transparent",
                    }}
                  />

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-primary">{stat.label}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.note}</p>
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
