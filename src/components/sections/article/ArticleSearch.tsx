"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RefObject } from "react";
import { useLang } from "@/contexts/LanguageContext";

type ArticleSearchProps = {
  query: string;
  setQuery: (v: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function ArticleSearch({ query, setQuery, inputRef }: ArticleSearchProps) {
  const { t } = useLang();

  return (
    <section className="px-6 md:px-12 py-6 border-b border-border">
      <div className="relative w-full md:max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          id="article-search"
          placeholder={t.articles.searchPlaceholder}
          aria-label="Search articles"
          className="pl-9 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-red-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </section>
  );
}
