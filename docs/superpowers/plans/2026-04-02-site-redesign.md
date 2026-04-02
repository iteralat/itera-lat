# Rediseño itera.lat — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:subagent-driven-development (recommended) or superpowers-extended-cc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar itera.lat con nueva identidad visual (negro profundo, glow naranja, micro-animaciones), reestructurar productos en 3 categorías (Sitios Web, Soluciones, SaaS) con dropdown, landings de categoría y fichas individuales.

**Architecture:** Sitio estático Next.js 16 con datos en `src/data/portfolio.ts`. Nuevo árbol de rutas bajo `/productos/{categoria}/[slug]`. Design system via CSS custom properties en Tailwind v4. Componentes compartidos para Breadcrumb, CaseStudy, CategoryCard. Web demos con galería filtrable + modal viewer.

**Tech Stack:** Next.js 16, React 19, Tailwind v4 (@theme inline), framer-motion, lucide-react, TypeScript.

**User Verification:** NO — no se requiere verificación de usuario en el plan. La verificación es visual en localhost:3005.

---

## File Structure

### Files to Create

```
src/components/shared/Breadcrumb.tsx        — Breadcrumb reutilizable con categoría
src/components/shared/CaseStudy.tsx         — Bloque problema/solución/resultado
src/components/shared/CategoryCard.tsx      — Card de categoría para overview
src/components/webs/WebCard.tsx             — Card de demo web con browser frame
src/components/webs/WebCatalog.tsx          — Galería filtrable con modal
src/components/webs/ScreenshotViewer.tsx    — Modal viewer desktop/mobile
src/components/webs/NicheFilter.tsx         — Pills de filtro por nicho
src/app/productos/sitios-web/page.tsx       — Landing de Sitios Web
src/app/productos/sitios-web/[slug]/page.tsx — Caso web destacado
src/app/productos/soluciones/page.tsx       — Landing de Soluciones
src/app/productos/soluciones/[slug]/page.tsx — Ficha de producto standalone
src/app/productos/saas/page.tsx             — Landing de SaaS
src/app/productos/saas/[slug]/page.tsx      — Ficha de producto SaaS
```

### Files to Modify

```
src/app/globals.css                         — Nuevos tokens de color + efectos
src/components/layout/Header.tsx            — Dropdown en "Productos"
src/components/layout/Footer.tsx            — Columna Productos con categorías
src/data/portfolio.ts                       — BaseProduct, WebItem, caseStudy
src/app/productos/page.tsx                  — Overview de 3 categorías (rewrite)
next.config.ts                              — Redirects 301
src/app/page.tsx                            — Showcase adaptado
src/app/servicios/page.tsx                  — Interlinks a categorías
src/app/sobre-nosotros/page.tsx             — Rediseño visual
src/app/contacto/page.tsx                   — Rediseño visual
```

### Files to Delete

```
src/app/productos/[slug]/page.tsx           — Reemplazado por rutas por categoría
```

---

## Phase 1: Design System + Layout Base

### Task 1: Update design tokens and effects in globals.css

**Goal:** Reemplazar la paleta marrón por negro puro con efectos glow naranja.

**Files:**
- Modify: `src/app/globals.css`

**Acceptance Criteria:**
- [ ] Background cambia de #0f0e0c a #050505
- [ ] Superficies cambian de marrones a grises neutros
- [ ] Nuevas CSS vars para colores de categoría (--cat-web, --cat-solutions, --cat-saas)
- [ ] Utilidades CSS para efectos glow, gradient border, dot grid, light line
- [ ] El sitio existente se ve correcto con los nuevos tokens (no rompe nada)

**Verify:** `npm run lint` → sin errores. Abrir localhost:3005 → fondo negro puro, sin marrones.

**Steps:**

- [ ] **Step 1: Update root color tokens**

```css
:root {
  --background: #050505;
  --foreground: #FFFFFF;
  --primary: #FF3C00;
  --primary-soft: #FF6A00;
  --cold: #A960EE;
  --muted: #0a0a0a;
  --elevated: #111111;
  --border: rgba(255, 255, 255, 0.06);
  --cat-web: #4ecdc4;
  --cat-solutions: #f5a623;
  --cat-saas: #a78bfa;
}
```

- [ ] **Step 2: Register new tokens in @theme inline**

