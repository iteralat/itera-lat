import type { Metadata } from "next";
import { Seccion } from "@/components/primitivas";
import {
  BannerProductos,
  BloqueCTA,
  CintaPantallas,
  EncabezadoSeccion,
  PortadaHero,
  SelectorPilares,
  TarjetaCaso,
  TarjetaDiferencial,
} from "@/components/composiciones";
import {
  differentials,
  featuredCase,
  finalCta,
  heroContent,
  ownProducts,
  productsBanner,
  showcaseScreens,
} from "@/data/home";
import { pillarSummaries } from "@/data/pilares";

export const metadata: Metadata = {
  title: { absolute: "ÍTERA | Construimos el software de tu negocio" },
  description:
    "Webs autogestionables, sistemas de gestión e IA aplicada a tu operación. Todo incluido: diseño, dominio, hosting y soporte. Argentina → LatAm.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <PortadaHero contenido={heroContent} />

      {/* 2. Qué hacemos: los 4 pilares */}
      <Seccion ancho="amplio" id="servicios" aria-labelledby="titulo-servicios" className="scroll-mt-24">
        <EncabezadoSeccion
          idTitulo="titulo-servicios"
          titulo="Qué hacemos"
          descripcion="Elegí por dónde empezar: una web, un sistema de gestión, IA aplicada o una revisión técnica de lo que ya tenés."
        />
        <div className="mt-block revela-al-scroll">
          <SelectorPilares pilares={pillarSummaries} />
        </div>
      </Seccion>

      {/* 3. Pantallas: cinta full-bleed */}
      <Seccion ancho="completo" aria-labelledby="titulo-pantallas">
        <div className="mx-auto w-full max-w-wide px-page-pad">
          <EncabezadoSeccion
            idTitulo="titulo-pantallas"
            titulo="Así se ven nuestros sistemas"
            descripcion="Paneles, webs y herramientas por rubro. Si el tuyo no está, lo diseñamos sobre cómo trabaja tu negocio."
          />
        </div>
        <div className="mt-block revela-al-scroll">
          <CintaPantallas pantallas={showcaseScreens} />
        </div>
      </Seccion>

      {/* 4. Cómo trabajamos */}
      <Seccion aria-labelledby="titulo-como-trabajamos">
        <EncabezadoSeccion idTitulo="titulo-como-trabajamos" titulo="Cómo trabajamos" />
        <div className="mt-block grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {differentials.map((diferencial, i) => (
            <div key={diferencial.id} className="revela-al-scroll">
              <TarjetaDiferencial diferencial={diferencial} indice={i} />
            </div>
          ))}
        </div>
      </Seccion>

      {/* 5. Caso destacado */}
      <Seccion ancho="amplio" ritmo="compacto" aria-label="Caso destacado">
        <div className="revela-al-scroll">
          <TarjetaCaso caso={featuredCase} />
        </div>
      </Seccion>

      {/* 6. Productos propios (banner) */}
      <Seccion ancho="amplio" ritmo="compacto" aria-label="Productos propios">
        <div className="revela-al-scroll">
          <BannerProductos contenido={productsBanner} productos={ownProducts} />
        </div>
      </Seccion>

      {/* 7. CTA final */}
      <Seccion aria-label="Contacto">
        <div className="revela-al-scroll">
          <BloqueCTA contenido={finalCta} />
        </div>
      </Seccion>
    </>
  );
}
