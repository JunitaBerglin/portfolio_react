/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    esmExternals: true,
  },
  env: {
    NEXT_PUBLIC_DATOCMS_API_TOKEN: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
  },
};

module.exports = nextConfig;
