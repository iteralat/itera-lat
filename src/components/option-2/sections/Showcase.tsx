"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { saasProducts, featuredWebsites } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const shopear = saasProducts.find((p) => p.slug === "shopear") ?? saasProducts[0];
  const iteralex = saasProducts.find((p) => p.slug === "iteralex");
  const sitiosCover = featuredWebsites[0];
  const otherSaasCount = saasProducts.filter((p) => p.slug !== "shopear").length;

  return (
    <section id="showcase" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-[10%] left-[5%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 94, 20, 0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[0%] right-[0%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 94, 20, 0.08) 0%, transparent 60%)",
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Lo que{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, var(--primary), var(--primary-soft))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              construimos
            </span>
          </h2>
          <p className="text-white/80 max-w-xl text-lg">
            Productos SaaS en producción y sitios web hechos a medida.
          </p>
        </motion.div>

        {/* Bento: Shopear hero + Sitios Web + Más SaaS (cards chicas con overlay) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-6">
          {/* Shopear — card grande, screenshot limpio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005, y: -2, transition: { duration: 0.3, ease: EASE } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="lg:col-span-3 lg:row-span-2"
          >
            <Link
              href="/productos/saas/shopear"
              className="group flex flex-col h-full rounded-2xl overflow-hidden relative glass-card cursor-pointer"
            >
              <div className="relative flex-1 min-h-[320px] lg:min-h-[440px] overflow-hidden bg-black">
                {shopear?.screenshot && (
                  <Image
                    src={shopear.screenshot}
                    alt={shopear.productName}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    SaaS
                  </span>
                  <span className="text-white/25">·</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-white/55 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    En producción
                  </span>
                </div>
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl tracking-tight mb-2">
                  {shopear?.productName ?? "Shopear"}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                  {shopear?.coverLine}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  Ver caso <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Sitios Web — card chica con screenshot + overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.3, ease: EASE } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
            className="lg:col-span-2"
          >
            <Link
              href="/productos/sitios-web"
              className="group flex flex-col h-full rounded-2xl overflow-hidden relative glass-card cursor-pointer"
            >
              <div className="relative flex-1 min-h-[180px] overflow-hidden bg-black">
                {sitiosCover?.screenshot ? (
                  <Image
                    src={sitiosCover.screenshot}
                    alt={sitiosCover.productName}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                    <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                      Sitios Web
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Overlay oscuro con label — desaparece al hover */}
                {sitiosCover?.screenshot && (
                  <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center transition-opacity duration-500 ease-out group-hover:opacity-0">
                    <span className="text-white font-display font-bold text-xl tracking-tight">
                      {sitiosCover.productName}
                    </span>
                    <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                      Sitios Web
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="text-white font-display font-bold text-xl mb-2">
                  Sitios Web y Tiendas Online
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Webs, catálogos y tiendas con panel propio. Diseño a medida, SEO y velocidad.
                </p>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  Explorar <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Más SaaS — card chica con screenshot + overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015, y: -2, transition: { duration: 0.3, ease: EASE } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
            className="lg:col-span-2"
          >
            <Link
              href="/productos/saas"
              className="group flex flex-col h-full rounded-2xl overflow-hidden relative glass-card cursor-pointer"
            >
              <div className="relative flex-1 min-h-[180px] overflow-hidden bg-black">
                {iteralex?.screenshot ? (
                  <Image
                    src={iteralex.screenshot}
                    alt={iteralex.productName}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                    <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                      SaaS
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Overlay oscuro con label — desaparece al hover */}
                <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center transition-opacity duration-500 ease-out group-hover:opacity-0">
                  <span className="text-white font-display font-bold text-xl tracking-tight">
                    +{otherSaasCount} productos
                  </span>
                  <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                    SaaS
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-white font-display font-bold text-xl mb-2">
                  Más SaaS en producción
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  IteraLex para estudios jurídicos e Itera Estudio para fotos de producto con IA.
                </p>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  Ver todos <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,94,20,0.4)]"
            style={{ backgroundImage: "linear-gradient(to right, var(--primary) 70%, var(--primary-soft))" }}
          >
            Ver todos los productos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
