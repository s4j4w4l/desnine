import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Hero3Section() {
  const { hero3 } = siteConfig;

  return (
    <section
      id="hero3"
      className="relative w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[600px] md:h-[800px] w-full rounded-b-xl 
          [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"
        ></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-6 py-15 max-w-3xl mx-auto gap-10">
        

        <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero3.description}
            </p>
          </div>

      </div>
    </section>
  );
}
