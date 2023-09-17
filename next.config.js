/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: ['https://media.rawg.io'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
