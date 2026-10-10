import { ChipMock, KpiMock, LienzoMock } from "./piezas";
import { cn } from "@/lib/utils/cn";

const vehiculos = [
  {
    nombre: "Camión 1 · Zona norte",
    paradas: [
      { cliente: "Almacén Del Valle", hecho: true },
      { cliente: "Súper La Nueva", hecho: true },
      { cliente: "Despensa Rivera", hecho: false },
      { cliente: "Kiosco Belgrano", hecho: false },
    ],
  },
  {
    nombre: "Utilitario · Centro",
    paradas: [
      { cliente: "Mercadito Roca", hecho: true },
      { cliente: "Autoservicio 25", hecho: false },
      { cliente: "Bar El Andén", hecho: false },
      { cliente: "Dietética Sol", hecho: false },
    ],
  },
];

/** Logística de reparto: hoja del día por vehículo, con paradas y avance. */
export function MockReparto() {
  return (
    <LienzoMock className="grid content-start gap-3">
      <div className="flex items-center gap-2">
        <p className="text-eyebrow text-faint">Hoja de reparto · jueves</p>
        <span className="ml-auto flex gap-2">
          <ChipMock tono="acento">18 de 38 entregas</ChipMock>
          <ChipMock>112 km estimados</ChipMock>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {vehiculos.map((vehiculo) => (
          <div key={vehiculo.nombre} className="grid content-start gap-1 rounded-control bg-surface-1 px-3 py-2.5 shadow-elevation-subtle">
            <p className="pb-1 text-eyebrow font-semibold text-foreground">{vehiculo.nombre}</p>
            {vehiculo.paradas.map((parada) => (
              <p key={parada.cliente} className="flex items-center gap-2 text-eyebrow text-muted-foreground">
                <span
                  className={cn(
                    "flex size-3 items-center justify-center rounded-full",
                    parada.hecho ? "bg-primary-tint-strong" : "bg-surface-3",
                  )}
                >
                  {parada.hecho && <span className="size-1 rounded-full bg-primary-text" />}
                </span>
                <span className={cn(parada.hecho && "text-faint line-through")}>{parada.cliente}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <KpiMock etiqueta="Entregado" valor="$1.860.000" acento />
        <KpiMock etiqueta="Rechazos" valor="1" />
        <KpiMock etiqueta="Cobrado en ruta" valor="$412.000" />
      </div>
    </LienzoMock>
  );
}
