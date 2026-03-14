// --- TIPOS DISCRIMINADOS ---

export interface WebItem {
  id: string;
  type: "website";
  name: string;
  niche: string;
  location?: string;
  description: string;
  url?: string;
  screenshot: string;
  screenshotMobile: string;
  tags: string[];
  featured?: boolean;
}

export interface PlatformItem {
  id: string;
  type: "platform";
  productName: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  status: string;
  screenshot: string;
  screenshots?: string[];
  adopters: { name: string; url?: string }[];
  caseStudySlug?: string;
}

export interface ToolItem {
  id: string;
  type: "tool";
  name: string;
  description: string;
  screenshot: string;
  tags: string[];
  license: string;
  audience: string;
  highlights: string[];
  status: string;
  externalUrl: string;
}

export type PortfolioItem = WebItem | PlatformItem | ToolItem;

// --- DATOS ---

export const websites: WebItem[] = [
  {
    id: "cerro-solar",
    type: "website",
    name: "Cerro Solar",
    niche: "Turismo & Hospitalidad",
    location: "Patagonia, Argentina",
    description: "Sitio web inmersivo para un complejo de domos ecológicos. Motor de reservas propio, integración de pagos y portal de autogestión.",
    url: "https://demo.itera.lat/cerrosolar",
    screenshot: "/images/portfolio/screenshot-cerro-solar.png",
    screenshotMobile: "/images/portfolio/screenshot-cerro-solar.png",
    tags: ["turismo", "reservas", "glamping"],
    featured: true,
  },
  {
    id: "cota-estudio",
    type: "website",
    name: "Cota Estudio",
    niche: "Creativos & Tech",
    location: "Córdoba, Argentina",
    description: "Portfolio de arquitectura minimalista y de alta performance. Carga ultra-rápida de imágenes mediante optimización server-side.",
    url: "https://demo.itera.lat/cotaestudio",
    screenshot: "/images/portfolio/screenshot-cota-estudio.png",
    screenshotMobile: "/images/portfolio/screenshot-cota-estudio.png",
    tags: ["portfolio", "arquitectura", "minimal"],
    featured: true,
  },
  {
    id: "surco-cafe",
    type: "website",
    name: "Surco Café",
    niche: "Gastronomía",
    location: "Neuquén, Argentina",
    description: "Identidad digital para cafetería de especialidad. E-commerce integrado para venta de granos y take-away autogestionado.",
    url: "https://demo.itera.lat/surcocafe",
    screenshot: "/images/portfolio/screenshot-surco-cafe.jpg",
    screenshotMobile: "/images/portfolio/screenshot-surco-cafe.jpg",
    tags: ["gastronomía", "café", "e-commerce"],
    featured: false,
  },
  {
    id: "brasa-burgers",
    type: "website",
    name: "Brasa Burgers",
    niche: "Gastronomía",
    location: "Buenos Aires, Argentina",
    description: "Plataforma de delivery optimizada para móviles. Integración directa a WhatsApp con gestión de inventario automatizada.",
    url: "https://demo.itera.lat/brasaburgers",
    screenshot: "/images/portfolio/screenshot-brasa-burgers.jpg",
    screenshotMobile: "/images/portfolio/screenshot-brasa-burgers.jpg",
    tags: ["gastronomía", "delivery", "whatsapp"],
    featured: true,
  },
  {
    id: "filo-barberia",
    type: "website",
    name: "Filo Barbería",
    niche: "Servicios Profesionales",
    location: "Rosario, Argentina",
    description: "Sitio institucional enfocado en reservas online ágiles. Panel de control para que cada barbero gestione su propia agenda.",
    url: "https://demo.itera.lat/filobarberia",
    screenshot: "/images/portfolio/screenshot-filo-barberia.jpg",
    screenshotMobile: "/images/portfolio/screenshot-filo-barberia.jpg",
    tags: ["barbería", "turnos", "institucional"],
    featured: false,
  },
];

