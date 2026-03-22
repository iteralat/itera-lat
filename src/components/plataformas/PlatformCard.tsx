"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server } from "lucide-react";
import type { PlatformItem } from "@/data/portfolio";

export function PlatformCard({ platform, index }: { platform: PlatformItem; index: number }) {
  const isProduction = platform.status.toLowerCase().includes("producción");
  const words = platform.productName.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col bg-elevated/30 border border-border rounded-xl overflow-hidden hover:border-orange-500/20 hover:shadow-[0_0_40px_-8px_rgba(255,120,0,0.12)] hover:scale-[1.015] transition-all duration-500 ease-out relative"
    >
      {/* Image Area */}
      <div className="aspect-[16/9] relative bg-[#050505] border-b border-border overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        {platform.screenshot ? (
          <>
            <Image
              src={platform.screenshot}
              alt={platform.productName}
              fill
              className="object-cover object-top transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />
            {/* Overlay que desaparece al hover */}
            <div className="absolute inset-0 z-10 bg-black/75 flex flex-col items-center justify-center gap-4 px-8 text-center transition-opacity duration-500 ease-out group-hover:opacity-0">
              <h3 className="text-3xl font-extrabold uppercase tracking-wider">
                {firstWord}{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  {restWords}
                </span>
              </h3>
              <p className="text-sm text-white/50 max-w-[28ch] leading-relaxed">{platform.coverLine}</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Server size={32} className="text-white/10" />
            <span className="text-3xl font-bold text-white/10 uppercase tracking-widest">{platform.productName}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-md ${
            isProduction
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-cold/10 border-cold/20 text-cold"
          }`}>
            {platform.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-20 flex flex-col flex-grow bg-background/50">
        <h3 className="text-2xl font-bold mb-1">{platform.productName}</h3>
        <p className="text-sm text-white/40 mb-1">{platform.tagline}</p>
        <p className="text-sm text-white/60 mb-4 leading-relaxed">{platform.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {platform.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-white/40 bg-elevated border border-border px-3 py-1 rounded-full transition-colors duration-300 hover:border-orange-400/50 hover:text-orange-400 hover:bg-orange-500/10 cursor-default select-none">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          {platform.adopters.length > 0 && (
            <p className="text-xs text-white/30">
              <span className="font-bold italic">Usado por:</span> {platform.adopters.map(a => a.name).join(", ")}
            </p>
          )}
          <Link
            href={`/proyectos/${platform.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-gradient-to-r from-orange-700 to-orange-500 text-white hover:from-orange-600 hover:to-orange-400 transition-all"
          >
            Ver producto <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
