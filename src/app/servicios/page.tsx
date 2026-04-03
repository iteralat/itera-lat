"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Sitios & Tiendas Web",
    description:
      "Webs corporativas, catálogos y tiendas online con panel de administración propio. Vos controlás el contenido, los precios y los productos sin depender de nadie.",
    details: [
      "Sitios institucionales con diseño a medida",
      "Tiendas online con carrito, pagos y stock",
      "Panel de administración para que edites todo vos",
      "Optimización para buscadores desde el día uno",
      "Adaptado a celulares, tablets y escritorio",
    ],
    relatedLink: { label: "Ver galería de sitios web", href: "/productos/sitios-web", colorClass: "text-primary" },
  },
  {
    icon: Code2,
    title: "Plataformas a medida",
    description:
      "Sistemas de gestión, automatización y herramientas que digitalizan tu operación de punta a punta. Diseñados para tu equipo, listos para crecer con tu negocio.",
    details: [
      "Sistemas de gestión internos (clientes, pedidos, inventario)",
      "Automatización de procesos repetitivos",
      "Tableros con métricas y reportes en tiempo real",
      "Integración con herramientas que ya usás",
      "Permisos por rol para cada usuario de tu equipo",
    ],
    relatedLink: { label: "Ver soluciones en producción", href: "/productos/soluciones", colorClass: "text-primary" },
  },
  {
    icon: Cpu,
    title: "Soluciones con IA",
    description:
      "Analizamos tu operación y encontramos qué automatizar. Asistentes inteligentes, generación de contenido y herramientas con IA integradas a tu flujo de trabajo.",
    details: [
      "Asistentes que responden consultas de tus clientes",
      "Generación automática de contenido y descripciones",
      "Análisis de datos y detección de patrones",
      "Procesamiento de documentos e imágenes",
      "Integración con tus sistemas existentes",
    ],
    relatedLink: { label: "Ver productos SaaS", href: "/productos/saas", colorClass: "text-primary" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiciosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Servicios
          </h1>
          <p className="text-xl text-white/40 leading-relaxed">
            Construimos lo que tu negocio necesita para operar mejor.
            Desde un sitio web hasta una plataforma completa con inteligencia artificial.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
              >
                {/* Left: description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-white/40 text-base md:text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.relatedLink.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.relatedLink.colorClass} hover:underline`}
                  >
                    {service.relatedLink.label} <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right: details */}
                <div className="p-6 md:p-8 rounded-xl bg-muted border border-border">
                  <h3 className="text-sm font-semibold text-white/30 uppercase tracking-wider mb-5">
                    Qué incluye
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-white/50 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-24 text-center"
        >
          <p className="text-white/40 mb-6 text-lg">
            ¿Tenés un proyecto en mente? Contanos y te armamos una propuesta.
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
