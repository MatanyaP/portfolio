const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

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

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80,
      },
      optipng: false,
      pngquant: {
        speed: 7,
        strip: true,
        verbose: false,
      },
      webp: {
        preset: 'default',
        quality: 75,
      },
    },
  ],
], nextConfig);

