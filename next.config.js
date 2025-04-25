/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'example.com'],
  },
  swcMinify: true,
  i18n: require('./next-i18next.config').i18n,  // Correctly importing the i18n configuration
};

module.exports = nextConfig;
