import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitios Web",
  description:
    "Diseñamos sitios web para todos los rubros. Institucionales, catálogos, tiendas online. Cada sitio es rápido, indexable y administrable.",
  alternates: { canonical: "/productos/sitios-web" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
