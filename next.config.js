/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.themoviedb.org',
      },
    ],
  },
};

module.exports = nextConfig;
