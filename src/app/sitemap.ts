import { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/articlesData'

// Only slugs that have a real page.tsx route under src/app/article/<slug>/.
// The rest of ARTICLES is listing-page content without a published article yet.
const PUBLISHED_ARTICLE_SLUGS = new Set(['future-of-branding-ai', 'minimalist-design'])

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://desnine.com'

  const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/work', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/why', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/article', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Published case studies; other project pages remain intentionally unindexed.
  const workSlugs = ['marche_main', 'biotasup']

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...workSlugs.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...ARTICLES
      .filter((article) => PUBLISHED_ARTICLE_SLUGS.has(article.slug))
      .map((article) => ({
        url: `${baseUrl}${article.href}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
  ]
}
