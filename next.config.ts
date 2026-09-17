import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/cv/cv.pdf",
        destination: "/cv/CV.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
