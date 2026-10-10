import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { ShowcaseScreen } from "@/lib/types/content";
import { Superficie } from "@/components/primitivas";
import { MarcoNavegador } from "./MarcoNavegador";
import { MOCKS_PANTALLA } from "./mocks";

export interface PantallaSistemaProps {
  pantalla: ShowcaseScreen;
  className?: string;
}

/**
 * Pantalla de sistema en marco de navegador + rótulo (rubro + qué resuelve).
 * Renderiza un screenshot real o una pantalla mock registrada (JSX coherente
 * con la marca). Nunca placeholders abstractos.
 */
export function PantallaSistema({ pantalla, className }: PantallaSistemaProps) {
  const Mock = pantalla.mock ? MOCKS_PANTALLA[pantalla.mock] : null;

  return (
    <Superficie como="figure" relleno="ninguno" className={cn("overflow-hidden", className)}>
      <div className="p-3 pb-0">
        <MarcoNavegador>
          {pantalla.image ? (
            <Image
              src={pantalla.image.src}
              alt={pantalla.image.alt}
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover object-top"
            />
          ) : Mock ? (
            <div aria-hidden>
              <Mock />
            </div>
          ) : null}
        </MarcoNavegador>
      </div>
      <figcaption className="p-5">
        <p className="text-small font-medium">{pantalla.industry}</p>
        <p className="mt-1 text-meta text-faint">{pantalla.caption}</p>
      </figcaption>
    </Superficie>
  );
}
