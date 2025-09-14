"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import LazySection from "@/components/sections/article/LazySection";
import BannerHeading from "@/components/sections/article/BannerHeading";
import ServicesMarquee from "@/components/sections/article/ServicesMarquee";
import FeaturedHero from "@/components/sections/article/FeaturedHero";
import ArticleSearch from "@/components/sections/article/ArticleSearch";
import ArticlesGrid from "@/components/sections/article/ArticlesGrid";
import { ARTICLES } from "@/lib/articlesData";
import { useDebounced } from "@/lib/useDebounced";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const debounced = useDebounced(query, 300);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut: "/" focus search, Esc clears
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const active = document.activeElement as HTMLElement | null;
      const typing = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const featured = useMemo(() => ARTICLES.find((a) => a.featured) ?? ARTICLES[0], []);
  const rest = useMemo(() => ARTICLES.filter((a) => a.id !== featured.id), [featured.id]);

  const filtered = useMemo(() => {
    let arr = [...rest];
    if (debounced) {
      const q = String(debounced).toLowerCase();
      arr = arr.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    arr.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    return arr;
  }, [debounced, rest]);

  const visible = filtered.slice(0, limit);
  const canLoadMore = limit < filtered.length;

  return (
    <main className="w-full text-foreground bg-background">
      <BannerHeading />
      <LazySection minHeight={56}>
        <ServicesMarquee />
      </LazySection>
      <FeaturedHero article={featured} />
      <LazySection minHeight={72}>
        <ArticleSearch query={query} setQuery={setQuery} inputRef={inputRef} />
      </LazySection>
      <LazySection minHeight={640} rootMargin="400px">
        <ArticlesGrid
          items={visible}
          onLoadMore={() => setLimit((n) => n + 4)}
          canLoadMore={canLoadMore}
        />
      </LazySection>
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
