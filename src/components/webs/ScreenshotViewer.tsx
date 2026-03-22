"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Monitor, Smartphone, MessageSquare } from "lucide-react";
import type { WebItem } from "@/data/portfolio";

interface ScreenshotViewerProps {
  item: WebItem;
  onClose: () => void;
}

export function ScreenshotViewer({ item, onClose }: ScreenshotViewerProps) {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-6xl bg-background border border-border rounded-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-elevated/50 shrink-0">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 border border-primary/20 text-primary-soft">
              {item.niche}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Toggle Desktop/Mobile */}
            <div className="flex bg-elevated border border-border rounded-sm p-1">
              <button
                onClick={() => setMode("desktop")}
                aria-label="Ver versión desktop"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                  mode === "desktop"
                    ? "bg-background border border-border text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Monitor size={14} /> Desktop
              </button>
              <button
                onClick={() => setMode("mobile")}
                aria-label="Ver versión mobile"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                  mode === "mobile"
                    ? "bg-background border border-border text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Smartphone size={14} /> Mobile
              </button>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar visor"
              className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-elevated transition-colors text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="flex-grow overflow-auto flex items-start justify-center p-6 bg-[#050505]">
          {mode === "desktop" ? (
            /* Browser frame */
            <div className="w-full max-w-[1200px] bg-elevated rounded-xl overflow-hidden border border-border/50 shadow-2xl">
              <div className="h-8 bg-black border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                <div className="mx-auto text-[10px] text-white/30 font-mono">
                  {item.url?.replace("https://", "")}
                </div>
              </div>
              <div className="relative aspect-[16/9] bg-zinc-900">
                <Image
                  src={item.screenshot}
                  alt={`${item.name} - Desktop`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          ) : (
            /* Mobile frame */
            <div className="w-[375px] bg-elevated rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
              {/* Notch */}
              <div className="h-10 bg-black flex justify-center items-center">
                <div className="w-16 h-4 bg-background rounded-full" />
              </div>
              <div className="relative aspect-[9/16] bg-zinc-900">
                <Image
                  src={item.screenshotMobile}
                  alt={`${item.name} - Mobile`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-border bg-elevated/50 shrink-0">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-grow">
              <p className="text-zinc-400 text-sm mb-2">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-zinc-400 bg-elevated border border-border px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <MessageSquare size={14} /> Solicitar un sitio así
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
