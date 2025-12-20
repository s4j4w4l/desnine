"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 4500;
const DESNINE_RED = "#7A0000";

export function BlogSection() {
  const { blogSection } = siteConfig;

  const posts = useMemo(() => blogSection?.posts ?? [], [blogSection?.posts]);

  // 1 on mobile, 2 on md+
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = posts.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    if (pageCount <= 1) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_DELAY);
  };

  // responsive perPage
  useEffect(() => {
    const update = () => {
      const isMdUp = window.matchMedia("(min-width: 768px)").matches;
      setPerPage(isMdUp ? 2 : 1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // keep page valid when pageCount changes
  useEffect(() => {
    setPage((p) => (p >= pageCount ? 0 : p));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  // autoplay
  useEffect(() => {
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const goPrev = () => {
    if (pageCount <= 1) return;
    setPage((p) => (p - 1 + pageCount) % pageCount);
    startTimer();
  };

  const goNext = () => {
    if (pageCount <= 1) return;
    setPage((p) => (p + 1) % pageCount);
    startTimer();
  };

  const visible = useMemo(() => {
    if (!total) return [];
    const startIndex = page * perPage;

    const items = Array.from({ length: Math.min(perPage, total) }, (_, i) => {
      return posts[(startIndex + i) % total];
    });

    return items.filter(Boolean);
  }, [posts, page, perPage, total]);

  return (
    <section id="blog" className="relative w-full bg-background py-12 md:py-16">
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary leading-tight max-w-3xl">
              {blogSection?.title ?? "Desnine Insights & Stories"}
              <span style={{ color: DESNINE_RED }}>.</span>
            </h2>

            <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
              {blogSection?.description ??
                "Explore industry trends, expert perspectives, and creative journeys that bring ideas to life."}
            </p>

            {blogSection?.cta ? (
              <a
                href={blogSection.cta}
                className="mt-4 text-sm font-semibold text-primary hover:opacity-80 transition inline-flex items-center gap-2"
              >
                {blogSection.cta ?? "View All"}
                <span style={{ color: DESNINE_RED }}>↗</span>
              </a>
            ) : null}
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Minimal arrows (no circles) */}
            {pageCount > 1 && (
              <button
                type="button"
                aria-label="Previous posts"
                onClick={goPrev}
                className="absolute left-[-22px] md:left-[-30px] top-1/2 -translate-y-1/2 z-20
                           text-3xl md:text-4xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                ‹
              </button>
            )}

            {pageCount > 1 && (
              <button
                type="button"
                aria-label="Next posts"
                onClick={goNext}
                className="absolute right-[-22px] md:right-[-30px] top-1/2 -translate-y-1/2 z-20
                           text-3xl md:text-4xl font-light opacity-40 hover:opacity-100 transition"
                style={{ color: DESNINE_RED }}
              >
                ›
              </button>
            )}

            {/* Cards container */}
            <div className="rounded-2xl bg-card p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {visible.map((post, idx) => (
                  <article
                    key={`${post?.href ?? post?.title ?? "post"}-${idx}`}
                    className="rounded-2xl bg-background overflow-hidden"
                    style={{ boxShadow: `0 0 0 1px ${DESNINE_RED}10` }}
                  >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden bg-muted h-[170px] sm:h-[200px] md:h-[230px]">
                      {post?.image ? (
                        <img
                          src={post.image}
                          alt={post.title ?? "Blog image"}
                          className="absolute inset-0 h-full w-full object-cover object-center"
                          loading="eager"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-muted" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="p-4 sm:p-5">
                      {post?.tag ? (
                        <p
                          className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                          style={{ color: DESNINE_RED }}
                        >
                          {post.tag}
                        </p>
                      ) : null}

                      <h3 className="mt-2 text-base sm:text-lg font-semibold tracking-tight text-primary leading-snug">
                        {post?.title ?? "Untitled post"}
                      </h3>

                      {post?.excerpt ? (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      ) : null}

                      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                        {post?.date ? <span>{post.date}</span> : null}
                        <span className="opacity-40">•</span>
                        {post?.readTime ? <span>{post.readTime}</span> : null}
                      </div>

                      {post?.href ? (
                        <a
                          href={post.href}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition"
                        >
                          Read <span style={{ color: DESNINE_RED }}>→</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom dots */}
          {pageCount > 1 && (
            <div className="flex justify-center pt-2">
              <div className="flex gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setPage(i);
                      startTimer();
                    }}
                    aria-label={`Go to page ${i + 1}`}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === page ? 40 : 14,
                      backgroundColor: i === page ? DESNINE_RED : `${DESNINE_RED}30`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {!total && (
            <div className="rounded-2xl bg-card p-6 text-sm text-muted-foreground">
              Add posts in <code>siteConfig.blogSection.posts</code>.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
