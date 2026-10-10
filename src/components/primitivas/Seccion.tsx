import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type AnchoSeccion = "normal" | "amplio" | "completo";
type RitmoSeccion = "normal" | "compacto";

export interface SeccionProps extends HTMLAttributes<HTMLElement> {
  /** `normal` ~1152px (lectura) · `amplio` ~1360px (grillas) · `completo` full-bleed. */
  ancho?: AnchoSeccion;
  /** Ritmo vertical fluido: `normal` py-section · `compacto` py-section-sm. */
  ritmo?: RitmoSeccion;
  /** Clases extra para el contenedor interno (el que lleva max-width). */
  claseContenido?: string;
}

const anchos: Record<AnchoSeccion, string> = {
  normal: "mx-auto w-full max-w-page px-page-pad",
  amplio: "mx-auto w-full max-w-wide px-page-pad",
  completo: "w-full",
};

const ritmos: Record<RitmoSeccion, string> = {
  normal: "py-section",
  compacto: "py-section-sm",
};

/**
 * Sección de página: dueña del ritmo vertical (padding fluido con clamp)
 * y del ancho de contenido. Las páginas se arman apilando Secciones.
 */
export function Seccion({
  ancho = "normal",
  ritmo = "normal",
  claseContenido,
  className,
  children,
  ...props
}: SeccionProps) {
  return (
    <section className={cn(ritmos[ritmo], className)} {...props}>
      <div className={cn(anchos[ancho], claseContenido)}>{children}</div>
    </section>
  );
}
