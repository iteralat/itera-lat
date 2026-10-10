import type { CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";
import type { ShowcaseScreen } from "@/lib/types/content";
import { PantallaSistema } from "./PantallaSistema";

export interface CintaPantallasProps {
  pantallas: ShowcaseScreen[];
  className?: string;
}

/* Velocidad constante aunque cambie la cantidad de pantallas. */
const SEGUNDOS_POR_PANTALLA = 8;

/**
 * Cinta full-bleed de pantallas: marquesina CSS de punta a punta (patrón
 * carrusel de raves-com-ar). Lista duplicada para el loop sin costura,
 * pausa en hover, reduced-motion la deja quieta.
 */
export function CintaPantallas({ pantallas, className }: CintaPantallasProps) {
  const duracion = Math.max(pantallas.length, 1) * SEGUNDOS_POR_PANTALLA;
  const copias = ["original", "clon"] as const;

  return (
    <div className={cn("mascara-cinta overflow-hidden", className)}>
      <div
        className="flex w-max gap-6 [animation:desplaza-cinta_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duracion}s` } as CSSProperties}
      >
        {copias.map((copia) =>
          pantallas.map((pantalla) => (
            <div
              key={`${copia}-${pantalla.id}`}
              aria-hidden={copia === "clon" || undefined}
              className="w-80 shrink-0 sm:w-[27rem]"
            >
              <PantallaSistema pantalla={pantalla} className="h-full" />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
