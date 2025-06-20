import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // ⬅ karena kamu pakai `http://localhost`
        hostname: "localhost",
        port: "3001", // ⬅ port sesuai backend-mu
        pathname: "/uploads/**", // ⬅ path image
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
