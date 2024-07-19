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
      // todo: 나중에 실제 이미지를 저장하고 있는 백엔드 서버를 가리켜야합니다.
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.smarttoday.co.kr',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
