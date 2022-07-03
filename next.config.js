/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ['cdn.shopify.com'],
  },
}

module.exports = nextConfig
