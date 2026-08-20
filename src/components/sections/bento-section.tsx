"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

interface BentoSectionProps {
  count?: number; // Optional: if passed, show only that many items
}

export function BentoSection({ count }: BentoSectionProps) {
  const { t } = useLang();
  const { items } = siteConfig.bentoSection;
  const displayItems = count ? items.slice(0, count) : items;
  const [openItemId, setOpenItemId] = useState<
    (typeof displayItems)[number]["id"] | null
  >(null);

  const toggleItem = (id: (typeof displayItems)[number]["id"]) => {
    setOpenItemId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        {/* Section header */}
        {/* <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {description}
          </p>
        </SectionHeader> */}

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {displayItems.map((item, i) => {
            const isOpen = openItemId === item.id;
            const translated = t.bentoSection.items[i];

            return (
              <div
                key={item.id}
                className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group max-h-[400px]"
              >
                <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                  {item.content}
                </div>
                <div className="flex-1 flex-col gap-2 p-6 w-full">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="text-lg tracking-tighter font-semibold">
                      {translated?.title ?? item.title}
                    </span>
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-secondary/20 bg-secondary text-lg leading-none text-white shadow-lg transition-all duration-300 group-hover:bg-secondary/90 group-hover:border-secondary/40 group-hover:shadow-xl"
                      aria-hidden="true"
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-muted-foreground">
                      {translated?.description ?? item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA button if count is set */}
        {count && (
          <div className="w-full flex justify-center mt-10 pb-10">
            <Link
              href="/services"
              className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-secondary/20 hover:border-secondary/40"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                {t.bentoSection.cta}
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
