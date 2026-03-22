"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Velocidad real",
    description:
      "Entregas rápidas sin sacrificar calidad. Equipo chico, decisiones directas, cero vueltas.",
  },
  {
    icon: TrendingUp,
    title: "Crece con vos",
    description:
      "Lo que construimos hoy soporta el crecimiento de mañana. No vas a tener que empezar de cero.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description:
      "No desaparecemos después del deploy. Acompañamiento post-lanzamiento, iteraciones y mejoras constantes.",
  },
];

export function WhyItera() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por qué ÍTERA
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Un estudio boutique donde cada proyecto tiene atención directa del
            equipo que lo construye.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-6 md:p-8 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,60,0,0.06)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
