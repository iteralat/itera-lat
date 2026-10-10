import type { HeroContent } from "@/lib/types/content";
import { Boton, Superficie } from "@/components/primitivas";
import { EsferaDigital } from "./EsferaDigital";
import { MarcoNavegador } from "./MarcoNavegador";
import { MockPanelGestion } from "./mocks";

export interface PortadaHeroProps {
  contenido: HeroContent;
}

/**
 * Hero de la home: globo digital de puntos rotando de fondo, promesa
 * centrada encima y un panel de producto asomando desde el pliegue.
 * El único elemento con glow es el CTA gradiente.
 */
export function PortadaHero({ contenido }: PortadaHeroProps) {
  const esExterno = contenido.primaryHref.startsWith("http");

  return (
    <section className="relative overflow-hidden">
      <EsferaDigital />

      <div className="relative mx-auto grid w-full max-w-page justify-items-center px-page-pad pt-44 text-center lg:pt-52">
        <p className="animate-aparece text-eyebrow uppercase text-muted-foreground">
          {contenido.eyebrow}
        </p>
        <h1
          className="animate-aparece mt-5 max-w-4xl text-display font-display text-balance"
          style={{ animationDelay: "60ms" }}
        >
          {contenido.titleStart}
          <span className="texto-gradiente-brand">{contenido.titleHighlight}</span>
          {contenido.titleEnd}
        </h1>
        <p
          className="animate-aparece mt-6 max-w-prose text-lead text-muted-foreground"
          style={{ animationDelay: "120ms" }}
        >
          {contenido.lead}
        </p>
        <div
          className="animate-aparece mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "180ms" }}
        >
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

        {/* Panel de producto asomando desde el pliegue */}
        <div
          className="animate-aparece mt-16 w-full max-w-4xl lg:mt-20"
          style={{ animationDelay: "240ms" }}
        >
          <Superficie relleno="ninguno" nivel={1} className="overflow-hidden p-2 sm:p-3">
            <MarcoNavegador>
              <div aria-hidden>
                <MockPanelGestion />
              </div>
            </MarcoNavegador>
          </Superficie>
        </div>
      </div>
    </section>
  );
}
