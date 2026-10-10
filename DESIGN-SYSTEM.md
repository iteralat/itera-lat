# Design System — itera.lat

> Fase 1 (Fundación) del rediseño. Spec: `.planning/2026-07-11-landing-redesign-spec.md`.
> Doctrina madre: `~/projects/itera-core/guides/guia-de-diseno-itera.md` + `guia-de-motion-y-transiciones.md`.
> Verificación visual: `http://localhost:3005/laboratorio` (solo dev; 404 en producción).

**Regla de oro: NADA hardcodeado.** Todo color, sombra, duración, radio y tamaño sale de los tokens de `src/app/globals.css`. Cero hex, cero `duration-300` suelto, cero colores crudos de Tailwind (`text-emerald-500`) en componentes nuevos.

---

## 1. Color por rol semántico

Identidad: **negro puro + naranja ÍTERA `#FF5E14` como único acento** (el de la flecha del isotipo — canon en `itera-context/marca/manual-de-marca.md`). Sin colores de categoría (no verdes/violetas/azules). Todo se diferencia con contenido, layout y jerarquía.

> Nota: la Fase 1 arrancó con rojo `#F21B10`; se corrigió a naranja de marca porque los tints de rojo sobre negro leían "bordó". Los tokens absorben el cambio: nada más que `--primary`/`--primary-soft` se tocó.

### Escalera de superficies (dark-only)

| Utilidad | Token | Valor | Uso |
|---|---|---|---|
| `bg-background` | `--bg` | `#000000` | canvas del sitio |
| `bg-chrome` | `--chrome` | `#050505` | header / nav / footer |
| `bg-surface-1` | `--surface-1` | `#0a0a0a` | card en reposo |
| `bg-surface-2` | `--surface-2` | `#111111` | raised: hover, popover, fields |
| `bg-surface-3` | `--surface-3` | `#181818` | highlight: item activo, hover 2° |
| `bg-track` | `--track` | `#030303` | superficies hundidas |

Superficies **sólidas** (sin alpha) y **SIN borde de contorno** — ver §2.

### Texto (3 roles — no usar grises sueltos)

| Utilidad | Uso |
|---|---|
| `text-foreground` | texto principal (`#ffffff`) |
| `text-muted-foreground` | secundario (`#a3a3a3`) |
| `text-faint` | terciario / meta (`#6f6f6f`) |

### Acento

| Utilidad | Uso |
|---|---|
| `bg-primary` / `text-primary` | fill / texto acento. El acento es CARO: **un elemento sólido por vista** |
| `bg-primary-soft` | extremo claro del gradiente brand (`#FF8A3D`) |
| `text-primary-fg` | texto SOBRE fills del acento (blanco) |
| `text-primary-text` | ink legible para texto acento chico sobre negro (más claro que `primary`) |
| `bg-primary-tint` | lavado 12% — hovers, insignias, tints |
| `bg-primary-hover` | hover de fills primarios |

Gradiente brand permitido: **solo `primary → primary-soft`** (`bg-linear-to-r from-primary to-primary-soft`, o `.texto-gradiente-brand` para texto). Para ambientar fondos de hero/CTA existe `fondo-brillo-brand` (radial del tint, nunca compite con el glow del CTA).

### Líneas legítimas

- `linea-divisoria` (utilidad propia) — hairline SOLO para separar contenido DENTRO de una card. Nunca `border-t` / `<hr>`.
- `border-border` / `border-border-strong` — SOLO inputs y controles de formulario.
- **PROHIBIDO** el borde claro alrededor de cards/paneles (look shadcn default).

## 2. Elevación — 5 niveles, sin bordes

El despegue de una superficie = **escalón de lightness + sombra + inset top highlight** (la primera capa `inset 0 1px 0 rgba(255,255,255,.05)` es la firma del sistema — no se saca).

| Utilidad | Uso |
|---|---|
| `shadow-elevation-subtle` | elemento chico apoyado: chips, inputs raised |
| `shadow-elevation-soft` | "papel apoyado": nav, KPIs |
| `shadow-elevation-1` | card en reposo |
| `shadow-elevation-2` | card hover, popover, dropdown |
| `shadow-elevation-3` | dialog, sheet, modal |
| `shadow-button-lift` | botones filled |
| `shadow-track-inset` | superficies hundidas |
| `shadow-glow-cta` / `shadow-glow-cta-hover` | glow del CTA — **UN elemento vivo por vista** |
| `shadow-glow-soft` | ring de marca + difusión para tintar una card |

## 3. Tipografía fluida

