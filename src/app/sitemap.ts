import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = locales.flatMap((locale) => {
    const base = `${siteConfig.url}/${locale}`;
    return [
      {
        url: base,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 1
      },
      {
        url: `${base}/${siteConfig.links.pricing}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6
      },
      {
        url: `${base}/${siteConfig.links.privacy}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.3
      }
    ];
  });

  return routes;
}
