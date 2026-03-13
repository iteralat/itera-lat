# Changelog

Historial completo de sesiones. Se acumula con cada `/save`.

---

## [13 Mar 2026] - Adopcion sistema ITERA

### Que se hizo
- Creado CLAUDE.md tier Simple adaptado al proyecto
- Creados commands: /load, /save, /check, /commit
- Creado .planning/ con STATE, GUARDRAILS, CHANGELOG
- Creados scripts de enforcement (check-all, check-page-metadata)
- Migrado STATE.md de raiz a .planning/

### Archivos clave
- `CLAUDE.md` - reglas del proyecto
- `.claude/commands/` - flujos /load, /save, /check, /commit
- `.planning/` - estado, guardrails, changelog

### Decisiones
- Tier Simple: sin secciones de Prisma, Zod, BetterAuth, multi-tenant
- Scripts adaptados: solo check-page-metadata y check-scaffold aplican

---
