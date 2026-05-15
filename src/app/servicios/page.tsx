"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Sitios & Tiendas Web",
    description:
      "Webs corporativas, catálogos y tiendas online con panel de administración propio. Pensadas para que puedas actualizar contenido, precios y productos por tu cuenta, sin depender del desarrollador para cada cambio.",
    details: [
      "Sitios institucionales con diseño a medida",
      "Tiendas online con carrito, pagos y stock",
      "Panel de administración propio para editar contenido",
      "Optimización para buscadores (SEO)",
      "Diseño adaptado a celulares, tablets y escritorio",
    ],
    relatedLink: { label: "Ver galería de sitios web", href: "/productos/sitios-web", colorClass: "text-primary" },
  },
  {
    icon: Code2,
    title: "Plataformas a medida",
    description:
      "Sistemas de gestión y herramientas internas que digitalizan tu operación. Los diseñamos en base a cómo trabaja tu equipo, con espacio para que puedan crecer junto al negocio.",
    details: [
      "Sistemas de gestión internos (clientes, pedidos, inventario)",
      "Automatización de procesos repetitivos",
      "Tableros con métricas y reportes en tiempo real",
      "Integración con herramientas que ya usás",
      "Permisos por rol para cada usuario del equipo",
    ],
    relatedLink: { label: "Hablemos de tu plataforma", href: "/contacto", colorClass: "text-primary" },
  },
  {
    icon: Cpu,
    title: "Soluciones con IA",
    description:
      "Integramos inteligencia artificial en procesos donde suma valor real: asistentes para clientes, generación de contenido, análisis de datos o procesamiento de documentos. Siempre conectadas a las herramientas que ya usás.",
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Servicios
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Tres líneas de trabajo que cubren la mayoría de los proyectos que
            encaramos. Todo lo que construimos se piensa a medida, considerando
            cómo se integra con tu operación actual.
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
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
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
                  <h3 className="text-sm font-semibold text-white/55 uppercase tracking-wider mb-5">
                    Qué incluye
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-white/80 text-sm leading-relaxed">{detail}</span>
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
          <p className="text-white/80 mb-6 text-lg">
            ¿Tenés un proyecto en mente? Contanos de qué se trata y vemos cómo
            podríamos encararlo juntos.
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
