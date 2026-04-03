"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Headphones } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
      "No desaparecemos después del deploy. Acompañamiento, iteraciones y mejoras constantes.",
  },
];

export function WhyItera() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow — centered, subtle */}
      <div
        className="absolute top-[30%] left-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.05) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Por qué{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, #FF3C00, #FF6A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ÍTERA
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
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
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.3, delay: 0, ease: EASE } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
                className="group p-8 rounded-2xl relative glass-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-white">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-base text-white/50 leading-relaxed">
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
