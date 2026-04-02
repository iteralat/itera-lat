# Rediseño itera.lat — Estructura, jerarquía y visual

**Fecha:** 2026-04-02
**Scope:** Rediseño completo del sitio — información architecture, design system, rutas, modelo de datos, layouts de página.
**Enfoque:** Incremental por rama (design system → sitios web → soluciones → saas → páginas existentes).

---

## 1. Decisiones de diseño

| Decisión | Resultado |
|----------|-----------|
| Servicios ↔ Productos | Separados pero interlinkeados. Servicios describe capacidad, productos muestra resultado. |
| Navegación | Dropdown en "Productos" → 3 categorías: Sitios Web, Soluciones, SaaS |
| Profundidad de producto | SaaS/Standalone: página dedicada con caso de estudio. Web demos: galería + modal viewer. Casos reales destacados (`featured`) tienen página propia. |
| Landings de categoría | Estructura adaptada: Sitios Web = galería filtrable. Soluciones = cards con mini caso. SaaS = storytelling + educación. |
| Visual | Rediseño completo de todo el sitio. Negro profundo, glow naranja, micro-animaciones, contraste alto. Referencia: landing IteraShop. |
| Implementación | Incremental por rama. Cada paso es deployable. |

---

## 2. Design system

### Paleta de colores

| Token | Actual | Nuevo | Uso |
|-------|--------|-------|-----|
| `--background` | `#0f0e0c` (marrón) | `#050505` (negro puro) | Fondo global |
| `--muted` | `#161412` (marrón) | `#0a0a0a` (gris neutro) | Superficies secundarias |
| `--elevated` | `#1a1816` (marrón) | `#111111` (gris neutro) | Cards, paneles |
| `--border` | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.06)` | Bordes base |
| `--primary` | `#FF3C00` | `#FF3C00` (sin cambio) | Acento principal |
| `--primary-soft` | `#FF6A00` | `#FF6A00` (sin cambio) | Acento hover |
| `--cold` | `#A960EE` | `#A960EE` (sin cambio) | Acento frío |

Colores nuevos por categoría:
- `--cat-web`: `#4ecdc4` (teal) — Sitios Web
- `--cat-solutions`: `#f5a623` (naranja) — Soluciones standalone
- `--cat-saas`: `#a78bfa` (violeta) — SaaS

### Tipografía

- Font: Poppins (sin cambio)
- Jerarquía por opacidad de blanco, no grises fijos:
  - Títulos: `color: #fff` (opacidad 1)
  - Subtítulos: `rgba(255,255,255,0.5)`
  - Cuerpo: `rgba(255,255,255,0.35)`
  - Muted/labels: `rgba(255,255,255,0.3)`

### Efectos de vida

| Efecto | Descripción | Uso |
|--------|-------------|-----|
| Glow hover | `box-shadow: 0 0 30px rgba(255,60,0,0.1)` + borde naranja sutil | Cards interactivas |
| Gradient border | `background: linear-gradient(135deg, #FF3C00, transparent 60%)` en wrapper con padding 2px | Cards destacadas |
| Dot grid | `radial-gradient(rgba(255,60,0,0.08) 1px, transparent 1px)` background-size 20px | Fondo de secciones |
| Light line | `linear-gradient(90deg, transparent, rgba(255,60,0,0.4), transparent)` height 1px | Separadores de sección |
| Inset highlight | `inset 0 1px 0 rgba(255,255,255,0.03)` en box-shadow | Profundidad en cards |

### Componentes base

- **GlowButton** — ya existe, encaja con el nuevo sistema
- **Cards** — fondo `#0a0a0a`, borde con tinte de color de categoría, glow hover, inset highlight
- **Browser frame** — para screenshots: dots rojo/amarillo/verde, URL en monospace, border-radius 12px

---

## 3. Estructura de rutas

