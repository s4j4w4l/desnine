import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES, PUBLISHED_ARTICLES } from "@/lib/articlesData";
import { ContactUsSection } from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import {
  BackToArticlesLink,
  MinReadBadge,
  RelatedReadsHeading,
} from "@/components/sections/article/article-ui-strings";
import { siteConfig } from "@/lib/site";

const SLUG = "future-of-branding-ai";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

export const metadata = (() => {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) return {};
  const url = `${siteConfig.url}/article/${article.slug}`;
  const description = `${article.excerpt} By Desnine Studio, a multi-disciplinary, independent design studio.`;
  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      url,
      type: "article",
      publishedTime: article.date,
      authors: ["Desnine Studio"],
      images: [{ url: article.cover }],
    },
    alternates: { canonical: url },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.cover],
    },
  };
})();

export default function Page() {
  const article = ARTICLES.find((a) => a.slug === SLUG);
  if (!article) notFound();

  const related = PUBLISHED_ARTICLES.filter((a) => a.slug !== SLUG).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: `${siteConfig.url}${article.cover}`,
    mainEntityOfPage: `${siteConfig.url}${article.href}`,
    author: { "@type": "Organization", name: "Desnine Studio", url: siteConfig.url },
    publisher: { "@type": "Organization", name: "Desnine Studio", url: siteConfig.url },
  };

  return (
    <main className="w-full text-foreground bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[240px] md:h-[320px]">
          <Image src={article.cover} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/70 dark:bg-black/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-12 pb-8">
              <BackToArticlesLink />
              <h1 className="mt-2 text-3xl md:text-5xl font-bold text-foreground max-w-4xl">
                {article.title}
              </h1>
              <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                <span>{formatDate(article.date)}</span>
                <MinReadBadge mins={article.readMins} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-6 md:px-12 py-10">
        <article className="prose dark:prose-invert max-w-3xl mx-auto prose-headings:scroll-mt-24">
          <p className="lead">
            AI won&apos;t replace creative direction — it will amplify it. Here&apos;s a practical workflow we use.
          </p>

          <h2>1) Ideation with constraints</h2>
          <p>
            Start with brand pillars and guardrails. Use AI for breadth, then narrow with human judgment.
          </p>

          <h2>2) Systems over vibes</h2>
          <ul>
            <li>Define a typographic rhythm and spacing scale.</li>
            <li>Lock a color system and semantic tokens.</li>
            <li>Document patterns in a living guideline.</li>
          </ul>

          <h2>3) Review loops</h2>
          <p>
            Keep feedback short, structured, and testable. Prototype quickly, test assumptions, iterate.
          </p>
        </article>
      </section>

      {related.length > 0 && (
        <section className="px-6 md:px-12 py-10">
          <div className="max-w-5xl mx-auto">
            <RelatedReadsHeading />
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={a.href}
                  className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition bg-card"
                >
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
