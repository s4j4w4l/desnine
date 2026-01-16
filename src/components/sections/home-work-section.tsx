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
  href: string;
  content?: React.ReactNode;
};

type Props = {
  count?: number;
  title?: string; // set "" to hide
  className?: string;
  itemsOverride?: WorkItem[];
};

export default function HomeProjectsSection({
  count,
  title = "Our Recent Work",
  className,
  itemsOverride,
}: Props) {
  const pathname = usePathname();

  const normalizePath = useCallback((href: string) => {
    try {
      const url = href?.startsWith("http")
        ? new URL(href)
        : new URL(href || "/", "https://example.com");

      let p = url.pathname || "/";
      if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
      return p;
    } catch {
      return href || "/";
    }
  }, []);

  const currentPath = useMemo(
    () => normalizePath(pathname || "/"),
    [pathname, normalizePath]
  );

  const rawItems: WorkItem[] =
    itemsOverride ?? (siteConfig?.workbentoSection?.items ?? []);

  const cards = useMemo(() => {
    const mapped = (rawItems ?? [])
      .filter(Boolean)
      .filter((it) => !!it?.href)
      .filter((it) => normalizePath(it.href) !== currentPath)
      .map((it) => ({
        title: it.title,
        href: normalizePath(it.href),
        node: it.content,
      }));

    return typeof count === "number" ? mapped.slice(0, count) : mapped;
  }, [rawItems, count, currentPath, normalizePath]);

  const isCarousel = cards.length > 2;

  // 1 on mobile, 2 on md+
  const [perView, setPerView] = useState(2);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setPerView(mq.matches ? 1 : 2);

    update();

    // Safari fallback for older versions
    const anyMq = mq as any;
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else if (typeof anyMq.addListener === "function") {
      anyMq.addListener(update);
      return () => anyMq.removeListener(update);
    }
  }, []);

  const pages = useMemo(() => {
    if (!isCarousel) return [];
    const out: Array<typeof cards> = [];
    for (let i = 0; i < cards.length; i += perView) {
      out.push(cards.slice(i, i + perView));
    }
    return out;
  }, [cards, perView, isCarousel]);

  const [page, setPage] = useState(0);

  // keep page valid when perView/pages change
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
              <ProjectCard key={`${c.href}-${i}`} title={c.title} href={c.href}>
                {c.node}
              </ProjectCard>
            ))}

            {cards.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No recent projects yet.
              </p>
            ) : null}
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
                          key={`${gi}-${c.href}-${i}`}
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
  children,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition will-change-transform"
    >
      {/* Media area */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0">
          <div className="w-full h-full">{children}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
