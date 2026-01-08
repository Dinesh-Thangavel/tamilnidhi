import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <Link 
            href="/" 
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity tamil-text" 
            style={{ lineHeight: '1.4', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}
            suppressHydrationWarning
          >
            தமிழ் நிதி
          </Link>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link 
              href="/finance" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 text-sm md:text-base px-3 py-2 rounded-lg hover:bg-blue-50 tamil-text"
              style={{ lineHeight: '1.6', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}
            >
              நிதி கல்வி
            </Link>
            <Link 
              href="/schemes" 
              className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 text-sm md:text-base px-3 py-2 rounded-lg hover:bg-green-50 tamil-text"
              style={{ lineHeight: '1.6', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}
            >
              அரசு திட்டங்கள்
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 text-sm md:text-base px-3 py-2 rounded-lg hover:bg-indigo-50 tamil-text"
              style={{ lineHeight: '1.6', overflow: 'visible', wordBreak: 'keep-all', overflowWrap: 'normal' }}
            >
              எங்களை பற்றி
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

