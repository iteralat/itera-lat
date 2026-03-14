"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";

const pillars = [
  {
    id: "web",
    title: "Sitios Web",
    description: "Institucionales, landing pages y tiendas online rápidas.",
    icon: <Globe className="w-6 h-6 text-primary" strokeWidth={2} />,
  },
  {
    id: "plataformas",
    title: "Plataformas & IA",
    description: "Sistemas de gestión, catálogos y chatbots inteligentes.",
    icon: <Cpu className="w-6 h-6 text-cold" strokeWidth={2} />,
  },
  {
    id: "custom",
    title: "Software a Medida",
    description: "Soluciones específicas para tu operación.",
    icon: <Code2 className="w-6 h-6 text-primary-soft" strokeWidth={2} />,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-12 border-t border-border bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div className="w-full md:w-auto shrink-0 text-center md:text-left">
             <h3 className="text-sm font-semibold text-white/40 tracking-widest uppercase mb-1">Qué Hacemos</h3>
             <p className="text-xl font-medium text-white/80">Desarrollo a medida</p>
          </div>

          <div className="h-px md:h-12 w-full md:w-px bg-border shrink-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 -m-4 rounded-xl hover:bg-elevated/30 transition-colors cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-3 bg-elevated border border-border rounded-sm shrink-0"
                >
                  {pillar.icon}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{pillar.title}</h4>
                  <p className="text-sm text-white/60 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
