/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
          pathname: '/**',
        },
      ],
    },
  }
  
  export default nextConfig // if you're using `.mjs`
  // OR
  // module.exports = nextConfig // if you're using `.js`
  