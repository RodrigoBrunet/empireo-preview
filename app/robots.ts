import type { MetadataRoute } from "next";
import { urlSite } from "@/lib/site";

// Gerado no build (site estático): libera todo o site e aponta o sitemap
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${urlSite}sitemap.xml`,
  };
}
