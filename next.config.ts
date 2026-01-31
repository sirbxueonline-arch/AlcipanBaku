import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/sade-tavan', destination: '/service/sade-tavan' },
      { source: '/fiqurlu-tavan', destination: '/service/fiqurlu-tavan' },
      { source: '/arakesme', destination: '/service/arakesme' },
      { source: '/gizli-isiq', destination: '/service/gizli-isiq' },
      { source: '/tv-stand', destination: '/service/tv-stand' },
    ];
  },
};


export default nextConfig;
