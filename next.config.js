/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbs.dfs.ivi.ru",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
