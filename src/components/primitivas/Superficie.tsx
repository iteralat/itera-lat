import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type NivelSuperficie = 1 | 2 | 3;
type RellenoSuperficie = "ninguno" | "normal" | "amplio";
type EtiquetaSuperficie = "div" | "article" | "section" | "aside" | "li" | "figure";

export interface SuperficieProps extends HTMLAttributes<HTMLElement> {
  /** Escalón en la escalera de superficies (bg → surface-1..3). */
  nivel?: NivelSuperficie;
  /** Hover: sube un escalón de superficie + elevación, con lift sutil. */
  interactiva?: boolean;
  relleno?: RellenoSuperficie;
  como?: EtiquetaSuperficie;
}

const niveles: Record<NivelSuperficie, string> = {
  1: "bg-surface-1 shadow-elevation-1",
  2: "bg-surface-2 shadow-elevation-2",
  3: "bg-surface-3 shadow-elevation-3",
};

/* El hover asciende al escalón siguiente (tope: surface-3 / elevation-3). */
const hoverPorNivel: Record<NivelSuperficie, string> = {
  1: "hover:bg-surface-2 hover:shadow-elevation-2",
  2: "hover:bg-surface-3 hover:shadow-elevation-3",
  3: "hover:bg-surface-3 hover:shadow-elevation-3",
};

const rellenos: Record<RellenoSuperficie, string> = {
  ninguno: "",
  normal: "p-6",
  amplio: "p-8 md:p-10",
};

/**
 * Superficie del design system: SIN borde de contorno. El despegue lo dan
 * escalón de lightness + sombra de elevación + inset top highlight (los tres
 * viven en los tokens `bg-surface-*` / `shadow-elevation-*`).
 */
export function Superficie({
  nivel = 1,
  interactiva = false,
  relleno = "normal",
  como: Etiqueta = "div",
  className,
  ...props
}: SuperficieProps) {
  return (
    <Etiqueta
      className={cn(
        "rounded-card",
        niveles[nivel],
        rellenos[relleno],
        interactiva &&
          cn(
            "transition-[background-color,box-shadow,transform] duracion-base hover:-translate-y-1",
            hoverPorNivel[nivel],
          ),
        className,
      )}
      {...props}
    />
  );
}
