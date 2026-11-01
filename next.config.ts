import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/game",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
