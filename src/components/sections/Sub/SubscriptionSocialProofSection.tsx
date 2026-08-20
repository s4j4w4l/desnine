"use client";

import { ArrowDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function SubscriptionSocialProofSection() {
  const { t } = useLang();
  const logos = ["DESNINE STUDIO", "KYNEX", "FINCHLEY", "BOLT", "ZERANI", "AVELON", "DESNINE STUDIO"];

  return (
    <section className="w-full overflow-hidden border-y border-white/10 bg-[#080808] text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-16 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-16 md:py-24">
        <div>
          <div className="mb-4 flex gap-2 text-2xl text-[#B91C1C]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
            {t.sub.rating}
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 md:text-sm">
            {t.sub.tagline}
          </p>
        </div>

        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          className="group flex items-center gap-5 self-start md:self-auto"
        >
          <span className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
            {t.sub.scrollExplore}
          </span>

          <div className="relative flex h-12 w-12 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-[#B91C1C]">
            <span className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-white/50" />
            <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-white/50" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white/50" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white/50" />
            <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#EF4444]" />
          </div>
        </button>
      </div>

      <div className="border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-[150px] items-center justify-center border-r border-white/10 bg-black/20 transition-all duration-300 hover:bg-[#B91C1C]/10"
            >
              <span className="text-3xl font-black tracking-[-0.08em] text-zinc-500 transition-colors duration-300 hover:text-white md:text-4xl">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
