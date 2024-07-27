// next.config.mjs
import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'woory-bucket.s3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 't1.kakaocdn.net',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PROXY_URL}/:path*`,
      },
    ];
  },
};

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
