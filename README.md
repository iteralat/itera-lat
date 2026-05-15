# ÍTERA — Sitio Web de Marketing

Sitio web institucional y portfolio de **ÍTERA Estudio Digital** ([itera.lat](https://itera.lat)), agencia de desarrollo de software del Alto Valle, Argentina.

## Qué es

Landing page + portfolio showcase de la agencia. Muestra los servicios, proyectos y productos desarrollados por ÍTERA, organizados en tres verticales:

- **Webs** (`/webs`) — Sitios web para clientes (Cerro Solar, Cota Estudio, Surco Café, Brasa Burgers, Filo Barbería)
- **Plataformas** (`/plataformas`) — Productos SaaS propios (HubLink, StudioAI, FlowCRM, Vitrina, PressKit.AR, IteraTube, RAIZ)
- **Herramientas** (`/herramientas`) — Tools internas abiertas al público (Itera Studio, IteraTools)

## Features principales

- **ScreenshotViewer** — Visor modal con frame de browser (desktop) y celular (mobile) para previsualizar sitios del portfolio. Toggle desktop/mobile con mockup realista.
- **InteractiveBackground** — Fondo animado interactivo en el Hero.
- **Animaciones con Framer Motion** — Transiciones y micro-interacciones en todas las secciones.
- **Demos en vivo** — Los sitios web del portfolio apuntan a `demo.itera.lat/{proyecto}` (HTML estáticos).
- **Dark theme** — Paleta oscura con accent rojo (#F21B10) y soft warm (#FF5421) para gradientes. Sin alternativa fría.

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 16.1 |
| React | 19.2 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Framer Motion | 12.x |
| Lucide React | (iconos) |
| Font | Poppins (Google Fonts) |

## Estructura

```
src/
├── app/
│   ├── page.tsx                    # Homepage (Hero → Services → Portfolio → About → Contact)
│   ├── layout.tsx                  # Layout global (Header + Footer + ScrollToTop)
│   ├── globals.css                 # Theme tokens (CSS custom properties)
│   ├── webs/page.tsx               # Catálogo de sitios web
│   ├── plataformas/page.tsx        # Grid de plataformas SaaS
│   ├── plataformas/[slug]/page.tsx # Detalle de plataforma
│   ├── herramientas/page.tsx       # Lista de herramientas
│   └── portfolio/[slug]/page.tsx   # Detalle de proyecto
├── components/
│   ├── sections/                   # Secciones del homepage (Hero, Services, Portfolio, About, Contact)
│   ├── layout/                     # Header, Footer, ScrollToTop
│   ├── webs/                       # ScreenshotViewer, WebCard, WebCatalog
│   ├── plataformas/                # PlatformCard, PlatformGrid
│   ├── herramientas/               # ToolPreviewCard, ToolsList
│   └── ui/                         # Button, InteractiveBackground
├── data/
│   └── portfolio.ts                # Datos de todos los proyectos (websites, platforms, tools)
└── lib/
```

## Setup

```bash
npm install
npm run dev    # http://localhost:3005
```

## Proyectos referenciados en el portfolio

### Sitios web (demos HTML)
- **Cerro Solar** — Domos ecológicos, Patagonia (turismo/reservas)
- **Cota Estudio** — Portfolio de arquitectura, Córdoba
- **Surco Café** — Cafetería de especialidad, Neuquén (e-commerce)
- **Brasa Burgers** — Delivery de hamburguesas, Buenos Aires
- **Filo Barbería** — Reservas de turnos online, Rosario

### Plataformas SaaS
- **HubLink** — Hub de enlaces B2B (adoptado por Alquímica)
- **StudioAI** — Generador de fotoproductos con Gemini AI
- **FlowCRM** — CRM industrial (adoptado por Química Bambú)
- **Vitrina** — Catálogo online con checkout a WhatsApp (adoptado por Abundancia Hogar)
- **PressKit.AR** — Press kit digital para músicos argentinos
- **IteraTube** — Suite de repurposing de contenido con IA
- **RAIZ** — Gestión para estudios jurídicos

### Herramientas
- **Itera Studio** ([studio.itera.lat](https://studio.itera.lat)) — Generador de componentes UI con IA
- **IteraTools** ([tools.itera.lat](https://tools.itera.lat)) — Micro-herramientas web open source

## Dominio

- Producción: `itera.lat`
- Demos: `demo.itera.lat/{proyecto}`
- Contacto: `hola@itera.lat`

## Estado

Work in progress. Última actividad: reestructuración con páginas dedicadas por vertical y componente ScreenshotViewer.
