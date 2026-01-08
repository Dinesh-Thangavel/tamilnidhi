import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'மறுப்பு | Disclaimer',
  description: 'தமிழ் நிதி கல்வி வலைத்தளத்தின் மறுப்பு அறிக்கை.',
  openGraph: {
    title: 'மறுப்பு | Disclaimer',
    description: 'தமிழ் நிதி கல்வி வலைத்தளத்தின் மறுப்பு அறிக்கை.',
  },
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">மறுப்பு</h1>
        
        <div className="prose-tamil">
          <section className="mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded mb-6">
              <p className="text-gray-800 leading-relaxed font-semibold mb-3">
                <strong>முக்கிய அறிவிப்பு:</strong>
              </p>
              <p className="text-gray-800 leading-relaxed font-semibold mb-2">
                This content is for educational purposes only.
              </p>
              <p className="text-gray-800 leading-relaxed font-semibold">
                This is not financial advice.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 text-sm">
                இந்த வலைத்தளத்தில் உள்ள அனைத்து தகவல்களும் கல்வி நோக்கத்திற்காக மட்டுமே. 
                இது நிதி ஆலோசனை அல்ல.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">கல்வி நோக்கம் மட்டும்</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              தமிழ் நிதி கல்வி வலைத்தளத்தில் வழங்கப்படும் அனைத்து தகவல்களும், கட்டுரைகளும், 
              உள்ளடக்கமும் கல்வி நோக்கத்திற்காக மட்டுமே வழங்கப்படுகின்றன. இவை:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>நிதி ஆலோசனை அல்ல</li>
              <li>முதலீட்டு ஆலோசனை அல்ல</li>
              <li>பங்கு சந்தை குறிப்புகள் அல்ல</li>
              <li>நிதி திட்டமிடல் ஆலோசனை அல்ல</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ஆலோசனை பெறுங்கள்</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              எந்தவொரு நிதி முடிவையும் எடுப்பதற்கு முன், பின்வரும் விஷயங்களை செய்யுமாறு 
              பரிந்துரைக்கிறோம்:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>தகுதிவாய்ந்த நிதி ஆலோசகரிடம் ஆலோசனை பெறுங்கள்</li>
              <li>உங்கள் நிதி நிலைமையை முழுமையாக புரிந்து கொள்ளுங்கள்</li>
              <li>உங்கள் சொந்த ஆராய்ச்சியைச் செய்யுங்கள்</li>
              <li>உங்கள் சொந்த ஆபத்து சகிப்புத்தன்மையைப் புரிந்து கொள்ளுங்கள்</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">பொறுப்பு மறுப்பு</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              இந்த வலைத்தளத்தில் உள்ள தகவல்களைப் பயன்படுத்துவதால் ஏற்படும் எந்தவொரு 
              நிதி இழப்பிற்கும், நாங்கள் பொறுப்பேற்க மாட்டோம். பயனர்கள் தங்கள் சொந்த 
              ஆபத்தில் இந்த தகவல்களைப் பயன்படுத்துகிறார்கள்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">துல்லியம்</h2>
            <p className="text-gray-700 leading-relaxed">
              இந்த வலைத்தளத்தில் உள்ள தகவல்கள் துல்லியமாக இருக்க முயற்சிக்கிறோம், 
              ஆனால் எந்தவொரு தகவலின் துல்லியத்தையும் உறுதிப்படுத்த முடியாது. 
              தகவல்கள் மாறக்கூடும், மேலும் சில தகவல்கள் காலாவதியாக இருக்கலாம்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">மூன்றாம் தரப்பு இணைப்புகள்</h2>
            <p className="text-gray-700 leading-relaxed">
              இந்த வலைத்தளம் மூன்றாம் தரப்பு வலைத்தளங்களுக்கு இணைப்புகளைக் கொண்டிருக்கலாம். 
              இந்த இணைப்புகளின் உள்ளடக்கத்திற்கு நாங்கள் பொறுப்பேற்க மாட்டோம்.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ஏற்றுக்கொள்ளல்</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                இந்த வலைத்தளத்தைப் பயன்படுத்துவதன் மூலம், நீங்கள் இந்த மறுப்பு அறிக்கையை 
                படித்து, புரிந்து கொண்டு, ஏற்றுக்கொள்கிறீர்கள் என்று கருதப்படுகிறது.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}

