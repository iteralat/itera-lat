import { ChipMock, KpiMock, LateralMock, LienzoMock } from "./piezas";

const agenda = [
  { hora: "09:30", detalle: "Audiencia · Fernández c/ Transporte Sur", chip: "Laboral", acento: true },
  { hora: "11:00", detalle: "Vence: contestar demanda · Ruiz", chip: "Vence hoy", acento: true },
  { hora: "14:00", detalle: "Reunión con perito · Sucesión Molina", chip: "Civil", acento: false },
  { hora: "16:30", detalle: "Firma de escritura · López", chip: "Notarial", acento: false },
];

/** Gestión de un estudio jurídico: agenda del día, causas y vencimientos. */
export function MockAgendaJuridica() {
  return (
    <LienzoMock className="flex gap-3">
      <LateralMock
        marca="Ferrari & Asoc."
        rubro="Estudio jurídico"
        items={["Inicio", "Agenda", "Causas", "Clientes", "Honorarios"]}
        activo="Agenda"
      />
      <div className="grid min-w-0 flex-1 content-start gap-3">
        <div className="grid grid-cols-3 gap-2">
          <KpiMock etiqueta="Causas activas" valor="21" />
          <KpiMock etiqueta="Vencimientos semana" valor="4" acento />
          <KpiMock etiqueta="Audiencias hoy" valor="2" />
        </div>
        <div className="grid rounded-control bg-surface-1 px-3 py-1 shadow-elevation-subtle">
          {agenda.map((evento, i) => (
            <div key={evento.detalle}>
              {i > 0 && <span className="linea-divisoria block" />}
              <p className="flex items-center gap-2.5 py-2 text-eyebrow">
                <span className="font-semibold text-foreground">{evento.hora}</span>
                <span className="min-w-0 flex-1 truncate text-muted-foreground">{evento.detalle}</span>
                <ChipMock tono={evento.acento ? "acento" : "neutro"}>{evento.chip}</ChipMock>
              </p>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-eyebrow text-faint">
          <span className="size-1.5 rounded-full bg-primary" />
          Alertas de vencimiento sincronizadas con Google Calendar
        </p>
      </div>
    </LienzoMock>
  );
}
