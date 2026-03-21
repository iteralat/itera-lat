# Guardrails

> Checks preventivos para evitar errores conocidos.
> Se lee con cada `/load`. Debe ser CONCISO y ACCIONABLE.
> Si un error se repite (aparece 2+ veces aca) -> promover a CLAUDE.md como regla permanente.

---

## Stack del Proyecto

| Tecnologia | Version |
|------------|---------|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind | 4 |
| Framer Motion | latest |

---

## Errores Conocidos

### Verificar qué ruta/versión está mirando el usuario antes de editar

**Problema**: Se editó `src/components/sections/Hero.tsx` (home principal) durante 5+ intentos mientras el usuario estaba viendo `/option-2` que usa `src/components/option-2/sections/Hero.tsx`. Los cambios nunca se reflejaban.
**Check preventivo**: Antes de editar un componente, confirmar qué ruta está viendo el usuario y verificar qué componente usa esa ruta (leer el `page.tsx` correspondiente).
**Fecha**: 2026-03-21

### Tailwind v4 interpola gradientes en oklab por defecto

**Problema**: `bg-gradient-to-r from-primary to-primary-soft` interpolaba en oklab, desaturando el naranja hacia blanco en el medio de la palabra "evolucionan".
**Check preventivo**: Para gradientes de texto que deben mantener saturación, usar `style={{ backgroundImage: "linear-gradient(...)" }}` con CSS inline en lugar de clases de Tailwind.
**Fecha**: 2026-03-21

### Colores de fondo: mantener paleta cálida (manual de marca)

**Problema**: Se usó `#101118` (tono azulado/frío/stale) como background, violando la paleta de marca que indica tonos cálidos oscuros.
**Check preventivo**: Background oscuro debe ser cálido (`#0f0e0c` o similar). Nunca tonos azulados/fríos para fondos base.
**Fecha**: 2026-03-21

---

## Flujo de escalacion

1. Error nuevo -> agregar aca con check preventivo
2. Error se repite (2da vez) -> promover a CLAUDE.md como bullet permanente
3. Marcar aca: "-> promovido a CLAUDE.md [fecha]"

Los checks promovidos a CLAUDE.md se aplican SIEMPRE. Los de aca son el primer filtro.
