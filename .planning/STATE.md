# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-03-22
**Trabajando en**: Optimizacion PageSpeed Insights — performance mobile 78→90+ y accesibilidad 94→100.

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
| Performance | Completo | WebP, lazy load, CSS animations, cache headers, LCP priority |
| Accesibilidad | Completo | Contraste, heading hierarchy, aria-labels |
| Deploy | Completo | Coolify context "modern", app UUID: rtwcc35tbzzgfx3dp2hduod2 |
| Marketing Pages de productos | Pendiente | Briefs primero |

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
| 2026-03-22 | PNGs convertidos a WebP (cerro-solar 1MB→64KB, total ~85% reduccion) |
| 2026-03-22 | Hero y DeviceMockup: CSS @keyframes reemplaza framer-motion (critical path sin FM) |
| 2026-03-22 | Secciones below-fold con next/dynamic (Services, Showcase, WhyItera, Process, About, CTABanner) |
| 2026-03-22 | AnimatedBackground con dynamic ssr:false para no bloquear FCP |
| 2026-03-22 | Cache-Control inmutable para /images/* y /fonts/* |
| 2026-03-22 | Contraste: text-white/40 y text-zinc-500 reemplazados por text-zinc-400 |
| 2026-03-22 | h2.sr-only en Services para corregir heading hierarchy h1→h3 |
| 2026-03-22 | GA4 integrado via componente GoogleAnalytics + env var en Coolify CLI |
| 2026-03-22 | Security headers en next.config.ts |
| 2026-03-21 | Deploy a producción en Coolify (context modern) — itera.lat live |

---

## Bloqueadores

1. **WhatsApp** — Número placeholder en CTABanner y /contacto
2. **Screenshots faltantes** — Estudio y Market sin screenshot
3. **Briefs de productos** — Necesarios antes de marketing pages
4. **PNGs originales** — Borrar después de verificar deploy con WebP OK

---

## Proxima Accion

- Deploy y re-testear PageSpeed Insights para verificar mejoras
- A definir por el usuario
