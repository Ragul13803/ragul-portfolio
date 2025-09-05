// next.config.js

const path = require('path');

// Optional: Enable bundle analyzer (run with ANALYZE=true npm run build)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Helps catch potential issues in development
  reactStrictMode: true,

  // Allow importing SCSS from the styles directory without relative paths
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Enable loading and optimizing images from external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },

  // Optional: Enable experimental features if needed
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
