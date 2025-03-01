/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/tani-portfolio-next-app/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
