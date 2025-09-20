import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      new URL("https://api.redseam.redberryinternship.ge/storage/**"),
    ],
  },
};

export default nextConfig;
