/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ADR-001 Nginx Deploy Optimization
  reactStrictMode: true,
};

export default nextConfig;