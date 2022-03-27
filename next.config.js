/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  async exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },

}

module.exports = {
  ...nextConfig,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

