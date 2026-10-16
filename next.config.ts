import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Endereço público usado no SEO (canonical, Open Graph, sitemap, robots, dados estruturados)
const siteUrl = isProd ? "https://www.empireoengenharia.com.br" : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    // Site na raiz do domínio; mantido como variável para os links que o usam
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
