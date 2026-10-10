# Spec — Rediseño completo itera.lat

> Fecha: 2026-07-11 · Estado: aprobado por Pachu (sesión de brainstorming)
> Propósito: handoff repetible para ejecutar/iterar el rebuild con distintos modelos/sesiones.
> Este doc es la fuente de verdad del rediseño. Si algo contradice al código actual, gana este doc.

---

## 1. Contexto y objetivo

- **itera.lat** es la web corporativa/marketing de ÍTERA (agencia solo-dev + IA, Argentina/LatAm).
- **Objetivo #1**: generar leads de servicios (WhatsApp/contacto). **Objetivo #2**: credibilidad y derivación a los SaaS propios.
- El sitio actual (componentes `option-2`) no convence visualmente → **rebuild desde cero**, conservando solo infra (layout raíz, SEO plumbing, analytics, config, robots/sitemap/manifest).
- El sitio además funciona como **implementación de referencia**: de acá se destila un checklist de buenas prácticas para futuros proyectos web de clientes.

### Qué ofrece ÍTERA (y qué NO)

Solo servicios que impliquen **escribir código o preparar infraestructura**. DESCARTADOS como oferta pública: diseño suelto, branding, videos de producto, producción audiovisual, cualquier servicio no escalable. No listar nunca esos como servicio.

---

## 2. Los 4 pilares + productos

Puertas comerciales públicas (cada una es página propia y namespace expandible):

1. **Webs** (`/webs`) — corporativas/institucionales, landings de servicios, catálogos, portfolio. **Diferencial estándar: toda web incluye panel autogestionable.** Todo incluido: diseño, dominio, hosting, deploy, soporte. Puerta de entrada del "cliente común", volumen del portfolio.
2. **Sistemas a medida** (`/sistemas`) — CRMs, gestión, cotizadores, inventario, logística de reparto, portales internos, verticales por rubro. Ticket alto. Caso validado: CRM Alquímica + Bambú (multi-empresa, en producción).
3. **IA para tu negocio** (`/ia`) — chatbots con RAG sobre el contenido del negocio, copilots sobre los datos del cliente, automatizaciones (clasificación de mails/documentos, extracción de datos de PDFs, transcripción y destilado de audio/video), integración de IA en sistemas existentes del cliente.
4. **Consultoría & rescate** (`/consultoria`) — auditorías técnicas (seguridad, performance, SEO, accesibilidad, UX), rescate de proyectos vibe-codeados ("hiciste algo con IA y se te fue de las manos"), partner técnico / CTO fraccional para no-técnicos.

**Productos** (`/productos`) — NO es pilar de servicio; es sección de credibilidad/derivación: Shopear (tienda sin comisiones WhatsApp-first), ÍTERA Lex (gestión jurídica), Linkea2 (link-in-bio pro), Itera Estudio (assets IA). Cada uno deriva a su propio sitio.

**Fase 2 (fuera de este build, pero la estructura debe soportarla):** `/paquetes` (sección semi-privada para propuestas/ads con combos productizados y precios), contenido editorial de autoridad. **Fase 3:** landings por rubro `/para/[rubro]`.

---

## 3. Mapa del sitio

```
/                      Home
/webs                  Pilar 1
/sistemas              Pilar 2
/ia                    Pilar 3
/consultoria           Pilar 4
/productos             SaaS propios
/casos                 Índice de casos de estudio
/casos/[slug]          Caso individual (screenshots REALES, bien producidos)
/sobre-nosotros        Método, IA + criterio senior, guardrails
/contacto              CTA primario: WhatsApp
```

**Principio rector: cabeza de expansión.** Cada pilar es un namespace URL: `/webs/institucionales`, `/sistemas/crm`, `/ia/chatbots`, `/consultoria/rescate` deben poder nacer después sin romper nada (layouts por segmento, breadcrumbs, sitemap dinámico desde datos).

**Navegación**: Servicios (dropdown 4 pilares) · Productos · Casos · Nosotros · CTA Contacto. Footer completo con todas las rutas.

---

