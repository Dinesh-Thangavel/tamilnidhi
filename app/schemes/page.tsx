import Link from 'next/link'
import { getSchemesArticles } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'அரசு திட்டங்கள் | Government Schemes | தமிழ் நிதி கல்வி',
  description: 'தமிழில் அரசு திட்டங்கள் பற்றிய தகவல்கள். Government schemes information in Tamil. PMAY, pension schemes, benefits.',
  keywords: ['அரசு திட்டங்கள்', 'Government Schemes Tamil', 'Tamil Schemes'],
  openGraph: {
    title: 'அரசு திட்டங்கள் | Government Schemes',
    description: 'தமிழில் அரசு திட்டங்கள் பற்றிய தகவல்கள். Government schemes information in Tamil.',
    type: 'website',
    locale: 'ta_IN',
    siteName: 'தமிழ் நிதி கல்வி',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'அரசு திட்டங்கள்',
    description: 'தமிழில் அரசு திட்டங்கள் பற்றிய தகவல்கள்.',
  },
}

export default function SchemesPage() {
  const articles = getSchemesArticles()

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      <header className="mb-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-emerald-100/30 to-teal-100/30 rounded-3xl blur-3xl -z-10"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent tamil-text" style={{ lineHeight: '1.3', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            அரசு திட்டங்கள்
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto tamil-text" style={{ lineHeight: '1.8', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            தமிழில் அரசு திட்டங்கள் பற்றிய தகவல்கள். இது கல்வி நோக்கத்திற்காக மட்டுமே.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-green-700">🏛️ {articles.length} திட்டங்கள்</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article 
            key={article.slug}
            className="article-card card-hover group"
          >
            <Link href={`/schemes/${article.slug}`} className="block p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="badge badge-schemes">அரசு திட்டம்</span>
                <span className="text-xs text-gray-500">{article.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                <span className="text-green-600 font-semibold group-hover:translate-x-1 transition-transform inline-block text-sm">
                  படிக்க →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">கட்டுரைகள் இதுவரை சேர்க்கப்படவில்லை.</p>
        </div>
      )}
    </div>
  )
}

