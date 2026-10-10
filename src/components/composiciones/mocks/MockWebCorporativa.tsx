import { LienzoMock } from "./piezas";

const secciones = [
  { nombre: "Habitaciones", detalle: "12 suites con vista al lago" },
  { nombre: "Gastronomía", detalle: "Cocina patagónica de estación" },
  { nombre: "Experiencias", detalle: "Trekking, kayak y bodega" },
];

/** Web institucional de un hotel de montaña, con su panel autogestionable detrás. */
export function MockWebCorporativa() {
  return (
    <LienzoMock className="grid content-between gap-3 px-6 pt-5">
      <div className="flex items-center gap-4">
        <span className="text-small font-semibold tracking-wide text-foreground">BRUMA</span>
        <span className="hidden gap-3 text-eyebrow text-faint sm:flex">
          <span>Inicio</span>
          <span className="text-foreground">Habitaciones</span>
          <span>Experiencias</span>
          <span>Contacto</span>
        </span>
        <span className="ml-auto rounded-full bg-primary px-3 py-1 text-eyebrow font-semibold text-primary-fg shadow-button-lift">
          Reservar
        </span>
      </div>
      <div className="grid gap-2 py-2">
        <p className="text-eyebrow uppercase text-primary-text">Hotel de montaña · Villa La Angostura</p>
        <p className="max-w-72 font-display text-heading text-foreground">El lago, la montaña y nada más.</p>
        <p className="max-w-72 text-eyebrow text-muted-foreground">
          Temporada de verano abierta. Reservá directo, sin intermediarios.
        </p>
        <span className="mt-1 h-px w-24 bg-linear-to-r from-primary to-primary-soft" />
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {secciones.map((seccion, i) => (
          <div key={seccion.nombre} className="overflow-hidden rounded-control bg-surface-1 shadow-elevation-subtle">
            <div
              className={
                i === 0
                  ? "h-14 bg-linear-to-br from-surface-3 via-surface-2 to-primary-tint-strong"
                  : "h-14 bg-linear-to-br from-surface-3 to-surface-1"
              }
            />
            <div className="grid gap-0.5 p-2.5">
              <p className="text-eyebrow font-semibold text-foreground">{seccion.nombre}</p>
              <p className="text-eyebrow text-faint">{seccion.detalle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 text-eyebrow text-faint">
        <span>Reservas directas desde tu propia web</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />
          Editás todo desde tu panel
        </span>
      </div>
    </LienzoMock>
  );
}
