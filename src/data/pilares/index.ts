import type { PillarSummary } from "@/lib/types/content";

/**
 * Los 4 pilares de servicio. Fuente única para: tarjetas de la home,
 * dropdown "Servicios" del header y columnas del footer.
 * El contenido completo de cada pilar (Fase 3) vive en archivos hermanos
 * (`webs.ts`, `sistemas.ts`, …) dentro de este mismo directorio.
 */
export const pillarSummaries: PillarSummary[] = [
  {
    slug: "webs",
    name: "Webs",
    audience: "Para negocios que necesitan una web seria y poder actualizarla sin depender de nadie.",
    items: [
      "Webs corporativas, landings y catálogos",
      "Panel de administración incluido en toda web",
      "Dominio, hosting y soporte incluidos",
    ],
    href: "/webs",
    mock: "web-corporativa",
  },
  {
    slug: "sistemas",
    name: "Sistemas a medida",
    audience: "Para operaciones que ya no entran en una planilla.",
    items: [
      "Gestión de ventas, stock, clientes y cobros",
      "Cotizadores, reparto y portales internos",
      "Construidos sobre los procesos reales de tu empresa",
    ],
    href: "/sistemas",
    mock: "panel-gestion",
  },
  {
    slug: "ia",
    name: "IA para tu negocio",
    audience: "Para tareas repetitivas que hoy se hacen a mano.",
    items: [
      "Asistentes que responden con la información de tu negocio",
      "Clasificación de mails y extracción de datos de PDFs",
      "IA integrada en el sistema que ya usás",
    ],
    href: "/ia",
    mock: "copiloto",
  },
  {
    slug: "consultoria",
    name: "Consultoría y rescate",
    audience: "Para cuando hace falta criterio técnico antes de seguir invirtiendo.",
    items: [
      "Auditorías de seguridad, performance y SEO",
      "Rescate de proyectos hechos con IA que quedaron a medias",
      "Acompañamiento técnico continuo para tu negocio",
    ],
    href: "/consultoria",
    mock: "auditoria",
  },
];
