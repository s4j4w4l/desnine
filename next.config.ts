import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "desnine.com" }],
        destination: "https://www.desnine.com/:path*",
        permanent: true,
      },
      {
        source: "/work/marche_main",
        destination: "/work/marche-main",
        permanent: true,
      },
      {
        source: "/work/biotasup",
        destination: "/work",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
