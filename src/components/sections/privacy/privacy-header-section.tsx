"use client";

import { useMemo } from "react";

export function PrivacyHeaderSection() {
  const lastUpdated = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  return (
    <header className="relative px-6 md:px-12">
      <div className="max-w-4xl mx-auto py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg p-8 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6">
            This website is operated by <span className="font-medium">Desnine Studio</span> (“we”, “us”, “our”). We collects, uses, and
            protects your information when you use our website, products, or services (the “Service”). We respect the privacy of users of our website and recognise that when you choose to
            provide us with information about yourself, you trust us to act in a responsible manner with that information.
          </p>

          <div className="mt-2 mb-6 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              GDPR-Friendly
            </span>
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              CCPA-Aware
            </span>
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5">
              Cookie Controls
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </header>
  );
}
