---
description: 'Chequeo de calidad adaptativo. Detecta que cambio y ejecuta solo los checks relevantes.'
model: 'sonnet'
---

# Check - Auditoria de Calidad Adaptativa

Chequeo inteligente que analiza que cambio en la sesion y ejecuta SOLO los checks relevantes.

## Cuando usar /check

### SI ejecutar

- Despues de implementar una feature (3+ archivos tocados)
- Antes de `/save` si hubo cambios de codigo significativos
- Cuando se replico un patron de otro modulo

### NO ejecutar (ahorro de tokens)

- Cambios solo en docs/planning/changelog
- Fix de 1-2 lineas obvio (typo, import faltante)
- Cambios solo de estilos CSS/Tailwind sin logica
- Despues de `/load` sin haber codeado

---

## Paso 1: Detectar alcance de cambios

```bash
git diff --name-only HEAD 2>/dev/null || git diff --name-only --cached
```

Si no hay diff (ya commiteado), usar:

```bash
git diff --name-only HEAD~1..HEAD
```

Clasificar cada archivo en categorias:

| Categoria | Patron de archivo |
| --------- | -------------------------------------------- |
| `ui` | `src/app/**/*.tsx`, `src/components/**/*.tsx` |
| `data` | `src/data/*.ts` |
| `util` | `src/lib/utils/*.ts` |
| `config` | `next.config.*`, `globals.css`, `.env*` |
| `docs` | `.planning/*`, `*.md` |

**Si TODOS los archivos son `docs` o `config` -> reportar "Sin checks de codigo necesarios" y TERMINAR.**

---

## Paso 2: Seleccionar checks segun categorias

### Check D: DRY de componentes (si `ui`)

En componentes modificados, buscar:

1. **Codigo copiado**: Patron que ya existe en `src/components/shared/`?
2. **Formateo local**: Funciones inline en vez de `src/lib/utils/`
3. **Patron repetido**: Mismo bloque aparece 2+ veces en archivos distintos

### Check G: React/Next.js (si `ui`)

En componentes modificados:

- `useParams()` en page dinamica -> debe ser Server Component con props
- Elementos interactivos anidados (`<button>` dentro de `<button>`)
- `as Type` sin validacion runtime
- `Button size="icon"` sin `aria-label`

### Check H: Lint (si cualquier archivo `.ts` o `.tsx`)

```bash
npx eslint src --quiet 2>/dev/null | head -50
```

**SIEMPRE correr si hubo cambios de codigo.**

### Check J: Scaffold y enforcement

Ejecutar los scripts de verificacion si existen:

```bash
bash scripts/check-all.sh 2>/dev/null
```

Si no existen los scripts, verificar manualmente:

1. **Pages sin metadata**: `src/app/**/page.tsx` publicas → deben tener `metadata` o `generateMetadata`

---

## Paso 3: Reporte

```markdown
## /check — Resultado

**Archivos analizados**: [N] ([categorias detectadas])
**Checks ejecutados**: [lista de checks que aplicaron]
**Checks omitidos**: [lista de checks que no aplicaron y por que]

### Hallazgos

#### [Severidad] Check [X]: [Nombre]

- **Archivo**: `path/to/file.ts:NN`
- **Problema**: [descripcion concisa]
- **Fix**: [que hacer]

### Resumen

| Severidad    | Cantidad               |
| ------------ | ---------------------- |
| Critico      | N                      |
| Warning      | N                      |
| OK           | N checks sin problemas |

[Si hay criticos]: **Corregir antes de commitear.**
[Si solo warnings]: **Considerar corregir. Ninguno es bloqueante.**
[Si todo OK]: **Codigo limpio. Listo para commit.**
```

---

## Paso 4: Fix automatico (opcional)

**Si hay hallazgos criticos**, preguntar:

> Corrijo los [N] problemas criticos ahora?

**NUNCA corregir automaticamente sin preguntar.**

---

## Reglas

- **LEER los archivos modificados** antes de reportar — no adivinar por nombre
- **NO reportar falsos positivos** — verificar cada hallazgo leyendo el codigo real
- **NO sugerir mejoras no pedidas** — solo reportar problemas de los checks definidos
- **Ser conciso** — una linea por hallazgo, no parrafos explicativos
