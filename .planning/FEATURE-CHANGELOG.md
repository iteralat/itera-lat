# Feature Changelog

> Registro de features visibles para el usuario, organizadas por modulo.
> Solo funcionalidad de usuario — no fixes tecnicos, infra, o refactors internos.
> Se actualiza con `/save` cuando hay features nuevas o modificadas.

---

## Home (option-2 — versión activa)

- Hero rediseñado: layout 50/50, mockups de IteraLex + IteraShop + Cerro Solar — Mar 2026
- Hero con animaciones y CTA — Mar 2026
- Fondo espacial con estrellas y shooting stars naranjas (reemplaza cuadrados flotantes) — Abr 2026
- Glow naranja detrás del mockup de dispositivos — Abr 2026
- Home simplificado a 4 secciones: Hero, Showcase, WhyItera, CTA (se quitaron Services, Process, About) — Abr 2026
- Glassmorphism en tarjetas (.glass-card): gradiente interno, borde luminoso, glow naranja — Abr 2026
- Showcase con 3 categorías (Sitios Web, Soluciones, SaaS) y botón gradiente "Ver todos los productos" — Abr 2026
- Hero: mobile mockup oculto, laptop a la derecha sobresaliendo del desktop — Abr 2026
- Hero: badge único "Patagonia → LATAM" en cursiva con borde sutil — Abr 2026
- Showcase: IteraShop como tarjeta principal de Soluciones, hover scale reducido — Abr 2026
- Hero: "evolucionan" sin cursiva, font Poppins, layout 3 filas en mobile — Abr 2026
- Hero: título más grande en mobile (2.5rem), botones más compactos, chip más chico — Abr 2026

## Productos (reestructuración completa)

- Reestructuración en 3 categorías: Sitios Web, Soluciones, SaaS — Abr 2026
- Overview /productos con 3 CategoryCards glassmorphism — Abr 2026
- Landing /productos/sitios-web con galería filtrable (NicheFilter) y ScreenshotViewer modal — Abr 2026
- Landing /productos/soluciones con cards de IteraDesk, IteraLink, IteraShop — Abr 2026
- Landing /productos/saas con sección educativa y cards de IteraLex, Itera Estudio — Abr 2026
- Fichas de producto por categoría (/productos/{cat}/[slug]) con sidebar sticky — Abr 2026
- Página de caso web destacado (/productos/sitios-web/[slug]) — Abr 2026
- Redirects 301 de URLs viejas (/productos/iteralex → /productos/saas/iteralex, etc.) — Abr 2026
- Itera Estudio movido de internalProducts a saasProducts — Abr 2026
- Shared components: Breadcrumb, CaseStudy, CategoryCard — Abr 2026
- Web components: NicheFilter, WebCard, ScreenshotViewer, WebCatalog — Abr 2026

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
- Header con dropdown en Productos → 3 categorías — Abr 2026
- Header dropdown: hover continuo, alineado izquierda, "Ver todo" sutil — Abr 2026
- Menú mobile: animaciones framer-motion (fade+slide stagger), botón animado hamburguesa/X — Abr 2026
- Menú mobile: overlay full-screen corregido (movido fuera del header con backdrop-blur) — Abr 2026
- Menú mobile: dropdown Productos simplificado a lista de títulos centrada — Abr 2026
- Footer con links a categorías de productos — Abr 2026
- Footer: logo real, WhatsApp + email con íconos, columna Recursos — Abr 2026
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
