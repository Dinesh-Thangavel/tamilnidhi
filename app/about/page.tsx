import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'பற்றி | About Us',
  description: 'தமிழ் நிதி கல்வி வலைத்தளம் பற்றி அறிந்து கொள்ளுங்கள்.',
  openGraph: {
    title: 'பற்றி | About Us',
    description: 'தமிழ் நிதி கல்வி வலைத்தளம் பற்றி.',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">பற்றி</h1>
        
        <div className="prose-tamil">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">நமது நோக்கம்</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              தமிழ் நிதி கல்வி வலைத்தளம் தமிழ் மொழியில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் 
              பற்றிய தகவல்களை வழங்குவதை நோக்கமாகக் கொண்டுள்ளது. நிதி கல்வியை எளிய, 
              புரிந்துகொள்ளக்கூடிய வடிவத்தில் தமிழ் மொழியில் வழங்குவதே நமது முதன்மை நோக்கம்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">நாம் என்ன செய்கிறோம்</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>நிதி கல்வி கட்டுரைகளை தமிழில் வழங்குகிறோம்</li>
              <li>அரசு திட்டங்கள் பற்றிய தகவல்களை பகிர்கிறோம்</li>
              <li>நிதி திட்டமிடல், சேமிப்பு, முதலீடு போன்ற தலைப்புகளில் கல்வி உள்ளடக்கத்தை வழங்குகிறோம்</li>
              <li>எளிய, புரிந்துகொள்ளக்கூடிய மொழியில் தகவல்களை வழங்குகிறோம்</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">முக்கிய குறிப்பு</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                <strong>இந்த வலைத்தளத்தில் உள்ள அனைத்து தகவல்களும் கல்வி நோக்கத்திற்காக மட்டுமே.</strong>
                இது நிதி ஆலோசனை அல்ல. எந்தவொரு நிதி முடிவையும் எடுப்பதற்கு முன், 
                தகுதிவாய்ந்த நிதி ஆலோசகரிடம் ஆலோசனை பெறுவது மிகவும் முக்கியம்.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">தொடர்பு</h2>
            <p className="text-gray-700 leading-relaxed">
              எங்களுடன் தொடர்பு கொள்ள, தயவுசெய்து{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                தொடர்பு பக்கம்
              </a>
              ஐப் பார்வையிடவும்.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}

