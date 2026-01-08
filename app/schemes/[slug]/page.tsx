import { notFound } from 'next/navigation'
import { getSchemesArticle, getAllSchemesSlugs, getSchemesArticles } from '@/lib/content'
import { formatDate, formatDateForOG } from '@/lib/utils'
import { getArticleUrl, getSiteUrl } from '@/lib/seo'
import AdSense from '@/components/AdSense'
import MarkdownContent from '@/components/MarkdownContent'
import type { Metadata } from 'next'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSchemesSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getSchemesArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
  
  const articleUrl = getArticleUrl(params.slug, 'schemes')
  const siteUrl = getSiteUrl()
  
  return {
    title: `${article.title} | தமிழ் நிதி கல்வி`,
    description: article.description || article.excerpt,
    keywords: ['அரசு திட்டங்கள்', 'Government Schemes Tamil', 'Tamil Schemes', article.title],
    openGraph: {
      title: article.title,
      description: article.description || article.excerpt,
      type: 'article',
      url: articleUrl,
      siteName: 'தமிழ் நிதி கல்வி',
      locale: 'ta_IN',
      publishedTime: formatDateForOG(article.date),
      authors: ['தமிழ் நிதி கல்வி'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.excerpt,
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

export default function SchemesArticlePage({ params }: PageProps) {
  const article = getSchemesArticle(params.slug)
  
  if (!article) {
    notFound()
  }
  
  // Get related articles (same category, excluding current)
  const allSchemesArticles = getSchemesArticles()
  const relatedArticles = allSchemesArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3)
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">முகப்பு</Link>
        <span className="mx-2">/</span>
        <Link href="/schemes" className="hover:text-blue-600">அரசு திட்டங்கள்</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{article.title}</span>
      </nav>
      
      <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
        </header>
        
        {/* Ad After Introduction */}
        <div className="mb-8 flex justify-center">
          <AdSense slot="after-intro" format="horizontal" position="header" />
        </div>
        
        {/* Article Content */}
        <div className="prose-tamil">
          <MarkdownContent content={article.content} />
        </div>
        
        {/* Mid Content Ad */}
        <div className="my-12 flex justify-center">
          <AdSense slot="mid-content" format="rectangle" position="content" />
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>குறிப்பு:</strong> இந்த தகவல் கல்வி நோக்கத்திற்காக மட்டுமே. 
            இது நிதி ஆலோசனை அல்ல. எந்தவொரு நிதி முடிவையும் எடுப்பதற்கு முன், 
            தகுதிவாய்ந்த நிதி ஆலோசகரிடம் ஆலோசனை பெறுங்கள்.
          </p>
        </div>
      </article>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">தொடர்புடைய கட்டுரைகள்</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <article 
                key={related.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <Link href={`/schemes/${related.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                    {related.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
      
      {/* Back to Schemes */}
      <div className="mt-8 text-center">
        <Link 
          href="/schemes" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← அரசு திட்டங்கள் பக்கத்திற்கு திரும்பு
        </Link>
      </div>
    </div>
  )
}

