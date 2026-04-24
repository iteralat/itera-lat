"use client";

import { motion } from "framer-motion";
import { Code2, MessageCircle, Layers, Wrench, ArrowRight } from "lucide-react";
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

const principles = [
  {
    icon: Code2,
    title: "Código propio, no templates",
    description: "Cada producto se construye desde cero para tu caso. Sin plantillas recicladas ni armados apurados con no-code.",
  },
  {
    icon: MessageCircle,
    title: "Dev directo, sin intermediarios",
    description: "Hablás con quien escribe el código. Cero PMs, cero vueltas. Si hay que decidir algo, se decide en el momento.",
  },
  {
    icon: Layers,
    title: "Construido para durar",
    description: "Lo que armamos hoy tiene que servir dentro de dos años. Priorizamos decisiones técnicas sobre atajos inmediatos.",
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Sobre nosotros
          </h1>
          <p className="text-xl text-white/75 leading-relaxed mb-6">
            Somos un estudio de desarrollo web con base en la Patagonia, Argentina.
            Combinamos diseño, código y herramientas de inteligencia artificial
            para construir productos digitales que funcionan desde el día uno.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            Fundado por devs, no por vendedores. Cada proyecto tiene atención
            directa del equipo que lo construye. Trabajamos con vos — sin
            intermediarios, sin sorpresas, sin letra chica.
          </p>
          <p className="text-white/60 text-base leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-white/65 max-w-2xl mb-12">
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
                className="p-6 rounded-lg bg-muted border border-border"
              >
                <span className="text-primary font-bold text-sm mb-3 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Manifiesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Manifiesto
          </h2>
          <p className="text-white/65 max-w-2xl mb-12">
            Cómo encaramos cada proyecto. Sin rodeos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease }}
                  className="group p-6 md:p-8 rounded-lg bg-muted border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,60,0,0.06)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {principle.description}
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
          <div className="p-8 md:p-12 rounded-xl bg-muted border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                Herramientas propias
              </h2>
            </div>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              No solo construimos para otros. Tenemos nuestras propias plataformas
              en producción: sistemas de monitoreo, gestión de operaciones y
              herramientas de automatización que usamos todos los días.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
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
          <p className="text-white/70 mb-6 text-lg">
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
