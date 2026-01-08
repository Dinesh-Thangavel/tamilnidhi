const fs = require('fs')
const path = require('path')

// Get all article slugs
function getAllFinanceSlugs() {
  const contentDir = path.join(process.cwd(), 'content')
  const financeDir = path.join(contentDir, 'finance')
  if (!fs.existsSync(financeDir)) return []
  return fs.readdirSync(financeDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => `/finance/${file.replace(/\.mdx$/, '')}`)
}

function getAllSchemesSlugs() {
  const contentDir = path.join(process.cwd(), 'content')
  const schemesDir = path.join(contentDir, 'schemes')
  if (!fs.existsSync(schemesDir)) return []
  return fs.readdirSync(schemesDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => `/schemes/${file.replace(/\.mdx$/, '')}`)
}

// Get all additional routes (dynamic articles)
const additionalRoutes = [
  ...getAllFinanceSlugs(),
  ...getAllSchemesSlugs(),
]

const SITE_URL = "https://tamilnidhi.com"

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    return additionalRoutes.map((route) => ({
      loc: route,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }))
  },
  exclude: [
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
    '/admin/*',
    '/private/*',
    '/manifest.webmanifest',
    '/robots.txt',
    '/favicon.ico',
    '/icon-*.png',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'monthly'

    // Homepage
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Category pages
    else if (path === '/finance' || path === '/schemes') {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Article pages
    else if (path.startsWith('/finance/') || path.startsWith('/schemes/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Static pages
    else if (['/about', '/contact'].includes(path)) {
      priority = 0.7
      changefreq = 'monthly'
    }
    // Legal pages
    else if (['/privacy-policy', '/disclaimer'].includes(path)) {
      priority = 0.5
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}

