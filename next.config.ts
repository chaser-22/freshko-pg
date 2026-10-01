import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/chaser-22/white-velvet/**",
      },
    ],
  },
};

export default nextConfig;
