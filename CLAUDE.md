# ÍTERA — Web Portfolio

Web informativa y portfolio de la agencia ÍTERA · itera.lat

> **Tier: Simple** — Next.js sin DB, sin auth, sin service layer. Datos estáticos en `src/data/`.

## Proceso

1. Planificar antes de codear: disenar pantallas/flujo UX. Implementar DESPUES de aprobacion.
2. Verificar en navegador: resultado verificable en `localhost:3005` al final de cada feature.
3. **Lint obligatorio**: correr `npm run lint` despues de terminar cambios y ANTES de commitear.
4. **Lint en Windows**: si `npm run lint` falla por paths con espacios -> fallback: `npx eslint src` directo.
5. Referencias en `.planning/` — STATE.md y GUARDRAILS.md en raiz.
6. **Mini-audit por archivo**: al terminar de escribir una page o componente -> verificar metadata y error boundaries.
7. **Tipos compartidos desde el primer uso**: al definir un `type` o `interface` -> si puede usarse en 2+ archivos -> crearlo en `src/lib/types/` desde el inicio. Si ya existe similar -> importar, NUNCA redefinir.
8. **Scripts de enforcement**: si existen `scripts/check-*.sh` -> ejecutar `bash scripts/check-all.sh` antes de commitear features que tocan 3+ archivos.

## Scopes de Commits

[ui | content | config | seo | deploy] — adaptar al proyecto

---

## Guardrails

> Errores conocidos del proyecto. Para indice completo: `.planning/GUARDRAILS.md`

### Checklists de Implementacion

#### Al crear/modificar una page:

- SIEMPRE `export const metadata` (estaticas) o `generateMetadata()` (dinamicas)
- Verificar que el route group tenga `error.tsx`
- Considerar `loading.tsx` si la page tiene queries pesadas

#### Antes de escribir una funcion de formateo/utilidad:

- Buscar si ya existe en `src/lib/utils/` -> NUNCA duplicar
- `toLocaleDateString()` inline en componentes = PROHIBIDO -> usar utils centrales

#### Al implementar un patron UI por 2da vez:

- PRIMERO grep componentes en `components/shared/` y `components/ui/`
- Si el patron ya existe 2+ veces inline -> extraer AHORA

---

### TypeScript / ESLint

- Despues de cambios -> `npm run lint`
- ANTES de usar campo/prop -> verificar que existe en schema/interface
- SIEMPRE `===` y `!==` -> NUNCA `==` o `!=`
- Evitar `as Type` en datos externos -> validar runtime si hay duda
- **Grep de directivas** (`'use client'`, `'use server'`) -> SIEMPRE buscar ambas variantes de comillas (`"use client"` y `'use client'`) -> conteos con una sola variante dan resultados incorrectos

---

### Next.js 16

- `searchParams`, `params`, `cookies()`, `headers()` -> TODAS son Promises -> await ANTES de usar
- Pages dinamicas (`[id]`, `[slug]`) -> SIEMPRE Server Component async -> NUNCA `useParams()`
- `next/image` CDN externo -> agregar a `images.remotePatterns` en next.config.ts
- Defensive parsing de API responses -> verificar `res.ok` PRIMERO -> solo setear state si estructura valida
- `serverExternalPackages` en next.config.ts para libs con bindings nativos (ssh2, bcrypt, etc)

---

### React 19

- Hydration mismatch con `window`/`Date.now()`/`Math.random()` -> useEffect + mounted + Skeleton
- Sincronizar props a state -> SIEMPRE en useEffect con deps, NUNCA en cuerpo del componente
- Elementos interactivos anidados (`<button>` dentro de `<button>`) -> hydration error
- `ref.current` en cuerpo del componente -> SOLO en effects o event handlers
- Orden de hooks en el componente: `useState`/`useRef` -> SIEMPRE declarar ANTES del `useEffect` que los usa -> `const` no tiene hoisting -> `Cannot access X before initialization` en runtime
- Context en componente compartido -> Hook tolerante que retorna `undefined` sin provider -> NUNCA hook que throwea si no hay provider
- Client state optimista con arrays -> `router.refresh()` + `useEffect(() => setState(props), [props])` -> NUNCA poblar con `[]` (no refresca desde SSR)

---

### UI / Tailwind v4

- CSS vars custom -> registrar en `@theme inline` de globals.css
- grid-cols arbitrario -> espacios NO comas: `grid-cols-[1fr_280px]`
- **`Button size="icon"` -> SIEMPRE `aria-label` descriptivo**
- `h-full` requiere cascada completa -> todos los padres deben tener `h-full`

---

### Seguridad

- Credenciales -> indicar "agregalo directo a .env.local" -> NUNCA pedir secrets en chat
- Datos demo -> SIEMPRE dentro de `if (process.env.NODE_ENV === 'development')`

---

### Performance

- Imagenes -> usar `next/image` con width/height o fill + sizes
- Componentes pesados (animaciones, mapas) -> `next/dynamic` con `ssr: false`

---

### Deploy / Docker / Coolify

- `.dockerignore` obligatorio -> excluir: node_modules, .git, .env*, .next, .planning
- Dockerfile multi-stage -> imagen de produccion SIN devDependencies
- **`ENV TZ=America/Argentina/Buenos_Aires`** obligatorio en Dockerfile runner stage

#### Coolify (self-hosted)

- Contexto: `modern` (VPS 65.108.148.79)
- Panel: coolify-modern.itera.world
- App UUID: `rtwcc35tbzzgfx3dp2hduod2`
- Proyecto UUID: `kg3u7ti6c0o5ey3v1n54nq70`
- CLI instalado: `coolify` -> usa contextos configurados en `%APPDATA%\coolify\config.json`
- Env vars: `coolify app env list <uuid> --context modern --format json -s`
- Agregar env: `coolify app env create <uuid> --context modern --key KEY --value "VAL"`
- Deploy: `coolify deploy app <uuid> --context modern` o push a master (auto-deploy via webhook)
- `NEXT_PUBLIC_*` vars requieren rebuild (se embeden en el bundle)

---

_Este archivo crece con el proyecto. Las reglas globales estan en `~/.claude/CLAUDE.md`._
