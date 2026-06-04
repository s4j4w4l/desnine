"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface WorkBentoSectionProps {
  count?: number; // Optional: if passed, show only that many items
}

type WorkBentoItem = {
  id: number;
  content: ReactNode;
  title: string;
  description: string;
  href?: string;
};

export function WorkBentoSection({ count }: WorkBentoSectionProps) {
  const { title, items } = siteConfig.workbentoSection;
  const workItems = items as WorkBentoItem[];

  return (
    <section
      id="bento"
      aria-label={title}
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="pointer-events-none absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
        <div className="pointer-events-none absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {(count ? workItems.slice(0, count) : workItems).map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] cursor-pointer max-h-[400px]"
            >
              {/* Media / Content */}
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>

              {/* Text */}
              <div className="flex-1 flex-col gap-2 p-6 pr-20">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Circular button (opens in new tab) */}
              <Link
                href={item.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title}`}
                className="
                  absolute bottom-6 right-6
                  inline-flex items-center justify-center
                  size-10 rounded-full
                  bg-neutral-900 text-white
                  shadow-md transition-transform duration-300
                  hover:scale-110 hover:shadow-lg
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400/50
                  group
                "
              >
                {/* SVG Arrow that rotates on hover (consistent across devices) */}
                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    w-5 h-5
                    transition-transform duration-300
                    group-hover:rotate-45
                  "
                />

                {/* subtle halo effect on hover */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0 rounded-full pointer-events-none
                    transition-[box-shadow] duration-300
                    group-hover:shadow-[0_0_0_6px_rgba(38,38,38,0.2)]
                  "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
