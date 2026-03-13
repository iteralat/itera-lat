# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-03-13
**Trabajando en**: Adopcion completa del sistema ITERA (CLAUDE.md, commands, scripts, .planning)

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Home (`/`) | Completo | Hero, Services, Portfolio, About, Contact |
| Plataformas | Completo | Grid + visor interactivo, falta cargar screenshots |
| Herramientas | Completo | Itera Monitor + Itera Hub |
| Webs | Oculto | Construida, oculta del nav. Reactivar con demos |
| Portfolio/[slug] | Placeholder | Casos de estudio no escritos |

---

## Decisiones Recientes

| Fecha | Decision |
|-------|----------|
| 2026-03-13 | Sistema ITERA adoptado: CLAUDE.md tier Simple, /load /save /check /commit |
| 2026-03-13 | Scripts: solo check-page-metadata y check-scaffold (sin Prisma/auth/upload) |
| 2026-03-13 | STATE.md viejo en raiz pendiente de borrar (migrado a .planning/) |
| 2026-03-13 | Tier Simple adoptado (sin DB, sin auth, datos estaticos) |
| 2026-03-13 | Ytra y presskit.ar excluidos (sideprojects personales) |
| 2026-03-13 | Copy orientado a cliente no tecnico |
| 2026-03-13 | Productos con nombre ITERA, cliente real como "usado por" |

---

## Bloqueadores

1. **Screenshots de plataformas** — Campo `screenshot` vacio en todos los productos
2. **Nombres definitivos** — Itera Gestion, Itera Tree e Itera Market son placeholders
3. **WhatsApp** — Numero placeholder en Contact

---

## Proxima Accion

- Agregar metadata faltante: `src/app/page.tsx` y `src/app/portfolio/[slug]/page.tsx`
- Crear `src/app/error.tsx` y `src/app/not-found.tsx`
- Borrar `STATE.md` viejo de la raiz
- Continuar con contenido real: screenshots, nombres definitivos, numero WA
