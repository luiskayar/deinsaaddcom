import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: [
      "firebasestorage.googleapis.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
