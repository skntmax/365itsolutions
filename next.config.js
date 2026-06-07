/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost","365itsolution.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "365itsolution.com",
        port: "4001",
      },
    ],
  },

  async redirects() {
  return [
    {
      source: '/:path*',
      destination: 'https://365itsolution.com/:path*',
      permanent: false,
    },
  ]
}

};

module.exports = nextConfig;