Escala corta y cerrada, con `clamp()` (laptop → 4K). Line-height y letter-spacing vienen horneados en cada token — no ajustar a mano.

| Utilidad | Rol | Fuente |
|---|---|---|
| `text-display` | hero H1 | `font-display` (Poppins) |
| `text-title` | H2 de sección | `font-display` |
| `text-heading` | H3 / título de card | `font-display` |
| `text-lead` | párrafo destacado bajo títulos | sans |
| `text-body` | cuerpo | sans (Inter, default) |
| `text-small` | secundario, labels de control | sans |
| `text-meta` | metadata, captions | sans |
| `text-eyebrow` | kickers (usar con `uppercase`) | sans |

## 4. Espaciado, anchos y radios

| Utilidad | Uso |
|---|---|
| `py-section` / `py-section-sm` | ritmo vertical de secciones (fluido) |
| `gap-block` / `mt-block` | separación entre bloques dentro de una sección |
| `px-page-pad` | padding horizontal de página (fluido) |
| `max-w-page` (72rem) / `max-w-wide` (85rem) / `max-w-prose` (42rem) | anchos de contenido |
| `h-control-sm/md/lg` (2.25 / 2.75 / 3.25rem) | alturas de control — **fijas, sin clamp** (la ergonomía de click no varía con el viewport) |
| `rounded-control` | botones, inputs, chips cuadrados |
| `rounded-card` | superficies |

Para todo lo demás: la escala de spacing estándar de Tailwind (`p-6`, `gap-4`…) ES parte del sistema.

## 5. Motion

Canon cerrado: **≤300ms, ease-out, sin bounce**. La salida es tan obligatoria como la entrada — nunca cortes secos.

| Token / utilidad | Valor | Uso |
|---|---|---|
| `duracion-fast` | 120ms | micro-feedback: hover color, tints |
| (default) | 180ms | `transition-*` sin `duration-*` ya usa base + ease-out |
| `duracion-moderate` | 220ms | layout: collapse/reveal, salidas |
| `duracion-slow` | 300ms | TECHO (drawer/sheet) |
| `animate-aparece` | 180ms | entra sin agregar altura (translateY -4px + fade) |
| `animate-despliega` / `animate-repliega` | 220ms | abre/cierra espacio (grid-rows 0fr↔1fr; el hijo lleva `min-h-0 overflow-hidden`) |
| `.revela-al-scroll` | — | reveal on scroll CSS scroll-driven; fallback visible sin animación |

- **Reduced-motion self-zeroing**: `prefers-reduced-motion` lleva las 4 duraciones a `0ms` en `:root` → todo consumidor de tokens queda instantáneo sin tocar componentes. Keyframes sueltos: agregar `motion-reduce:animate-none`.
- Animar solo `transform`/`opacity` (+ color/box-shadow por propiedad específica). Nunca `all`, nunca width/height/top.
- framer-motion solo donde CSS no alcanza; **no mezclar** framer con transform CSS en el mismo elemento (hover scale va en `whileHover` si motion controla el elemento).

## 6. Foco y accesibilidad

- Foco global token-driven: `:focus-visible` → `outline: 2px solid var(--primary)` + offset 2px. Nunca `outline:none` sin reemplazo.
- Semántica nativa: `<button>` acción / `<a>` navegación (el `Boton` lo resuelve solo). `aria-label` en icon-only, `aria-hidden` en decorativos.
- Nombres accesibles en español = texto de UI = locator E2E.

## 7. Primitivas (en español)

Viven en `src/components/primitivas/`. **Prohibido HTML suelto para algo que ya tiene primitiva.** Si un patrón se repite 2+ veces inline, se extrae AHORA.

```tsx
import { Boton, Superficie, Insignia, Seccion } from "@/components/primitivas";
```

### `Boton`

- `variante`: `primario` · `gradiente` (CTA especial con glow — UNO por vista, no repite al primario) · `secundario` · `fantasma`
- `tamano`: `sm` · `md` (default) · `lg`
- Con `href` renderiza `<Link>`; sin `href`, `<button type="button">`.

### `Superficie`

- `nivel`: `1` (card reposo) · `2` (raised) · `3` (highlight)
- `interactiva`: hover sube un escalón de superficie + elevación con lift sutil
- `relleno`: `normal` (p-6) · `amplio` · `ninguno`
- `como`: etiqueta semántica (`article`, `li`, …)

### `Insignia`

- `tono`: `neutro` · `primario`. UN solo tamaño en todo el sitio; siempre inline junto a su título.

