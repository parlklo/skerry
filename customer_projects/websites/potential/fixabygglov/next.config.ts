import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid Next.js picking a parent workspace as root when multiple lockfiles exist
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    dirs: ['src'],
  },
};

export default nextConfig;