```
src/app/
├── page.tsx                          — Home (rediseñado)
├── servicios/page.tsx                — Servicios (rediseñado + interlinks a categorías)
├── sobre-nosotros/page.tsx           — Sobre nosotros (rediseñado)
├── contacto/page.tsx                 — Contacto (rediseñado)
└── productos/
    ├── page.tsx                      — Overview: 3 cards de categoría
    ├── sitios-web/
    │   ├── page.tsx                  — Landing: intro + filtros + galería + modal viewer
    │   └── [slug]/page.tsx           — Caso destacado (solo featured=true)
    ├── soluciones/
    │   ├── page.tsx                  — Landing: intro + cards con mini caso de estudio
    │   └── [slug]/page.tsx           — Ficha: caso de estudio completo + link externo
    └── saas/
        ├── page.tsx                  — Landing: qué es SaaS + modelo + listings
        └── [slug]/page.tsx           — Ficha: caso de estudio completo + link externo
```

### Redirects 301

Para no romper URLs existentes:

| Desde | Hacia |
|-------|-------|
| `/productos/iteralex` | `/productos/saas/iteralex` |
| `/productos/iteradesk` | `/productos/soluciones/iteradesk` |
| `/productos/iteralink` | `/productos/soluciones/iteralink` |
| `/productos/iterashop` | `/productos/soluciones/iterashop` |

Configurar en `next.config.ts` → `redirects()`.

---

## 4. Modelo de datos

Archivo: `src/data/portfolio.ts`

### BaseProduct (compartido)

```typescript
interface BaseProduct {
  id: string;
  slug: string;
  productName: string;
  tagline: string;
  description: string;
  tags: string[];
  screenshot: string;
  screenshots?: string[];
}
```

### ProductItem (SaaS + Standalone)

```typescript
interface ProductItem extends BaseProduct {
  category: "saas" | "standalone";
  coverLine: string;
  features: string[];
  status: string;
  adopters: { name: string; url?: string }[];
  externalUrl?: string;
  subdomain?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    result: string;
  };
}
```

### WebItem (demos de sitios web)

```typescript
interface WebItem extends BaseProduct {
  niche: string;              // "Gastronomía", "Turismo", "Arquitectura", etc.
  screenshotMobile: string;
  url?: string;               // URL del sitio real si existe
  featured?: boolean;         // true = genera página propia con caso de estudio
  caseStudy?: {               // solo para featured
    client: string;
    problem: string;
    solution: string;
    result: string;
  };
}
```

### Arrays de datos

```typescript
export const saasProducts: ProductItem[] = [...];
export const standaloneProducts: ProductItem[] = [...];
export const websites: WebItem[] = [...];

// Helpers
export const allProducts: ProductItem[] = [...saasProducts, ...standaloneProducts];
export const featuredWebsites: WebItem[] = websites.filter(w => w.featured);
```

---

## 5. Layouts de página

### /productos — Overview

- Hero centrado: "Lo que construimos" con radial glow
- 3 cards grandes en grid, una por categoría
- Cada card: ilustración abstracta, nombre, conteo, descripción corta, "Ver →"
- Colores de categoría en bordes y acentos

### /productos/sitios-web — Landing

- Breadcrumb: Productos / Sitios Web
- Hero: título, descripción del servicio, CTA "Quiero mi sitio"
- Filtros por nicho: pills clickeables (Todos, Institucional, Restaurante, Turismo, etc.)
- Galería: grid 3 columnas con WebCards (browser frame + screenshot + nombre + nicho)
- Click en WebCard → ScreenshotViewer modal con toggle desktop/mobile
- Casos destacados (featured) tienen badge y linkan a su página propia

### /productos/soluciones — Landing

- Breadcrumb: Productos / Soluciones
- Hero: título, qué son las soluciones standalone, para quién
- Cards por producto: screenshot, nombre, tagline, mini caso (problema → resultado en 1 línea), "Ver caso completo →"

### /productos/saas — Landing

- Breadcrumb: Productos / SaaS
- Hero: título, qué es SaaS, nuestro modelo (por suscripción, actualizaciones, soporte)
- Sección educativa: ventajas de SaaS vs software custom
- Listings: cards de IteraLex e Itera Estudio

### /productos/{categoria}/[slug] — Ficha de producto

- Breadcrumb: Productos / {Categoría} / {Nombre}
- Layout 2 columnas: contenido principal (screenshot viewer + caso de estudio + features) + sidebar sticky (tech stack, adoptantes, CTAs)
- Caso de estudio: 3 bloques (Problema, Solución, Resultado) con borde izquierdo naranja
- CTAs: "Ver {Producto}" (link externo) + "Quiero algo similar" (contacto)

