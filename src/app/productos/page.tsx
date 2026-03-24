"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { saasProducts, standaloneProducts, type ProductItem } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

function ProductCard({ product, index }: { product: ProductItem; index: number }) {
  const isStandalone = product.category === "standalone";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 hover:border-primary/25 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,60,0,0.08)]"
    >
      <Link
        href={isStandalone && product.externalUrl ? product.externalUrl : `/productos/${product.id}`}
        {...(isStandalone && product.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block"
      >
        {/* Screenshot or placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {product.screenshot ? (
            <Image
              src={product.screenshot}
              alt={product.productName}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 flex items-center justify-center">
              <span className="text-3xl font-bold text-zinc-600 group-hover:text-zinc-500 transition-colors">
                {product.productName}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

          {/* Badge */}
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
            isStandalone
              ? "bg-primary/20 text-primary"
              : "bg-blue-500/20 text-blue-400"
          }`}>
            {isStandalone ? "Standalone" : "SaaS"}
          </span>

          {/* External link icon for standalone */}
          {isStandalone && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={14} className="text-primary" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {product.productName}
            </h3>
            <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-primary transition-colors" />
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">{product.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs text-zinc-500 bg-zinc-800/50 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Productos</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Plataformas en produccion que resuelven problemas reales. Desde SaaS propios hasta soluciones llave en mano para negocios.
          </p>
        </div>

        {/* SaaS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <h2 className="text-2xl font-bold">SaaS</h2>
            <span className="text-sm text-zinc-500">Productos propios con suscripcion</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {saasProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

        {/* Standalone */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold">Standalone</h2>
            <span className="text-sm text-zinc-500">Soluciones llave en mano para tu negocio</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standaloneProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
