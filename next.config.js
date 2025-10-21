/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Disable image optimization for development
  images: {
    unoptimized: true,
  },

  // Required for Docker/container environments
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
};

module.exports = nextConfig;
