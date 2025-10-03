import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['gsap', 'react-hook-form', 'next-intl'],
  },

  // images: {
  //   formats: ["image/webp", "image/avif"],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   // Для разработки уменьшаем кэширование изображений
  //   minimumCacheTTL:
  //     process.env.NEXT_PUBLIC_NODE_ENV === "development"
  //       ? 0
  //       : 60 * 60 * 24 * 365,
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },
  // experimental: {
  //   optimizePackageImports: ["gsap", "react-hook-form", "next-intl"],
  // },
  // // Отключаем кэширование для разработки
  // async headers() {
  //   if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  //     return [
  //       {
  //         source: "/(.*)",
  //         headers: [
  //           {
  //             key: "Cache-Control",
  //             value: "no-store, must-revalidate",
  //           },
  //         ],
  //       },
  //     ];
  //   }
  //   return [];
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/api/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, s-maxage=86400, stale-while-revalidate=43200',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/_next/static/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // poweredByHeader: false,
  // compress: true,
};
export default withNextIntl(nextConfig);
