import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'தனியுரிமை கொள்கை | Privacy Policy',
  description: 'தமிழ் நிதி கல்வி வலைத்தளத்தின் தனியுரிமை கொள்கை.',
  openGraph: {
    title: 'தனியுரிமை கொள்கை | Privacy Policy',
    description: 'தமிழ் நிதி கல்வி வலைத்தளத்தின் தனியுரிமை கொள்கை.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">தனியுரிமை கொள்கை</h1>
        
        <div className="prose-tamil">
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>கடைசியாக புதுப்பிக்கப்பட்டது:</strong> {new Date().toLocaleDateString('ta-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-gray-700 leading-relaxed">
              தமிழ் நிதி கல்வி வலைத்தளம் உங்களின் தனியுரிமையை மதிக்கிறது. 
              இந்த தனியுரிமை கொள்கை எங்கள் வலைத்தளத்தைப் பயன்படுத்தும்போது 
              எங்கள் மூலம் சேகரிக்கப்படும் தகவல்கள் மற்றும் அதை எவ்வாறு பயன்படுத்துகிறோம் 
              என்பதை விளக்குகிறது.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">சேகரிக்கப்படும் தகவல்கள்</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              எங்கள் வலைத்தளம் பயன்படுத்தப்படும் போது, பின்வரும் தகவல்கள் தானாகவே சேகரிக்கப்படலாம்:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP முகவரி</li>
              <li>உலாவி வகை மற்றும் பதிப்பு</li>
              <li>பார்வையிடப்பட்ட பக்கங்கள்</li>
              <li>பார்வையிடப்பட்ட நேரம்</li>
              <li>குறிப்பு தேடல் வார்த்தைகள் (என்றால்)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">குக்கீகள் (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              எங்கள் வலைத்தளம் உங்கள் அனுபவத்தை மேம்படுத்த குக்கீகளைப் பயன்படுத்தலாம். 
              குக்கீகள் சிறிய கோப்புகள் ஆகும், அவை உங்கள் கணினியில் சேமிக்கப்படுகின்றன.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>குக்கீகளின் வகைகள்:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>அத்தியாவசிய குக்கீகள்:</strong> வலைத்தளத்தின் அடிப்படை செயல்பாட்டிற்கு தேவையானவை</li>
              <li><strong>பகுப்பாய்வு குக்கீகள்:</strong> வலைத்தளத்தின் பயன்பாட்டை பகுப்பாய்வு செய்ய உதவுகின்றன</li>
              <li><strong>விளம்பர குக்கீகள்:</strong> உங்களுக்கு பொருத்தமான விளம்பரங்களைக் காட்ட உதவுகின்றன</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              நீங்கள் உங்கள் உலாவி அமைப்புகளில் குக்கீகளை முடக்கலாம், ஆனால் இது வலைத்தளத்தின் 
              சில செயல்பாடுகளை பாதிக்கலாம்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google AdSense</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              எங்கள் வலைத்தளம் Google AdSense விளம்பர சேவையைப் பயன்படுத்துகிறது. 
              Google AdSense உங்கள் தனியுரிமையை மதிக்கிறது, ஆனால் அது தனது சொந்த 
              தனியுரிமை கொள்கைகளைக் கொண்டுள்ளது.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Google AdSense எவ்வாறு செயல்படுகிறது:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Google AdSense உங்கள் வலைத்தளத்தில் பார்வையிடும் வழியைக் கண்காணிக்கிறது</li>
              <li>உங்கள் ஆர்வங்கள் மற்றும் முந்தைய பார்வைகளின் அடிப்படையில் விளம்பரங்களைக் காட்டுகிறது</li>
              <li>இந்த தகவல்கள் Google இன் தனியுரிமை கொள்கையின்படி பயன்படுத்தப்படுகின்றன</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Google AdSense பற்றிய மேலும் தகவலுக்கு, தயவுசெய்து{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Privacy Policy
              </a>
              {' '}ஐப் பார்வையிடவும்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">மூன்றாம் தரப்பு விளம்பரங்கள் (Third-Party Advertising)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              எங்கள் வலைத்தளத்தில் Google AdSense மூலம் மூன்றாம் தரப்பு விளம்பரங்கள் 
              காட்டப்படலாம். இந்த விளம்பரங்கள்:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>விளம்பர நிறுவனங்களால் வழங்கப்படுகின்றன</li>
              <li>உங்கள் ஆர்வங்கள் மற்றும் பார்வை வரலாற்றின் அடிப்படையில் தனிப்பயனாக்கப்படலாம்</li>
              <li>குக்கீகள் மற்றும் பிற தொழில்நுட்பங்களைப் பயன்படுத்தலாம்</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>விளம்பர விருப்பங்கள்:</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              நீங்கள் விளம்பர விருப்பங்களை நிர்வகிக்க விரும்பினால், தயவுசெய்து{' '}
              <a 
                href="https://adssettings.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Ad Settings
              </a>
              {' '}ஐப் பார்வையிடவும். நீங்கள் விளம்பரங்களைத் தடுக்க விரும்பினால், 
              AdBlock போன்ற விளம்பரத் தடுப்பு நிரல்களைப் பயன்படுத்தலாம்.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">தகவல்களின் பாதுகாப்பு</h2>
            <p className="text-gray-700 leading-relaxed">
              உங்கள் தனியுரிமையைப் பாதுகாப்பதற்கு நாங்கள் பொருத்தமான பாதுகாப்பு நடவடிக்கைகளை 
              எடுக்கிறோம். இருப்பினும், இணையத்தில் முழுமையான பாதுகாப்பை உறுதிப்படுத்த முடியாது.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">கொள்கை மாற்றங்கள்</h2>
            <p className="text-gray-700 leading-relaxed">
              எங்களுக்கு இந்த தனியுரிமை கொள்கையை எந்த நேரத்திலும் மாற்ற உரிமை உண்டு. 
              முக்கியமான மாற்றங்கள் வலைத்தளத்தில் வெளியிடப்படும்.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">தொடர்பு</h2>
            <p className="text-gray-700 leading-relaxed">
              இந்த தனியுரிமை கொள்கை பற்றி உங்களுக்கு கேள்விகள் இருந்தால், 
              தயவுசெய்து{' '}
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

