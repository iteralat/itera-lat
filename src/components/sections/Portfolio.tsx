"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Server, Wrench, ArrowRight } from "lucide-react";
import { platforms, tools } from "@/data/portfolio";

const verticals = [
  // TODO: reactivar cuando las demos estén listas
  // {
  //   title: "Sitios Web",
  //   description: `${websites.length} demos interactivas`,
  //   detail: "Institucionales, e-commerce, portfolios — cada uno con preview en vivo.",
  //   icon: <LayoutTemplate size={28} className="text-primary" />,
  //   href: "/webs",
  // },
  {
    title: "Plataformas",
    description: `${platforms.length} productos digitales`,
    detail: "Sistemas de gestión, catálogos, herramientas con IA — productos en producción real.",
    icon: <Server size={28} className="text-cold" />,
    href: "/plataformas",
  },
  {
    title: "Herramientas",
    description: `${tools.length} herramientas propias`,
    detail: "Monitoreo, búsqueda semántica y utilidades internas que usamos en cada proyecto.",
    icon: <Wrench size={28} className="text-primary-soft" />,
    href: "/herramientas",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Lo que construimos</h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Plataformas en producción, herramientas internas y proyectos reales. Explorá nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map((v, index) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={v.href}
                className="group flex flex-col h-full p-6 md:p-8 bg-elevated/30 border border-border rounded-xl hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(255,60,0,0.15)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-elevated border border-border flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{v.title}</h3>
                    <p className="text-primary-soft font-medium text-sm">{v.description}</p>
                  </div>
                </div>

                <p className="text-white/50 text-sm flex-grow mb-5">{v.detail}</p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors mt-auto">
                  Explorar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
