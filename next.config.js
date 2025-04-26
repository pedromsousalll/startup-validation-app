/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'example.com'],
  },
  i18n: require('./next-i18next.config').i18n,
};

module.exports = nextConfig;
