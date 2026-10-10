import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Boton, Insignia, Seccion, Superficie } from "@/components/primitivas";
import {
  BloqueCTA,
  PantallaSistema,
  SelectorPilares,
  TarjetaProducto,
} from "@/components/composiciones";
import { finalCta, ownProducts, showcaseScreens } from "@/data/home";
import { pillarSummaries } from "@/data/pilares";

export const metadata: Metadata = {
  title: "Laboratorio del design system",
  description: "Página interna de verificación de tokens y primitivas.",
  robots: { index: false, follow: false },
};

const superficies = [
  { clase: "bg-background", nombre: "background", uso: "canvas" },
  { clase: "bg-chrome", nombre: "chrome", uso: "header / footer" },
  { clase: "bg-surface-1", nombre: "surface-1", uso: "card en reposo" },
  { clase: "bg-surface-2", nombre: "surface-2", uso: "raised / hover" },
  { clase: "bg-surface-3", nombre: "surface-3", uso: "highlight" },
] as const;

const elevaciones = [
  { clase: "shadow-elevation-subtle", nombre: "subtle" },
  { clase: "shadow-elevation-soft", nombre: "soft" },
  { clase: "shadow-elevation-1", nombre: "nivel 1" },
  { clase: "shadow-elevation-2", nombre: "nivel 2" },
  { clase: "shadow-elevation-3", nombre: "nivel 3" },
] as const;

const escalaTipografica = [
  { clase: "text-display font-display", nombre: "display" },
  { clase: "text-title font-display", nombre: "title" },
  { clase: "text-heading font-display", nombre: "heading" },
  { clase: "text-lead", nombre: "lead" },
  { clase: "text-body", nombre: "body" },
  { clase: "text-small", nombre: "small" },
  { clase: "text-meta", nombre: "meta" },
  { clase: "text-eyebrow uppercase", nombre: "eyebrow" },
] as const;

