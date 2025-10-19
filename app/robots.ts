import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SEO.SITE_URL}/sitemap.xml`,
    host: SEO.SITE_URL,
  };
}
