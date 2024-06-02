/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOCAL_HOST: process.env.LOCAL_HOST,
  },
};

module.exports = nextConfig;
