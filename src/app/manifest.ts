import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ÍTERA — Soluciones digitales",
    short_name: "ÍTERA",
    description:
      "Estudio de desarrollo web en la Patagonia, Argentina. Sitios web, plataformas a medida y soluciones con inteligencia artificial.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FF3C00",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
