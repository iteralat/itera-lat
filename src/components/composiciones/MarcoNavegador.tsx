import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface MarcoNavegadorProps {
  /** Cuerpo del marco: screenshot real o pantalla mock registrada. */
  children: ReactNode;
  className?: string;
}

/**
 * Marco de navegador para presentar pantallas: barra chrome (puntos +
 * dirección) + cuerpo. Decorativo, siempre dentro de una Superficie o
 * figura rotulada.
 */
export function MarcoNavegador({ children, className }: MarcoNavegadorProps) {
  return (
    <div className={cn("overflow-hidden rounded-control bg-track shadow-track-inset", className)}>
      <div aria-hidden className="flex items-center gap-1.5 bg-surface-2 px-3.5 py-2.5 shadow-elevation-subtle">
        <span className="size-2 rounded-full bg-surface-3" />
        <span className="size-2 rounded-full bg-surface-3" />
        <span className="size-2 rounded-full bg-surface-3" />
        <span className="ml-2 h-3.5 w-2/5 rounded-full bg-surface-1" />
      </div>
      {children}
    </div>
  );
}
