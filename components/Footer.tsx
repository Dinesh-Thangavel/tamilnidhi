import Link from 'next/link'
import AdSense from '@/components/AdSense'
import VisitorCounter from '@/components/VisitorCounter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Footer Ad */}
        <div className="mb-8 flex justify-center">
          <AdSense slot="footer-ad" format="horizontal" position="footer" />
        </div>
        
        {/* Visitor Counter */}
        <div className="mb-8">
          <VisitorCounter />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              தமிழ் நிதி
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள்.
              கல்வி நோக்கத்திற்காக மட்டுமே.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            &copy; {currentYear} <span className="text-white font-semibold">தமிழ் நிதி</span>. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.
          </p>
          <p className="mt-3 text-xs text-gray-500 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
            இந்த தகவல்கள் கல்வி நோக்கத்திற்காக மட்டுமே. நிதி ஆலோசனை அல்ல.
          </p>
        </div>
      </div>
    </footer>
  )
}

