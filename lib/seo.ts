/**
 * SEO utility functions
 */

export function getArticleUrl(slug: string, category: 'finance' | 'schemes'): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tamilfinanceblog.com'
  return `${baseUrl}/${category}/${slug}`
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://tamilfinanceblog.com'
}

