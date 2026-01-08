/**
 * Custom sitemap generator for Next.js App Router
 * This script generates sitemap.xml with all dynamic routes
 */

const fs = require('fs')
const path = require('path')

const SITE_URL = "https://tamilnidhi.com"
const contentDir = path.join(process.cwd(), 'content')

// Get all article slugs
function getAllFinanceSlugs() {
  const financeDir = path.join(contentDir, 'finance')
  if (!fs.existsSync(financeDir)) return []
  return fs.readdirSync(financeDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

function getAllSchemesSlugs() {
  const schemesDir = path.join(contentDir, 'schemes')
  if (!fs.existsSync(schemesDir)) return []
  return fs.readdirSync(schemesDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

// Generate sitemap XML
function generateSitemap() {
  const financeSlugs = getAllFinanceSlugs()
  const schemesSlugs = getAllSchemesSlugs()
  const now = new Date().toISOString()

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/finance', priority: '0.9', changefreq: 'weekly' },
    { url: '/schemes', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
  ]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  })

  // Add finance articles
  financeSlugs.forEach(slug => {
    xml += `  <url>
    <loc>${SITE_URL}/finance/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
  })

  // Add schemes articles
  schemesSlugs.forEach(slug => {
    xml += `  <url>
    <loc>${SITE_URL}/schemes/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
  })

  xml += `</urlset>`

  return xml
}

// Write sitemap to public folder
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

const sitemapPath = path.join(publicDir, 'sitemap.xml')
fs.writeFileSync(sitemapPath, generateSitemap(), 'utf8')

console.log(`✅ Sitemap generated: ${sitemapPath}`)
console.log(`   Total URLs: ${getAllFinanceSlugs().length + getAllSchemesSlugs().length + 7}`)

