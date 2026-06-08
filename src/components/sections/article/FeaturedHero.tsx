"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import type { Article } from "@/lib/articlesData";
import { formatDate } from "@/lib/format";
import { useLang } from "@/contexts/LanguageContext";

export default function FeaturedHero({ article }: { article: Article }) {
  const reduceMotion = useReducedMotion();
  const { t } = useLang();

  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <Image src={article.cover} alt={article.title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 flex flex-col justify-end p-6 md:p-12">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 dark:text-white text-2xl md:text-4xl font-bold max-w-3xl line-clamp-2"
        >
          {article.title}
        </motion.h2>
        <p className="mt-2 text-gray-800 dark:text-gray-200 max-w-2xl line-clamp-3">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-4" /> {article.readMins} min
          </span>
          <span>{formatDate(article.date)}</span>
        </div>
        <Button asChild className="mt-5 bg-red-600 hover:bg-red-700 ring-red-500 w-fit">
          <Link href={article.href}>{t.articles.readArticle}</Link>
        </Button>
      </div>
    </section>
  );
}
