import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carolinajofre.com";
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Home
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "en" ? 1 : 0.9,
    });

    // Work listing
    entries.push({
      url: `${baseUrl}/${locale}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // About
    entries.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    // Contact
    entries.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    });

    // Individual projects
    for (const project of projects) {
      entries.push({
        url: `${baseUrl}/${locale}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
