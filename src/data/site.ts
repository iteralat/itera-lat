/** Site-wide config: contact channels and navigation. */

export const siteConfig = {
  name: "ÍTERA",
  email: "hola@itera.lat",
  whatsappUrl: "https://wa.me/5492984394286",
  location: "Patagonia, Argentina",
} as const;

/** Top-level nav (besides the Servicios dropdown, which derives from pillars data). */
export const mainNav = [
  { name: "Productos", href: "/productos" },
  { name: "Casos", href: "/casos" },
  { name: "Nosotros", href: "/sobre-nosotros" },
] as const;
