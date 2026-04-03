import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones | ÍTERA",
  description:
    "Plataformas llave en mano para digitalizar tu negocio. Gestión, presencia digital y catálogo online — todo administrable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
