import type { Metadata } from "next";
import { ToolsList } from "@/components/herramientas/ToolsList";

export const metadata: Metadata = {
  title: "Herramientas",
  description: "Herramientas propias que desarrollamos, usamos internamente y compartimos. Desde entornos de diseño con IA hasta utilidades open source.",
};

export default function HerramientasPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Herramientas</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Además de los productos para clientes, desarrollamos herramientas internas que usamos en cada proyecto para garantizar calidad y disponibilidad.
          </p>
        </div>
        <ToolsList />
      </div>
    </section>
  );
}
