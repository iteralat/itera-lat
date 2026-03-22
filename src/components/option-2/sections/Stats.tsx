"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const animatedStats = [
  { target: 5, suffix: "+", label: "Plataformas en producción" },
  { target: 3, suffix: "+", label: "Años construyendo software" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-background relative">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {animatedStats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}

          {/* Tercer stat: texto estático */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
              Patagonia → LATAM
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-500 font-medium">
              De la Patagonia al mundo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
