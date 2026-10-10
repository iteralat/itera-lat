import { cn } from "@/lib/utils/cn";
import type { Differential } from "@/lib/types/content";

export interface TarjetaDiferencialProps {
  diferencial: Differential;
  /** Posición 0-based en la lista (se muestra como 01, 02…). */
  indice: number;
  className?: string;
}

/**
 * Diferencial de "Cómo trabajamos": número + título + texto, sin card
 * (respiro deliberado entre secciones con superficies).
 */
export function TarjetaDiferencial({ diferencial, indice, className }: TarjetaDiferencialProps) {
  return (
    <article className={cn("grid content-start gap-3", className)}>
      <span aria-hidden className="text-heading font-display text-primary-text">
        {String(indice + 1).padStart(2, "0")}
      </span>
      <h3 className="text-heading font-display">{diferencial.title}</h3>
      <p className="text-body text-muted-foreground">{diferencial.body}</p>
    </article>
  );
}
