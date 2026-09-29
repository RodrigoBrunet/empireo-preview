import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/empireo-preview", // nome do repositório no GitHub
  assetPrefix: "/empireo-preview/",
};

export default nextConfig;
