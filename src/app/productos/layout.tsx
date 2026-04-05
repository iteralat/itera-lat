import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Plataformas en producción, soluciones llave en mano y sitios web para todos los rubros.",
  alternates: { canonical: "/productos" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
