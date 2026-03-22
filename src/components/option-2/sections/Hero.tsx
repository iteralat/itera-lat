"use client";

import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "../ui/GlowButton";
import { DeviceMockup } from "../ui/DeviceMockup";

const AnimatedBackground = dynamic(
  () => import("../ui/AnimatedBackground").then((m) => m.AnimatedBackground),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-start overflow-hidden pt-24 min-[400px]:pt-40 pb-12 bg-[#0f0e0c]">
      <AnimatedBackground />

      <div className="relative mx-auto px-6 md:px-8 lg:px-10 z-10 w-full max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-0 items-center">
          {/* Left - text */}
          <div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-elevated/50 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium tracking-wide">
                  Agencia de desarrollo
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
                Soluciones digitales que{" "}
                <span className="italic" style={{ backgroundImage: "linear-gradient(to right, #FF3C00, #FF6A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  evolucionan
                </span>{" "}
                con vos.
              </h1>
            </div>

            <p className="animate-fade-in-up [animation-delay:100ms] text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Desarrollamos sitios web, sistemas de gestión y herramientas
              digitales a medida para negocios que quieren crecer.
            </p>

            <div className="animate-fade-in-up [animation-delay:200ms] flex flex-col sm:flex-row gap-4">
              <GlowButton href="#showcase">
                Ver proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <GlowButton href="#contacto" variant="outline">
                Iniciar un proyecto
              </GlowButton>
            </div>

            {/* Social proof pills */}
            <div className="animate-fade-in-up [animation-delay:400ms] flex flex-wrap gap-3 mt-12">
              {["5+ proyectos en producción", "Patagonia → LATAM", "Soporte continuo"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1.5"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - mockup */}
          <div className="hidden lg:block overflow-visible -mr-10">
            <DeviceMockup
              desktopSrc="/images/portfolio/screenshot-iteralex.webp"
              laptopSrc="/images/portfolio/screenshot-dashboard-catalogo.webp"
              mobileSrc="/images/portfolio/screenshot-cerro-solar.webp"
              alt="Proyectos ÍTERA"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
