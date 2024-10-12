

/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: !isDevelopment,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "replicate.com",
          },
          {
            protocol: "https",
            hostname: "replicate.delivery",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com", // Add Cloudinary hostname
        },
        ],
      },

}

export default nextConfig;
