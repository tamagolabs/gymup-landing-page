import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date("2026-10-09T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
