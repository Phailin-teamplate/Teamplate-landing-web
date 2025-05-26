import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'images.unsplash.com', // ✅ Added Unsplash
    ],
  },
};

export default nextConfig;
