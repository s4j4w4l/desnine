import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PUBLISHED_ARTICLES } from "@/lib/articlesData";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import {
  BackToArticlesLink,
  MinReadBadge,
  RelatedReadsHeading,
} from "@/components/sections/article/article-ui-strings";

const SLUG = "minimalist-design";
function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}
export const metadata = (() => {
  const article = PUBLISHED_ARTICLES.find((a) => a.slug === SLUG);
  if (!article) return {};
  const url = `https://www.desnine.com/article/${article.slug}`;
  return {
    title: `${article.title} | Desnine Studio`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, url, type: "article", images: [{ url: article.cover }], siteName: "Desnine Studio", publishedTime: article.date, authors: ["Desnine Studio"] },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: [article.cover] },
    alternates: { canonical: url },
  };
})();

export default function Page() {
  const article = PUBLISHED_ARTICLES.find((a) => a.slug === SLUG);
  if (!article) notFound();
  const related = PUBLISHED_ARTICLES.filter((a) => a.slug !== SLUG).slice(0, 3);

  return (
    <main className="w-full text-foreground bg-background">
      <header className="relative w-full overflow-hidden">
        <div className="relative h-[240px] md:h-[320px]">
          <Image src={article.cover} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/70 dark:bg-black/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-12 pb-8">
              <BackToArticlesLink />
              <h1 className="mt-2 text-3xl md:text-5xl font-bold">{article.title}</h1>
              <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                <span>{formatDate(article.date)}</span>
                <MinReadBadge mins={article.readMins} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 md:px-12 py-10">
        <article className="prose dark:prose-invert max-w-3xl mx-auto">
          <p className="lead">Minimalism that converts is a system, not an aesthetic.</p>
          <h2>Whitespace as structure</h2>
          <p>Use whitespace to create rhythm and guide attention to primary actions.</p>
          <h2>Hierarchy that sells</h2>
          <p>Design the visual path: headline → proof → CTA — everything else supports.</p>
        </article>
      </section>

      {related.length > 0 && (
        <section className="px-6 md:px-12 py-10">
          <div className="max-w-5xl mx-auto">
            <RelatedReadsHeading />
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} href={a.href} className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition bg-card">
                  <div className="relative h-40">
                    <Image src={a.cover} alt={a.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium leading-snug group-hover:underline">{a.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
