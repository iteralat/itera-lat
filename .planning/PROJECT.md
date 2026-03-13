# ÍTERA — Web Portfolio

> Web informativa y portfolio de la agencia ÍTERA. Producto tipo: "portfolio corporativo con catálogo de productos".

**Última actualización**: 13 Mar 2026

---

## Qué es

Web institucional de ÍTERA que presenta los servicios, productos (plataformas SaaS) y herramientas de la agencia. No tiene backend, DB ni autenticación — todo es contenido estático servido por Next.js.

| Campo | Valor |
|-------|-------|
| **Marca comercial** | ÍTERA |
| **Estado** | En desarrollo |
| **Progreso** | Páginas principales ✅ · Screenshots pendientes ⏳ |
| **Desarrollador** | Pachu (ÍTERA) |

---

## Stack Técnico

| Capa | Tecnología | Versión |
|------|------------|---------|
| Framework | Next.js (App Router) | 16 |
| UI | React + Tailwind + Framer Motion | 19 |
| Tipografía | Poppins (Google Fonts) | - |
| Deploy | Pendiente | - |

---

## Módulos / Alcance

### Home (`/`) ✅
- Hero con animaciones
- Servicios
- Portfolio destacado
- About
- Contacto con WhatsApp

### Plataformas (`/plataformas`) ✅
- Grid de productos SaaS
- Visor interactivo por producto (`/plataformas/[slug]`)

### Herramientas (`/herramientas`) ✅
- Itera Monitor
- Itera Hub

### Webs (`/webs`) ⏸️
- Oculta del nav, construida. Necesita demos.

### Portfolio/Casos (`/portfolio/[slug]`) ❌
- Placeholder, sin contenido.

---

## URLs / Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Home — Hero, Services, Portfolio, About, Contact |
| `/plataformas` | Catálogo de productos SaaS |
| `/plataformas/[slug]` | Visor interactivo del producto |
| `/herramientas` | Herramientas internas |
| `/webs` | Demos web (oculta) |
| `/portfolio/[slug]` | Caso de estudio (placeholder) |

---

## Desarrollo Local

| Herramienta | Detalle |
|-------------|---------|
| **Node.js** | v22 |
| **Puerto dev** | 3005 |
| **Terminal Claude Code** | Bash (NO PowerShell) |

---

## Estructura del Proyecto

```
itera-lat/
├── public/              # Assets estáticos + screenshots
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home
│   │   ├── plataformas/       # Catálogo + [slug]
│   │   ├── herramientas/      # Tools
│   │   ├── webs/              # Demos (oculta)
│   │   └── portfolio/[slug]/  # Casos (placeholder)
│   ├── components/
│   │   ├── ui/                # Button, InteractiveBackground
│   │   ├── layout/            # Header, Footer, ScrollToTop
│   │   ├── sections/          # Hero, Services, About, Contact, Portfolio
│   │   ├── plataformas/       # PlatformGrid, PlatformCard, PlatformViewer
│   │   ├── herramientas/      # ToolsList, ToolPreviewCard
│   │   └── webs/              # WebCatalog, WebCard, ScreenshotViewer
│   └── data/
│       └── portfolio.ts       # Datos estáticos de productos/herramientas
├── .planning/                 # Documentación del proyecto
└── scripts/                   # Scripts de enforcement
```

---

## Decisiones de Producto

| Decisión | Respuesta |
|----------|-----------|
| Copy técnico vs. accesible | Accesible — orientado a cliente no técnico |
| Sideprojects personales | Excluidos (Ytra, presskit.ar) |
| Nombres de productos | Nombre ÍTERA público, cliente como "usado por" |
| Región | "Patagonia Argentina" (no "Alto Valle") |
| IA mention | "Desarrollo con IA" (no "Agentic Coding") |
