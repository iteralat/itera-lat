"use client";

import Image from "next/image";
import type { WebItem } from "@/data/portfolio";

interface WebCardProps {
  item: WebItem;
  index: number;
  onClick: () => void;
}

export function WebCard({ item, index, onClick }: WebCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-elevated rounded-xl overflow-hidden border border-border/50 glow-hover transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Browser frame */}
      <div className="h-7 bg-black border-b border-border flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        <span className="mx-auto text-[9px] text-white/20 font-mono truncate">
          {item.url || `${item.slug}.itera.lat`}
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
        {item.screenshot ? (
          <Image
            src={item.screenshot}
            alt={item.productName}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
              {item.productName}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-medium border border-white/20 px-4 py-2 rounded-lg">
            Ver preview
          </span>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/20 border border-primary/30 text-primary rounded-full backdrop-blur-sm">
            Destacado
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="font-semibold text-white mb-1">{item.productName}</div>
        <div className="flex items-center gap-2 text-xs text-white/30">
          <span className="text-primary">{item.niche}</span>
          <span>·</span>
          <span>{item.tags.slice(0, 2).join(", ")}</span>
        </div>
      </div>
    </button>
  );
}
