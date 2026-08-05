import { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = Object.values(projects).map(
    (project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...projectPages,
  ];
}
