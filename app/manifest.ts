import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'தமிழ் நிதி கல்வி | Tamil Finance Blog',
    short_name: 'தமிழ் நிதி',
    description: 'தமிழில் நிதி கல்வி மற்றும் அரசு திட்டங்கள் பற்றிய தகவல்கள்',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    // Icons removed temporarily - add icon files to /public when ready
    // icons: [
    //   {
    //     src: '/icon-192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    //   {
    //     src: '/icon-512.png',
    //     sizes: '512x512',
    //     type: 'image/png',
    //   },
    // ],
  }
}

