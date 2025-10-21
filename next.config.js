/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Base path for subpath deployments (e.g., /preview/user1-project5/)
  // This allows Next.js to work correctly when deployed under a path prefix
  basePath: process.env.VITE_BASE_PATH || '',

  // Asset prefix for static files
  assetPrefix: process.env.VITE_BASE_PATH || '',

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
