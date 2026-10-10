import { cn } from "@/lib/utils/cn";
import type { CtaContent } from "@/lib/types/content";
import { Boton, Superficie } from "@/components/primitivas";

export interface BloqueCTAProps {
  contenido: CtaContent;
  className?: string;
}

/**
 * Banner de contacto: título + texto + CTA primario (gradiente, el único
 * elemento con glow de la vista) y secundario.
 */
export function BloqueCTA({ contenido, className }: BloqueCTAProps) {
  const esExterno = contenido.primaryHref.startsWith("http");

  return (
    <Superficie
      relleno="amplio"
      className={cn("fondo-brillo-brand grid justify-items-center gap-4 text-center", className)}
    >
      <h2 className="max-w-2xl text-title font-display text-balance">{contenido.title}</h2>
      <p className="max-w-prose text-lead text-muted-foreground">{contenido.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <Boton
          variante="gradiente"
          tamano="lg"
          href={contenido.primaryHref}
          {...(esExterno ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {contenido.primaryLabel}
        </Boton>
        <Boton variante="secundario" tamano="lg" href={contenido.secondaryHref}>
          {contenido.secondaryLabel}
        </Boton>
      </div>
    </Superficie>
  );
}
