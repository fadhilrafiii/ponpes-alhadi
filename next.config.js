/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ['ponpes-alhadi.s3.ap-southeast-1.amazonaws.com', 'img.youtube.com'],
  },
  experimental: {
    largePageDataBytes: 1024 * 1024,
  }
};

module.exports = nextConfig;
