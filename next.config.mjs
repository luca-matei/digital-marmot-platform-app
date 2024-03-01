/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/finance',
        destination: '/finance/transactions', // This targets the folder structure you've described
        permanent: true, // or false if it's a temporary redirect
      },
    ];
  }
};

export default nextConfig;
