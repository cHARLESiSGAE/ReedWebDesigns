import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages (static hosting) friendly build output
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
