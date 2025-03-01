/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  assetPrefix: isProd ? '/tani-portfolio-next-app/' : '',
  images: {
    unoptimized: isProd,
  },
};

module.exports = nextConfig;
