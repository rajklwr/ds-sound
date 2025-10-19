import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    {
      url: `${SEO.SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // (Optional) anchor sections if you want them discoverable
    // { url: `${SEO.SITE_URL}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // { url: `${SEO.SITE_URL}/#gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // { url: `${SEO.SITE_URL}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
