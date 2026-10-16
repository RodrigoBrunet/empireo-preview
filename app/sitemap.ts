import type { MetadataRoute } from "next";
import { urlSite } from "@/lib/site";

// Gerado no build (site estático). O site tem uma página só; novas páginas entram aqui
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: urlSite, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
