# Changelog

Historial completo de sesiones. Se acumula con cada `/save`.

---

## [21 Mar 2026] - Reestructuración rutas, SEO y primer deploy

### Que se hizo
- Reestructuración: /servicios, /proyectos (ex /plataformas)
- Redirects 301: /plataformas → /proyectos, /webs → /proyectos
- Header simplificado: nav plano, CTA Hablemos
- SEO completo: metadataBase, OG, Twitter, robots, sitemap, JSON-LD
- Eliminación dead code: /webs, /portfolio, /option-2, components/sections/
- Dockerfile multi-stage, .dockerignore, output standalone
- Primer deploy a producción en Coolify (itera.lat)

### Archivos clave
- `next.config.ts` - redirects + standalone
- `src/app/layout.tsx` - metadataBase, OG, JSON-LD
- `src/app/robots.ts`, `sitemap.ts` - SEO indexing
- `src/app/opengraph-image.tsx` - OG dinámica ImageResponse
- `src/components/layout/Header.tsx`, `Footer.tsx` - nav plana, rutas nuevas
- `Dockerfile`, `.dockerignore` - deploy Coolify
- `.planning/auto-deploy-coolify.md` - guía actualizada

### Decisiones
- Nav plano sin dropdown para simplificar UX
- /proyectos más descriptivo que /plataformas
- Cada page client con metadata propia (framer-motion)
- OG image generada en edge runtime

---

## [21 Mar 2026] - Rediseño hero option-2 y auditoría de contenido

### Que se hizo
- Hero 50/50 layout con 5 glows naranja/violeta cálidos
- Gradiente "evolucionan" en CSS inline vs Tailwind oklab
- Mockups: IteraLex desktop, dashboard catálogo laptop
- Paleta cálida #0f0e0c reemplaza #101118 (marca)
- Stats con números reales, Showcase sin ficción

### Archivos clave
- `src/components/option-2/sections/Hero.tsx` - layout y glows
- `src/components/option-2/ui/AnimatedBackground.tsx` - fondo cálido
- `src/components/option-2/ui/DeviceMockup.tsx` - mockups
- `src/app/globals.css` - tokens de color
- `.planning/STATE.md` - auditoría completa

### Decisiones
- option-2 será home definitivo
- Fondo cálido como regla de marca permanente
- Body pendiente de implementar

---

## [14 Mar 2026] - Overlay de caratula en plataformas

### Que se hizo
- Overlay con titulo uppercase y gradiente naranja
- CoverLine descriptiva en carátula
- Hover reveal animado en PlatformCard
- Copy reescrito: beneficio real no técnico
- Screenshots movidas a public/images/plataformas/

### Archivos clave
- `src/components/plataformas/PlatformCard.tsx` - overlay caratula
- `src/data/portfolio.ts` - coverLine field, copy mejorada

### Decisiones
- Screenshots en carpeta separada /images/plataformas/
- Overlay en vez de screenshot cruda para diseño consistente

---

## [13 Mar 2026] - Adopcion sistema ITERA

### Que se hizo
- Creado CLAUDE.md tier Simple adaptado al proyecto
- Creados commands: /load, /save, /check, /commit
- Creado .planning/ con STATE, GUARDRAILS, CHANGELOG
- Creados scripts de enforcement (check-all, check-page-metadata)
- Migrado STATE.md de raiz a .planning/

### Archivos clave
- `CLAUDE.md` - reglas del proyecto
- `.claude/commands/` - flujos /load, /save, /check, /commit
- `.planning/` - estado, guardrails, changelog

### Decisiones
- Tier Simple: sin secciones de Prisma, Zod, BetterAuth, multi-tenant
- Scripts adaptados: solo check-page-metadata y check-scaffold aplican

---
