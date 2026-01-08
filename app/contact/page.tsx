import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'தொடர்பு | Contact Us',
  description: 'தமிழ் நிதி கல்வி வலைத்தளத்துடன் தொடர்பு கொள்ளுங்கள்.',
  openGraph: {
    title: 'தொடர்பு | Contact Us',
    description: 'தமிழ் நிதி கல்வி வலைத்தளத்துடன் தொடர்பு கொள்ளுங்கள்.',
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
          தொடர்பு
        </h1>
        
        <div className="prose-tamil">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              எங்களைத் தொடர்பு கொள்ளுங்கள்
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineHeight: '1.8' }}>
              உங்களுக்கு எந்தவொரு கேள்விகள் அல்லது கருத்துகள் இருந்தால், 
              தயவுசெய்து கீழே உள்ள படிவத்தைப் பயன்படுத்தி எங்களைத் தொடர்பு கொள்ளுங்கள். 
              உங்களின் கருத்துகள் மற்றும் பரிந்துரைகள் எங்களுக்கு மிகவும் முக்கியமானவை.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              தொடர்பு தகவல்
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-3 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
                <strong>வலைத்தளம்:</strong> தமிழ் நிதி கல்வி
              </p>
              <p className="text-gray-700 mb-3 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
                <strong>நோக்கம்:</strong> கல்வி மட்டும் (Educational Only)
              </p>
              <p className="text-gray-700 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
                <strong>மொழி:</strong> தமிழ்
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 tamil-text" style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}>
              தொடர்பு படிவம்
            </h2>
            <ContactForm />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">குறிப்பு</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                இந்த வலைத்தளம் கல்வி நோக்கத்திற்காக மட்டுமே. நிதி ஆலோசனை அல்ல. 
                எந்தவொரு நிதி முடிவையும் எடுப்பதற்கு முன், தகுதிவாய்ந்த நிதி ஆலோசகரிடம் 
                ஆலோசனை பெறுவது மிகவும் முக்கியம்.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">தனியுரிமை</h2>
            <p className="text-gray-700 leading-relaxed">
              உங்களின் தனியுரிமை எங்களுக்கு மிகவும் முக்கியமானது. எங்களின் 
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                {' '}தனியுரிமை கொள்கை
              </a>
              ஐப் படிக்கவும்.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}

