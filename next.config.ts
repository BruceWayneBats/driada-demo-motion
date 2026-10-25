import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический сайт: папка out/ кладётся на любой хостинг
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Для хостинга в подпапке (например, GitHub Pages): BASE_PATH=/driada-demo
  basePath: process.env.BASE_PATH || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
