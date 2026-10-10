import { ChipMock, LienzoMock } from "./piezas";

const clientesCaidos = [
  { nombre: "Almacén Del Valle", variacion: "-38%" },
  { nombre: "Kiosco 9 de Julio", variacion: "-22%" },
  { nombre: "Súper La Nueva", variacion: "-15%" },
];

const automatizaciones = [
  { tarea: "Mails clasificados hoy", valor: "32" },
  { tarea: "PDFs procesados", valor: "14" },
  { tarea: "Resúmenes enviados", valor: "6" },
];

/** Copiloto IA sobre los datos del negocio + automatizaciones corriendo. */
export function MockCopiloto() {
  return (
    <LienzoMock className="grid grid-cols-[1.5fr_1fr] gap-3">
      <div className="flex min-w-0 flex-col gap-2.5 rounded-control bg-surface-1 p-3 shadow-elevation-subtle">
        <p className="flex items-center gap-2 text-eyebrow text-faint">
          Copiloto <ChipMock tono="acento">conectado a tus datos</ChipMock>
        </p>
        <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-surface-3 px-2.5 py-1.5 text-eyebrow text-foreground">
          ¿Qué clientes bajaron sus compras este mes?
        </p>
        <div className="w-fit max-w-[92%] rounded-lg rounded-bl-sm bg-primary-tint px-2.5 py-2 text-eyebrow text-muted-foreground">
          <p className="pb-1.5 text-primary-text">Tres clientes compraron menos que su promedio:</p>
          {clientesCaidos.map((cliente) => (
            <p key={cliente.nombre} className="flex justify-between gap-3 py-0.5">
              {cliente.nombre}
              <span className="font-semibold text-foreground">{cliente.variacion}</span>
            </p>
          ))}
        </div>
        <p className="mt-auto flex items-center justify-between rounded-control bg-surface-2 px-2.5 py-1.5 text-eyebrow text-faint">
          Preguntale a tus datos…
          <span className="rounded-full bg-primary px-2 py-0.5 font-semibold text-primary-fg">Enviar</span>
        </p>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-eyebrow text-faint">Automatizaciones activas</p>
        {automatizaciones.map((auto) => (
          <div key={auto.tarea} className="grid gap-0.5 rounded-control bg-surface-1 px-2.5 py-2 shadow-elevation-subtle">
            <span className="text-eyebrow text-faint">{auto.tarea}</span>
            <span className="text-small font-semibold text-foreground">{auto.valor}</span>
          </div>
        ))}
        <p className="flex items-center gap-1.5 text-eyebrow text-faint">
          <span className="size-1.5 rounded-full bg-primary" />
          Corriendo a toda hora
        </p>
      </div>
    </LienzoMock>
  );
}
