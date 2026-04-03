# Estado Actual

> Memoria viva del proyecto. Se actualiza con `/save` al final de cada sesion.
> Mantener CONCISO (max 120 lineas).

---

## Sesion Actual

**Fecha**: 2026-04-03
**Trabajando en**: Refinamiento visual del hero (mockups, badges), dropdown de Productos, footer, y tarjetas del Showcase.

---

## Progreso por Modulo

| Modulo | Estado | Notas |
|--------|--------|-------|
| Design System | Completo | Negro puro #000000, .glass-card, sin colores de categoría |
| Header | Refinado | Dropdown hover continuo (pt-3 sin gap), alineado izquierda, "Ver todo" sutil |
| Footer | Refinado | Logo real (logo-itera.png), WhatsApp + email con íconos, columna Recursos |
| Data Model | Actualizado | IteraShop con screenshot real |
| Home Hero | Refinado | Mobile mockup oculto (sin screenshot), laptop a la derecha sobresaliendo, 1 badge "Patagonia → LATAM" |
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

- Mobile mockup oculto del hero (sin screenshot adecuado por ahora)
- Laptop mockup posicionado a la derecha sobresaliendo del desktop (desktop al 85%)
- Badge reducido a solo "Patagonia → LATAM" en cursiva, borde sutil, sin fondo
- Footer: logo real, WhatsApp agregado, columna Recursos
- Dropdown de Productos: hover continuo (pt-3), alineado izquierda, "Ver todo" sutil
- IteraShop con screenshot real en datos y priorizado en tarjeta Soluciones del home
- Hover scale en tarjetas Showcase reducido de 1.03 a 1.015

---

## Proxima Accion

- Seguir refinando visual del sitio según feedback del usuario
- Agregar screenshots faltantes (demos web, Itera Estudio)
- Reactivar mobile mockup del hero cuando haya screenshot de IteraLink