## 4. Design system tokenizado (Fase 1, entregable en sí)

**Canon obligatorio**: `~/projects/itera-core/guides/guia-de-diseno-itera.md` (superficies SIN borde: escalón de lightness + sombra + inset top highlight; escalera bg→chrome→surface-1..3; elevación 5 niveles; motion 120/180/220/300ms + ease-out; anti-slop; lab-first). Motion: `~/projects/itera-core/guides/guia-de-motion-y-transiciones.md`.

- Vive en `globals.css` bajo `@theme` (Tailwind v4). **Única fuente de estilo: NADA hardcodeado, cero hex/duration/spacing suelto en componentes.**
- **Identidad**: negro puro `#000000` (bg), `#050505` (muted), `#0a0a0a` (elevated), acento único `--primary #F21B10` / `--primary-soft #FF5421`. SIN colores de categoría (no verdes/violetas/azules); gradientes brand solo primary→primary-soft.
- **Ejes de tokens**: color por rol semántico (`--bg`, `--chrome`, `--surface-1/2/3`, `--text-primary/muted/faint`, `--primary`, `--primary-soft`) · elevación 5 niveles (sombra + inset highlight, sin bordes) · tipografía fluida con `clamp()` (display/heading/body — escala laptop→4K) · espaciado y radios (escala corta cerrada) · motion (duraciones + easing tokenizados, `prefers-reduced-motion` self-zeroing a nivel sistema).
- **Capa de componentes EN ESPAÑOL** (primitivas y composiciones propias): primitivas (`Boton`, `Superficie`, `Insignia`, `Seccion`) → composiciones (`TarjetaPilar`, `VitrinaMock`, `BloqueCTA`, `FilaCaso`, `PasoProceso`, `PreguntaFrecuente`) → secciones de página. Las páginas se arman SOLO con composiciones registradas, nada inline.
- Documentar en `DESIGN-SYSTEM.md` del repo (tokens, doctrina, cómo agregar componentes) — semilla del checklist replicable.

### Dirección visual

**Moderno, vanguardista, interactivo, con microinteracciones — usando el poder de CSS para interfaces bien pulidas.** Concretamente:

- Microinteracciones en todo elemento interactivo: hover states con elevación/glow sutil del primary, transiciones tokenizadas, nunca cortes secos.
- Scroll-driven reveals (`FadeIn` / stagger de tarjetas) discretos — 150–220ms ease-out, no circo.
- CSS avanzado bienvenido donde suma pulido: gradientes con `color-mix()`, masks, inset highlights, `@property` para animar gradientes, scroll-driven animations CSS donde el soporte lo permita con fallback.
- framer-motion solo donde CSS no alcanza; **no mezclar** motion de framer con transform CSS en el mismo elemento (hover scale va en `whileHover` si motion controla el elemento).
- Anti-slop: nada de glassmorphism genérico, sin bordes de 1px grises, sin emojis como iconografía, sin stock. La identidad es negro profundo + rojo + tipografía fuerte + superficies con luz.
- Componentes pesados → `next/dynamic`; respetar `prefers-reduced-motion` siempre.

---

## 5. Home (7 secciones, en orden)

1. **Hero** — promesa central única ("construimos el software de tu negocio: web, sistema o IA" — copy final a redactar en build). CTA primario WhatsApp/contacto + secundario "ver servicios". Presencia visual: mock destacado o composición abstracta del design system. NO stock.
2. **Las 4 puertas** — grilla de `TarjetaPilar`: nombre, para quién, 3 ítems concretos, mini-mock, link. Corazón de la home.
3. **Vitrina visual** — grilla/carrusel de mocks del UI-Lab por rubro (dashboard jurídico, tienda, panel gastronómico, distribución…). Mensaje: "interfaces de nivel producto, en tu rubro".
4. **Productos propios** — franja de credibilidad: "construimos y operamos nuestros propios SaaS" + Shopear/Lex/Linkea2 → `/productos`.
5. **Cómo trabajamos** — 3-4 diferenciales honestos: desarrollo con IA + criterio senior; todo incluido (dominio/hosting/soporte); sin comisiones ni lock-in; el código y los datos son del cliente.
6. **Caso destacado** — UN caso bien producido → `/casos`.
7. **CTA final** — banner de contacto.

