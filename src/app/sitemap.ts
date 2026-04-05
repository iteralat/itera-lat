import type { MetadataRoute } from "next";
import { saasProducts, standaloneProducts, featuredWebsites } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itera.lat";
const lastModified = new Date("2026-04-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/servicios`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/productos`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/productos/saas`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/productos/soluciones`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/productos/sitios-web`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/sobre-nosotros`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const saasRoutes: MetadataRoute.Sitemap = saasProducts.map((p) => ({
    url: `${siteUrl}/productos/saas/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solucionesRoutes: MetadataRoute.Sitemap = standaloneProducts.map((p) => ({
    url: `${siteUrl}/productos/soluciones/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const webRoutes: MetadataRoute.Sitemap = featuredWebsites.map((w) => ({
    url: `${siteUrl}/productos/sitios-web/${w.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...saasRoutes, ...solucionesRoutes, ...webRoutes];
}
