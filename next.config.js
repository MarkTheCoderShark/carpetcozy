/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  // Ensure static generation for contact page
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 