---

## 6. Template de página de pilar (compartido por las 4)

1. Hero del pilar — dolor + promesa en lenguaje del cliente (ej. sistemas: "Tu operación no entra más en Excel y WhatsApp").
2. Qué incluye — subservicios como tarjetas (cada tarjeta = futura subpágina del namespace).
3. Mocks protagonistas — 2-3 pantallas del UI-Lab del mundo del pilar, grandes, con captions de features.
4. Cómo es trabajar con ÍTERA — proceso 3-4 pasos (relevamiento → propuesta → build → entrega con soporte).
5. Qué está incluido siempre — diseño, dominio, hosting, deploy, panel autogestionable (en webs), soporte.
6. FAQ del pilar — 4-6 preguntas, con JSON-LD FAQPage.
7. CTA con contexto del pilar.

---

## 7. Arquitectura de datos y mocks

- **Todo el contenido** (pilares, subservicios, mocks, casos, FAQs, diferenciales) en `src/data/` (ej. `src/data/pilares/webs.ts`), tipado con tipos compartidos en `src/lib/types/`. Agregar subservicio/caso/mock = tocar solo datos.
- **Mocks**: se producen en el UI-Lab (`@itera/ui-lab`, repo itera-social, skill `concept-to-screen`) y entran al sitio como **imágenes estáticas optimizadas** (`next/image`, width/height o fill+sizes) — NO como React vivo. Flujo paralelo e independiente del build del sitio; usar placeholders donde falten.
- **Screenshots reales** (productos propios / clientes) SOLO en `/casos`, bien producidos.
- Rotulado honesto de mocks: "interfaces de nuestros sistemas", sin atribuirlas a clientes.

---

## 8. SEO y calidad (el sitio como referencia)

- `export const metadata` en toda page estática, `generateMetadata()` en dinámicas; OG por página.
- JSON-LD: Organization (layout), Service (cada pilar), FAQPage (FAQs), Article/CaseStudy (casos). Ya existe `JsonLd.tsx` como base.
- Sitemap/robots regenerados desde las rutas nuevas (idealmente desde `src/data/`).
- Core Web Vitals como gate: imágenes optimizadas, `next/dynamic` para pesado, sin layout shift.
- Accesibilidad estructural: landmarks (header/nav/main/footer), focus visible tokenizado, aria-label en icon buttons, headings ordenados.
- `error.tsx` por route group; `pnpm lint` limpio antes de cada commit.

---

## 9. Fases de ejecución

1. **Fundación** — design system tokenizado en `globals.css` + primitivas en español + `DESIGN-SYSTEM.md`. Borrar `option-2` recién cuando la home nueva lo reemplace.
2. **Home** — 7 secciones (mocks placeholder si faltan).
3. **Pilares** — template compartido + 4 páginas con contenido en `src/data/`.
4. **Productos + Casos + Nosotros + Contacto** — reescritura sobre el sistema nuevo.
5. **SEO/calidad final** — JSON-LD, sitemap, audit performance + a11y.

Cada fase: verificable en `localhost:3005`, lint limpio, commit por fase (scopes: ui|content|config|seo).

---

## 10. Reglas de trabajo (para cualquier modelo/sesión que ejecute esto)

- Repo: `~/projects/saas/itera-lat` · Next.js 16 + Tailwind v4 + TS · pnpm SIEMPRE.
- Respetar `CLAUDE.md` del repo (guardrails Next 16 / React 19 / Tailwind) y el global.
- NO crear branches; trabajar en `master`. Commitear solo cuando Pachu lo pida.
- Idioma: UI y contenido en español rioplatense; código/tipos en inglés; componentes propios del design system en español.
- Antes de codear una fase: leer este spec + `guia-de-diseno-itera.md` + `guia-de-motion-y-transiciones.md`.
- Nada hardcodeado: todo estilo sale de tokens. Todo contenido sale de `src/data/`.
