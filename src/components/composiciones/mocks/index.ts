import type { ComponentType } from "react";
import type { MockId } from "@/lib/types/content";
import { MockPanelGestion } from "./MockPanelGestion";
import { MockWebCorporativa } from "./MockWebCorporativa";
import { MockCopiloto } from "./MockCopiloto";
import { MockAuditoria } from "./MockAuditoria";
import { MockAgendaJuridica } from "./MockAgendaJuridica";
import { MockTurnos } from "./MockTurnos";
import { MockReparto } from "./MockReparto";

/** Registry de pantallas mock: interfaces inventadas coherentes con la marca. */
export const MOCKS_PANTALLA: Record<MockId, ComponentType> = {
  "panel-gestion": MockPanelGestion,
  "web-corporativa": MockWebCorporativa,
  copiloto: MockCopiloto,
  auditoria: MockAuditoria,
  "agenda-juridica": MockAgendaJuridica,
  turnos: MockTurnos,
  reparto: MockReparto,
};

export {
  MockPanelGestion,
  MockWebCorporativa,
  MockCopiloto,
  MockAuditoria,
  MockAgendaJuridica,
  MockTurnos,
  MockReparto,
};
