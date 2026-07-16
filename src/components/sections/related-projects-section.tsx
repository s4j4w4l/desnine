"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

type WorkItem = {
  id?: number | string;
  title: string;
  description?: string;
  href: string;             // can be absolute or relative
  content?: React.ReactNode; // your image/animation node (from Work Bento)
};

type Props = {
  /** Optional cap on how many to consider */
  count?: number;
  /** Section heading (set "" to hide) */
  title?: string;
  /** Extra classes on the outer <section> */
  className?: string;
  /** Optional override for items (defaults to siteConfig.workbentoSection.items) */
  itemsOverride?: WorkItem[];
};

export default function RelatedProjectsSection({
  count,
  title = "Related Projects",
  className,
  itemsOverride,
}: Props) {
  const pathname = usePathname();

  // --- helpers ---
  const normalize = (href: string) => {
    try {
      const u = href?.startsWith("http")
        ? new URL(href)
        : new URL(href || "/", "https://example.com");
      let p = u.pathname || "/";
      if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
      return p;
    } catch {
      return href || "/";
    }
  };

  const currentPath = useMemo(() => normalize(pathname || "/"), [pathname]);

  // --- source: Work Bento items ---
  const raw: WorkItem[] =
    itemsOverride ?? (siteConfig?.workbentoSection?.items ?? []);

  // map → cards & exclude current
  const cards = useMemo(() => {
    const mapped = raw
      .filter(Boolean)
      .filter((it) => it?.href)
      .filter((it) => normalize(it.href) !== currentPath)
      .map((it) => ({
        title: it.title,
        href: normalize(it.href),
        node: it.content, // <img /> or Animation component
      }));

    return typeof count === "number" ? mapped.slice(0, count) : mapped;
  }, [raw, count, currentPath]);

  const isCarousel = cards.length > 2;

  // --- responsive perView: 1 on mobile, 2 on md+ ---
  const [perView, setPerView] = useState(2);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setPerView(mq.matches ? 1 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // --- pages for carousel ---
  const pages = useMemo(() => {
    if (!isCarousel) return [];
    const out: typeof cards[] = [];
    for (let i = 0; i < cards.length; i += perView) {
      out.push(cards.slice(i, i + perView));
    }
    return out;
  }, [cards, perView, isCarousel]);

  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(pages.length - 1, 0)));
  }, [pages.length]);

  const prev = useCallback(() => {
    setPage((p) => (pages.length ? (p - 1 + pages.length) % pages.length : 0));
  }, [pages.length]);
  const next = useCallback(() => {
    setPage((p) => (pages.length ? (p + 1) % pages.length : 0));
  }, [pages.length]);

  const btnBase =
    "p-2 rounded-full bg-black/60 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70";

  return (
    <section className={`relative w-full py-10 ${className ?? ""}`}>
      {/* keep inside your border container */}
      <div className="border-x mx-5 md:mx-10 px-5 md:px-10">
        {title ? (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {title}
          </h2>
        ) : null}

        {/* ≤ 2 items → simple list (one per row) */}
        {!isCarousel ? (
          <div className="space-y-6">
            {cards.map((c, i) => (
              <ProjectCard key={i} title={c.title} href={c.href}>
                {c.node}
              </ProjectCard>
            ))}
            {cards.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No related projects yet.
              </p>
            )}
          </div>
        ) : (
          // > 2 items → carousel
          <div className="relative">
            {/* viewport */}
            <div className="overflow-hidden">
              {/* track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((group, gi) => (
                  <div key={gi} className="min-w-full shrink-0">
                    <div
                      className={`grid gap-4 ${
                        perView === 1 ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {group.map((c, i) => (
                        <ProjectCard
                          key={`${gi}-${i}`}
                          title={c.title}
                          href={c.href}
                        >
                          {c.node}
                        </ProjectCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className={`absolute right-0 top-1/2 -translate-y-1/2 ${btnBase}`}
            >
              <ChevronRight className="text-white" />
            </button>

            {/* dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === page ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  href,
  children, // the Work Bento `content` node (img/animation)
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_self"
      className="block rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition will-change-transform"
    >
      {/* Media area: constrain height, let your node fill */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0">
          {/* Wrap the provided node so it fills nicely.
              Your <img> and animation components already have styles; we just ensure the container is full-size. */}
          <div className="w-full h-full">{children}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
