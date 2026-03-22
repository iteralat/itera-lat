import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Sitios web, tiendas online, plataformas a medida y soluciones con inteligencia artificial. Construimos lo que tu negocio necesita para operar mejor.",
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
