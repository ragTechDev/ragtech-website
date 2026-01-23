/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
        },
        {
          protocol: 'https',
          hostname: '**.beehiiv.com',
        },
      ],
    },
  };
  
export default nextConfig;
