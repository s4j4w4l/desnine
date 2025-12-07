import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Hero2Section() {
  const { hero2 } = siteConfig;

  return (
    <section
      id="hero2"
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
        
        {/* Badge */}
        {hero2.badge && (
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero2.badgeIcon}
            {hero2.badge}
          </p>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-center text-primary text-balance">
          {hero2.title}
        </h1>

      </div>
    </section>
  );
}
