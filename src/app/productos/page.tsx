"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Layers, Sparkles } from "lucide-react";
import { websites, standaloneProducts, saasProducts, featuredWebsites } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const categories = [
  {
    title: "Sitios Web",
    count: `${websites.length} sitios`,
    description:
      "Institucionales, catálogos, tiendas online. Cada sitio es rápido, indexable y administrable.",
    href: "/productos/sitios-web",
    cta: "Ver galería",
    icon: Globe,
    screenshot: featuredWebsites[0]?.screenshot ?? "",
    label: featuredWebsites[0]?.productName ?? "Sitios Web",
  },
  {
    title: "Soluciones",
    count: `${standaloneProducts.length} plataformas`,
    description:
      "Plataformas llave en mano que digitalizan operaciones reales. Gestión, presencia digital y catálogo.",
    href: "/productos/soluciones",
    cta: "Ver soluciones",
    icon: Layers,
    screenshot:
      standaloneProducts.find((p) => p.screenshot)?.screenshot ?? "",
    label:
      standaloneProducts.find((p) => p.screenshot)?.productName ?? "Soluciones",
  },
  {
    title: "SaaS",
    count: `${saasProducts.length} productos`,
    description:
      "Software por suscripción. Siempre actualizado, con soporte incluido y listo para usar.",
    href: "/productos/saas",
    cta: "Ver productos",
    icon: Sparkles,
    screenshot: saasProducts.find((p) => p.screenshot)?.screenshot ?? "",
    label: saasProducts.find((p) => p.screenshot)?.productName ?? "SaaS",
  },
];

export default function ProductosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255, 60, 0, 0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Lo que{" "}
            <span
              className="italic"
              style={{
                backgroundImage: "linear-gradient(to right, #FF3C00, #FF6A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              construimos
            </span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">
            Plataformas en producción, soluciones llave en mano y sitios web
            para todos los rubros.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                <Link
                  href={cat.href}
                  className="group block rounded-2xl overflow-hidden border border-white/[0.06] bg-muted hover:border-primary/20 transition-colors duration-500"
                >
                  {/* Screenshot area */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    {cat.screenshot ? (
                      <Image
                        src={cat.screenshot}
                        alt={cat.label}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/[0.02]" />
                    )}
                    {/* Gradient base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Overlay oscuro con icono + título — desaparece al hover */}
                    {cat.screenshot && (
                      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ease-out group-hover:opacity-0">
                        <Icon size={28} className="text-primary" strokeWidth={1.5} />
                        <span className="text-white font-bold text-xl tracking-tight">
                          {cat.label}
                        </span>
                      </div>
                    )}

                    {/* Label al hover */}
                    <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white/70 font-medium text-sm">
                        {cat.label}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-primary font-bold text-xl">
                        {cat.title}
                      </span>
                      <span className="text-white/30 text-xs">{cat.count}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      {cat.cta}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
