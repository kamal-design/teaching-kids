/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@teaching-kids/ui",
    "nativewind",
    "react-native-css-interop",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    return config;
  },
};

module.exports = nextConfig;
