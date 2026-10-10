import { ChipMock, LienzoMock } from "./piezas";
import { cn } from "@/lib/utils/cn";

const dimensiones = [
  { nombre: "Seguridad", puntaje: 82 },
  { nombre: "Performance", puntaje: 54 },
  { nombre: "SEO", puntaje: 71 },
  { nombre: "Accesibilidad", puntaje: 63 },
];

const hallazgos = [
  { titulo: "Credenciales expuestas en el repositorio", chip: "Crítico", acento: true },
  { titulo: "Formulario sin validación del lado servidor", chip: "Crítico", acento: true },
  { titulo: "Imágenes sin optimizar en el catálogo", chip: "Medio", acento: false },
  { titulo: "Consultas sin índice en el listado de ventas", chip: "Medio", acento: false },
];

/** Informe de auditoría técnica: puntaje por dimensión + hallazgos + plan. */
export function MockAuditoria() {
  return (
    <LienzoMock className="grid content-between gap-3">
      <div className="flex items-baseline gap-3">
        <p className="text-eyebrow text-faint">Informe técnico · tuempresa.com.ar</p>
        <p className="ml-auto text-eyebrow text-faint">
          Puntaje general{" "}
          <span className="pl-1 font-display text-small font-semibold text-primary-text">68/100</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {dimensiones.map((dimension) => (
          <div key={dimension.nombre} className="grid gap-2 rounded-control bg-surface-1 px-3 py-3 shadow-elevation-subtle">
            <p className="flex justify-between text-eyebrow">
              <span className="text-muted-foreground">{dimension.nombre}</span>
              <span
                className={cn(
                  "font-semibold",
                  dimension.puntaje < 60 ? "text-primary-text" : "text-foreground",
                )}
              >
                {dimension.puntaje}
              </span>
            </p>
            <span className="block h-1.5 w-full overflow-hidden rounded-full bg-track shadow-track-inset">
              <span
                style={{ width: `${dimension.puntaje}%` }}
                className={cn(
                  "block h-full rounded-full",
                  dimension.puntaje < 60 ? "bg-linear-to-r from-primary to-primary-soft" : "bg-surface-3",
                )}
              />
            </span>
          </div>
        ))}
      </div>
      <div className="grid rounded-control bg-surface-1 px-3 py-1 shadow-elevation-subtle">
        {hallazgos.map((hallazgo, i) => (
          <div key={hallazgo.titulo}>
            {i > 0 && <span className="linea-divisoria block" />}
            <p className="flex items-center gap-2 py-2 text-eyebrow">
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full",
                  hallazgo.acento ? "bg-primary" : "bg-surface-3",
                )}
              />
              <span className="min-w-0 flex-1 truncate text-muted-foreground">{hallazgo.titulo}</span>
              <ChipMock tono={hallazgo.acento ? "acento" : "neutro"}>{hallazgo.chip}</ChipMock>
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ChipMock tono="acento">2 críticos</ChipMock>
        <ChipMock>5 medios</ChipMock>
        <ChipMock>4 mejoras</ChipMock>
        <span className="ml-auto rounded-full bg-primary px-2.5 py-1 text-eyebrow font-semibold text-primary-fg shadow-button-lift">
          Ver plan de corrección
        </span>
      </div>
    </LienzoMock>
  );
}
