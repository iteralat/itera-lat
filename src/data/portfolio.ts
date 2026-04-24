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
  category: "saas";
  coverLine: string;
  features: string[];
  status: string;
  adopters: { name: string; url?: string }[];
  /** URL externa del producto (landing en subdominio o dominio propio) */
  externalUrl?: string;
  /** Subdominio de la landing standalone */
  subdomain?: string;
  caseStudy?: CaseStudy;
  /** Info rápida para sidebar (tipo, modelo, pricing, etc) — opcional */
  quickFacts?: { label: string; value: string }[];
  /** Demos públicas live — para SaaS multi-tenant. Se muestran como widget en sidebar */
  liveDemos?: { name: string; niche: string; url: string }[];
  /** Párrafos extendidos para la intro — opcional, si no va solo description */
  longDescription?: string[];
  /** Sección "Para quién lo pensamos" */
  forWhom?: string;
  /** Sección "Por qué lo creamos" */
  rationale?: string;
  /** Pilares del producto (cómo lo resolvimos) */
  pillars?: { title: string; body: string }[];
  /** Features agrupadas por área. Si existen, reemplazan al flat `features` en el detail */
  featureGroups?: { title: string; items: string[]; upcoming?: boolean }[];
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
    id: "shopear",
    slug: "shopear",
    category: "saas",
    productName: "Shopear",
    tagline: "Catálogo online con checkout por WhatsApp",
    coverLine: "Tu catálogo online en horas, pedidos directo a WhatsApp.",
    description: "Plataforma SaaS multi-tenant para comercios que ya venden por WhatsApp y no quieren pasarelas de pago ni comisiones por venta. Convierte su presencia en un catálogo profesional navegable, manteniendo el cierre en el mismo WhatsApp que sus clientes ya usan.",
    longDescription: [
      "Tus clientes navegan tu catálogo, arman el pedido y te escriben por WhatsApp para cerrarlo. Sin pasarela de pagos, sin comisiones por venta, sin forzar a nadie a pagar con tarjeta. Vos cobrás como siempre lo hiciste: transferencia, efectivo, link de Mercado Pago — lo que uses.",
      "Es una plataforma multi-tenant con trial de 14 días sin tarjeta. Cada tienda corre en su propio subdominio (tunegocio.shope.ar) o en dominio propio si se activa el plan anual. El admin está diseñado para que cualquiera pueda usarlo — si sabés subir una foto a Instagram, sabés administrar tu tienda.",
    ],
    forWhom: "Desde el comerciante que recién empieza a digitalizar y necesita pasar del PDF a una tienda real, hasta quien ya tiene su negocio online andando y se cansó de responder '¿cuánto sale esto?' por WhatsApp todo el día. Los rubros que validamos primero: indumentaria, joyería, tecnología, vinoteca, ferretería, decoración, bazar y calzado. Explícitamente fuera del target: gastronomía/delivery (ese rubro ya tiene jugadores fuertes) y marketplaces multi-vendedor.",
    rationale: "El ecommerce tradicional está pensado para negocios que cobran con tarjeta. Pero en Argentina y buena parte de LatAm, muchísima gente vende perfecto por WhatsApp y cobra por transferencia o en persona — no necesitan integrar Mercado Pago ni perder 3-5% de comisión por transacción. Lo que les faltaba era un catálogo profesional, navegable y administrable que deje de depender de fotos en Stories o listas de texto. Shopear cubre ese hueco: presencia digital seria con el mismo flujo de cierre que ya conocen. Priorizamos que la plataforma fuera usable sin manual, pero que también tuviera profundidad para quien quiera meterse más — filtros custom por rubro, analytics first-party, CMS per-tienda, dominio propio.",
    pillars: [
      {
        title: "Catálogo hecho a medida de cada rubro",
        body: "Grid navegable con filtros dinámicos que vos definís: metal y piedra para joyería, talle y color para ropa, añada y varietal para vinos. Ficha de producto con galería, descripción y los campos específicos que tu negocio necesita.",
      },
      {
        title: "Checkout por WhatsApp, sin pasarelas ni comisiones",
        body: "Tu cliente arma el carrito, completa nombre y teléfono, y el pedido se envía por WhatsApp listo para cerrar. Cobrás como siempre: transferencia, efectivo, link de Mercado Pago. Shopear no toma un peso de la venta.",
      },
      {
        title: "Panel admin sin jerga técnica",
        body: "Productos, categorías, clientes, caja, consultas, analytics y contenido institucional — todo desde un solo lugar. Pensado para el que migra de un PDF tanto como para el que ya tiene métricas pintadas en otro lado.",
      },
      {
        title: "IA que acompaña el diseño visual",
        body: "Limpieza automática de fotos de producto con fondo estudio, generación de descripciones con IA y biblioteca de banners personalizables. Para que tu tienda luzca profesional sin tener que contratar fotógrafo ni diseñador gráfico.",
      },
    ],
    features: [
      "Catálogo con categorías y filtros",
      "Checkout directo a WhatsApp",
      "Panel admin completo",
      "Caja integrada",
      "Consultas y leads",
      "Analytics por producto",
    ],
    featureGroups: [
      {
        title: "Catálogo",
        items: [
          "Grid navegable con categorías y etiquetas",
          "Filtros dinámicos por rubro (vos definís los atributos)",
          "Ficha de producto con galería y campos custom",
          "Búsqueda interna",
          "Modo mantenimiento (pausar sin perder la URL)",
        ],
      },
      {
        title: "Checkout",
        items: [
          "Checkout directo a WhatsApp con pedido armado",
          "Sin pasarela de pago, sin comisiones por venta",
          "Cierre por transferencia, efectivo o link manual de Mercado Pago",
          "Consultas pre-venta por WhatsApp desde la ficha",
          "QR descargable de la tienda",
        ],
      },
      {
        title: "Panel admin",
        items: [
          "Gestión de productos, categorías y etiquetas",
          "Caja integrada con ingresos, egresos y balance mensual",
          "CRM de clientes con ficha comercial",
          "Pedidos con estados y seguimiento",
          "Cupones y descuentos",
          "Analytics first-party por producto (sin Google intermediando)",
          "Miembros y permisos",
        ],
      },
      {
        title: "Branding e identidad",
        items: [
          "Paleta y tipografía editables",
          "Hero banner y barra de anuncios",
          "CMS per-tienda (home, sobre nosotros, contacto)",
          "Subdominio tunegocio.shope.ar o dominio propio",
          "SEO y sitemap automáticos",
        ],
      },
      {
        title: "IA integrada",
        upcoming: true,
        items: [
          "Limpieza automática de fotos de producto (fondo estudio)",
          "Generación de descripciones de producto con IA",
          "Biblioteca de banners prefab editables",
        ],
      },
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    status: "En producción",
    screenshot: "/images/portfolio/screenshot-shopear.png",
    screenshots: [
      "/images/plataformas/shopear-dashboard.png",
      "/images/plataformas/shopear-demo-1.png",
      "/images/plataformas/shopear-demo-2.png",
      "/images/plataformas/shopear-demo-3.png",
      "/images/plataformas/shopear-joyeria.png",
    ],
    adopters: [],
    quickFacts: [
      { label: "Tipo", value: "SaaS multi-tenant" },
      { label: "Modelo", value: "Suscripción" },
      { label: "Trial", value: "14 días sin tarjeta" },
      { label: "Desde", value: "$22.000 ARS/mes" },
    ],
    liveDemos: [
      { name: "iStore BA", niche: "Tecnología Apple", url: "https://apple.shope.ar" },
      { name: "Lumière Joyas", niche: "Joyería", url: "https://joyeria.shope.ar" },
    ],
    externalUrl: "https://shope.ar",
  },
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

export const allProducts: ProductItem[] = [...saasProducts];

export const featuredWebsites: WebItem[] = websites.filter((w) => w.featured);

// Backward compat alias
export const platforms = allProducts;
