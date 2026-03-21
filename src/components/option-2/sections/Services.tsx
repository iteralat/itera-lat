"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sitios Web",
    description: "Landing pages, portfolios y e-commerce con diseño premium y carga ultra-rápida.",
  },
  {
    icon: Cpu,
    title: "Plataformas & IA",
    description: "Sistemas de gestión, automatización y herramientas potenciadas con inteligencia artificial.",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Desarrollo custom que se adapta exactamente a tu operación y escala con tu negocio.",
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
