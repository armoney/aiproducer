/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'rocky-ravine-63920-5c77fc84933b.herokuapp.com',
        pathname: '/uploads/**',
      },  
      {
        protocol: 'https',
        hostname: 'seev-strapi-cms-s3-images-bucket.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      }     
    ],
  },
};

module.exports = nextConfig;
