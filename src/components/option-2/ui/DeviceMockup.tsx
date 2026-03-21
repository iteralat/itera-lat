"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DeviceMockupProps {
  desktopSrc: string;
  laptopSrc?: string;
  mobileSrc?: string;
  alt: string;
}

export function DeviceMockup({ desktopSrc, laptopSrc, mobileSrc, alt }: DeviceMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl mx-auto"
      style={{ perspective: "1200px" }}
    >
      {/* Desktop frame - main, largest */}
      <div
        className="relative rounded-lg border border-zinc-700/50 bg-zinc-900/80 p-1.5 shadow-2xl"
        style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/80 rounded-t-md">
          <span className="w-2 h-2 rounded-full bg-zinc-600" />
          <span className="w-2 h-2 rounded-full bg-zinc-600" />
          <span className="w-2 h-2 rounded-full bg-zinc-600" />
          <div className="ml-3 flex-1 h-3.5 bg-zinc-700/50 rounded-sm" />
        </div>
        {/* Screen */}
        <div className="relative aspect-[16/10] bg-zinc-950 rounded-b-md overflow-hidden">
          <Image
            src={desktopSrc}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, 520px"
          />
        </div>
      </div>

      {/* Laptop frame - smaller, overlapping bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 -left-10 w-[55%] rounded-md border border-zinc-700/40 bg-zinc-900/90 p-1 shadow-xl z-10"
        style={{ transform: "rotateY(-2deg)" }}
      >
        <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800/80 rounded-t-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <div className="ml-2 flex-1 h-2.5 bg-zinc-700/50 rounded-sm" />
        </div>
        <div className="relative aspect-[16/10] bg-zinc-950 rounded-b-sm overflow-hidden">
          <Image
            src={laptopSrc ?? desktopSrc}
            alt={`${alt} laptop`}
            fill
            className="object-cover object-top"
            sizes="280px"
          />
        </div>
      </motion.div>

      {/* Mobile frame - smallest, overlapping bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 -right-4 w-[22%] rounded-xl border border-zinc-700/40 bg-zinc-900/90 p-1 shadow-xl z-20"
        style={{ transform: "rotateY(-3deg)" }}
      >
        <div className="relative aspect-[9/19] bg-zinc-950 rounded-lg overflow-hidden">
          <Image
            src={mobileSrc ?? desktopSrc}
            alt={`${alt} mobile`}
            fill
            className="object-cover object-top"
            sizes="120px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
