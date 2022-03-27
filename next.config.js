/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: 'http://matanyap.github.io/portfolio/'

}

module.exports = {
  ...nextConfig,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