Add `--color-cat-web`, `--color-cat-solutions`, `--color-cat-saas` to the @theme inline block.

- [ ] **Step 3: Add utility classes for effects**

```css
/* Glow effects */
.glow-hover {
  transition: box-shadow 0.3s, border-color 0.3s;
}
.glow-hover:hover {
  box-shadow: 0 0 30px rgba(255, 60, 0, 0.1), 0 0 60px rgba(255, 60, 0, 0.05);
  border-color: rgba(255, 60, 0, 0.15);
}

/* Light line separator */
.light-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 60, 0, 0.4), transparent);
}

/* Dot grid background */
.dot-grid {
  background-image: radial-gradient(rgba(255, 60, 0, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

- [ ] **Step 4: Verify visually and lint**

Run: `npm run lint`
Open localhost:3005 — verify all existing pages render correctly with new tokens.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "ui: actualizar design system — negro puro, tokens de categoría, efectos glow"
```

---

### Task 2: Refactor Header with dropdown navigation

**Goal:** Agregar dropdown en "Productos" con 3 categorías + "Ver todo". Mobile: expandible inline.

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Acceptance Criteria:**
- [ ] Desktop: hover en "Productos" muestra dropdown con Sitios Web, Soluciones, SaaS, Ver todo
- [ ] Cada item tiene nombre + subtítulo descriptivo
- [ ] Colores de categoría en cada item
- [ ] Mobile: "Productos" se expande mostrando sub-items indentados
- [ ] Dropdown se cierra al clickear fuera o al navegar
- [ ] Animación de entrada/salida suave

**Verify:** `npm run lint` → sin errores. Localhost:3005 → dropdown funciona en desktop y mobile.

**Steps:**

- [ ] **Step 1: Add dropdown state and data**

Add state for dropdown visibility. Define dropdown items array:

```typescript
const productCategories = [
  { name: "Sitios Web", description: "14+ demos y casos reales", href: "/productos/sitios-web", color: "text-cat-web" },
  { name: "Soluciones", description: "Plataformas llave en mano", href: "/productos/soluciones", color: "text-cat-solutions" },
  { name: "SaaS", description: "Productos por suscripción", href: "/productos/saas", color: "text-cat-saas" },
];
```

- [ ] **Step 2: Replace Productos nav link with dropdown trigger (desktop)**

Replace the static "Productos" link with a hover-triggered dropdown. Use `onMouseEnter`/`onMouseLeave` for desktop. Dropdown panel: absolute positioned, bg-muted, border with glow, rounded-xl, shadow.

Each dropdown item: Link with name (colored by category) + description (rgba white 0.3). Separator line before "Ver todo" link to `/productos`.

- [ ] **Step 3: Update mobile menu**

In the mobile overlay, replace the single "Productos" link with an expandible section. Click toggles showing/hiding 3 sub-items indented with `pl-6`.

- [ ] **Step 4: Add click-outside and route-change close**

Use `useEffect` with click-outside listener. Close dropdown on `pathname` change.

- [ ] **Step 5: Verify and commit**

Run: `npm run lint`
Test desktop hover + mobile expand. Verify navigation works.

```bash
git add src/components/layout/Header.tsx
git commit -m "ui: agregar dropdown de categorías en nav Productos"
```

---

### Task 3: Update Footer with category links

**Goal:** Reemplazar links individuales de productos por las 3 categorías.

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Acceptance Criteria:**
- [ ] Columna "Productos" muestra: Sitios Web, Soluciones, SaaS (con links a sus landings)
- [ ] Estilo visual actualizado al nuevo design system

**Verify:** `npm run lint` → sin errores. Localhost:3005 → footer muestra categorías.

**Steps:**

- [ ] **Step 1: Replace product links**

Replace individual product links (IteraDesk, IteraLink, etc.) with category links:

```typescript
const productLinks = [
  { name: "Sitios Web", href: "/productos/sitios-web" },
  { name: "Soluciones", href: "/productos/soluciones" },
  { name: "SaaS", href: "/productos/saas" },
];
```

- [ ] **Step 2: Update visual styling**

Update background, borders, and text colors to use new tokens. Add light-line separator between sections.

- [ ] **Step 3: Verify and commit**

Run: `npm run lint`