### /productos/sitios-web/[slug] — Caso web destacado

- Solo para websites con `featured: true`
- Breadcrumb: Productos / Sitios Web / {Nombre}
- Screenshot viewer con toggle desktop/mobile
- Caso de estudio: cliente, problema, solución, resultado
- CTA: "Quiero un sitio así"

---

## 6. Navegación

### Header — Desktop

```
ÍTERA    Inicio   Servicios   Productos ▾   Sobre nosotros   [Hablemos]
                                  │
                                  ├─ Sitios Web       14+ demos y casos reales
                                  ├─ Soluciones       Plataformas llave en mano
                                  ├─ SaaS             Productos por suscripción
                                  └─ Ver todo
```

- Dropdown con hover, bordes redondeados, glow sutil, sombra
- Cada ítem: nombre + subtítulo descriptivo
- "Ver todo" linkea a `/productos`

### Header — Mobile

- Hamburger → overlay fullscreen
- "Productos" se expande inline mostrando las 3 sub-categorías indentadas

### Footer

Actualizar columna "Productos" para reflejar las 3 categorías:

```
Productos            Agencia
Sitios Web           Servicios
Soluciones           Sobre Nosotros
SaaS                 Contacto
```

---

## 7. Interlinking

### Servicios → Productos

Cada card de servicio en `/servicios` incluye un link contextual:

| Servicio | Linkea a |
|----------|----------|
| Sitios & Tiendas Web | `/productos/sitios-web` — "Mirá ejemplos →" |
| Plataformas a medida | `/productos/soluciones` — "Mirá lo que construimos →" |
| Soluciones con IA | `/productos/saas` — "Conocé nuestros productos →" |

### Productos → Servicios

Cada ficha de producto tiene un link sutil al servicio que lo generó:
- "Este producto es parte de nuestro servicio de {X}" con link a `/servicios`

### Home → Todo

- Showcase section: 1-2 productos destacados por categoría con link a la categoría
- Services section: link a `/servicios`
- CTA: link a `/contacto`

---

## 8. Orden de implementación (incremental)

### Fase 1: Design system + layout base
- Actualizar `globals.css` con nuevos tokens
- Actualizar componentes compartidos (Header con dropdown, Footer, GlowButton)
- Se aplica a TODO el sitio de entrada

### Fase 2: Rama Sitios Web
- Modelo de datos: agregar `WebItem` y `websites[]` a `portfolio.ts`
- `/productos/sitios-web/page.tsx` — landing con galería filtrable
- Componentes: `WebCard`, `ScreenshotViewer`, `NicheFilter`
- Screenshots: convertir JPGs existentes a WebP, agregar las 9 faltantes

### Fase 3: Rama Soluciones
- Actualizar datos: agregar `caseStudy` a standalone products, completar screenshots faltantes (IteraShop)
- `/productos/soluciones/page.tsx` — landing
- `/productos/soluciones/[slug]/page.tsx` — ficha de producto

### Fase 4: Rama SaaS
- Actualizar datos: agregar Itera Estudio como producto público, agregar `caseStudy` a SaaS products
- `/productos/saas/page.tsx` — landing
- `/productos/saas/[slug]/page.tsx` — ficha de producto

### Fase 5: Overview + redirects
- `/productos/page.tsx` — overview de 3 categorías
- Redirects 301 en `next.config.ts`
- Eliminar ruta vieja `/productos/[slug]`

### Fase 6: Páginas existentes
- Rediseñar Home (Showcase adaptado a nueva estructura)
- Rediseñar Servicios (interlinks a categorías)
- Rediseñar Sobre nosotros y Contacto con nuevo design system

---

## 9. Fuera de scope

- Contenido de texto de los casos de estudio (se definirá al implementar cada ficha)
- Las 9 screenshots de web demos faltantes (se generarán o agregarán manualmente)
- Animaciones complejas con framer-motion (se usan CSS transitions; framer se evalúa después)
- SEO avanzado (JSON-LD, sitemap actualizado) — se hace después del rediseño
