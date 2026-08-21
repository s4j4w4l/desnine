import { MetadataRoute } from 'next'
import { PUBLISHED_ARTICLES } from '@/lib/articlesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.desnine.com'

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
  const workSlugs = ['marche_main']

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path}`,
      changeFrequency,
      priority,
    })),
    ...workSlugs.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...PUBLISHED_ARTICLES.map((article) => ({
        url: `${baseUrl}${article.href}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    })),
  ]
}
