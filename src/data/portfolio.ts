// --- TIPOS ---

export interface ProductItem {
  id: string;
  category: "saas" | "standalone";
  productName: string;
  tagline: string;
  coverLine: string;
  description: string;
  features: string[];
  tags: string[];
  status: string;
  screenshot: string;
  screenshots?: string[];
  adopters: { name: string; url?: string }[];
  /** URL externa del producto (landing en subdominio o dominio propio) */
  externalUrl?: string;
  /** Subdominio de la landing standalone */
  subdomain?: string;
}

// --- SAAS ---

export const saasProducts: ProductItem[] = [
  {
    id: "iteralex",
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

// Helper: todos los productos públicos
export const allProducts: ProductItem[] = [...saasProducts, ...standaloneProducts];

// Backward compat alias
export const platforms = allProducts;
