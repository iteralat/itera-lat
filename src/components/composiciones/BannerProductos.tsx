import { cn } from "@/lib/utils/cn";
import type { OwnProduct, ProductsBanner } from "@/lib/types/content";
import { Boton, Superficie } from "@/components/primitivas";

export interface BannerProductosProps {
  contenido: ProductsBanner;
  productos: OwnProduct[];
  className?: string;
}

/**
 * Franja de credibilidad de productos propios: un solo banner (no cards)
 * que nombra los SaaS y deriva a /productos.
 */
export function BannerProductos({ contenido, productos, className }: BannerProductosProps) {
  return (
    <Superficie
      como="aside"
      relleno="amplio"
      className={cn("grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]", className)}
    >
      <div className="grid justify-items-start gap-4">
        <h2 className="text-heading font-display text-balance">{contenido.title}</h2>
        <p className="text-body text-muted-foreground">{contenido.description}</p>
        <Boton variante="secundario" href={contenido.ctaHref} className="mt-2">
          {contenido.ctaLabel}
        </Boton>
      </div>
      <ul className="grid content-center">
        {productos.map((producto, i) => (
          <li key={producto.id}>
            {i > 0 && <span aria-hidden className="linea-divisoria block" />}
            <p className="flex flex-wrap items-baseline gap-x-3 py-3.5">
              <span className="text-body font-medium">{producto.name}</span>
              <span className="text-small text-faint">{producto.tagline}</span>
            </p>
          </li>
        ))}
      </ul>
    </Superficie>
  );
}
