import { cn } from "@/lib/utils/cn";
import { MarcoNavegador } from "./MarcoNavegador";

/** Pantalla vacía de trabajo: rectángulo negro rotulado, sin contenido interno. */
function PantallaPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-track", className)}>
      <span className="text-eyebrow uppercase text-faint">Placeholder</span>
    </div>
  );
}

export interface TrioDispositivosProps {
  className?: string;
}

/**
 * Preview del pilar Webs: desktop grande al centro, tablet solapada a la
 * derecha a media altura y mobile solapado a la izquierda. Todo dentro de
 * la altura del contenedor (nada desborda). Pantallas placeholder.
 */
export function TrioDispositivos({ className }: TrioDispositivosProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none relative select-none", className)}>
      {/* Desktop (centro) — define la altura de la escena */}
      <MarcoNavegador className="mx-auto w-[64%] shadow-elevation-2">
        <PantallaPlaceholder className="aspect-[16/10] w-full" />
      </MarcoNavegador>

      {/* Tablet (derecha, DELANTE de la laptop): apoyada en el mismo piso */}
      <div className="absolute right-[2%] bottom-0 w-[22%] rounded-card bg-chrome p-1.5 shadow-elevation-3">
        <PantallaPlaceholder className="aspect-[3/4] w-full rounded-control" />
      </div>

      {/* Mobile (izquierda, DELANTE de la laptop): mismo piso */}
      <div className="absolute bottom-0 left-[5%] w-[12%] rounded-card bg-chrome p-1 pt-3.5 shadow-elevation-3">
        <span className="absolute top-1.5 left-1/2 h-0.5 w-1/4 -translate-x-1/2 rounded-full bg-surface-3" />
        <PantallaPlaceholder className="aspect-[9/17] w-full rounded-control" />
      </div>
    </div>
  );
}
