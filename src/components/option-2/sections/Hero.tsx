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
    <section className="relative min-h-[82vh] flex items-start overflow-hidden pt-24 min-[400px]:pt-40 pb-12 bg-background">
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
                Soluciones que{" "}
                <span className="italic" style={{ backgroundImage: "linear-gradient(to right, #FF3C00, #FF6A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  evolucionan
                </span>{" "}
                con vos.
              </h1>
            </div>

            <p className="animate-fade-in-up [animation-delay:100ms] text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
              Sitios web, sistemas de gestión y herramientas digitales
              <br />a medida para negocios <strong className="text-white font-semibold">que quieren crecer.</strong>
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
                    className="text-xs text-white/40 border border-border rounded-full px-3 py-1.5"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - mockup */}
          <div className="hidden lg:block overflow-visible -mr-10 relative">
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: "radial-gradient(ellipse at 55% 50%, rgba(255, 60, 0, 0.22) 0%, transparent 65%)",
                filter: "blur(60px)",
                transform: "scale(1.2)",
              }}
            />
            <DeviceMockup
              desktopSrc="/images/portfolio/screenshot-iteralex.webp"
              laptopSrc="/images/portfolio/screenshot-iterashop.png"
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
