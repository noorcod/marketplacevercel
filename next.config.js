/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'https://ca.slack-edge.com', 'cdn.techbazaar.pk', 'www.bolnews.com'],

  },
  cssModules: true,
  // distDir: "build",
}

module.exports = nextConfig
