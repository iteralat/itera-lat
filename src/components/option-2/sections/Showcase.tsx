"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { websites, platforms } from "@/data/portfolio";

// Pick items that have screenshots for the bento grid
const showcaseItems = [
  ...platforms.filter((p) => p.screenshot),
  ...websites.filter((w) => w.featured),
].slice(0, 6);

// Bento layout: which items span 2 cols
const spanMap: Record<number, string> = {
  0: "md:col-span-7",
  1: "md:col-span-5",
  2: "md:col-span-4",
  3: "md:col-span-4",
  4: "md:col-span-4",
  5: "md:col-span-12",
};

export function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que construimos
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Plataformas en producción y sitios web que resuelven problemas reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {showcaseItems.map((item, i) => {
            const name = item.type === "platform" ? item.productName : item.name;
            const isPlatform = item.type === "platform";
            const href = isPlatform ? `/plataformas/${item.id}` : "#";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-lg border border-zinc-800 hover:border-primary/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,60,0,0.08)] ${spanMap[i] ?? "md:col-span-4"}`}
              >
                <Link href={href} className="block relative aspect-[16/10]">
                  <Image
                    src={item.screenshot}
                    alt={name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

                  {/* Badge */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full ${
                      isPlatform
                        ? "bg-primary/20 text-primary"
                        : "bg-zinc-700/50 text-zinc-300"
                    }`}
                  >
                    {isPlatform ? "Plataforma" : "Web"}
                  </span>

                  {/* Name + arrow */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-white font-semibold text-sm md:text-base">
                      {name}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/plataformas"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-primary transition-colors"
          >
            Ver todos los proyectos
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
