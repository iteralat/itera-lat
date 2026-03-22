"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quiénes somos
          </h2>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-6">
            Somos un estudio de desarrollo web con base en la Patagonia,
            Argentina. Combinamos diseño, código y herramientas de inteligencia
            artificial para construir productos digitales que funcionan desde el
            día uno. Trabajamos directo con cada cliente — sin intermediarios,
            sin sorpresas.
          </p>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            Fundado por devs, no por vendedores. Cada proyecto tiene atención
            directa del equipo que lo construye.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
