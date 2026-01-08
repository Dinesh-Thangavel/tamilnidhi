/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize font loading
  optimizeFonts: true,
  // Compress responses
  compress: true,
  // Enable static optimization
  swcMinify: true,
}

module.exports = nextConfig

