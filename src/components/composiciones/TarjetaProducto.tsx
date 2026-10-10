import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { OwnProduct } from "@/lib/types/content";
import { Superficie } from "@/components/primitivas";

export interface TarjetaProductoProps {
  producto: OwnProduct;
  /** Destino del link (por defecto, la sección de productos). */
  href?: string;
  className?: string;
}

/**
 * Producto propio en la franja de credibilidad de la home.
 * Tarjeta compacta con link stretched a /productos.
 */
export function TarjetaProducto({ producto, href = "/productos", className }: TarjetaProductoProps) {
  return (
    <Superficie
      como="article"
      interactiva
      className={cn("group relative flex h-full items-start justify-between gap-4", className)}
    >
      <div>
        <h3 className="text-heading font-display">
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {producto.name}
          </Link>
        </h3>
        <p className="mt-2 text-small text-muted-foreground">{producto.tagline}</p>
      </div>
      <ArrowUpRight
        aria-hidden
        className="mt-1 size-5 shrink-0 text-faint transition-[color,transform] duracion-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-text"
      />
    </Superficie>
  );
}
