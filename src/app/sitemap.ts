import type { MetadataRoute } from "next";
import { allProducts } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itera.lat";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/productos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/sobre-nosotros`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contacto`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = allProducts.map((p) => ({
    url: `${siteUrl}/productos/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
