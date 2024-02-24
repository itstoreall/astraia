/** @type {import('next').NextConfig} */

const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: imageDomain },
      { protocol: 'https', hostname: 'upload.wikimedia.org' }
    ]
  }
};

export default nextConfig;
