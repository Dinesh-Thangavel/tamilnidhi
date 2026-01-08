import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          பக்கம் கிடைக்கவில்லை
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          தாங்கள் தேடும் பக்கம் கிடைக்கவில்லை. பக்கத்தின் URL சரியாக உள்ளதா என சரிபார்க்கவும்.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          முகப்பு பக்கத்திற்கு திரும்பு
        </Link>
      </div>
    </div>
  )
}

