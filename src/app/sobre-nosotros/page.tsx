"use client";

import { motion } from "framer-motion";
import { Code2, MessageCircle, Layers, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Empezamos entendiendo tu negocio, tu equipo y el problema que necesitás resolver. Esa primera conversación suele ser la que más define el proyecto.",
  },
  {
    number: "02",
    title: "Proponemos",
    description: "Armamos una propuesta concreta con alcance, plazos estimados y costos. La idea es que tengas toda la información antes de decidir si avanzamos.",
  },
  {
    number: "03",
    title: "Construimos",
    description: "Desarrollamos por etapas, con espacios regulares para revisar lo que está avanzando. Eso permite dar feedback sobre la marcha y ajustar el rumbo si hace falta.",
  },
  {
    number: "04",
    title: "Acompañamos",
    description: "Después del lanzamiento seguimos disponibles para ajustes, mejoras y mantenimiento. La idea es acompañar al producto mientras tenga vida útil, no solo hasta el entregable.",
  },
];

const principles = [
  {
    icon: Code2,
    title: "Desarrollo a medida",
    description: "Cada proyecto se construye adaptado a las necesidades específicas del caso. Preferimos invertir tiempo en entender el problema antes de elegir las herramientas para resolverlo.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación cercana",
    description: "Quienes desarrollan tu proyecto son los mismos con los que conversás durante el proceso. Esa cercanía ayuda a que los detalles operativos y las decisiones técnicas se tomen con contexto completo.",
  },
  {
    icon: Layers,
    title: "Pensado para durar",
    description: "Lo que construimos hoy queremos que siga teniendo sentido en dos o tres años. Por eso preferimos decisiones técnicas fundadas antes que soluciones que solo resuelven lo inmediato.",
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
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            Somos un estudio de desarrollo con base en la Patagonia, Argentina.
            Combinamos diseño, programación y herramientas de inteligencia
            artificial para construir productos digitales a medida.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-6">
            Nos fundaron personas que programan todos los días. Cada proyecto
            tiene acompañamiento directo del equipo que lo construye, lo que
            ayuda a que los detalles del camino se entiendan y se cuiden.
          </p>
          <p className="text-white/80 text-base leading-relaxed">
            Además de proyectos para clientes, construimos nuestras propias
            herramientas internas: sistemas de monitoreo, gestión operativa y
            automatización que usamos todos los días. Esa experiencia de
            producto propio es la que llevamos a cada proyecto nuevo.
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
            Nuestro proceso
          </h2>
          <p className="text-white/80 max-w-2xl mb-12">
            El camino que seguimos desde la primera conversación hasta después
            del lanzamiento.
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
                <p className="text-sm text-white/80 leading-relaxed">
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
            Cómo trabajamos
          </h2>
          <p className="text-white/80 max-w-2xl mb-12">
            Tres principios que guían las decisiones de cada proyecto.
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
                  className="group p-6 md:p-8 rounded-lg bg-muted border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(242,27,16,0.06)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
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
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
              No solo construimos para otros. Tenemos nuestras propias
              plataformas en funcionamiento: sistemas de monitoreo, gestión
              operativa y herramientas de automatización que usamos todos los
              días.
            </p>
            <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
              Haber construido y sostenido productos propios nos hace más
              conscientes de las decisiones de diseño, la estabilidad y el
              costo real de cada atajo técnico. Esa mirada la traemos a cada
              proyecto nuevo.
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
          <p className="text-white/80 mb-6 text-lg">
            ¿Querés saber más o tenés un proyecto en mente?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-soft transition-all shadow-[0_0_25px_rgba(242,27,16,0.35)] hover:shadow-[0_0_35px_rgba(242,27,16,0.5)]"
          >
            Hablemos <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
