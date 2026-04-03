"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { saasProducts, standaloneProducts, featuredWebsites } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const categories = [
  {
    title: "Sitios Web y Tiendas Online",
    description: "Webs corporativas, catálogos y tiendas con panel propio. Diseño a medida, SEO y velocidad desde el día uno.",
    href: "/productos/sitios-web",
    item: featuredWebsites[0] ?? null,
  },
  {
    title: "Soluciones",
    description: "Plataformas que digitalizan tu operación de punta a punta. Gestión, stock, ventas y reportes en un solo lugar.",
    href: "/productos/soluciones",
    item: standaloneProducts.find((p) => p.screenshot) ?? standaloneProducts[0],
  },
  {
    title: "SaaS",
    description: "Productos propios por suscripción. Actualizaciones continuas, soporte incluido y listos para usar desde hoy.",
    href: "/productos/saas",
    item: saasProducts.find((p) => p.screenshot) ?? saasProducts[0],
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-[10%] left-[5%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[0%] right-[0%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 60, 0, 0.08) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Lo que{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, #FF3C00, #FF6A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              construimos
            </span>
          </h2>
          <p className="text-white/60 max-w-xl text-lg">
            Plataformas en producción, soluciones llave en mano y sitios web
            para todos los rubros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.3, delay: 0, ease: EASE } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
            >
              <Link
                href={cat.href}
                className="group block rounded-2xl overflow-hidden relative glass-card cursor-pointer"
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {cat.item?.screenshot ? (
                    <Image
                      src={cat.item.screenshot}
                      alt={cat.item.productName}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                      <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                        {cat.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {cat.item && (
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white/70 font-medium text-sm">
                        {cat.item.productName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="text-white font-bold text-xl mb-2">
                    {cat.title}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    Explorar <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,60,0,0.4)]"
            style={{ backgroundImage: "linear-gradient(to right, #FF3C00 70%, #FF6A00)" }}
          >
            Ver todos los productos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
