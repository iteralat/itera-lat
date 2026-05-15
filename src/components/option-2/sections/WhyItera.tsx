"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Headphones } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    icon: Zap,
    title: "Trato directo con quien construye",
    description:
      "La persona que piensa tu proyecto es la que lo desarrolla. Eso ayuda a que se entiendan los detalles de tu operación y a que las decisiones tengan contexto desde el principio.",
  },
  {
    icon: TrendingUp,
    title: "Productos propios en producción",
    description:
      "Además de los proyectos para clientes, mantenemos nuestros propios sistemas funcionando todos los días. Esa experiencia de operar un producto real influye en cómo pensamos y construimos los tuyos.",
  },
  {
    icon: Headphones,
    title: "Tecnología actualizada, criterio a largo plazo",
    description:
      "Trabajamos con herramientas modernas y nos mantenemos al día con lo que se mueve en la industria. Cada decisión técnica busca servir hoy y seguir teniendo sentido en dos o tres años.",
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Por qué{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, #F21B10, #FF5421)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ÍTERA
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Tres cosas que intentamos sostener en cada proyecto que encaramos.
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
                <p className="text-base text-white/55 leading-relaxed">
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
