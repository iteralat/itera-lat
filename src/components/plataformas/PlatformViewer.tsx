"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Server } from "lucide-react";

interface PlatformViewerProps {
  productName: string;
  /** Main screenshot (shown first) */
  screenshot: string;
  /** Additional screenshots */
  screenshots?: string[];
}

export function PlatformViewer({ productName, screenshot, screenshots = [] }: PlatformViewerProps) {
  const allScreenshots = screenshot
    ? [screenshot, ...screenshots]
    : screenshots;

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
      <div className="w-full bg-elevated rounded-xl overflow-hidden border border-border/50 shadow-2xl">
        <div className="h-8 bg-black border-b border-border flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
          <div className="mx-auto text-[10px] text-white/30 font-mono">{productName.toLowerCase().replace(/\s/g, "")}.itera.lat</div>
        </div>
        <div className="relative aspect-[16/9] bg-[#050505] flex items-center justify-center">
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
      <div className="w-full bg-elevated rounded-xl overflow-hidden border border-border/50 shadow-2xl relative group">
        {/* Browser chrome */}
        <div className="h-8 bg-black border-b border-border flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
          <div className="mx-auto text-[10px] text-white/30 font-mono">
            {productName.toLowerCase().replace(/\s/g, "")}.itera.lat
          </div>
          {hasMultiple && (
            <span className="text-[10px] text-white/20 font-mono">
              {activeIndex + 1}/{allScreenshots.length}
            </span>
          )}
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[16/9] bg-zinc-900">
          <Image
            src={allScreenshots[activeIndex]}
            alt={`${productName} - Vista ${activeIndex + 1}`}
            fill
            className="object-cover object-top"
            priority={activeIndex === 0}
          />

          {/* Nav arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
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
