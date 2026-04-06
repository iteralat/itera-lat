# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-04-06
**Trabajando en**: Refinamiento mobile del hero y menú de navegación.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Design System | Completo | Negro puro #000000, .glass-card, sin colores de categoría |
| Header | Refinado | Menú mobile con framer-motion, overlay fuera del header, productos simplificado |
| Footer | Refinado | Logo real (logo-itera.png), WhatsApp + email con íconos, columna Recursos |
| Data Model | Actualizado | IteraShop con screenshot real |
| Home Hero | Refinado | "evolucionan" sin cursiva + Poppins, título 2.5rem mobile, chip + botones compactos |
| Home Showcase | Refinado | IteraShop en tarjeta Soluciones, hover scale reducido (1.015) |
| Productos overview | Completo | /productos con 3 CategoryCards |
| Sitios Web | Completo | /productos/sitios-web + galería + [slug] para featured |
| Soluciones | Completo | /productos/soluciones + [slug] fichas, IteraShop con screenshot |
| SaaS | Completo | /productos/saas + [slug] fichas |
| Servicios | Actualizado | Interlinks a categorías, design system nuevo |
| Sobre Nosotros / Contacto | Actualizado | Tokens nuevos aplicados |

---

## Estructura de Productos

```
/productos              → Overview de 3 categorías
/productos/sitios-web   → Galería filtrable de demos web
/productos/soluciones   → IteraDesk, IteraLink, IteraShop
/productos/saas         → IteraLex, Itera Estudio
```

---

## Deploy Info

| Key | Value |
|-----|-------|
| Contexto Coolify | modern |
| App UUID | rtwcc35tbzzgfx3dp2hduod2 |
| Dominio | https://itera.lat |
| Google Analytics 4 | G-YDVG0CNQQN |

---

## Bloqueadores

1. **Screenshots faltantes** — Itera Estudio sin screenshot. 9 de 14 web demos sin screenshot.
2. **Contenido caseStudy** — Textos de problema/solución/resultado pendientes para cada producto.
3. **Mobile mockup del hero** — Oculto hasta tener screenshot de IteraLink u otro producto.

---

## Decisiones Recientes

- "evolucionan" sin cursiva, font-family Poppins explícito (heredado del layout)
- Título hero mobile más grande (text-[2.5rem] vs text-4xl)
- Chip "Agencia de desarrollo" reducido en mobile (text-xs, padding menor)
- GlowButton más compacto en mobile (px-6 py-2.5 text-sm)
- Párrafo hero: sin br forzado, opacidad subida a white/70
- Menú mobile: overlay movido fuera del header (backdrop-blur rompe fixed)
- Menú mobile: botón toggle también fuera del header (z-[60] sobre overlay z-[55])
- Productos mobile: solo títulos centrados sin descripciones
- Animaciones framer-motion en menú mobile: fade+slide stagger, chevron animado

---

## Proxima Accion

- Seguir refinando visual del sitio según feedback del usuario
- Agregar screenshots faltantes (demos web, Itera Estudio)
- Reactivar mobile mockup del hero cuando haya screenshot de IteraLink
