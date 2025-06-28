import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
<<<<<<< HEAD
=======
  trailingSlash: true,
>>>>>>> 3e7a2ccafd5ad97c23937e5152d8ba9f16b4b6fc
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Si tu web va a estar en una subruta como GitHub Pages
  basePath: '/UtiliWeb',  // Cambia "UtiliWeb" por el nombre de tu repositorio o subruta
  assetPrefix: '/UtiliWeb', // Similar al basePath, pero para los recursos estáticos
};

export default nextConfig;

