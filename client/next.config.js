/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "asiritreehouse.s3.sa-east-1.amazonaws.com",
      "asiritreehouse.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
