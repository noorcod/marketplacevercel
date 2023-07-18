/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    loaderFile: "https://www.bolnews.com",
    loader: "custom"
  },
  cssModules: true,
  // distDir: "build",
}

module.exports = nextConfig
