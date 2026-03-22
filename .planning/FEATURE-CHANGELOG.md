# Feature Changelog

> Registro de features visibles para el usuario, organizadas por modulo.
> Solo funcionalidad de usuario — no fixes tecnicos, infra, o refactors internos.
> Se actualiza con `/save` cuando hay features nuevas o modificadas.

---

## Home (option-2 — versión activa)

- Hero rediseñado: layout 50/50, mockups de IteraLex + dashboard catálogo, focos de iluminación, fondo cálido — Mar 2026
- Hero con animaciones y CTA — Mar 2026
- Seccion de servicios con iconos — Mar 2026
- Portfolio destacado en home — Mar 2026
- About con descripcion de la agencia — Mar 2026
- Formulario de contacto con WhatsApp — Mar 2026

## Proyectos (antes Plataformas)

- Grid de productos SaaS con cards — Mar 2026
- Visor interactivo por producto con thumbnails — Mar 2026
- Screenshots reales en cards (Gestión, Tree) con overlay carátula + hover reveal — Mar 2026
- Copy de beneficio/logro por plataforma (coverLine + description orientada a resultado) — Mar 2026
- Ruta renombrada de /plataformas a /proyectos con redirects 301 — Mar 2026

## Servicios

- Página /servicios con expansión de las 3 cards del home (Sitios Web, Plataformas, IA) con detalle de qué incluye cada uno — Mar 2026

## Sobre Nosotros

- Página /sobre-nosotros con quiénes somos, cómo trabajamos, por qué ÍTERA, herramientas propias — Mar 2026

## Contacto

- Página /contacto dedicada con WhatsApp + email + GlowButton — Mar 2026

## Herramientas

- Listado de herramientas internas (Monitor, Hub) — Mar 2026

## General

- Scroll to top button — Mar 2026
- Header simplificado: nav plano sin dropdown (Inicio, Servicios, Proyectos, Sobre nosotros, CTA) — Mar 2026
- Footer actualizado con links a nuevas rutas (Ecosistema + Agencia) — Mar 2026
- Custom 404 page — Mar 2026

## SEO

- metadataBase, OpenGraph, Twitter Cards, canonical URLs — Mar 2026
- robots.txt y sitemap.xml dinámico — Mar 2026
- JSON-LD (Organization + WebSite) — Mar 2026
- OG image dinámica — Mar 2026
- Title template (%s | ÍTERA) en todas las páginas — Mar 2026
- Favicon set completo: .ico, 16x16, 32x32, apple-touch-icon — Mar 2026
- OG image estática 1200x630 en public/ — Mar 2026

## Analytics

- Google Analytics 4 (G-YDVG0CNQQN) — tracking activo — Mar 2026

## Performance

- Imagenes convertidas de PNG a WebP (reduccion ~85% en peso total) — Mar 2026
- Lazy load de secciones below-the-fold via next/dynamic — Mar 2026
- Hero y DeviceMockup con CSS animations (sin framer-motion en critical path) — Mar 2026
- AnimatedBackground cargado con dynamic ssr:false — Mar 2026
- Cache headers inmutables para imagenes y fonts — Mar 2026
- Imagen LCP (DeviceMockup desktop) con priority preload — Mar 2026

## Accesibilidad

- Contraste de colores corregido en Footer, Hero pills, About, ScreenshotViewer — Mar 2026
- Heading hierarchy: h2 sr-only en Services para no saltar h1→h3 — Mar 2026
- aria-labels en botones icon-only de PlatformViewer y ScreenshotViewer — Mar 2026

## Infraestructura / Seguridad

- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy — Mar 2026
- Error boundary global con "Intentar de nuevo" y "Ir al inicio" — Mar 2026
