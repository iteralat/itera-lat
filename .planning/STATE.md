# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-03-24
**Trabajando en**: Reestructuracion completa del sitio — /proyectos→/productos, separacion SaaS vs Standalone.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Home (`/`) | Completo | option-2 es el home definitivo |
| Servicios (`/servicios`) | Completo | 3 verticales: webs, plataformas, IA |
| Productos (`/productos`) | Reestructurado | Overview con SaaS + Standalone separados |
| Productos detail (`/productos/[slug]`) | En progreso | 4 productos (iteralex, iteradesk, iteralink, iterashop). CTA a subdominios para standalone. Paginas individuales necesitan trabajo antes de deploy |
| Sobre Nosotros (`/sobre-nosotros`) | Completo | |
| Contacto (`/contacto`) | Completo | WhatsApp placeholder |
| SEO | Completo | sitemap actualizado con /productos |
| Analytics | Completo | GA4 G-YDVG0CNQQN |
| Performance | Completo | WebP, lazy load, CSS animations |
| Deploy | Pendiente redeploy | Cambios de estructura aun no deployados |

### Eliminado en sesion 2026-03-24
- `/proyectos` → renombrado a `/productos`
- `/herramientas` — Monitor y Hub son internos, no aportan al visitante
- Websites ficticios (Cerro Solar, Cota Estudio, Surco Cafe, etc.)
- Componentes huerfanos: `src/components/webs/`, `src/components/herramientas/`

---

## Estructura de Productos

| Producto | Categoria | Slug | CTA destino |
|----------|-----------|------|-------------|
| IteraLex | SaaS | `/productos/iteralex` | iteralex.com |
| IteraDesk | Standalone | `/productos/iteradesk` | desk.itera.lat |
| IteraLink | Standalone | `/productos/iteralink` | link.itera.lat |
| IteraShop | Standalone | `/productos/iterashop` | shop.itera.lat |

Datos en `src/data/portfolio.ts`: `saasProducts`, `standaloneProducts`, `allProducts`.

---

## Deploy Info

| Key | Value |
|-----|-------|
| Contexto Coolify | modern |
| App UUID | rtwcc35tbzzgfx3dp2hduod2 |
| Proyecto UUID | kg3u7ti6c0o5ey3v1n54nq70 |
| Dominio | https://itera.lat + https://www.itera.lat |
| Server IP | 65.108.148.79 |
| Google Analytics 4 | G-YDVG0CNQQN |

---

## Bloqueadores

1. **WhatsApp** — Numero placeholder en CTABanner y /contacto
2. **Screenshots faltantes** — IteraShop e Itera Estudio sin screenshot
3. **Paginas individuales de productos** — necesitan refinamiento antes de deploy

---

## Proxima Accion

- Terminar paginas individuales de productos (/productos/[slug])
- Screenshots reales para cards y detail pages
- Redeploy con nueva estructura
