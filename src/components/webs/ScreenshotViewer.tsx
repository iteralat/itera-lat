"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Monitor, Smartphone } from "lucide-react";
import type { WebItem } from "@/data/portfolio";

interface ScreenshotViewerProps {
  item: WebItem;
  onClose: () => void;
}

export function ScreenshotViewer({ item, onClose }: ScreenshotViewerProps) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const screenshotSrc =
    view === "mobile" && item.screenshotMobile
      ? item.screenshotMobile
      : item.screenshot;

  const hasMobile = !!item.screenshotMobile;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative w-full max-w-5xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar preview"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* View toggle */}
        {hasMobile && (
          <div className="absolute -top-12 left-0 flex gap-1 bg-elevated border border-border rounded-lg p-1">
            <button
              onClick={() => setView("desktop")}
              aria-label="Vista desktop"
              className={`p-2 rounded-md transition-colors ${
                view === "desktop"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <Monitor size={16} />
            </button>
            <button
              onClick={() => setView("mobile")}
              aria-label="Vista mobile"
              className={`p-2 rounded-md transition-colors ${
                view === "mobile"
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <Smartphone size={16} />
            </button>
          </div>
        )}

        {/* Browser / Phone frame */}
        {view === "desktop" ? (
          <div className="bg-elevated rounded-xl overflow-hidden border border-border/50 shadow-2xl">
            <div className="h-8 bg-black border-b border-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="mx-auto text-[10px] text-white/30 font-mono">
                {item.url || `${item.slug}.itera.lat`}
              </span>
            </div>
            <div className="relative aspect-[16/9] bg-zinc-900">
              {screenshotSrc ? (
                <Image
                  src={screenshotSrc}
                  alt={`${item.productName} - Desktop`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/10 uppercase tracking-widest">
                    {item.productName}
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-[320px] bg-elevated rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl p-2">
              <div className="rounded-[1.5rem] overflow-hidden">
                <div className="relative aspect-[9/19] bg-zinc-900">
                  {screenshotSrc ? (
                    <Image
                      src={screenshotSrc}
                      alt={`${item.productName} - Mobile`}
                      fill
                      className="object-cover object-top"
                      sizes="320px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white/10 uppercase tracking-widest">
                        {item.productName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="font-semibold text-white">{item.productName}</div>
            <div className="text-xs text-white/30">
              <span className="text-primary">{item.niche}</span>
              <span className="mx-2">·</span>
              {item.tags.join(", ")}
            </div>
          </div>
          <div className="flex gap-2">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-elevated border border-border rounded-lg text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                Ver sitio en vivo
              </a>
            )}
            <a
              href="/contacto"
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-soft transition-colors"
            >
              Quiero uno así
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
