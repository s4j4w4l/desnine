"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 4500;
const DESNINE_RED = "#7A0000";

export function BlogSection() {
  const { blogSection } = siteConfig;
  const posts = useMemo(() => blogSection?.posts ?? [], [blogSection?.posts]);

  // responsive: 1 mobile, 2 desktop
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = posts.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  /* ---------- autoplay ---------- */
  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startTimer = () => {
    if (pageCount <= 1) return;
    clearTimer();
    timerRef.current = setInterval(
      () => setPage((p) => (p + 1) % pageCount),
      AUTO_DELAY
    );
  };

  /* ---------- responsive perPage ---------- */
  useEffect(() => {
    const update = () => {
      setPerPage(window.innerWidth >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setPage((p) => (p >= pageCount ? 0 : p));
  }, [pageCount]);

  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const goPrev = () => {
    setPage((p) => (p - 1 + pageCount) % pageCount);
    startTimer();
  };

  const goNext = () => {
    setPage((p) => (p + 1) % pageCount);
    startTimer();
  };

  /* ---------- visible posts ---------- */
  const visible = useMemo(() => {
    if (!total) return [];
    const start = page * perPage;
    return Array.from({ length: perPage }, (_, i) => posts[(start + i) % total]);
  }, [posts, page, perPage, total]);

  return (
    <section id="blog" className="w-full bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10 space-y-10">

        {/* ---------- Header ---------- */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {blogSection?.title ?? "Design insights that convert"}
            <span style={{ color: DESNINE_RED }}>.</span>
          </h2>

          <p className="text-muted-foreground">
            {blogSection?.description ??
              "A simple breakdown of our process — clarity, systems, execution."}
          </p>
        </div>

        {/* ---------- Slider ---------- */}
        <div className="relative">

          {/* Minimal arrows */}
          {pageCount > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2
                           text-3xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                ‹
              </button>

              <button
                onClick={goNext}
                aria-label="Next"
                className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2
                           text-3xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                ›
              </button>
            </>
          )}

          {/* Cards */}
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visible.map((post, i) => (
                <article
                  key={i}
                  className="rounded-2xl overflow-hidden bg-background"
                  style={{ boxShadow: `0 0 0 1px ${DESNINE_RED}10` }}
                >
                  {/* Image */}
                  <div className="relative h-[190px] md:h-[230px] bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: DESNINE_RED }}
                    >
                      {post.tag}
                    </p>

                    <h3 className="text-lg font-semibold leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="opacity-40">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <a
                      href={post.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                    >
                      Read
                      <span style={{ color: DESNINE_RED }}>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Dots ---------- */}
        {pageCount > 1 && (
          <div className="flex justify-center gap-2 pt-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? 36 : 14,
                  background: i === page ? DESNINE_RED : `${DESNINE_RED}30`,
                }}
              />
            ))}
          </div>
        )}

        {/* ---------- END CTA BUTTON ---------- */}
        <div className="flex justify-center">
          <a
            href={blogSection?.cta ?? "/services"}
            className="
              inline-flex items-center gap-2
              rounded-full bg-[#7A0000]
              px-8 py-3
              text-sm font-semibold text-white
              shadow-md
              transition-all
              hover:-translate-y-0.5 hover:shadow-lg
            "
          >
            View All
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
