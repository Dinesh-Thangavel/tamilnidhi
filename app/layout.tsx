import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'தமிழ் நிதி கல்வி | Tamil Personal Finance & Government Schemes',
    template: '%s | Tamil Finance Blog'
  },
  description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள். Personal finance education and government schemes information in Tamil.',
  keywords: ['Tamil Finance', 'Personal Finance Tamil', 'Government Schemes Tamil', 'தமிழ் நிதி', 'அரசு திட்டங்கள்'],
  authors: [{ name: 'Tamil Finance Blog' }],
  openGraph: {
    type: 'website',
    locale: 'ta_IN',
    url: 'https://tamilnidhi.com',
    siteName: 'Tamil Finance Blog',
    title: 'தமிழ் நிதி கல்வி | Tamil Personal Finance & Government Schemes',
    description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள்.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ta" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