export default function PaginaLaboratorio() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <div className="pb-section">
      <Seccion ritmo="compacto">
        <Insignia tono="primario">Fase 1 · Fundación</Insignia>
        <h1 className="mt-4 text-title font-display">
          Laboratorio del <span className="texto-gradiente-brand">design system</span>
        </h1>
        <p className="mt-4 max-w-prose text-lead text-muted-foreground">
          Verificación visual de tokens y primitivas. Solo existe en desarrollo;
          en producción esta ruta devuelve 404.
        </p>
      </Seccion>

      {/* Escalera de superficies */}
      <Seccion ritmo="compacto" aria-labelledby="lab-superficies">
        <h2 id="lab-superficies" className="text-heading font-display">
          Escalera de superficies
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {superficies.map((s) => (
            <div key={s.nombre}>
              <div className={`h-24 rounded-card shadow-elevation-subtle ${s.clase}`} />
              <p className="mt-3 text-small">{s.nombre}</p>
              <p className="text-meta text-faint">{s.uso}</p>
            </div>
          ))}
        </div>
      </Seccion>

      {/* Elevación */}
      <Seccion ritmo="compacto" aria-labelledby="lab-elevacion">
        <h2 id="lab-elevacion" className="text-heading font-display">
          Elevación — 5 niveles, sin bordes
        </h2>
        <p className="mt-2 max-w-prose text-body text-muted-foreground">
          Escalón de lightness + sombra + inset top highlight. La firma del sistema.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
          {elevaciones.map((e) => (
            <div
              key={e.nombre}
              className={`flex h-28 items-center justify-center rounded-card bg-surface-1 ${e.clase}`}
            >
              <span className="text-meta text-muted-foreground">{e.nombre}</span>
            </div>
          ))}
        </div>
      </Seccion>

      {/* Tipografía */}
      <Seccion ritmo="compacto" aria-labelledby="lab-tipografia">
        <h2 id="lab-tipografia" className="text-heading font-display">
          Escala tipográfica fluida
        </h2>
        <div className="mt-8 space-y-6">
          {escalaTipograficaConMuestra()}
        </div>
      </Seccion>

      {/* Botones */}
      <Seccion ritmo="compacto" aria-labelledby="lab-botones">
        <h2 id="lab-botones" className="text-heading font-display">
          Boton — variantes, tamaños y estados
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Boton variante="gradiente">Hablemos de tu proyecto</Boton>
          <Boton variante="primario">Primario</Boton>
          <Boton variante="secundario">Secundario</Boton>
          <Boton variante="fantasma">Fantasma</Boton>
          <Boton variante="primario" disabled>
            Deshabilitado
          </Boton>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Boton variante="secundario" tamano="sm">
            Tamaño sm
          </Boton>
          <Boton variante="secundario" tamano="md">
            Tamaño md
          </Boton>
          <Boton variante="secundario" tamano="lg">
            Tamaño lg
          </Boton>
          <Boton variante="fantasma" href="/laboratorio">
            Como enlace →
          </Boton>
        </div>
        <p className="mt-6 text-meta text-faint">
          Probar hover (lift + glow), foco con teclado (outline rojo) y reduced-motion.
        </p>
      </Seccion>

      {/* Insignias */}
      <Seccion ritmo="compacto" aria-labelledby="lab-insignias">
        <h2 id="lab-insignias" className="text-heading font-display">
          Insignia
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Insignia>Neutra</Insignia>
          <Insignia tono="primario">Primaria</Insignia>
        </div>
      </Seccion>

      {/* Superficies interactivas */}
      <Seccion ritmo="compacto" ancho="amplio" aria-labelledby="lab-cards">
        <h2 id="lab-cards" className="text-heading font-display">
          Superficie — reposo e interactiva
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Superficie>
            <h3 className="text-body font-medium">En reposo (nivel 1)</h3>
            <p className="mt-2 text-small text-muted-foreground">
              Card estática. Sin borde: el despegue es luz y sombra.
            </p>
          </Superficie>
          <Superficie interactiva>
            <h3 className="text-body font-medium">Interactiva</h3>
            <p className="mt-2 text-small text-muted-foreground">
              Hover: sube un escalón de superficie y elevación, con lift sutil.
            </p>
          </Superficie>
          <Superficie nivel={2}>
            <h3 className="text-body font-medium">Raised (nivel 2)</h3>
            <div className="linea-divisoria my-4" aria-hidden="true" />
            <p className="text-small text-muted-foreground">
              Con divider interno (línea, no caja).
            </p>
          </Superficie>
        </div>
      </Seccion>

      {/* Motion */}
      <Seccion ritmo="compacto" aria-labelledby="lab-motion">
        <h2 id="lab-motion" className="text-heading font-display">
          Motion — reveal on scroll
        </h2>
        <p className="mt-2 max-w-prose text-body text-muted-foreground">
          Las tarjetas de abajo entran con <code className="text-primary-text">.revela-al-scroll</code>{" "}
          (CSS scroll-driven, con fallback visible y respeto de reduced-motion).
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Superficie key={n} className="revela-al-scroll">
              <p className="text-small text-muted-foreground">Tarjeta {n}</p>
            </Superficie>
          ))}
        </div>
      </Seccion>

      {/* Composiciones (Fase 2) */}
      <Seccion ritmo="compacto" ancho="amplio" aria-labelledby="lab-composiciones">
        <h2 id="lab-composiciones" className="text-heading font-display">
          Composiciones — Fase 2 (home)
        </h2>
        <p className="mt-2 max-w-prose text-body text-muted-foreground">
          Registradas en <code className="text-primary-text">src/components/composiciones/</code>.
          La muestra viva completa es la home.
        </p>
        <div className="mt-8">
          <SelectorPilares pilares={pillarSummaries} />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PantallaSistema pantalla={showcaseScreens[0]} />
          <PantallaSistema pantalla={showcaseScreens[1]} />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {ownProducts.slice(0, 2).map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
        <div className="mt-8">
          <BloqueCTA contenido={finalCta} />
        </div>
      </Seccion>
    </div>
  );
}

function escalaTipograficaConMuestra() {
  return escalaTipografica.map((t) => (
    <div key={t.nombre} className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
      <span className="w-20 shrink-0 text-meta text-faint">{t.nombre}</span>
      <span className={t.clase}>Construimos el software de tu negocio</span>
    </div>
  ));
}
