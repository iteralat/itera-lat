"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { platforms, type PlatformItem } from "@/data/portfolio";

// Slider: plataformas destacadas (IteraLex primero)
const sliderItems: PlatformItem[] = [
  platforms.find((p) => p.id === "iteralex")!,
  platforms.find((p) => p.id === "itera-gestion")!,
  platforms.find((p) => p.id === "itera-tree")!,
];

// Bento: el resto
const sliderIds = new Set(sliderItems.map((p) => p.id));
const bentoItems = platforms.filter((p) => !sliderIds.has(p.id));

const spanMap: Record<number, string> = {
  0: "md:col-span-6",
  1: "md:col-span-6",
};

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

/** Devuelve las imágenes disponibles para un slide */
function getSlideImages(item: PlatformItem): string[] {
  if (item.screenshots && item.screenshots.length > 0) return item.screenshots;
  if (item.screenshot) return [item.screenshot];
  return [];
}

function SliderCard({
  item,
  position,
}: {
  item: PlatformItem;
  position: "prev" | "active" | "next";
}) {
  const images = getSlideImages(item);
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const isActive = position === "active";

  return (
    <div
      className={`relative transition-all duration-500 ${
        isActive
          ? "scale-100 opacity-100 z-10"
          : "scale-[0.88] opacity-40 z-0 pointer-events-none"
      }`}
    >
      {/* Tablet frame */}
      <div
        className={`relative rounded-xl border bg-zinc-900 p-2 shadow-2xl shadow-black/40 transition-colors duration-500 ${
          isActive ? "border-zinc-700/60" : "border-zinc-800/40"
        }`}
      >
        <Link
          href={`/proyectos/${item.id}`}
          className="block relative aspect-[16/10] rounded-lg overflow-hidden"
        >
          {images.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[imgIndex]}
                  alt={`${item.productName} - vista ${imgIndex + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-zinc-600">
                {item.productName}
              </span>
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

          {/* Name + tagline */}
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white font-semibold text-lg">
              {item.productName}
            </span>
            <p className="text-zinc-300 text-sm mt-1">{item.tagline}</p>
          </div>
        </Link>

        {/* Inner dots — solo si hay múltiples screenshots */}
        {hasMultiple && isActive && (
          <div className="flex items-center justify-center gap-1.5 pt-2 pb-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                aria-label={`Vista ${i + 1} de ${item.productName}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === imgIndex
                    ? "bg-primary w-4"
                    : "bg-zinc-600 hover:bg-zinc-500 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = sliderItems.length;

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((prev) => mod(prev + dir, len));
    },
    [len]
  );

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    []
  );

  const prevIndex = mod(activeIndex - 1, len);
  const nextIndex = mod(activeIndex + 1, len);

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
            Plataformas en producción que resuelven problemas reales.
          </p>
        </motion.div>

        {/* Infinite tablet slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-16"
        >
          {/* 3-card layout: prev | active | next */}
          <div className="relative flex items-center justify-center">
            {/* Previous (peek left) */}
            <div className="hidden md:block w-[20%] flex-shrink-0">
              <SliderCard
                key={`prev-${prevIndex}`}
                item={sliderItems[prevIndex]}
                position="prev"
              />
            </div>

            {/* Active center */}
            <div className="w-full md:w-[60%] flex-shrink-0 px-2 md:px-4">
              <SliderCard
                key={`active-${activeIndex}`}
                item={sliderItems[activeIndex]}
                position="active"
              />
            </div>

            {/* Next (peek right) */}
            <div className="hidden md:block w-[20%] flex-shrink-0">
              <SliderCard
                key={`next-${nextIndex}`}
                item={sliderItems[nextIndex]}
                position="next"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              aria-label="Proyecto anterior"
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {sliderItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a proyecto ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-6"
                      : "bg-zinc-600 hover:bg-zinc-500 w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              aria-label="Proyecto siguiente"
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Bento grid: resto de plataformas */}
        {bentoItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {bentoItems.map((item, i) => (
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
                <Link
                  href={`/proyectos/${item.id}`}
                  className="block relative aspect-[16/10]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-600 group-hover:text-zinc-500 transition-colors">
                      {item.productName}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary">
                    Plataforma
                  </span>

                  {/* Name + arrow */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-white font-semibold text-sm md:text-base">
                      {item.productName}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/proyectos"
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
