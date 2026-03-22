import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Estudio de desarrollo web en la Patagonia, Argentina. Diseño, código y herramientas con inteligencia artificial para productos digitales que funcionan.",
};

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
