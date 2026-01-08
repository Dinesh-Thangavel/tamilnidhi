import Link from 'next/link'
import { getFinanceArticles, getSchemesArticles } from '@/lib/content'
import type { Metadata } from 'next'
import VisitorCounter from '@/components/VisitorCounter'

export const metadata: Metadata = {
  title: 'தமிழ் நிதி கல்வி | Personal Finance & Government Schemes',
  description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள். Learn about personal finance and government schemes in Tamil.',
  keywords: ['நிதி கல்வி', 'அரசு திட்டங்கள்', 'Personal Finance Tamil', 'Government Schemes Tamil'],
  openGraph: {
    title: 'தமிழ் நிதி கல்வி | Personal Finance & Government Schemes',
    description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள்.',
    type: 'website',
    locale: 'ta_IN',
    siteName: 'தமிழ் நிதி கல்வி',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'தமிழ் நிதி கல்வி',
    description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள்.',
  },
}

export default function HomePage() {
  const financeArticles = getFinanceArticles().slice(0, 4)
  const schemesArticles = getSchemesArticles().slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-indigo-100/20 to-purple-100/20 rounded-3xl blur-3xl -z-10"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tamil-text" style={{ lineHeight: '1.3', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            தமிழ் நிதி கல்வி
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 tamil-text" style={{ lineHeight: '1.8', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்களை தமிழில் அறிந்து கொள்ளுங்கள்.
            <span className="block mt-2 text-base text-gray-600" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>இது கல்வி நோக்கத்திற்காக மட்டுமே. நிதி ஆலோசனை அல்ல.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-blue-100">
              <span className="text-sm font-medium text-gray-700">📚 60+ கட்டுரைகள்</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-green-100">
              <span className="text-sm font-medium text-gray-700">💡 எளிய விளக்கம்</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-indigo-100">
              <span className="text-sm font-medium text-gray-700">🇮🇳 இந்திய மையம்</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <section className="mb-16">
        <VisitorCounter />
      </section>

      {/* Trust & Purpose Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-500 rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">ℹ️</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">முக்கிய குறிப்பு</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                இந்த வலைத்தளம் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய
                தகவல்களை பொதுமக்களுக்கு எளிதாக விளக்க உருவாக்கப்பட்டது.
                <span className="font-medium text-gray-900 block mt-2"> இது முதலீட்டு ஆலோசனை அல்ல.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Articles Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title text-gray-900">நிதி கல்வி</h2>
            <p className="text-gray-600 mt-2">நிதி அடிப்படைகள் மற்றும் மேலாண்மை</p>
          </div>
          <Link 
            href="/finance" 
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            அனைத்தையும் பார்க்க
            <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {financeArticles.map((article) => (
            <article 
              key={article.slug}
              className="article-card card-hover group"
            >
              <Link href={`/finance/${article.slug}`} className="block p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="badge badge-finance">நிதி கல்வி</span>
                  <span className="text-xs text-gray-500">{article.readingTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">📖 படிக்க</span>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link 
            href="/finance" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            அனைத்தையும் பார்க்க →
          </Link>
        </div>
      </section>

      {/* Schemes Articles Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title text-gray-900">அரசு திட்டங்கள்</h2>
            <p className="text-gray-600 mt-2">அரசு உதவிகள் மற்றும் சேவைகள்</p>
          </div>
          <Link 
            href="/schemes" 
            className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-green-50"
          >
            அனைத்தையும் பார்க்க
            <span className="text-lg">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemesArticles.map((article) => (
            <article 
              key={article.slug}
              className="article-card card-hover group"
            >
              <Link href={`/schemes/${article.slug}`} className="block p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="badge badge-schemes">அரசு திட்டம்</span>
                  <span className="text-xs text-gray-500">{article.readingTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">📖 படிக்க</span>
                  <span className="text-green-600 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link 
            href="/schemes" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            அனைத்தையும் பார்க்க →
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-indigo-100">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            முக்கிய குறிப்பு
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
            இந்த வலைத்தளத்தில் உள்ள தகவல்கள் <span className="font-semibold text-gray-900">கல்வி நோக்கத்திற்காக மட்டுமே</span>. 
            இது நிதி ஆலோசனை அல்ல. எந்தவொரு நிதி முடிவையும் எடுப்பதற்கு முன், 
            தகுதிவாய்ந்த நிதி ஆலோசகரிடம் ஆலோசனை பெறுங்கள்.
          </p>
        </div>
      </section>
    </div>
  )
}

