import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitios Web | ÍTERA",
  description:
    "Diseñamos sitios web para todos los rubros. Institucionales, catálogos, tiendas online. Cada sitio es rápido, indexable y administrable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
