"use client";

import { useEffect, useRef, useState } from "react";

const DESNINE_RED = "#B42B25";

export function ScrollVelocitySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const velocity = useRef(0);

  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      velocity.current = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let raf: number;
    const animate = () => {
      const speed = Math.min(Math.abs(velocity.current) * 0.35, 25);

      setOffset1((v) => v - speed);
      setOffset2((v) => v + speed);

      velocity.current *= 0.9; // smooth decay
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            Momentum
            <span
              className="ml-2 inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: DESNINE_RED }}
            />
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Scroll-driven motion
            <span style={{ color: DESNINE_RED }}>.</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            A velocity-based marquee that reacts naturally to your scroll speed.
          </p>
        </div>

        {/* Marquee */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border border-border bg-transparent py-10"
        >
          {/* Row 1 */}
          <div className="relative w-full overflow-hidden">
            <div
              className="whitespace-nowrap text-3xl md:text-6xl font-semibold tracking-tight"
              style={{
                transform: `translateX(${offset1 % 1000}px)`,
              }}
            >
              DESNINE • BRANDING • UI/UX • WEBSITES • AI •
              <span style={{ color: DESNINE_RED }}> ● </span>
              DESNINE • BRANDING • UI/UX • WEBSITES • AI •
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative mt-6 w-full overflow-hidden">
            <div
              className="whitespace-nowrap text-3xl md:text-6xl font-semibold tracking-tight"
              style={{
                transform: `translateX(${offset2 % 1000}px)`,
              }}
            >
              CREATIVE DIRECTION • DESIGN SYSTEMS • PERFORMANCE •
              <span style={{ color: DESNINE_RED }}> ● </span>
              CREATIVE DIRECTION • DESIGN SYSTEMS • PERFORMANCE •
            </div>
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
        </div>

        {/* Footer hint */}
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: DESNINE_RED }}
          />
          Scroll to feel the velocity
        </div>
      </div>
    </section>
  );
}
