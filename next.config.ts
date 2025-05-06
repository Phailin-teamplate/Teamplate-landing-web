// next.config.js (or next.config.mjs/ts if using ESM or TS)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  // Add more options below as needed
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