```bash
git add src/components/layout/Footer.tsx
git commit -m "ui: actualizar footer con categorías de productos"
```

---

## Phase 2: Data Model + Sitios Web

### Task 4: Extend data model with BaseProduct, WebItem, caseStudy

**Goal:** Reestructurar portfolio.ts con tipos base compartidos, agregar WebItem para demos web, agregar caseStudy a ProductItem.

**Files:**
- Modify: `src/data/portfolio.ts`

**Acceptance Criteria:**
- [ ] BaseProduct interface extraída con campos compartidos
- [ ] ProductItem extends BaseProduct con caseStudy opcional
- [ ] WebItem interface con niche, screenshotMobile, featured, caseStudy
- [ ] Array websites[] con las 5 demos existentes (Brasa, Cerro Solar, Cota, Surco, Filo)
- [ ] Export helpers: allProducts, featuredWebsites
- [ ] Backwards compat: exports existentes no se rompen
- [ ] slug field agregado a todos los productos

**Verify:** `npm run lint` → sin errores. `npx tsc --noEmit` → sin errores de tipo.

**Steps:**

- [ ] **Step 1: Define BaseProduct interface**

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

- [ ] **Step 2: Refactor ProductItem to extend BaseProduct**

```typescript
export interface ProductItem extends BaseProduct {
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

Add `slug` field to each existing product (use `id` value). Add placeholder `caseStudy` to products that have real client stories (IteraLex, IteraDesk).

- [ ] **Step 3: Define WebItem interface and data**

```typescript
export interface WebItem extends BaseProduct {
  niche: string;
  screenshotMobile: string;
  url?: string;
  featured?: boolean;
  caseStudy?: {
    client: string;
    problem: string;
    solution: string;
    result: string;
  };
}

export const websites: WebItem[] = [
  {
    id: "brasa-burgers",
    slug: "brasa-burgers",
    productName: "Brasa Burgers",
    tagline: "Delivery de hamburguesas",
    description: "Sitio web para delivery de hamburguesas artesanales con menú interactivo y pedidos online.",
    tags: ["Next.js", "React", "Tailwind"],
    screenshot: "/images/portfolio/screenshot-brasa-burgers.webp",
    screenshotMobile: "/images/portfolio/screenshot-brasa-burgers-mobile.webp",
    niche: "Gastronomía",
  },
  // ... Cerro Solar, Cota Estudio, Surco Café, Filo Barbería
];
```

- [ ] **Step 4: Add helper exports**

```typescript
export const allProducts: ProductItem[] = [...saasProducts, ...standaloneProducts];
export const featuredWebsites: WebItem[] = websites.filter(w => w.featured);
export const platforms = allProducts; // backward compat
```

- [ ] **Step 5: Convert existing JPG screenshots to WebP**

Run image conversion for portfolio screenshots that are still JPG:
```bash
# Manually convert or use sharp/imagemin
# brasa-burgers.jpg → brasa-burgers.webp
# filo-barberia.jpg → filo-barberia.webp
# surco-cafe.jpg → surco-cafe.webp
```

- [ ] **Step 6: Verify types and commit**

Run: `npx tsc --noEmit` and `npm run lint`

```bash
git add src/data/portfolio.ts public/images/portfolio/
git commit -m "content: extender modelo de datos con WebItem, caseStudy y demos web"
```

---

### Task 5: Create shared components (Breadcrumb, CaseStudy, CategoryCard)

**Goal:** Crear componentes reutilizables que se usan en múltiples páginas de productos.

**Files:**
- Create: `src/components/shared/Breadcrumb.tsx`
- Create: `src/components/shared/CaseStudy.tsx`
- Create: `src/components/shared/CategoryCard.tsx`

**Acceptance Criteria:**
- [ ] Breadcrumb acepta array de {label, href} + current page
- [ ] CaseStudy muestra 3 bloques (Problema, Solución, Resultado) con estilo del design system
- [ ] CategoryCard muestra card grande con color de categoría, nombre, conteo, descripción, link

**Verify:** `npm run lint` → sin errores.

**Steps:**

- [ ] **Step 1: Create Breadcrumb**

```typescript
// src/components/shared/Breadcrumb.tsx
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
  currentColor?: string; // tailwind text color class
}

