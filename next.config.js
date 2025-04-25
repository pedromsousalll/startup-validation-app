/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'example.com'],
  },
}

module.exports = nextConfig

// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: require('./next-i18next.config').i18n,
}

module.exports = nextConfig;

