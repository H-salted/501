/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  allowedDevOrigins: ["http://192.168.1.176:3001", "http://localhost:3001"],
};

module.exports = nextConfig;
