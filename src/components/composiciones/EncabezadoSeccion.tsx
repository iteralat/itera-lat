import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface EncabezadoSeccionProps {
  /** Kicker corto sobre el título — texto plano, sin chip (anti-patrón de marca). Usar con moderación. */
  etiqueta?: string;
  titulo: ReactNode;
  descripcion?: ReactNode;
  alinear?: "izquierda" | "centro";
  /** id del h2, para aria-labelledby de la sección. */
  idTitulo?: string;
  className?: string;
}

/**
 * Encabezado estándar de sección: título + lead (+ eyebrow opcional).
 * Stack tight (grid con gaps), sin márgenes sueltos.
 */
export function EncabezadoSeccion({
  etiqueta,
  titulo,
  descripcion,
  alinear = "izquierda",
  idTitulo,
  className,
}: EncabezadoSeccionProps) {
  const centrado = alinear === "centro";

  return (
    <div className={cn("grid gap-4", centrado && "justify-items-center text-center", className)}>
      {etiqueta ? (
        <p className="text-eyebrow uppercase text-faint">{etiqueta}</p>
      ) : null}
      <h2 id={idTitulo} className="max-w-3xl text-title font-display text-balance">
        {titulo}
      </h2>
      {descripcion ? (
        <p className="max-w-prose text-lead text-muted-foreground">{descripcion}</p>
      ) : null}
    </div>
  );
}
