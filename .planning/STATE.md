# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-04-24
**Trabajando en**: Rework del product-detail de SaaS (foco Shopear) + reestructuración de portfolio.
**Estado**: Afinamiento UI pendiente — continuar en próxima sesión.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Design System | Completo | Tipografía dual: Inter (body) + Poppins (font-display). Doc en `itera-context/proyectos/itera-lat/BRAND-TYPOGRAPHY.md` |
| Header | Refinado | Hamburguesa mobile alineada con logo (height match). Sin item "Soluciones" |
| Footer | Refinado | Sin link "Soluciones" |
| Data Model | Refactor | `standaloneProducts` eliminado. Nuevos campos opcionales: `quickFacts`, `liveDemos`, `longDescription`, `forWhom`, `rationale`, `pillars`, `featureGroups` |
| Home Hero | OK | Laptop mockup usa `screenshot-shopear.png` |
| Home Showcase | Rework bento | 3 bloques: Shopear hero (col-span-3 row-span-2) + Sitios Web + Más SaaS. Screenshot limpia en hero, overlays con label en chicas |
| Productos overview | 2 columnas | Sitios Web + SaaS (se eliminó Soluciones) |
| Sitios Web | OK | Sin cambios de alcance |
| **SaaS detail (rework)** | **En curso** | Layout editorial: hero row (carrusel + sidebar 280px) + contenido full width. Secciones dossier: "Para quién", "Por qué lo creamos", "Cómo lo resolvimos" (pilares), "Funcionalidades" agrupadas. Widgets sidebar ocultos en mobile |
| Servicios | Ajustado | Contraste subido. `relatedLink` de "Plataformas a medida" → /contacto (ya no hay /productos/soluciones) |
| Sobre Nosotros | Ajustado | "Por qué ÍTERA" reemplazado por "Manifiesto" (3 principios: Código propio · Dev directo · Construido para durar) |
| Contacto | OK | Sin cambios |

---

## Estructura de Productos (actualizada)

```
/productos              → 2 categorías (Sitios Web + SaaS)
/productos/sitios-web   → Galería filtrable
/productos/saas         → Shopear, IteraLex, Itera Estudio
                          ↳ [slug] detail con layout dossier (Shopear con data completa)
```

**Eliminado**: `/productos/soluciones/*` (standaloneProducts out; IteraDesk/Linkea2/IteraShop como standalone descontinuados)

---

## Componentes nuevos / modificados

- `FadeIn.tsx` (nuevo) — wrapper client para animaciones on-scroll (framer-motion whileInView)
- `Breadcrumb.tsx` — ChevronRight en vez de `/`, mejor contraste, font-medium
- `PlatformViewer.tsx` — fade crossfade entre screenshots, acepta `externalUrl` para URL bar real, chrome responsive (`h-6 md:h-9`)

---

## Assets Shopear

- `portfolio/screenshot-shopear.png` — landing principal (shope.ar verde)
- `plataformas/shopear-dashboard.png` — admin
- `plataformas/shopear-demo-{1,2,3}.png` — iStore BA (apple)
- `plataformas/shopear-joyeria.png` — Lumière Joyas

**Legacy eliminados**: `screenshot-iterashop`, `linkea2-*`, `itera-desk`, `itera-gestion`

---

## Deploy Info

| Key | Value |
|-----|-------|
| Contexto Coolify | modern |
| App UUID | rtwcc35tbzzgfx3dp2hduod2 |
| Dominio | https://itera.lat |
| Google Analytics 4 | G-YDVG0CNQQN |

---

## Decisiones Recientes

- Sistema tipográfico dual (Inter + Poppins font-display). Token `--font-display` permite swap futuro sin tocar componentes.
- Portfolio simplificado a 2 columnas (Sitios Web + SaaS). La estrategia 2026 volcó standalone a SaaS multi-tenant (Shopear).
- Detail SaaS como **dossier de portfolio** (no mini-landing): secciones narrativas "Para quién" y "Por qué" muestran proceso creativo de ÍTERA, no vender Shopear.
- Sidebar del detail: widgets ocultos en mobile (`hidden lg:block`) para no cortar flow galería → contenido. Solo CTAs visibles siempre.
- Widget Demos en vivo inline (`name · niche`) para compactar.
- Voz de marca: copy del detail en voz ÍTERA (agencia), no voz Shopear. No reescribir en esta sesión.

---

## Bloqueadores / Pendientes

1. **Afinamiento UI del product-detail** — continuar ajustes visuales en próxima sesión.
2. **Screenshots faltantes** — 9/14 web demos, Itera Estudio.
3. **Contenido caseStudy** — Textos problema/solución/resultado pendientes por producto.
4. **Copy final** — todo el sitio tiene placeholders estructurales. Voz de marca se rehace en sesión dedicada.

---

## Proxima Accion

- **Continuar afinamiento UI** del detail de producto (próxima sesión).
- Considerar aplicar el layout dossier también a IteraLex e Itera Estudio (hoy solo Shopear tiene data extendida).
- Pasada de copy con voz de marca una vez que el layout esté cerrado.
