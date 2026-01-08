# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

This will generate static pages in the `.next` directory.

## Deploying to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Deploy!

### Vercel Configuration

The project is already configured for Vercel. No additional configuration needed.

## Adding AdSense

1. Get your AdSense Publisher ID from Google AdSense
2. Replace the placeholder AdSense component in `components/AdSense.tsx` with actual AdSense code
3. Add the AdSense script to `app/layout.tsx` in the `<head>` section

## Adding New Articles

1. Create a new `.mdx` file in `/content/finance/` or `/content/schemes/`
2. Add frontmatter with required fields:
   - title
   - description
   - excerpt
   - date
3. Write your content in Markdown format
4. The article will automatically appear on the site after rebuild

## SEO Checklist

- ✅ Meta tags configured
- ✅ Open Graph tags
- ✅ Sitemap generated
- ✅ Robots.txt configured
- ✅ Clean URLs
- ✅ Proper heading hierarchy
- ✅ Mobile-responsive design

## Performance Optimization

- ✅ Static Site Generation (SSG)
- ✅ Optimized images (when added)
- ✅ Tailwind CSS for minimal CSS
- ✅ Font optimization (Google Fonts)

## Content Guidelines

- Write in simple spoken Tamil
- Educational content only (no financial advice)
- Include disclaimers where necessary
- Use proper heading hierarchy (H1-H3)
- Include tables and lists for better readability

