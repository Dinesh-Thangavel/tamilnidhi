import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Article {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string
  category: 'finance' | 'schemes'
  readingTime: string
  content: string
}

function getContentFiles(category: 'finance' | 'schemes'): string[] {
  const categoryPath = path.join(contentDirectory, category)
  
  if (!fs.existsSync(categoryPath)) {
    return []
  }
  
  return fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'))
}

function getArticleBySlug(category: 'finance' | 'schemes', slug: string): Article | null {
  const fullPath = path.join(contentDirectory, category, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  
  // Ensure date is always a string
  let dateString = ''
  if (data.date) {
    if (data.date instanceof Date) {
      dateString = data.date.toISOString().split('T')[0]
    } else if (typeof data.date === 'string') {
      dateString = data.date
    } else {
      dateString = String(data.date)
    }
  }
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    date: dateString,
    category,
    readingTime: stats.text,
    content,
  }
}

function getAllArticles(category: 'finance' | 'schemes'): Article[] {
  const files = getContentFiles(category)
  
  const articles = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return getArticleBySlug(category, slug)
    })
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  
  return articles
}

export function getFinanceArticles(): Article[] {
  return getAllArticles('finance')
}

export function getSchemesArticles(): Article[] {
  return getAllArticles('schemes')
}

export function getFinanceArticle(slug: string): Article | null {
  return getArticleBySlug('finance', slug)
}

export function getSchemesArticle(slug: string): Article | null {
  return getArticleBySlug('schemes', slug)
}

export function getAllFinanceSlugs(): string[] {
  return getContentFiles('finance').map((file) => file.replace(/\.mdx$/, ''))
}

export function getAllSchemesSlugs(): string[] {
  return getContentFiles('schemes').map((file) => file.replace(/\.mdx$/, ''))
}

