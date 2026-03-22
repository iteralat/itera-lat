# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-03-22
**Trabajando en**: Google Analytics 4, favicons, OG image, error boundary, security headers.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Home (`/`) | Completo | option-2 es el home definitivo |
| Servicios (`/servicios`) | Completo | Expansión de las 3 cards del home con detalle |
| Proyectos (`/proyectos`) | Completo | Renombrado de /plataformas, redirects 301 |
| Sobre Nosotros (`/sobre-nosotros`) | Completo | Quiénes somos, proceso, por qué ÍTERA, herramientas propias |
| Contacto (`/contacto`) | Completo | WhatsApp + email con GlowButton |
| Herramientas (`/herramientas`) | Completo | Solo en footer, no en nav top |
| SEO | Completo | metadataBase, OG, Twitter, robots, sitemap, JSON-LD, canonical, 404, favicons, GA4 |
| Analytics | Completo | GA4 G-YDVG0CNQQN — trackeando |
| Deploy | Completo | Coolify context "modern", app UUID: rtwcc35tbzzgfx3dp2hduod2 |
| Marketing Pages de productos | Pendiente | Briefs primero |

---

## Marketing Pages de Productos

**Productos que necesitan marketing page**:
- **IteraLex** → Ya tiene (iteralex.com) ✓
- **Itera Gestión** → Pendiente
- **Itera Tree** → Pendiente
- **Itera Market** → Pendiente (todavía en desarrollo)

**Proceso**: Briefs → Estructura por producto (no template genérico) → Diseño → Screenshots para showcase en itera.lat

---

## Deploy Info

| Key | Value |
|-----|-------|
| Contexto Coolify | modern |
| App UUID | rtwcc35tbzzgfx3dp2hduod2 |
| Proyecto UUID | kg3u7ti6c0o5ey3v1n54nq70 |
| Dominio | https://itera.lat + https://www.itera.lat |
| Server IP | 65.108.148.79 |
| Google Search Console | Añadido |
| Google Analytics 4 | G-YDVG0CNQQN — activo |

---

## Decisiones Recientes

| Fecha | Decision |
|-------|----------|
| 2026-03-22 | GA4 integrado via componente GoogleAnalytics + env var en Coolify CLI |
| 2026-03-22 | Favicon set completo: .ico (ffmpeg), 16x16, 32x32, apple-touch-icon |
| 2026-03-22 | OG image 1200x630 en public/og-image.png |
| 2026-03-22 | Error boundary global en src/app/error.tsx |
| 2026-03-22 | Security headers en next.config.ts: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| 2026-03-21 | Deploy a producción en Coolify (context modern) — itera.lat live |
| 2026-03-21 | SEO completo: metadataBase, OG, Twitter, robots, sitemap, JSON-LD, OG image dinámica |
| 2026-03-21 | Rutas reestructuradas: /servicios, /proyectos, /sobre-nosotros, /contacto |
| 2026-03-21 | /plataformas → /proyectos con redirect 301 |

---

## Bloqueadores

1. **Metadata faltante** — check-all.sh reporta 4 pages sin metadata: /, /contacto, /servicios, /sobre-nosotros (verificar si es false positive del script o falta real)
2. **WhatsApp** — Número placeholder en CTABanner y /contacto
3. **Screenshots faltantes** — Estudio y Market sin screenshot
4. **Briefs de productos** — Necesarios antes de marketing pages

---

## Proxima Accion

- A definir por el usuario
