import { ChipMock, KpiMock, LateralMock, LienzoMock } from "./piezas";

const turnos = [
  { hora: "09:00", paciente: "María López", chip: "Confirmado", acento: false },
  { hora: "10:30", paciente: "Jorge Casas", chip: "Recordatorio enviado", acento: true },
  { hora: "11:15", paciente: "Ana Guerra", chip: "Confirmado", acento: false },
  { hora: "12:00", paciente: "Libre", chip: "Disponible", acento: false },
];

/** Turnos de un consultorio: agenda del día con recordatorios automáticos. */
export function MockTurnos() {
  return (
    <LienzoMock className="flex gap-3">
      <LateralMock
        marca="Río Limay"
        rubro="Kinesiología"
        items={["Inicio", "Turnos", "Pacientes", "Fichas", "Caja"]}
        activo="Turnos"
      />
      <div className="grid min-w-0 flex-1 content-start gap-3">
        <div className="grid grid-cols-3 gap-2">
          <KpiMock etiqueta="Turnos hoy" valor="14" />
          <KpiMock etiqueta="Recordatorios enviados" valor="12" acento />
          <KpiMock etiqueta="Ausencias del mes" valor="3" />
        </div>
        <div className="grid rounded-control bg-surface-1 px-3 py-1 shadow-elevation-subtle">
          {turnos.map((turno, i) => (
            <div key={turno.hora}>
              {i > 0 && <span className="linea-divisoria block" />}
              <p className="flex items-center gap-2.5 py-2 text-eyebrow">
                <span className="font-semibold text-foreground">{turno.hora}</span>
                <span className="min-w-0 flex-1 truncate text-muted-foreground">{turno.paciente}</span>
                <ChipMock tono={turno.acento ? "acento" : "neutro"}>{turno.chip}</ChipMock>
              </p>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-eyebrow text-faint">
          <span className="size-1.5 rounded-full bg-primary" />
          El paciente reserva online y el sistema recuerda por WhatsApp
        </p>
      </div>
    </LienzoMock>
  );
}
