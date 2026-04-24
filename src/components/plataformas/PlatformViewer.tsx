"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Server } from "lucide-react";

interface PlatformViewerProps {
  productName: string;
  /** Main screenshot (shown first) */
  screenshot: string;
  /** Additional screenshots */
  screenshots?: string[];
  /** Optional external URL to render in the fake browser chrome (e.g. "https://shope.ar") */
  externalUrl?: string;
}

function formatDisplayUrl(externalUrl: string | undefined, productName: string): string {
  if (externalUrl) {
    try {
      const u = new URL(externalUrl);
      return `${u.hostname}${u.pathname === "/" ? "" : u.pathname}`;
    } catch {
      return externalUrl;
    }
  }
  return `${productName.toLowerCase().replace(/\s/g, "")}.itera.lat`;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function PlatformViewer({ productName, screenshot, screenshots = [], externalUrl }: PlatformViewerProps) {
  const allScreenshots = screenshot
    ? [screenshot, ...screenshots]
    : screenshots;
  const displayUrl = formatDisplayUrl(externalUrl, productName);

  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = allScreenshots.length > 1;

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? allScreenshots.length - 1 : prev - 1));
  }, [allScreenshots.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === allScreenshots.length - 1 ? 0 : prev + 1));
  }, [allScreenshots.length]);

  // No screenshots at all — placeholder
  if (allScreenshots.length === 0) {
    return (
      <div className="w-full bg-elevated rounded-xl overflow-hidden border border-white/12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        <div className="h-6 md:h-9 bg-gradient-to-b from-zinc-800 to-zinc-900 border-b border-white/15 flex items-center px-2.5 md:px-4 gap-1.5 md:gap-2">
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-red-500/70" />
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-green-500/70" />
          <div className="mx-auto text-[9px] md:text-[11px] text-white/55 font-mono tracking-tight">{displayUrl}</div>
        </div>
        <div className="relative aspect-[16/9] bg-[#000000] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Server size={48} className="text-white/10" />
            <span className="text-3xl font-bold text-white/10 uppercase tracking-widest">{productName}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Browser frame con screenshot activa */}
      <div className="w-full bg-elevated rounded-xl overflow-hidden border border-white/12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.02)_inset] relative group">
        {/* Browser chrome */}
        <div className="h-6 md:h-9 bg-gradient-to-b from-zinc-800 to-zinc-900 border-b border-white/15 flex items-center px-2.5 md:px-4 gap-1.5 md:gap-2">
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-red-500/70" />
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-green-500/70" />
          <div className="mx-auto text-[9px] md:text-[11px] text-white/55 font-mono tracking-tight">
            {displayUrl}
          </div>
          {hasMultiple && (
            <span className="text-[9px] md:text-[10px] text-white/50 font-mono font-semibold">
              {activeIndex + 1}/{allScreenshots.length}
            </span>
          )}
        </div>

        {/* Screenshot con crossfade */}
        <div className="relative aspect-[16/9] bg-zinc-900 overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={allScreenshots[activeIndex]}
                alt={`${productName} - Vista ${activeIndex + 1}`}
                fill
                className="object-cover object-top"
                priority={activeIndex === 0}
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                aria-label="Vista anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                aria-label="Vista siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {allScreenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative shrink-0 w-24 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex
                  ? "border-primary shadow-[0_0_12px_-4px_rgba(255,60,0,0.4)]"
                  : "border-border/50 opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
