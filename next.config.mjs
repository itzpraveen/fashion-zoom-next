/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.fashionzoom.co.in' },
      { protocol: 'https', hostname: 'fashionzoom.co.in' },
    ],
  },
};

export default nextConfig;
