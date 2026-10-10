"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { PillarSlug, PillarSummary } from "@/lib/types/content";
import { MarcoNavegador } from "./MarcoNavegador";
import { TrioDispositivos } from "./TrioDispositivos";
import { MOCKS_PANTALLA } from "./mocks";

export interface SelectorPilaresProps {
  pilares: PillarSummary[];
  className?: string;
}

/**
 * Pestañas de servicios de la home: lista numerada a la izquierda, preview
 * del pilar a la derecha. Cambio SOLO por click (o flechas del teclado) —
 * sin hover ni auto-avance.
 */
export function SelectorPilares({ pilares, className }: SelectorPilaresProps) {
  const [activo, setActivo] = useState<PillarSlug>(pilares[0].slug);
  const pilar = pilares.find((p) => p.slug === activo) ?? pilares[0];
  const Mock = MOCKS_PANTALLA[pilar.mock];

  const moverConFlechas = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const indice = pilares.findIndex((p) => p.slug === activo);
    const siguiente = pilares[(indice + delta + pilares.length) % pilares.length];
    setActivo(siguiente.slug);
    document.getElementById(`pilar-tab-${siguiente.slug}`)?.focus();
  };

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[minmax(300px,1fr)_2fr]", className)}>
      {/* Pestañas */}
      <div
        role="tablist"
        aria-label="Servicios"
        aria-orientation="vertical"
        onKeyDown={moverConFlechas}
        className="grid content-center gap-2"
      >
        {pilares.map((p, i) => {
          const seleccionado = p.slug === activo;
          return (
            <button
              key={p.slug}
              id={`pilar-tab-${p.slug}`}
              type="button"
              role="tab"
              aria-selected={seleccionado}
              aria-controls={`pilar-panel-${p.slug}`}
              tabIndex={seleccionado ? 0 : -1}
              onClick={() => setActivo(p.slug)}
              className={cn(
                "grid gap-1.5 rounded-card px-5 py-4 text-left transition-[background-color,box-shadow] duracion-base",
                seleccionado ? "bg-surface-2 shadow-glow-soft" : "bg-transparent hover:bg-surface-1",
              )}
            >
              <span className="flex items-baseline gap-3">
                <span
                  className={cn(
                    "text-meta font-display font-semibold tabular-nums transition-colors duracion-base",
                    seleccionado ? "text-primary-text" : "text-faint",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex-1 text-heading font-display transition-colors duracion-base",
                    seleccionado ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {p.name}
                </span>
                <ArrowRight
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 self-center transition-[opacity,transform] duracion-base",
                    seleccionado ? "translate-x-0 text-primary-text opacity-100" : "-translate-x-1 opacity-0",
                  )}
                />
              </span>
              <span className="pl-8 text-small text-faint">{p.audience}</span>
            </button>
          );
        })}
      </div>

      {/* Panel del pilar activo: elementos sobre el fondo, sin card */}
      <div
        key={pilar.slug}
        id={`pilar-panel-${pilar.slug}`}
        role="tabpanel"
        aria-labelledby={`pilar-tab-${pilar.slug}`}
        className="animate-aparece grid content-start gap-8 motion-reduce:animate-none"
      >
        {/* Escenario de altura ESTÁNDAR para todas las pestañas: el contenido
            se apoya en el piso del contenedor, nunca lo estira. */}
        <div className="relative aspect-[16/10] sm:aspect-[2/1]">
          {pilar.slug === "webs" ? (
            <TrioDispositivos className="absolute inset-x-0 bottom-0" />
          ) : (
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[70%]">
              <MarcoNavegador className="shadow-elevation-2">
                <div aria-hidden>
                  <Mock />
                </div>
              </MarcoNavegador>
            </div>
          )}
        </div>

        {/* Los 3 ítems en una fila de 3 columnas (cada uno envuelve a ~2 líneas) */}
        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-3">
          {pilar.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-small text-muted-foreground">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary-soft" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
