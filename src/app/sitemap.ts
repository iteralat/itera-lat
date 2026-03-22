import type { MetadataRoute } from "next";
import { platforms } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itera.lat";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/proyectos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/sobre-nosotros`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contacto`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/herramientas`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = platforms.map((p) => ({
    url: `${siteUrl}/proyectos/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
