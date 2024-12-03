import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '/', // Necesario para GitHub Pages
  images: {
    unoptimized: true, // Requerido si usas imágenes en Next.js
  },
};

export default nextConfig;
