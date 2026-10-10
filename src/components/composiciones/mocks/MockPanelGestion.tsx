import { BarrasMock, ChipMock, KpiMock, LateralMock, LienzoMock } from "./piezas";

const pedidos = [
  { cliente: "Almacén Del Valle", zona: "Zona norte", total: "$184.300", estado: "En reparto", acento: true },
  { cliente: "Súper La Nueva", zona: "Centro", total: "$96.750", estado: "Confirmado", acento: false },
  { cliente: "Kiosco 9 de Julio", zona: "Zona oeste", total: "$41.200", estado: "Entregado", acento: false },
  { cliente: "Despensa Rivera", zona: "Centro", total: "$67.900", estado: "Confirmado", acento: false },
];

/** Sistema de gestión de una distribuidora: KPIs, ventas por día y pedidos. */
export function MockPanelGestion() {
  return (
    <LienzoMock className="flex gap-3">
      <LateralMock
        marca="Cardal"
        rubro="Distribuidora"
        items={["Inicio", "Pedidos", "Clientes", "Reparto", "Reportes"]}
        activo="Pedidos"
      />
      <div className="grid min-w-0 flex-1 content-start gap-3">
        <div className="grid grid-cols-3 gap-2">
          <KpiMock etiqueta="Pedidos hoy" valor="46" />
          <KpiMock etiqueta="Facturado" valor="$3.240.000" acento />
          <KpiMock etiqueta="En reparto" valor="12" />
        </div>
        <div className="grid min-h-24 grid-cols-[1.4fr_1fr] gap-2">
          <div className="rounded-control bg-surface-1 p-2.5 shadow-elevation-subtle">
            <p className="pb-1.5 text-eyebrow text-faint">Ventas por día</p>
            <div className="h-[calc(100%-1.25rem)]">
              <BarrasMock alturas={[45, 62, 38, 74, 55, 88, 70, 64]} indiceAcento={5} />
            </div>
          </div>
          <div className="grid content-start gap-1.5 rounded-control bg-surface-1 p-2.5 shadow-elevation-subtle">
            <p className="text-eyebrow text-faint">Más vendidos</p>
            {["Yerba 1kg", "Aceite girasol", "Harina 000"].map((producto, i) => (
              <p key={producto} className="flex items-center justify-between gap-2 text-eyebrow text-muted-foreground">
                {producto}
                <span className="font-semibold text-foreground">{[124, 96, 81][i]}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-0 rounded-control bg-surface-1 px-3 py-1 shadow-elevation-subtle">
          {pedidos.map((pedido, i) => (
            <div key={pedido.cliente}>
              {i > 0 && <span className="linea-divisoria block" />}
              <p className="flex items-center gap-2 py-1.5 text-eyebrow">
                <span className="font-medium text-muted-foreground">{pedido.cliente}</span>
                <span className="text-faint">{pedido.zona}</span>
                <span className="ml-auto font-semibold text-foreground">{pedido.total}</span>
                <ChipMock tono={pedido.acento ? "acento" : "neutro"}>{pedido.estado}</ChipMock>
              </p>
            </div>
          ))}
        </div>
      </div>
    </LienzoMock>
  );
}