export function Breadcrumb({ items, current, currentColor = "text-primary" }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-white/30">
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          <Link href={item.href} className="hover:text-white/60 transition-colors">
            {item.label}
          </Link>
        </span>
      ))}
      <span>/</span>
      <span className={currentColor}>{current}</span>
    </nav>
  );
}
```

- [ ] **Step 2: Create CaseStudy**

```typescript
// src/components/shared/CaseStudy.tsx
interface CaseStudyProps {
  problem: string;
  solution: string;
  result: string;
}

export function CaseStudy({ problem, solution, result }: CaseStudyProps) {
  const blocks = [
    { label: "Problema", text: problem },
    { label: "Solución", text: solution },
    { label: "Resultado", text: result },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="p-5 bg-muted border border-border rounded-lg"
        >
          <div className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">
            {block.label}
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{block.text}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create CategoryCard**

```typescript
// src/components/shared/CategoryCard.tsx
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  count: string;
  description: string;
  href: string;
  colorClass: string;       // e.g. "text-cat-web"
  borderColorClass: string; // e.g. "border-cat-web/12"
  ctaLabel: string;
  children?: React.ReactNode; // slot for abstract illustration
}

export function CategoryCard({
  name, count, description, href, colorClass, borderColorClass, ctaLabel, children,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group bg-muted border ${borderColorClass} rounded-xl overflow-hidden glow-hover transition-all duration-300 block`}
    >
      <div className="h-36 bg-background flex items-center justify-center relative overflow-hidden dot-grid">
        {children}
      </div>
      <div className="p-5">
        <div className={`${colorClass} font-bold text-lg mb-1`}>{name}</div>
        <div className="text-white/40 text-xs mb-3">{count}</div>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
        <div className={`${colorClass} text-sm font-semibold group-hover:translate-x-1 transition-transform`}>
          {ctaLabel} →
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 4: Verify and commit**

Run: `npm run lint`

```bash
git add src/components/shared/
git commit -m "ui: crear componentes compartidos Breadcrumb, CaseStudy, CategoryCard"
```

---

### Task 6: Create Sitios Web landing page with gallery

**Goal:** Crear la landing `/productos/sitios-web` con intro, filtros por nicho, y galería de web demos.

**Files:**
- Create: `src/app/productos/sitios-web/page.tsx`
- Create: `src/components/webs/NicheFilter.tsx`
- Create: `src/components/webs/WebCard.tsx`
- Create: `src/components/webs/WebCatalog.tsx`
- Create: `src/components/webs/ScreenshotViewer.tsx`
- Create: `src/app/productos/sitios-web/layout.tsx` (metadata)

**Acceptance Criteria:**
- [ ] Page con metadata SEO
- [ ] Breadcrumb: Productos / Sitios Web
- [ ] Hero con título, descripción, CTA "Quiero mi sitio"
- [ ] Filtros por nicho (pills clickeables)
- [ ] Galería grid 3 columnas con WebCards
- [ ] Click en WebCard abre ScreenshotViewer modal
- [ ] ScreenshotViewer con toggle desktop/mobile y cerrar con Escape/click fuera
- [ ] Featured demos tienen badge visual

**Verify:** `npm run lint` → sin errores. Localhost:3005/productos/sitios-web → galería con filtros y modal viewer funcional.

**Steps:**

- [ ] **Step 1: Create NicheFilter component**

```typescript
// src/components/webs/NicheFilter.tsx
"use client";

interface NicheFilterProps {
  niches: string[];
  active: string | null;
  onSelect: (niche: string | null) => void;
}

export function NicheFilter({ niches, active, onSelect }: NicheFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
          active === null
            ? "bg-cat-web/10 border-cat-web/30 text-cat-web"
            : "bg-muted border-border text-white/50 hover:text-white hover:border-white/20"
        }`}
      >
        Todos
      </button>
      {niches.map((niche) => (
        <button
          key={niche}
          onClick={() => onSelect(niche)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            active === niche
              ? "bg-cat-web/10 border-cat-web/30 text-cat-web"
              : "bg-muted border-border text-white/50 hover:text-white hover:border-white/20"
          }`}
        >
          {niche}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create WebCard component**

Based on the original WebCard from git history (commit 3ff9d84) but updated with new design system tokens. Browser frame with dots, screenshot image, hover overlay "Ver preview", name + niche below. Add `featured` badge if applicable.

- [ ] **Step 3: Create ScreenshotViewer modal**

Based on the original ScreenshotViewer from git history (commit 3ff9d84) but updated with new design system. Modal overlay with blur, browser frame (desktop) or phone frame (mobile), toggle buttons, Escape/click-outside close, footer with tags and CTA. Use `document.body.style.overflow = "hidden"` when open.

- [ ] **Step 4: Create WebCatalog orchestrator**

```typescript
// src/components/webs/WebCatalog.tsx
"use client";

import { useState, useMemo } from "react";
import { websites } from "@/data/portfolio";
import type { WebItem } from "@/data/portfolio";
import { WebCard } from "./WebCard";
import { ScreenshotViewer } from "./ScreenshotViewer";
import { NicheFilter } from "./NicheFilter";

export function WebCatalog() {
  const [activeNiche, setActiveNiche] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<WebItem | null>(null);

  const niches = useMemo(
    () => Array.from(new Set(websites.map((w) => w.niche))),
    []
  );

  const filtered = activeNiche
    ? websites.filter((w) => w.niche === activeNiche)
    : websites;

  return (
    <>
      <NicheFilter niches={niches} active={activeNiche} onSelect={setActiveNiche} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((item, index) => (
          <WebCard
            key={item.id}
            item={item}
            index={index}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <ScreenshotViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
```

- [ ] **Step 5: Create page and layout**

```typescript
// src/app/productos/sitios-web/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitios Web | ÍTERA",
  description: "Diseñamos sitios web para todos los rubros. Institucionales, catálogos, tiendas online. Cada sitio es rápido, indexable y administrable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

```typescript
// src/app/productos/sitios-web/page.tsx
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { WebCatalog } from "@/components/webs/WebCatalog";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export default function SitiosWebPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[{ label: "Productos", href: "/productos" }]}
          current="Sitios Web"
          currentColor="text-cat-web"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Sitios Web
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Diseñamos sitios web para todos los rubros. Cada sitio es rápido,
              indexable y administrable. Desde institucionales hasta tiendas online.
            </p>
          </div>
          <GlowButton href="/contacto">Quiero mi sitio</GlowButton>
        </div>

        <WebCatalog />
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Verify and commit**

Run: `npm run lint`
Open localhost:3005/productos/sitios-web → verify gallery, filters, and modal work.

```bash
git add src/app/productos/sitios-web/ src/components/webs/
git commit -m "feat: crear landing de Sitios Web con galería filtrable y viewer modal"
```

---

### Task 7: Create featured web case detail page

**Goal:** Crear la ruta `/productos/sitios-web/[slug]` para demos web destacadas con caso de estudio.

**Files:**
- Create: `src/app/productos/sitios-web/[slug]/page.tsx`

**Acceptance Criteria:**
- [ ] generateStaticParams solo genera para websites con featured=true
- [ ] generateMetadata con datos del website
- [ ] Breadcrumb: Productos / Sitios Web / {Nombre}
- [ ] Screenshot viewer con toggle desktop/mobile
- [ ] Caso de estudio si existe
- [ ] CTA "Quiero un sitio así"
- [ ] 404 si slug no existe o no es featured

**Verify:** `npm run lint` → sin errores.

**Steps:**

- [ ] **Step 1: Create the dynamic page**

```typescript
// src/app/productos/sitios-web/[slug]/page.tsx
import { notFound } from "next/navigation";
import { websites } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CaseStudy } from "@/components/shared/CaseStudy";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export async function generateStaticParams() {
  return websites
    .filter((w) => w.featured)
    .map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = websites.find((w) => w.slug === slug && w.featured);
  if (!site) return {};
  return {
    title: `${site.productName} | Sitios Web | ÍTERA`,
    description: site.description,
  };
}

export default async function WebCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = websites.find((w) => w.slug === slug && w.featured);
  if (!site) notFound();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: "Sitios Web", href: "/productos/sitios-web" },
          ]}
          current={site.productName}
          currentColor="text-cat-web"
        />

        <div className="mt-8 mb-8">
          <PlatformViewer
            productName={site.productName}
            screenshot={site.screenshot}
            screenshots={site.screenshots}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{site.productName}</h1>
        <p className="text-white/40 text-lg mb-2">{site.tagline}</p>
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cat-web/10 border border-cat-web/20 text-cat-web mb-8">
          {site.niche}
        </span>

        <p className="text-white/50 leading-relaxed max-w-3xl mb-10">{site.description}</p>

        {site.caseStudy && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Caso de estudio</h2>
            <CaseStudy
              problem={site.caseStudy.problem}
              solution={site.caseStudy.solution}
              result={site.caseStudy.result}
            />
          </div>
        )}

        <div className="flex gap-4">
          {site.url && (
            <GlowButton href={site.url} external>Ver sitio en vivo</GlowButton>
          )}
          <GlowButton href="/contacto" variant="outline">Quiero un sitio así</GlowButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify and commit**

Run: `npm run lint`

```bash
git add src/app/productos/sitios-web/
git commit -m "feat: crear página de caso web destacado (/productos/sitios-web/[slug])"
```

---

## Phase 3: Soluciones

### Task 8: Create Soluciones landing page

**Goal:** Crear `/productos/soluciones` con intro y cards de los 3 productos standalone.

**Files:**
- Create: `src/app/productos/soluciones/page.tsx`
- Create: `src/app/productos/soluciones/layout.tsx`

**Acceptance Criteria:**
- [ ] Metadata SEO
- [ ] Breadcrumb: Productos / Soluciones
- [ ] Hero con explicación de soluciones standalone
- [ ] Cards por producto: screenshot, nombre, tagline, mini caso, "Ver caso completo →"
- [ ] Links a /productos/soluciones/[slug]

**Verify:** `npm run lint` → sin errores. Localhost:3005/productos/soluciones → 3 cards.

**Steps:**

- [ ] **Step 1: Create layout with metadata**

Metadata: title "Soluciones | ÍTERA", description about standalone platforms.

- [ ] **Step 2: Create page with hero + product cards**

Server component. Import `standaloneProducts` from portfolio. Breadcrumb, hero section explaining what standalone solutions are, grid of product cards. Each card shows screenshot (or gradient placeholder), name, tagline, mini caseStudy (problem → result in one line if exists), and link to detail page.

Use design system: bg-muted cards, border-cat-solutions/12, glow-hover, dot-grid on hero.

- [ ] **Step 3: Verify and commit**

```bash
git add src/app/productos/soluciones/
git commit -m "feat: crear landing de Soluciones standalone"
```

---

### Task 9: Create Soluciones detail page

**Goal:** Crear `/productos/soluciones/[slug]` con ficha de producto, caso de estudio, features, y CTAs.

**Files:**
- Create: `src/app/productos/soluciones/[slug]/page.tsx`

**Acceptance Criteria:**
- [ ] generateStaticParams para standalone products
- [ ] generateMetadata con datos del producto
- [ ] Breadcrumb: Productos / Soluciones / {Nombre}
- [ ] Layout 2 columnas: contenido (viewer + caso + features) + sidebar sticky (tech, adoptantes, CTAs)
- [ ] CaseStudy component si existe
- [ ] CTA "Ver {Nombre}" → externalUrl, "Quiero algo similar" → /contacto
- [ ] 404 si slug no existe

**Verify:** `npm run lint` → sin errores. Localhost:3005/productos/soluciones/iteradesk → ficha completa.

**Steps:**

- [ ] **Step 1: Create the dynamic page**

Server component. Import `standaloneProducts`. generateStaticParams maps slugs. Page layout: Breadcrumb at top. Two-column grid (main + sidebar). Main column: PlatformViewer with screenshots, status/category badges, h1 + tagline, description, CaseStudy component, features list with checkmarks. Sidebar (sticky): tech tags, adopters list, GlowButton to externalUrl, outline button to /contacto.

Follow the wireframe from the spec: same structure as the mockup in section 5 of the design doc.

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/productos/soluciones/
git commit -m "feat: crear ficha de producto Soluciones (/productos/soluciones/[slug])"
```

---

## Phase 4: SaaS

### Task 10: Create SaaS landing page

**Goal:** Crear `/productos/saas` con contenido educativo sobre SaaS y listings de IteraLex + Itera Estudio.

**Files:**
- Create: `src/app/productos/saas/page.tsx`
- Create: `src/app/productos/saas/layout.tsx`

**Acceptance Criteria:**
- [ ] Metadata SEO
- [ ] Breadcrumb: Productos / SaaS
- [ ] Hero con explicación de qué es SaaS y el modelo de ÍTERA
- [ ] Sección educativa: ventajas de SaaS (actualizaciones, soporte, escalabilidad)
- [ ] Cards de IteraLex e Itera Estudio
- [ ] Itera Estudio debe moverse de internalProducts a saasProducts en portfolio.ts

**Verify:** `npm run lint` → sin errores. Localhost:3005/productos/saas → landing con 2 productos.

**Steps:**

- [ ] **Step 1: Move Itera Estudio to saasProducts**

In `portfolio.ts`, move the Itera Estudio entry from `internalProducts` to `saasProducts`. Add `slug: "itera-estudio"`. Add screenshot when available (empty string for now).

- [ ] **Step 2: Create layout and page**

Layout: metadata. Page: Breadcrumb, hero explaining SaaS model, educational section (3 benefit blocks: actualizaciones continuas, soporte incluido, escala con tu negocio), product cards grid. Cards link to /productos/saas/[slug].

- [ ] **Step 3: Verify and commit**

```bash
git add src/app/productos/saas/ src/data/portfolio.ts
git commit -m "feat: crear landing de SaaS con modelo educativo"
```

---

### Task 11: Create SaaS detail page

**Goal:** Crear `/productos/saas/[slug]` con ficha de producto SaaS.

**Files:**
- Create: `src/app/productos/saas/[slug]/page.tsx`

**Acceptance Criteria:**
- [ ] Same structure as Soluciones detail page but for SaaS products
- [ ] generateStaticParams for saasProducts
- [ ] Badges show "SaaS" category
- [ ] CTA links to externalUrl

**Verify:** `npm run lint` → sin errores. Localhost:3005/productos/saas/iteralex → ficha completa.

**Steps:**

- [ ] **Step 1: Create the dynamic page**

Nearly identical structure to `/productos/soluciones/[slug]/page.tsx` but sources from `saasProducts`, uses cat-saas colors, and Breadcrumb shows "SaaS" as parent. Keep DRY: both detail pages import the same CaseStudy, Breadcrumb, PlatformViewer, GlowButton components.

- [ ] **Step 2: Verify and commit**

```bash
git add src/app/productos/saas/
git commit -m "feat: crear ficha de producto SaaS (/productos/saas/[slug])"
```

---

## Phase 5: Overview + Redirects

### Task 12: Create Products overview and configure redirects

**Goal:** Reemplazar `/productos/page.tsx` con overview de 3 categorías. Configurar redirects 301 de URLs viejas. Eliminar la ruta vieja `[slug]`.

**Files:**
- Modify: `src/app/productos/page.tsx` (rewrite)
- Modify: `next.config.ts` (add redirects)
- Delete: `src/app/productos/[slug]/page.tsx`

**Acceptance Criteria:**
- [ ] /productos muestra 3 CategoryCards con colores de categoría
- [ ] Hero centrado "Lo que construimos"
- [ ] Redirects 301: /productos/iteralex → /productos/saas/iteralex, etc.
- [ ] Old /productos/[slug] route removed
- [ ] No broken links in the site

**Verify:** `npm run lint` → sin errores. `curl -I localhost:3005/productos/iteralex` → 308 redirect. Localhost:3005/productos → 3 category cards.

**Steps:**

- [ ] **Step 1: Rewrite /productos/page.tsx**

Server component. Import CategoryCard, product counts from portfolio. Hero: centered title "Lo que construimos" with radial glow. 3-column grid of CategoryCards:
- Sitios Web (cat-web, websites.length count)
- Soluciones (cat-solutions, standaloneProducts.length count)
- SaaS (cat-saas, saasProducts.length count)

- [ ] **Step 2: Add redirects to next.config.ts**

```typescript
async redirects() {
  return [
    // Legacy routes
    { source: "/plataformas", destination: "/productos", permanent: true },
    { source: "/plataformas/:slug", destination: "/productos/:slug", permanent: true },
    { source: "/webs", destination: "/productos/sitios-web", permanent: true },
    // Product slug migrations
    { source: "/productos/iteralex", destination: "/productos/saas/iteralex", permanent: true },
    { source: "/productos/iteradesk", destination: "/productos/soluciones/iteradesk", permanent: true },
    { source: "/productos/iteralink", destination: "/productos/soluciones/iteralink", permanent: true },
    { source: "/productos/iterashop", destination: "/productos/soluciones/iterashop", permanent: true },
  ];
},
```

- [ ] **Step 3: Delete old [slug] route**

```bash
rm src/app/productos/\[slug\]/page.tsx
rmdir src/app/productos/\[slug\]
```

- [ ] **Step 4: Verify and commit**

Run: `npm run lint`
Test all redirects work. Test /productos shows overview.

```bash
git add src/app/productos/ next.config.ts
git commit -m "feat: overview de productos por categoría + redirects 301"
```

---

## Phase 6: Redesign Existing Pages

### Task 13: Redesign Home page showcase section

**Goal:** Adaptar la sección Showcase del home a la nueva estructura de 3 categorías.

**Files:**
- Modify: `src/components/option-2/sections/Showcase.tsx`

**Acceptance Criteria:**
- [ ] Muestra 1-2 productos destacados por categoría con colores correspondientes
- [ ] Links van a las landings de categoría (no a fichas individuales)
- [ ] Estilo visual actualizado al nuevo design system
- [ ] CTA "Ver todos los productos" → /productos

**Verify:** `npm run lint`. Localhost:3005 → Showcase muestra las 3 categorías.

**Steps:**

- [ ] **Step 1: Refactor Showcase data source**

Instead of filtering by screenshot existence, show curated items: 1 SaaS (IteraLex), 1 Standalone (IteraDesk), 1 Web demo (first featured or first with screenshot). Each section labeled with category color.

- [ ] **Step 2: Update visual styling**

Apply new tokens. Category color accents on badges and links.

- [ ] **Step 3: Verify and commit**

```bash
git add src/components/option-2/sections/Showcase.tsx
git commit -m "ui: adaptar Showcase del home a 3 categorías de productos"
```

---

### Task 14: Redesign Servicios page with interlinks

**Goal:** Rediseñar `/servicios` con interlinks a categorías de productos.

**Files:**
- Modify: `src/app/servicios/page.tsx`

**Acceptance Criteria:**
- [ ] Cada card de servicio incluye link "Mirá ejemplos →" a la categoría correspondiente
- [ ] Sitios & Tiendas Web → /productos/sitios-web
- [ ] Plataformas a medida → /productos/soluciones
- [ ] Soluciones con IA → /productos/saas
- [ ] Estilo visual actualizado al nuevo design system

**Verify:** `npm run lint`. Localhost:3005/servicios → links a categorías visibles.

**Steps:**

- [ ] **Step 1: Add interlinks to each service card**

Add a link at the bottom of each service card pointing to the relevant product category. Use category colors for the link text.

- [ ] **Step 2: Update visual styling**

Apply new tokens: darker backgrounds, glow borders, light-line separators.

- [ ] **Step 3: Verify and commit**

```bash
git add src/app/servicios/page.tsx
git commit -m "ui: rediseñar Servicios con interlinks a categorías de productos"
```

---

### Task 15: Redesign Sobre Nosotros and Contacto

**Goal:** Actualizar las páginas de Sobre Nosotros y Contacto al nuevo design system.

**Files:**
- Modify: `src/app/sobre-nosotros/page.tsx`
- Modify: `src/app/contacto/page.tsx`

**Acceptance Criteria:**
- [ ] Ambas páginas usan los nuevos tokens (negro puro, glow, etc.)
- [ ] Cards y secciones con efectos del design system
- [ ] Coherencia visual con el resto del sitio rediseñado

**Verify:** `npm run lint`. Verificar visualmente ambas páginas.

**Steps:**

- [ ] **Step 1: Update Sobre Nosotros**

Replace brown-tinted backgrounds with new tokens. Add glow effects to process cards and "Por qué ÍTERA" section. Add light-line separators between sections.

- [ ] **Step 2: Update Contacto**

Apply new tokens to the contact section. Update card styling with glow hover effects.

- [ ] **Step 3: Verify and commit**

```bash
git add src/app/sobre-nosotros/page.tsx src/app/contacto/page.tsx
git commit -m "ui: rediseñar Sobre nosotros y Contacto con nuevo design system"
```
