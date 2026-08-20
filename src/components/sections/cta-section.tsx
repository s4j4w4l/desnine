import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Icons } from "@/components/icons";

export function CTASection() {
  const { ctaSection } = siteConfig;

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full px-5 md:px-10"
    >
      <div className="w-full">
        <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
          <Image
            src={ctaSection.backgroundImage}
            alt="Agent CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            fill
            priority
          />
          <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
              {ctaSection.title}
            </h2>
            <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
              <Link
                href={ctaSection.button.href}
                className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
              >
                {ctaSection.button.text}
              </Link>
              <span className="text-white text-sm">{ctaSection.subtext}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Information Section */}
      <div className="w-full px-3 md:px-6 py-16">
        <div className="max-w-4xl mx-auto text-left">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-8">
            <Icons.logo className="size-12 md:size-14" />
            <h2 className="text-lg md:text-xl font-semibold text-primary">
              Desnine Studio
            </h2>
          </div>
          
          {/* Company Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
          Desnine Studio is a multi-disciplinary, independent design studio helping brands stand out through strong creative direction, clean aesthetics, and emotionally resonant visuals.
          Based in Canada, we work globally.
          </p>
        </div>
      </div>
    </section>
  );
}
