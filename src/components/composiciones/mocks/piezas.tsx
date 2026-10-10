import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Piezas compartidas de las pantallas mock (interfaces inventadas, coherentes
 * con el design system). Los mocks son decorativos: el wrapper les pone
 * aria-hidden y pointer-events-none.
 */

export function LienzoMock({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "fondo-brillo-brand pointer-events-none aspect-[16/10] w-full overflow-hidden bg-track p-4 text-left select-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function KpiMock({ etiqueta, valor, acento = false }: { etiqueta: string; valor: string; acento?: boolean }) {
  return (
    <div className="grid gap-0.5 rounded-control bg-surface-1 px-3 py-2.5 shadow-elevation-subtle">
      <span className="text-eyebrow text-faint">{etiqueta}</span>
      <span className={cn("text-small font-semibold", acento ? "text-primary-text" : "text-foreground")}>
        {valor}
      </span>
    </div>
  );
}

export function ChipMock({ children, tono = "neutro" }: { children: ReactNode; tono?: "neutro" | "acento" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-eyebrow whitespace-nowrap",
        tono === "acento" ? "bg-primary-tint text-primary-text" : "bg-surface-2 text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function LateralMock({ marca, rubro, items, activo }: { marca: string; rubro: string; items: string[]; activo: string }) {
  return (
    <nav className="hidden h-full w-32 shrink-0 flex-col gap-1 rounded-control bg-chrome p-2 sm:flex">
      <p className="px-2 pb-2">
        <span className="block text-meta font-semibold text-foreground">{marca}</span>
        <span className="block text-eyebrow text-faint">{rubro}</span>
      </p>
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "rounded-control px-2 py-1 text-eyebrow",
            item === activo
              ? "bg-surface-3 font-semibold text-foreground shadow-elevation-subtle"
              : "text-faint",
          )}
        >
          {item}
        </span>
      ))}
    </nav>
  );
}

export function BarrasMock({ alturas, indiceAcento }: { alturas: number[]; indiceAcento: number }) {
  return (
    <div className="flex h-full min-h-0 items-end gap-1.5">
      {alturas.map((altura, i) => (
        <span
          key={i}
          style={{ height: `${altura}%` }}
          className={cn(
            "w-full rounded-t-xs",
            i === indiceAcento ? "bg-linear-to-t from-primary to-primary-soft" : "bg-surface-3",
          )}
        />
      ))}
    </div>
  );
}
