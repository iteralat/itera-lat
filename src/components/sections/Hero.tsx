"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <InteractiveBackground />

      <div className="container relative mx-auto px-6 md:px-12 z-10 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-elevated/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Agencia de desarrollo · Patagonia Argentina</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-white">
              Soluciones digitales que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">evolucionan</span> con vos.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollamos sitios web, sistemas de gestión y herramientas digitales a medida para negocios que quieren crecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-sm hover:bg-primary-soft transition-colors flex items-center justify-center gap-2 group"
            >
              Ver proyectos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-elevated border border-border text-white font-semibold rounded-sm hover:bg-muted transition-colors flex items-center justify-center"
            >
              Iniciar un proyecto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
