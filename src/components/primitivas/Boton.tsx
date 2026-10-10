import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type VarianteBoton = "primario" | "gradiente" | "secundario" | "fantasma";
type TamanoBoton = "sm" | "md" | "lg";

interface BotonBase {
  /** `gradiente` es el CTA especial (glow de marca): UNO por vista, no repite al primario. */
  variante?: VarianteBoton;
  tamano?: TamanoBoton;
  className?: string;
  children: ReactNode;
}

type BotonComoAccion = BotonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type BotonComoEnlace = BotonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type BotonProps = BotonComoAccion | BotonComoEnlace;

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium select-none " +
  "transition-[background-color,color,box-shadow,transform] duracion-fast " +
  "active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variantes: Record<VarianteBoton, string> = {
  primario:
    "bg-primary text-primary-fg shadow-button-lift hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-elevation-soft",
  gradiente:
    "bg-linear-to-r from-primary to-primary-soft text-primary-fg shadow-glow-cta hover:shadow-glow-cta-hover hover:-translate-y-0.5",
  secundario:
    "bg-surface-2 text-foreground shadow-elevation-subtle hover:bg-surface-3 hover:-translate-y-0.5 hover:shadow-elevation-soft",
  fantasma:
    "bg-transparent text-muted-foreground hover:bg-surface-2 hover:text-foreground",
};

const tamanos: Record<TamanoBoton, string> = {
  sm: "h-control-sm px-4 text-small",
  md: "h-control-md px-6 text-small",
  lg: "h-control-lg px-8 text-body",
};

/**
 * Botón del design system. Semántica nativa: con `href` navega (renderiza
 * `<Link>`); sin `href` es acción (renderiza `<button type="button">`).
 */
export function Boton({
  variante = "primario",
  tamano = "md",
  className,
  ...props
}: BotonProps) {
  const clases = cn(base, variantes[variante], tamanos[tamano], className);

  if (props.href !== undefined) {
    const { href, ...rest } = props;
    return <Link href={href} className={clases} {...rest} />;
  }

  const { type = "button", ...rest } = props;
  return <button type={type} className={clases} {...rest} />;
}
