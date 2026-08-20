"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface WorkBentoSectionProps {
  count?: number; // Optional: if passed, show only that many items
  carousel?: boolean;
}

type WorkBentoItem = {
  id: number;
  content: ReactNode;
  title: string;
  description: string;
  href?: string;
};

export function WorkBentoSection({
  count,
  carousel = false,
}: WorkBentoSectionProps) {
  const { title, items } = siteConfig.workbentoSection;
  // Higher IDs are newer projects. Keep the newest case studies at the front
  // anywhere this shared work section is used.
  const workItems = [...(items as WorkBentoItem[])].sort(
    (a, b) => b.id - a.id,
  );
  const visibleWorkItems =
    count === undefined ? workItems : workItems.slice(0, count);
  const desktopSlides = visibleWorkItems.map((item, index) =>
    visibleWorkItems.length > 1
      ? [item, visibleWorkItems[(index + 1) % visibleWorkItems.length]]
      : [item],
  );
  const [activeItem, setActiveItem] = useState(0);

  const previousItem = useCallback(() => {
    setActiveItem((current) =>
      visibleWorkItems.length
        ? (current - 1 + visibleWorkItems.length) % visibleWorkItems.length
        : 0,
    );
  }, [visibleWorkItems.length]);

  const nextItem = useCallback(() => {
    setActiveItem((current) =>
      visibleWorkItems.length ? (current + 1) % visibleWorkItems.length : 0,
    );
  }, [visibleWorkItems.length]);

  useEffect(() => {
    setActiveItem((current) =>
      Math.min(current, Math.max(visibleWorkItems.length - 1, 0)),
    );
  }, [visibleWorkItems.length]);

  return (
    <section
      id="work"
      aria-label={title}
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div
        className={
          carousel
            ? "relative mx-5 w-[calc(100%_-_2.5rem)] min-w-0 border-x md:mx-10 md:w-[calc(100%_-_5rem)]"
            : "relative mx-5 border-x md:mx-10"
        }
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
        <div className="pointer-events-none absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

        {/* Mobile carousel */}
        <div
          className={`relative w-full min-w-0 overflow-hidden ${
            carousel ? "md:hidden" : "hidden"
          }`}
        >
          <div
            className="flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeItem * 100}%)` }}
          >
            {visibleWorkItems.map((item) => (
              <div key={item.id} className="w-full min-w-full shrink-0">
                <WorkCard item={item} mobile />
              </div>
            ))}
          </div>

          {visibleWorkItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousItem}
                aria-label="Previous project"
                className="absolute left-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextItem}
                aria-label="Next project"
                className="absolute right-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </>
          )}
        </div>

        {/* Desktop carousel: two projects per slide */}
        <div
          className={`relative w-full min-w-0 overflow-hidden ${
            carousel ? "hidden md:block" : "hidden"
          }`}
        >
          <div
            className="flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeItem * 100}%)` }}
          >
            {desktopSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full min-w-full shrink-0">
                <div
                  className={`grid ${
                    slide.length === 1 ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {slide.map((item) => (
                    <WorkCard key={`${slideIndex}-${item.id}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {visibleWorkItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousItem}
                aria-label="Previous projects"
                className="absolute left-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextItem}
                aria-label="Next projects"
                className="absolute right-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </>
          )}
        </div>

        {/* Original bento grid */}
        <div
          className={carousel ? "hidden" : "grid grid-cols-1 overflow-hidden md:grid-cols-2"}
        >
          {visibleWorkItems.map((item) => (
            <WorkCard
              key={item.id}
              item={item}
              original
              fullWidth={visibleWorkItems.length === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  item,
  mobile = false,
  original = false,
  fullWidth = false,
}: {
  item: WorkBentoItem;
  mobile?: boolean;
  original?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col items-start justify-end p-0.5 before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] ${
        original
          ? "min-h-[600px] max-h-[400px] md:min-h-[500px]"
          : mobile
            ? "h-[460px]"
            : "min-h-[500px]"
      } ${fullWidth ? "md:col-span-2" : ""}`}
    >
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden ${
          original
            ? "size-full"
            : mobile
              ? "h-[340px] shrink-0"
              : "aspect-[16/10] shrink-0"
        }`}
      >
        {item.content}
      </div>

      <div className="flex-1 flex-col gap-2 p-6 pr-20">
        <h2 className="text-lg tracking-tighter font-semibold">{item.title}</h2>
        <p className="text-muted-foreground">{item.description}</p>
      </div>

      <Link
        href={item.href ?? "#"}
        aria-label={`Open ${item.title}`}
        className="group absolute bottom-6 right-6 inline-flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400/50"
      >
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 transition-transform duration-300 group-hover:rotate-45"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full transition-[box-shadow] duration-300 group-hover:shadow-[0_0_0_6px_rgba(38,38,38,0.2)]"
        />
      </Link>
    </div>
  );
}
