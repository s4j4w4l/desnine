import { siteConfig } from "@/lib/config";
import { HeroVideoSection } from "./hero-video-section";
import { DesnineTrustBadge } from "./DesnineTrustBadge";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="relative w-full">
      <div className="relative flex w-full flex-col items-center px-6">
        <div className="absolute inset-x-0 top-80">
          <div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
          <p className="flex h-8 items-center gap-2 rounded-full border border-border bg-accent px-3 text-sm">
            {hero.badgeIcon}
            {hero.badge}
          </p>

          <h1 className="text-center text-[clamp(32px,6vw,72px)] font-bold leading-[0.95] tracking-[-0.06em]">
            <span className="hero-line block">
              <span style={{ animationDelay: "0.1s" }}>
                <span className="text-zinc-950 dark:text-white">
                  The Standard
                </span>{" "}
                <span className="text-zinc-500 dark:text-zinc-400">
                  Your
                </span>
              </span>
            </span>

            <span className="hero-line block">
              <span style={{ animationDelay: "0.25s" }}>
                <span className="text-[#B91C1C] dark:text-[#EF4444]">
                  Competitors
                </span>{" "}
                <span className="text-zinc-950 dark:text-white">
                  Wish They
                </span>
              </span>
            </span>

            <span className="hero-line block">
              <span style={{ animationDelay: "0.4s" }}>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Could Call
                </span>{" "}
                <span className="text-[#B91C1C] dark:text-[#EF4444]">
                  Their Own.
                </span>
              </span>
            </span>
          </h1>

          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-balance text-center text-base font-medium leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              {hero.description}
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <DesnineTrustBadge />
        </div>
      </div>

      <HeroVideoSection />
    </section>
  );
}