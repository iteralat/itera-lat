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

*Sin entradas todavia. Se agregan con `/save` cuando se detectan errores.*

---

## Flujo de escalacion

1. Error nuevo -> agregar aca con check preventivo
2. Error se repite (2da vez) -> promover a CLAUDE.md como bullet permanente
3. Marcar aca: "-> promovido a CLAUDE.md [fecha]"

Los checks promovidos a CLAUDE.md se aplican SIEMPRE. Los de aca son el primer filtro.
