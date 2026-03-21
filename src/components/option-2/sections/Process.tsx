"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Escuchamos",
    description: "Entendemos tu negocio, tus objetivos y los problemas que querés resolver.",
  },
  {
    num: "02",
    title: "Diseñamos",
    description: "Proponemos la solución técnica y el flujo UX antes de escribir una línea de código.",
  },
  {
    num: "03",
    title: "Construimos",
    description: "Desarrollo iterativo con entregas parciales. Ves progreso real cada semana.",
  },
  {
    num: "04",
    title: "Acompañamos",
    description: "Deploy, monitoreo y mejoras continuas. Tu producto evoluciona con tu negocio.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Un proceso claro y predecible, sin sorpresas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center md:text-left"
              >
                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-zinc-800 bg-zinc-950 mb-4 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.num}</span>
                </div>

                {/* Mobile connecting line */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 top-16 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />
                )}

                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
