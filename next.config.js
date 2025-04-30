/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["127.0.0.1", "localhost" ,"arbt1.vercel.app"], // ✅ Allow local Laravel images
      
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  
};
module.exports = nextConfig;


