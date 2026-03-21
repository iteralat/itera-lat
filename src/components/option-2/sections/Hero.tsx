"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { GlowButton } from "../ui/GlowButton";
import { DeviceMockup } from "../ui/DeviceMockup";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 bg-background">
      <AnimatedBackground />

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-elevated/50 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium tracking-wide">
                  Agencia de desarrollo · Patagonia Argentina
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
                Soluciones digitales que{" "}
                <span className="italic bg-gradient-to-r from-primary via-primary-soft to-zinc-300 bg-clip-text text-transparent">
                  evolucionan
                </span>{" "}
                con vos.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
            >
              Desarrollamos sitios web, sistemas de gestión y herramientas
              digitales a medida para negocios que quieren crecer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GlowButton href="#showcase">
                Ver proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <GlowButton href="#contacto" variant="outline">
                Iniciar un proyecto
              </GlowButton>
            </motion.div>

            {/* Social proof pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-12"
            >
              {["5+ proyectos en producción", "Patagonia → LATAM", "Soporte continuo"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1.5"
                  >
                    {pill}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right - mockup */}
          <div className="hidden lg:block">
            <DeviceMockup
              desktopSrc="/images/portfolio/screenshot-cerro-solar.png"
              laptopSrc="/images/portfolio/screenshot-cota-estudio.png"
              mobileSrc="/images/portfolio/screenshot-cerro-solar.png"
              alt="Proyectos ÍTERA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
