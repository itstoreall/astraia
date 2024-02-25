/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;

/*
const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

images: {
  remotePatterns: [
    { protocol: 'https', hostname: imageDomain },
    { protocol: 'https', hostname: 'upload.wikimedia.org' }
  ]
},
env: {
  ipfsLink: process.env.IPFS_LINK
}
*/
