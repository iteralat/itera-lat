"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sitios & Tiendas Web",
    description: "Webs corporativas, catálogos y tiendas online con panel de administración propio. Vos controlás el contenido, los precios y los productos sin depender de nadie.",
  },
  {
    icon: Code2,
    title: "Plataformas a medida",
    description: "Sistemas de gestión, automatización y herramientas que digitalizan tu operación de punta a punta. Diseñados para tu equipo, listos para crecer con tu negocio.",
  },
  {
    icon: Cpu,
    title: "Soluciones con IA",
    description: "Analizamos tu operación y encontramos qué automatizar. Chatbots, asistentes inteligentes, generación de contenido y herramientas con IA integradas a tu flujo de trabajo.",
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 md:p-8 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,60,0,0.06)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
