/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "sociapadash.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
