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
    tagline: "Tu estudio juridico, organizado",
    coverLine: "Causas, clientes, agenda y documentos desde un solo lugar.",
    description: "Gestioná expedientes, vencimientos y clientes sin depender de carpetas, Excel o WhatsApp. Integrado con Google Calendar, Drive y un copiloto IA con contexto legal.",
    features: [
      "Gestion de causas con movimientos y partes",
      "Agenda judicial integrada con Google Calendar",
      "CRM de clientes con archivos en Drive",
      "Calculador de honorarios (IUS, JUS, UMA)",
      "Alertas automaticas de vencimientos",
      "Copiloto IA con contexto legal",
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
  {
    id: "itera-estudio",
    slug: "itera-estudio",
    category: "saas",
    productName: "Itera Estudio",
    tagline: "Fotos de producto profesionales con IA, listas en segundos",
    coverLine: "Subí una foto con el celular, obtené imágenes de catálogo profesional.",
    description: "Generá fotos de producto con fondo de estudio, banners para redes y assets visuales. Generación por lotes, imágenes de referencia y galería organizada. Todo en pesos argentinos.",
    features: [
      "Generacion de fotos con IA (Gemini)",
      "Generacion por lotes (10 imagenes a la vez)",
      "Imagenes de referencia para control de estilo",
      "Galeria organizada con tags y carpetas",
      "Prompts guardados y reutilizables",
      "Creditos en pesos argentinos",
    ],
    tags: ["Next.js", "Gemini AI", "Cloudflare R2"],
    status: "En produccion",
    screenshot: "/images/plataformas/itera-estudio.png",
    adopters: [{ name: "Alquimica" }],
    externalUrl: "https://iteraestudio.com",
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
      "Estadisticas y reportes",
    ],
    tags: ["Laravel", "React", "Inertia.js", "PostgreSQL"],
    status: "En produccion",
    screenshot: "/images/plataformas/itera-desk.png",
    adopters: [{ name: "Alquimica" }],
    externalUrl: "https://desk.itera.lat",
    subdomain: "desk",
  },
  {
    id: "iteralink",
    slug: "iteralink",
    category: "standalone",
    productName: "IteraLink",
    tagline: "Presencia digital completa, administrable sin codigo",
    coverLine: "Tu negocio en un link, sin tocar codigo.",
    description: "Mas que un Linktree, menos que un ecommerce. Botones con modales informativos, galeria de fotos, banners generados con IA, QR descargable y analytics — todo desde un panel admin con preview en tiempo real.",
    features: [
      "Botones con modales: texto, tabla, pasos, FAQ, mapa",
      "Galeria de fotos con lightbox",
      "Banners generados con IA",
      "QR descargable + tarjeta imprimible",
      "SEO completo con preview en vivo",
      "Analytics de visitas y clicks",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En produccion",
    screenshot: "/images/plataformas/itera-link-2.png",
    screenshots: [
      "/images/plataformas/itera-link-3.png",
      "/images/plataformas/itera-link-4.png",
      "/images/plataformas/itera-link-1.png",
    ],
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
    screenshot: "/images/portfolio/screenshot-iterashop.png",
    adopters: [{ name: "Abundancia Hogar" }],
    externalUrl: "https://shop.itera.lat",
    subdomain: "shop",
  },
];

// internalProducts eliminado — Itera Estudio movido a saasProducts

// --- SITIOS WEB ---

export const websites: WebItem[] = [
  {
    id: "rer-estudio-juridico",
    slug: "rer-estudio-juridico",
    productName: "RER Estudio Jurídico",
    tagline: "Estudio juridico con presencia digital profesional",
    description: "Sitio web institucional para estudio juridico. Presentacion del equipo, areas de practica y formulario de consulta.",
    niche: "Servicios profesionales",
    tags: ["HTML", "CSS", "JavaScript"],
    screenshot: "/images/portfolio/screenshot-rer-estudio-juridico.png",
    screenshotMobile: "",
    url: "https://rerestudiojuridico.com",
    featured: true,
  },
  {
    id: "abundancia-hogar",
    slug: "abundancia-hogar",
    productName: "Abundancia Hogar",
    tagline: "Muebleria y deco con catalogo online",
    description: "Sitio web y tienda online para muebleria. Catalogo de productos, muebles a medida y envios a todo el pais.",
    niche: "Comercio",
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    screenshot: "/images/portfolio/screenshot-abundancia-hogar.png",
    screenshotMobile: "",
    url: "https://abundanciahogar.com.ar",
    featured: true,
  },
  {
    id: "bambu-oficial",
    slug: "bambu-oficial",
    productName: "Bambú Oficial",
    tagline: "Marca de productos con catalogo digital",
    description: "Sitio web para marca de productos con catalogo informativo, presentacion de marca y navegacion por categorias.",
    niche: "Comercio",
    tags: ["Next.js", "Tailwind CSS"],
    screenshot: "/images/portfolio/screenshot-bambu-oficial.png",
    screenshotMobile: "",
    url: "https://bambuoficial.com.ar",
    featured: true,
  },
];

// --- HELPERS ---

// Helper: todos los productos públicos
export const allProducts: ProductItem[] = [...saasProducts, ...standaloneProducts];

// Helper: sitios web destacados
export const featuredWebsites: WebItem[] = websites.filter((w) => w.featured);

// Backward compat alias
export const platforms = allProducts;
