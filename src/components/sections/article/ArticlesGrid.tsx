"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { Article } from "@/lib/articlesData";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format";


export default function ArticlesGrid({
    items,
    onLoadMore,
    canLoadMore,
}: {
    items: Article[];
    onLoadMore: () => void;
    canLoadMore: boolean;
}) {
    return (
        <section id="articles" className="px-6 md:px-12 py-8 md:py-12">
            <div className="grid grid-cols-2 gap-6">
            {items.map((a) => (
                <Card key={a.id} className="overflow-hidden hover:shadow-lg transition flex flex-col bg-card text-card-foreground border border-border h-[420px]">
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <Image src={a.cover} alt={a.title} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" className="object-cover" />
                    </div>
                        <CardContent className="p-5 flex-1 flex flex-col">
                    <p className="text-xs text-muted-foreground">{formatDate(a.date)} • {a.readMins} min</p>
                        <Link href={a.href} className="block mt-1 text-lg font-semibold leading-snug hover:underline line-clamp-2 text-foreground" title={a.title}>
                    {a.title}
                        </Link>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                    <div className="mt-auto" />
                        <Link href={a.href} className="mt-3 inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline">
                    Read <ChevronRight className="size-4" />
                        </Link>
                        </CardContent>
                </Card>
            ))}
        </div>


        {canLoadMore && (
            <div className="mt-8 flex justify-center">
                <Button onClick={onLoadMore} className="bg-red-600 hover:bg-red-700 ring-red-500">
            Load more
                </Button>
            </div>
        )}


        {!items.length && (
            <p className="text-sm text-muted-foreground text-center">No results. Try another term.</p>
        )}
    </section>
);
}