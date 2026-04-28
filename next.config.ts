import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book/free-consultation",
        destination: "/join",
        permanent: false,
      },
      {
        source: "/book/seminar",
        destination: "/join",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
