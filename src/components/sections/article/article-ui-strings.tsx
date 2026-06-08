"use client";

import Link from "next/link";
import { ChevronLeft, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function BackToArticlesLink() {
  const { t } = useLang();
  return (
    <Link
      href="/article"
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
    >
      <ChevronLeft className="size-4" />
      {t.articlePage.backToArticles}
    </Link>
  );
}

export function MinReadBadge({ mins }: { mins: number }) {
  const { t } = useLang();
  return (
    <span className="inline-flex items-center gap-1">
      <Clock className="size-4" /> {mins} {t.articlePage.minRead}
    </span>
  );
}

export function RelatedReadsHeading() {
  const { t } = useLang();
  return <h3 className="text-xl font-semibold mb-6">{t.articlePage.relatedReads}</h3>;
}
