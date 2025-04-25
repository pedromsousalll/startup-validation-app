/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'example.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
