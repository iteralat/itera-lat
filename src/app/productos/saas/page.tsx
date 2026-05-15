"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cloud, RefreshCw, HeadphonesIcon } from "lucide-react";
import { saasProducts } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    icon: RefreshCw,
    title: "Productos propios, de la idea al funcionamiento",
    description: "Cada uno de estos SaaS lo pensamos, diseñamos y construimos nosotros, de punta a punta. No son maquetas ni pruebas de concepto: son productos terminados, funcionando online y listos para recibir usuarios.",
  },
  {
    icon: HeadphonesIcon,
    title: "Mantenidos por el mismo equipo",
    description: "Los desarrollamos, los operamos y los iteramos de forma continua. Un proyecto para tu negocio entraría al mismo flujo de trabajo y al mismo nivel de dedicación.",
  },
  {
    icon: Cloud,
    title: "Esa misma experiencia en tu proyecto",
    description: "Lo que aprendimos construyendo productos propios lo aplicamos al trabajo con clientes. El mismo criterio técnico y el mismo cuidado en las decisiones, con foco en que lo que entregamos se sostenga en el tiempo.",
  },
];

export default function SaaSPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[{ label: "Productos", href: "/productos" }]}
          current="SaaS"
          currentColor="text-primary"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-16"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              SaaS
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Productos propios que construimos, mantenemos y usamos. Son la
              forma más concreta de mostrar qué tipo de soluciones podemos
              desarrollar para tu negocio.
            </p>
          </div>
          <GlowButton href="/contacto">Hablemos de tu proyecto</GlowButton>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: EASE }}
              className="p-6 bg-muted border border-primary/10 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <b.icon size={18} className="text-primary shrink-0" />
                <div className="font-semibold text-white">{b.title}</div>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Product cards */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-2xl font-bold mb-8"
        >
          Nuestros productos SaaS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saasProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12, ease: EASE }}
            >
              <Link
                href={`/productos/saas/${product.slug}`}
                className="group bg-elevated border border-primary/12 rounded-xl overflow-hidden glow-hover transition-all duration-300 block"
              >
                <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                  {product.screenshot ? (
                    <Image
                      src={product.screenshot}
                      alt={product.productName}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center dot-grid">
                      <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                        {product.productName}
                      </span>
                    </div>
                  )}
                  {/* Gradient base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Overlay oscuro con nombre — desaparece al hover */}
                  {product.screenshot && (
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-1 transition-opacity duration-500 ease-out group-hover:opacity-0">
                      <span className="text-white font-bold text-2xl tracking-tight">
                        {product.productName}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {product.status}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-primary font-bold text-lg mb-1">
                    {product.productName}
                  </div>
                  <p className="text-white/55 text-sm mb-3">{product.tagline}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.coverLine}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium bg-white/5 border border-border rounded-full text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Ver caso →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
