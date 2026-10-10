import { cn } from "@/lib/utils/cn";
import type { FeaturedCase } from "@/lib/types/content";
import { Boton, Superficie } from "@/components/primitivas";

export interface TarjetaCasoProps {
  caso: FeaturedCase;
  className?: string;
}

/**
 * Caso destacado de la home: texto + resultados, con derivación a /casos.
 * Sin visual hasta tener el screenshot producido (nunca un placeholder).
 */
export function TarjetaCaso({ caso, className }: TarjetaCasoProps) {
  return (
    <Superficie
      como="article"
      relleno="amplio"
      className={cn("grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]", className)}
    >
      <div className="grid justify-items-start gap-4">
        <p className="text-eyebrow uppercase text-faint">Caso · Alquímica + Bambú</p>
        <h3 className="text-heading font-display text-balance">{caso.title}</h3>
        <p className="text-body text-muted-foreground">{caso.summary}</p>
        <Boton variante="secundario" href={caso.href} className="mt-2">
          Ver casos de estudio
        </Boton>
      </div>
      <ul className="grid content-center">
        {caso.bullets.map((bullet, i) => (
          <li key={bullet}>
            {i > 0 && <span aria-hidden className="linea-divisoria block" />}
            <p className="flex items-start gap-3 py-4 text-body text-muted-foreground">
              <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-primary-soft" />
              {bullet}
            </p>
          </li>
        ))}
      </ul>
    </Superficie>
  );
}
