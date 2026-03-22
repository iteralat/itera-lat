"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Headphones, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Arrancamos entendiendo tu negocio, tu equipo y qué problema necesitás resolver. Sin plantillas genéricas.",
  },
  {
    number: "02",
    title: "Proponemos",
    description: "Te presentamos una solución concreta con alcance, tiempos y costos claros. Sabés qué vas a recibir antes de arrancar.",
  },
  {
    number: "03",
    title: "Construimos",
    description: "Desarrollamos por etapas. Cada semana ves avance real, podés probar y dar feedback sobre lo que estamos armando.",
  },
  {
    number: "04",
    title: "Acompañamos",
    description: "Después del lanzamiento seguimos. Ajustes, mejoras y soporte para que el producto siga funcionando como el primer día.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Velocidad real",
    description: "Entregas rápidas sin sacrificar calidad. Equipo chico, decisiones directas, cero vueltas.",
  },
  {
    icon: TrendingUp,
    title: "Crece con vos",
    description: "Lo que construimos hoy soporta el crecimiento de mañana. No vas a tener que empezar de cero.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description: "No desaparecemos después del lanzamiento. Acompañamiento, iteraciones y mejoras constantes.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SobreNosotrosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Quiénes somos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Sobre nosotros
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-6">
            Somos un estudio de desarrollo web con base en la Patagonia, Argentina.
            Combinamos diseño, código y herramientas de inteligencia artificial
            para construir productos digitales que funcionan desde el día uno.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed mb-6">
            Fundado por devs, no por vendedores. Cada proyecto tiene atención
            directa del equipo que lo construye. Trabajamos con vos — sin
            intermediarios, sin sorpresas, sin letra chica.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed">
            Además de proyectos para clientes, construimos nuestras propias
            herramientas internas: sistemas de monitoreo, gestión operativa y
            automatización que usamos todos los días. Esa experiencia de producto
            propio es la que llevamos a cada proyecto que encaramos.
          </p>
        </motion.div>

        {/* Cómo trabajamos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            Un proceso simple y transparente, sin sorpresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
              >
                <span className="text-primary font-bold text-sm mb-3 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Por qué ÍTERA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por qué ÍTERA
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            Un estudio boutique donde cada proyecto tiene atención directa del equipo que lo construye.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease }}
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
        </motion.div>

        {/* Herramientas internas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-24"
        >
          <div className="p-8 md:p-12 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Herramientas propias
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              No solo construimos para otros. Tenemos nuestras propias plataformas
              en producción: sistemas de monitoreo, gestión de operaciones y
              herramientas de automatización que usamos todos los días.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
              Cuando un cliente nos pide algo, ya pasamos por los mismos problemas
              con nuestros propios productos. Eso se nota en las decisiones de diseño,
              en la estabilidad y en lo rápido que podemos iterar.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="text-zinc-400 mb-6 text-lg">
            ¿Querés saber más o tenés un proyecto en mente?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-soft transition-all shadow-[0_0_25px_rgba(255,60,0,0.35)] hover:shadow-[0_0_35px_rgba(255,60,0,0.5)]"
          >
            Hablemos <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
