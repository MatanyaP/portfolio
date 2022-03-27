/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/projects': { page: '/projects' },
      '/resume': { page: '/resume' },
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

