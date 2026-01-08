import Link from 'next/link'
import { getFinanceArticles } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'நிதி கல்வி | Finance Education | தமிழ் நிதி கல்வி',
  description: 'தமிழில் நிதி கல்வி கட்டுரைகள். Personal finance education in Tamil. SIP, savings, investment information.',
  keywords: ['நிதி கல்வி', 'Personal Finance Tamil', 'Finance Education Tamil'],
  openGraph: {
    title: 'நிதி கல்வி | Finance Education',
    description: 'தமிழில் நிதி கல்வி கட்டுரைகள். Personal finance education in Tamil.',
    type: 'website',
    locale: 'ta_IN',
    siteName: 'தமிழ் நிதி கல்வி',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'நிதி கல்வி',
    description: 'தமிழில் நிதி கல்வி கட்டுரைகள்.',
  },
}

export default function FinancePage() {
  const articles = getFinanceArticles()

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      <header className="mb-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-purple-100/30 rounded-3xl blur-3xl -z-10"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text tamil-text" style={{ lineHeight: '1.3', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            நிதி கல்வி
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto tamil-text" style={{ lineHeight: '1.8', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            தமிழில் நிதி கல்வி பற்றிய கட்டுரைகள். இது கல்வி நோக்கத்திற்காக மட்டுமே.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-blue-700">📚 {articles.length} கட்டுரைகள்</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article 
            key={article.slug}
            className="article-card card-hover group"
          >
            <Link href={`/finance/${article.slug}`} className="block p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="badge badge-finance">நிதி கல்வி</span>
                <span className="text-xs text-gray-500">{article.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-block text-sm">
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

