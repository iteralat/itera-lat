# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-04-02
**Trabajando en**: Rediseño completo del sitio — nueva identidad visual (negro puro, glow naranja), reestructuración de productos en 3 categorías con dropdown.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Design System | Fase 1 completa | Negro puro #050505, tokens de categoría, efectos glow |
| Header | Actualizado | Dropdown en "Productos" → Sitios Web, Soluciones, SaaS |
| Footer | Actualizado | Links a categorías en vez de productos individuales |
| Data Model | Extendido | BaseProduct, WebItem, caseStudy, websites[] con 5 demos |
| Productos overview (`/productos`) | Pendiente rewrite | Task 12: overview de 3 categorías |
| Sitios Web (`/productos/sitios-web`) | Pendiente | Tasks 5-7: landing + galería + viewer + featured pages |
| Soluciones (`/productos/soluciones`) | Pendiente | Tasks 8-9: landing + fichas de producto |
| SaaS (`/productos/saas`) | Pendiente | Tasks 10-11: landing + fichas de producto |
| Home (`/`) | Pendiente rediseño | Task 13: adaptar Showcase a 3 categorías |
| Servicios (`/servicios`) | Pendiente rediseño | Task 14: agregar interlinks a categorías |
| Sobre Nosotros / Contacto | Pendiente rediseño | Task 15: aplicar nuevo design system |

---

## Plan de Implementación

**Spec**: `docs/superpowers/specs/2026-04-02-site-redesign-design.md`
**Plan**: `docs/superpowers/plans/2026-04-02-site-redesign.md`
**Tasks**: `docs/superpowers/plans/2026-04-02-site-redesign.md.tasks.json`

| Fase | Tasks | Estado |
|------|-------|--------|
| 1. Design system + layout | Tasks 1-4 | Completada |
| 2. Sitios Web | Tasks 5-7 | Pendiente |
| 3. Soluciones | Tasks 8-9 | Pendiente |
| 4. SaaS | Tasks 10-11 | Pendiente |
| 5. Overview + redirects | Task 12 | Pendiente |
| 6. Páginas existentes | Tasks 13-15 | Pendiente |

---

## Estructura de Productos (nueva)

```
/productos              → Overview de 3 categorías
/productos/sitios-web   → Galería filtrable de 14+ demos web
/productos/soluciones   → IteraDesk, IteraLink, IteraShop
/productos/saas         → IteraLex, Itera Estudio
```

Datos en `src/data/portfolio.ts`: `saasProducts`, `standaloneProducts`, `websites`, `allProducts`, `featuredWebsites`.

---

## Deploy Info

| Key | Value |
|-----|-------|
| Contexto Coolify | modern |
| App UUID | rtwcc35tbzzgfx3dp2hduod2 |
| Dominio | https://itera.lat |
| Google Analytics 4 | G-YDVG0CNQQN |

---

## Bloqueadores

1. **Screenshots faltantes** — IteraShop, Itera Estudio sin screenshot. 9 de 14 web demos sin screenshot aún.
2. **Contenido caseStudy** — Textos de problema/solución/resultado pendientes para cada producto.

---

## Proxima Accion

- Continuar con Fase 2: Tasks 5-7 (shared components + landing Sitios Web + galería + viewer modal)
- El plan está listo para ejecutar con `/superpowers-extended-cc:executing-plans docs/superpowers/plans/2026-04-02-site-redesign.md`