### `Seccion`

- `ancho`: `normal` · `amplio` · `completo` · `ritmo`: `normal` · `compacto`
- Dueña del ritmo vertical y el ancho. Las páginas se arman apilando `Seccion`.

**Jerarquía**: token → primitiva → composición → sección de página. Las páginas solo usan composiciones registradas.

### Composiciones registradas (`src/components/composiciones/`)

| Composición | Uso |
|---|---|
| `PortadaHero` | hero: globo digital de fondo + promesa centrada + panel de producto asomando |
| `EsferaDigital` | fondo del hero: globo de puntos rotando + estrellas (canvas 2D, tokens, reduced-motion → estático) |
| `EncabezadoSeccion` | título + lead (+ eyebrow de texto plano opcional, sin chip) |
| `SelectorPilares` | pestañas de servicios numeradas (cambio SOLO por click/flechas) + preview del pilar sin card contenedora |
| `TrioDispositivos` | preview del pilar Webs: desktop centro + tablet derecha + mobile izquierda, pantallas placeholder |
| `PantallaSistema` | pantalla en marco de navegador + rótulo: screenshot real o mock registrado |
| `CintaPantallas` | marquesina full-bleed de pantallas (patrón carrusel raves): loop CSS infinito, pausa en hover, reduced-motion la apaga |
| `MarcoNavegador` | marco chrome (puntos + dirección) para toda pantalla presentada |
| `mocks/*` (`MOCKS_PANTALLA`) | pantallas JSX inventadas coherentes con la marca: panel-gestion, web-corporativa, copiloto, auditoria, agenda-juridica, turnos, reparto |
| `TarjetaProducto` | producto propio como card individual (se usa en /productos, no en la home) |
| `BannerProductos` | franja de credibilidad: los 4 SaaS en un solo banner → /productos |
| `TarjetaDiferencial` | diferencial numerado de "Cómo trabajamos" (sin card) |
| `TarjetaCaso` | caso destacado: texto + resultados + derivación a /casos |
| `BloqueCTA` | banner de contacto (CTA gradiente + secundario) |

Contenido SIEMPRE desde `src/data/` (tipado en `src/lib/types/content.ts`): las composiciones reciben datos por props, nunca hardcodean copy. **Todo copy pasa por los guardrails de voz del `CLAUDE.md` del repo (frases baneadas, headlines literales).**

## 8. Anti-slop (resumen operativo)

- Nada de glassmorphism genérico, bordes grises de 1px, emojis como iconografía, ni stock.
- **UN botón primario por vista**; `gradiente` es el CTA especial y no repite al primario.
- Un badge nunca ocupa media fila; chips `nowrap`, un solo tamaño.
- Usar el espacio: nada de filas muertas con un elemento solitario.
- La acción nunca pesa más que el dato.

## 9. Legacy y deuda declarada

Fase 2 borró `option-2`, `ui/Button.tsx`, `.glass-card` y ejecutó la **purga de paleta**: `@theme { --color-*: initial }` mata TODA la paleta cruda de Tailwind — `text-emerald-500` & cía. ya no compilan. Queda un solo bloque de deuda, **COMPAT FASE 4**, para las pages viejas que sobreviven hasta la reescritura de /productos, /casos, /sobre-nosotros y /contacto:

- Aliases `--color-muted`/`--color-elevated` + shades crudas re-registradas (`white`, `black`, `zinc-800/900`, `green-400/500`, `red-500`, `yellow-500`, `orange-400..700`, `amber-400/500`) en `globals.css` (`@theme inline`, bloque marcado).
- `.dot-grid` y `.animate-fade-in-up` al final de `globals.css`.
- `src/components/shared/GlowButton.tsx` y `src/components/shared/FadeIn.tsx`.

**Nada de ese bloque se usa en código nuevo.** Al cerrar Fase 4: borrar el bloque COMPAT completo (CSS + componentes) y verificar con build que ninguna page lo pide.

## 10. Checklist de cierre de cualquier UI nueva

- [ ] ¿Cero hex/duraciones/valores crudos? ¿Todo sale de tokens?
- [ ] ¿Superficies sin borde (escalón + sombra + inset)? ¿Divider solo interno?
- [ ] ¿Todo lo repetido salió de una primitiva/composición?
- [ ] ¿Estados completos (hover/active/focus-visible/disabled) + microinteracción con salida?
- [ ] ¿Motion por token + reduced-motion respetado?
- [ ] ¿Nombres accesibles en español?
- [ ] `pnpm lint` limpio.
