/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logos-world.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "startbootstrap.github.io",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
