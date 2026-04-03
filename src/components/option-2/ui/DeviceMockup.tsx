"use client";

import Image from "next/image";

interface DeviceMockupProps {
  desktopSrc: string;
  laptopSrc?: string;
  mobileSrc?: string;
  alt: string;
  priority?: boolean;
}

export function DeviceMockup({ desktopSrc, laptopSrc, mobileSrc, alt, priority = false }: DeviceMockupProps) {
  return (
    <div
      className="relative w-full max-w-none animate-slide-in-right"
      style={{ perspective: "1200px" }}
    >
      {/* Desktop frame - main, largest */}
      <div
        className="relative rounded-lg border border-white/[0.06] bg-elevated p-1.5 shadow-2xl shadow-black/60"
        style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black rounded-t-md">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <div className="ml-3 flex-1 h-3.5 bg-white/[0.04] rounded-sm" />
        </div>
        {/* Screen */}
        <div className="relative aspect-[16/9] bg-black rounded-b-md overflow-hidden">
          <Image
            src={desktopSrc}
            alt={alt}
            fill
            className="object-cover object-top opacity-80"
            sizes="(max-width: 768px) 90vw, 700px"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Laptop frame - smaller, overlapping bottom-left */}
      <div
        className="absolute -bottom-8 -left-10 w-[55%] rounded-md border border-white/[0.06] bg-elevated p-1 shadow-xl shadow-black/60 z-10 animate-fade-in-up [animation-delay:600ms]"
        style={{ transform: "rotateY(-2deg)" }}
      >
        <div className="flex items-center gap-1 px-2 py-1 bg-black rounded-t-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="ml-2 flex-1 h-2.5 bg-white/[0.04] rounded-sm" />
        </div>
        <div className="relative aspect-[16/10] bg-black rounded-b-sm overflow-hidden">
          <Image
            src={laptopSrc ?? desktopSrc}
            alt={`${alt} laptop`}
            fill
            className="object-cover object-top opacity-80"
            sizes="280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Mobile frame - smallest, overlapping bottom-right */}
      <div
        className="absolute -bottom-4 -right-4 w-[22%] rounded-xl border border-white/[0.06] bg-elevated p-1 shadow-xl shadow-black/60 z-20 animate-fade-in-up [animation-delay:800ms]"
        style={{ transform: "rotateY(-3deg)" }}
      >
        <div className="relative aspect-[9/19] bg-black rounded-lg overflow-hidden">
          <Image
            src={mobileSrc ?? desktopSrc}
            alt={`${alt} mobile`}
            fill
            className="object-cover object-top opacity-80"
            sizes="120px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
