import type { Metadata } from "next";
import { PlatformGrid } from "@/components/plataformas/PlatformGrid";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Productos digitales que construimos: CRMs, paneles de administración, catálogos, herramientas con IA. Sistemas que soportan operaciones reales.",
};

export default function ProyectosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Proyectos</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Productos digitales que construimos para resolver problemas reales. Sistemas de gestión, catálogos autogestionables y herramientas con inteligencia artificial.
          </p>
        </div>
        <PlatformGrid />
      </div>
    </section>
  );
}