export const platforms: PlatformItem[] = [
  {
    id: "itera-gestion",
    type: "platform",
    productName: "Itera Gestión",
    tagline: "Sistema integral para operaciones industriales y comerciales",
    description: "Plataforma de gestión completa para empresas con operaciones complejas. Cotizador, base de clientes y productos, gestión de stock, logística, cuenta corriente y reportes — todo en un solo lugar.",
    features: [
      "Cotizador con precios escalonados",
      "Base de clientes y productos",
      "Gestión de stock e inventario",
      "Logística y seguimiento de pedidos",
      "Cuenta corriente por cliente",
      "Reportes y métricas de venta",
    ],
    tags: ["Laravel", "Inertia.js", "React", "PostgreSQL"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Alquímica S.R.L." }],
  },
  {
    id: "itera-tree",
    type: "platform",
    productName: "Itera Tree",
    tagline: "Presencia digital centralizada con panel admin y analytics",
    description: "Todo lo que tu empresa necesita mostrar en un solo lugar: enlaces, lista de precios, catálogo y contacto. Con panel de administración, analytics propio y capacidad white-label.",
    features: [
      "Panel de administración completo",
      "Lista de precios escalonada",
      "Analytics propio integrado",
      "Capacidad white-label",
      "Gestión de enlaces y recursos",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Alquímica S.R.L." }],
  },
  {
    id: "itera-estudio",
    type: "platform",
    productName: "Itera Estudio",
    tagline: "Fotos de producto profesionales generadas con IA",
    description: "Transformá fotos comunes de tus productos en imágenes profesionales de catálogo usando inteligencia artificial. Múltiples modos de generación, galería de resultados y almacenamiento en la nube.",
    features: [
      "Generación de fotos con IA (Gemini)",
      "Múltiples modos de generación",
      "Galería de resultados",
      "Almacenamiento cloud",
      "Export en múltiples formatos",
    ],
    tags: ["Next.js", "Gemini AI", "Cloudflare R2"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Química Alquímica S.R.L." }],
  },
  {
    id: "itera-market",
    type: "platform",
    productName: "Itera Market",
    tagline: "Catálogo online autoadministrable con checkout a WhatsApp",
    description: "Tu catálogo de productos online con administración propia. Tus clientes eligen, arman el pedido y lo envían directo por WhatsApp. Panel admin con productos, categorías, galería y captura de leads.",
    features: [
      "Catálogo autoadministrable",
      "Checkout directo a WhatsApp",
      "Panel admin con productos y categorías",
      "Galería de imágenes optimizada",
      "Captura de leads automática",
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    status: "Pre-lanzamiento",
    screenshot: "",
    adopters: [{ name: "Abundancia Hogar" }],
  },
  {
    id: "iteralex",
    type: "platform",
    productName: "IteraLex",
    tagline: "Gestión integral para estudios jurídicos",
    description: "Sistema de gestión diseñado para estudios jurídicos. Expedientes, clientes, agenda judicial, vencimientos, documentación y alertas. En uso activo por estudios del Alto Valle.",
    features: [
      "Gestión de expedientes judiciales",
      "Agenda judicial con vencimientos",
      "Administración de clientes",
      "Repositorio de documentación",
      "Sistema de alertas y recordatorios",
    ],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    status: "En producción",
    screenshot: "",
    adopters: [{ name: "Estudios jurídicos del Alto Valle" }],
  },
];

export const tools: ToolItem[] = [
  {
    id: "itera-monitor",
    type: "tool",
    name: "Itera Monitor",
    description: "Monitor de uptime y estado de servicios. Supervisamos la disponibilidad de todos nuestros productos y sitios desplegados en tiempo real.",
    screenshot: "",
    tags: ["Next.js", "Monitoreo", "DevOps"],
    license: "Uso interno",
    audience: "Infraestructura interna de ÍTERA para garantizar la disponibilidad de los servicios desplegados.",
    highlights: ["Uptime monitoring", "Alertas en tiempo real", "Dashboard de estado", "Historial de incidentes"],
    status: "En producción",
    externalUrl: "https://monitor.itera.tools",
  },
  {
    id: "itera-hub",
    type: "tool",
    name: "Itera Hub",
    description: "Buscador semántico interno para navegar documentación, código y recursos de todos los proyectos del ecosistema ÍTERA desde un solo lugar.",
    screenshot: "",
    tags: ["Next.js", "Búsqueda semántica", "IA"],
    license: "Uso interno",
    audience: "Herramienta interna para acelerar el desarrollo y mantener la documentación accesible.",
    highlights: ["Búsqueda semántica con IA", "Indexación de proyectos", "Interfaz unificada", "Resultados contextuales"],
    status: "En desarrollo",
    externalUrl: "https://hub.itera.tools",
  },
];

// Helper para obtener todo junto (backward compat)
export const portfolioData: PortfolioItem[] = [
  ...platforms,
  ...tools,
  ...websites,
];
