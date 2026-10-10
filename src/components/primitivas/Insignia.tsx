import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TonoInsignia = "neutro" | "primario";

export interface InsigniaProps extends HTMLAttributes<HTMLSpanElement> {
  /** Único acento permitido: `primario` (tint rojo). Sin colores de categoría. */
  tono?: TonoInsignia;
}

const tonos: Record<TonoInsignia, string> = {
  neutro: "bg-surface-2 text-muted-foreground shadow-elevation-subtle",
  primario: "bg-primary-tint text-primary-text",
};

/**
 * Insignia/eyebrow del design system. UN solo tamaño en todo el sitio;
 * siempre inline junto a su título, nunca ocupando media fila.
 */
export function Insignia({ tono = "neutro", className, ...props }: InsigniaProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-eyebrow uppercase",
        tonos[tono],
        className,
      )}
      {...props}
    />
  );
}
