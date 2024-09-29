

/** @type {import('next').NextConfig} */


const nextConfig = {
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
      }
}

export default nextConfig;
