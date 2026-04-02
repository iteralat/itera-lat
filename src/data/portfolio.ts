// --- TIPOS BASE ---

export interface CaseStudy {
  summary: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface WebCaseStudy extends CaseStudy {
  client: string;
}

export interface BaseProduct {
  id: string;
  slug: string;
  productName: string;
  tagline: string;
  description: string;
  tags: string[];
  screenshot: string;
  screenshots?: string[];
}

// --- TIPOS DERIVADOS ---

export interface ProductItem extends BaseProduct {
  category: "saas" | "standalone";
  coverLine: string;
  features: string[];
  status: string;
  adopters: { name: string; url?: string }[];
  /** URL externa del producto (landing en subdominio o dominio propio) */
  externalUrl?: string;
  /** Subdominio de la landing standalone */
  subdomain?: string;
  caseStudy?: CaseStudy;
}

export interface WebItem extends BaseProduct {
  niche: string;
  screenshotMobile: string;
  url?: string;
  featured?: boolean;
  caseStudy?: WebCaseStudy;
}

// --- SAAS ---

export const saasProducts: ProductItem[] = [
  {
    id: "iteralex",
    slug: "iteralex",
    category: "saas",
    productName: "IteraLex",
    tagline: "Gestion integral para estudios juridicos",
    coverLine: "Expedientes, vencimientos y clientes en un solo lugar.",
    description: "Estudios del Alto Valle dejaron de perder plazos y buscar expedientes en carpetas. Todo el circuito judicial digitalizado con copiloto IA.",
    features: [
      "Gestion de expedientes judiciales",
      "Agenda judicial con vencimientos",
      "Administracion de clientes",
      "Repositorio de documentacion",
      "Sistema de alertas y recordatorios",
      "Copiloto IA integrado",
    ],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    status: "En produccion",
    screenshot: "/images/plataformas/iteralex-1.webp",
    screenshots: [
      "/images/plataformas/iteralex-1.webp",
      "/images/plataformas/iteralex-2.webp",
      "/images/plataformas/iteralex-3.webp",
    ],
    adopters: [{ name: "Estudios juridicos del Alto Valle" }],
    externalUrl: "https://iteralex.com",
  },
];

// --- STANDALONE ---

export const standaloneProducts: ProductItem[] = [
  {
    id: "iteradesk",
    slug: "iteradesk",
    category: "standalone",
    productName: "IteraDesk",
    tagline: "Sistema de gestion para negocios B2B",
    coverLine: "De planillas y cuadernos a operacion digitalizada en semanas.",
    description: "Productos, ventas, cotizador, cuenta corriente, repartos y estadisticas en un solo lugar. Ya funciona en empresas reales.",
    features: [
      "Productos con stock en tiempo real",
      "Cotizador con listas de precio automaticas",
      "Ventas con pagos parciales",
      "Cuenta corriente con FIFO",
      "Logistica y repartos",
      "Estadisticas y reportes",
    ],
    tags: ["Laravel", "React", "Inertia.js", "PostgreSQL"],
    status: "En produccion",
    screenshot: "/images/plataformas/itera-gestion.webp",
    adopters: [{ name: "Alquimica" }],
    externalUrl: "https://desk.itera.lat",
    subdomain: "desk",
  },
  {
    id: "iteralink",
    slug: "iteralink",
    category: "standalone",
    productName: "IteraLink",
    tagline: "Presencia digital B2B con lista de precios y analytics",
    coverLine: "Todo tu negocio en un link, actualizable sin codigo.",
    description: "Mas que un Linktree, menos que un ecommerce. Lista de precios dinamica, panel admin visual y analytics — todo administrable.",
    features: [
      "Links y botones configurables",
      "Lista de precios dinamica (4 columnas)",
      "Mi Lista (self-service para clientes)",
      "Panel admin visual con drag & drop",
      "Analytics interno",
      "SEO completo",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En produccion",
    screenshot: "/images/plataformas/itera-tree.webp",
    adopters: [{ name: "Alquimica" }],
    externalUrl: "https://link.itera.lat",
    subdomain: "link",
  },
  {
    id: "iterashop",
    slug: "iterashop",
    category: "standalone",
    productName: "IteraShop",
    tagline: "Catalogo online con checkout por WhatsApp",
    coverLine: "Tu catalogo online en horas, pedidos directo a WhatsApp.",
    description: "Tus clientes eligen, arman el pedido y te escriben directo. Sin pasarela de pagos, sin comisiones. Administrable desde un panel.",
    features: [
      "Catalogo con categorias y filtros",
      "Checkout directo a WhatsApp",
      "Panel admin completo",
      "Caja integrada",
      "Consultas y leads",
      "Analytics por producto",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En produccion",
    screenshot: "",
    adopters: [{ name: "Abundancia Hogar" }],
    externalUrl: "https://shop.itera.lat",
    subdomain: "shop",
  },
];

// Otros productos internos (no se muestran en nav, solo referencia)
export const internalProducts: ProductItem[] = [
  {
    id: "itera-estudio",
    slug: "itera-estudio",
    category: "saas",
    productName: "Itera Estudio",
    tagline: "Fotos de producto profesionales generadas con IA",
    coverLine: "Foto con el celular, resultado de catalogo profesional.",
    description: "Genera fotos de producto profesionales con IA. Subi una foto desde el celular y obtene imagenes listas para publicar.",
    features: [
      "Generacion de fotos con IA (Gemini)",
      "Multiples modos de generacion",
      "Galeria de resultados",
      "Almacenamiento cloud",
    ],
    tags: ["Next.js", "Gemini AI", "Cloudflare R2"],
    status: "En produccion",
    screenshot: "",
    adopters: [{ name: "Alquimica" }],
    externalUrl: "https://iteraestudio.com",
  },
];

// --- SITIOS WEB DEMO ---

export const websites: WebItem[] = [
  {
    id: "brasa-burgers",
    slug: "brasa-burgers",
    productName: "Brasa Burgers",
    tagline: "Hamburgueseria artesanal con identidad de barrio",
    description: "Sitio web para hamburgueseria artesanal con menu digital, galeria y boton de pedido por WhatsApp.",
    niche: "Gastronomia",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp"],
    screenshot: "/images/portfolio/screenshot-brasa-burgers.jpg",
    screenshotMobile: "",
    featured: true,
  },
  {
    id: "cerro-solar",
    slug: "cerro-solar",
    productName: "Cerro Solar",
    tagline: "Cabanas de montana con reservas online",
    description: "Sitio web para complejo de cabanas en la Patagonia con galeria inmersiva, disponibilidad y formulario de reserva.",
    niche: "Turismo",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot: "/images/portfolio/screenshot-cerro-solar.webp",
    screenshotMobile: "",
    featured: true,
  },
  {
    id: "cota-estudio",
    slug: "cota-estudio",
    productName: "Cota Estudio",
    tagline: "Estudio de arquitectura con portfolio digital",
    description: "Portfolio web minimalista para estudio de arquitectura. Proyectos con galeria de alta resolucion y ficha tecnica.",
    niche: "Arquitectura",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot: "/images/portfolio/screenshot-cota-estudio.webp",
    screenshotMobile: "",
    featured: false,
  },
  {
    id: "surco-cafe",
    slug: "surco-cafe",
    productName: "Surco Cafe",
    tagline: "Cafeteria de especialidad con carta digital",
    description: "Sitio web para cafeteria de especialidad con carta digital, historia de origen y ubicacion.",
    niche: "Gastronomia",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot: "/images/portfolio/screenshot-surco-cafe.jpg",
    screenshotMobile: "",
    featured: false,
  },
  {
    id: "filo-barberia",
    slug: "filo-barberia",
    productName: "Filo Barberia",
    tagline: "Barberia moderna con turnos online",
    description: "Sitio web para barberia con sistema de turnos online, galeria de trabajos y precios.",
    niche: "Servicios",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot: "/images/portfolio/screenshot-filo-barberia.jpg",
    screenshotMobile: "",
    featured: false,
  },
];

// --- HELPERS ---

// Helper: todos los productos públicos
export const allProducts: ProductItem[] = [...saasProducts, ...standaloneProducts];

// Helper: sitios web destacados
export const featuredWebsites: WebItem[] = websites.filter((w) => w.featured);

// Backward compat alias
export const platforms = allProducts;
