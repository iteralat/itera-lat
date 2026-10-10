import type {
  CtaContent,
  Differential,
  FeaturedCase,
  HeroContent,
  OwnProduct,
  ProductsBanner,
  ShowcaseScreen,
} from "@/lib/types/content";
import { siteConfig } from "@/data/site";

export const heroContent: HeroContent = {
  eyebrow: "Estudio de software · Argentina → LatAm",
  titleStart: "Construimos el ",
  titleHighlight: "software",
  titleEnd: " de tu negocio.",
  lead: "Webs autogestionables, sistemas de gestión e IA aplicada a tu operación. Todo incluido: diseño, dominio, hosting y soporte.",
  primaryLabel: "Escribinos por WhatsApp",
  primaryHref: siteConfig.whatsappUrl,
  secondaryLabel: "Ver servicios",
  secondaryHref: "#servicios",
};

/** Pantallas de sistemas por rubro: screenshot real o mock coherente con la marca. */
export const showcaseScreens: ShowcaseScreen[] = [
  {
    id: "gastronomico",
    industry: "Local gastronómico",
    caption: "Los pedidos del local en un tablero: nuevo, preparando, listo, entregado",
    image: {
      src: "/presupuestos/gastronomico/imagenes/panel-tablero.png",
      alt: "Tablero de pedidos de un local gastronómico, con columnas por estado y totales del día",
    },
  },
  {
    id: "juridico",
    industry: "Estudio jurídico",
    caption: "Agenda del día, causas activas y vencimientos que no se pasan",
    mock: "agenda-juridica",
  },
  {
    id: "reparto",
    industry: "Distribución y reparto",
    caption: "La hoja de reparto del día por vehículo, con avance y cobros en ruta",
    mock: "reparto",
  },
  {
    id: "turnos",
    industry: "Turnos y agenda",
    caption: "Reservas online con recordatorios automáticos por WhatsApp",
    mock: "turnos",
  },
  {
    id: "copiloto",
    industry: "IA sobre tus datos",
    caption: "Un copiloto que responde preguntas del negocio y automatiza tareas",
    mock: "copiloto",
  },
  {
    id: "web-hotel",
    industry: "Web con panel propio",
    caption: "La web del negocio, editable sin depender de nadie",
    mock: "web-corporativa",
  },
  {
    id: "auditoria",
    industry: "Auditoría técnica",
    caption: "El estado real de tu sistema, con plan de corrección",
    mock: "auditoria",
  },
];

export const ownProducts: OwnProduct[] = [
  {
    id: "shopear",
    name: "Shopear",
    tagline: "Tiendas online con pedido por WhatsApp",
  },
  {
    id: "iteralex",
    name: "ÍTERA Lex",
    tagline: "Gestión para estudios jurídicos",
  },
  {
    id: "linkea2",
    name: "Linkea2",
    tagline: "Página de contacto con lista de precios",
  },
  {
    id: "itera-estudio",
    name: "Itera Estudio",
    tagline: "Fotos de producto generadas con IA",
  },
];

export const productsBanner: ProductsBanner = {
  title: "También construimos productos propios",
  description:
    "SaaS que operamos nosotros, con clientes reales usándolos todos los días. Mantener productos en producción nos obliga a un estándar que después entra en cada proyecto de cliente.",
  ctaLabel: "Conocé nuestros productos",
  ctaHref: "/productos",
};

export const differentials: Differential[] = [
  {
    id: "trato-directo",
    title: "Trato directo con quien construye",
    body: "La persona que piensa tu proyecto es la que lo desarrolla. Las decisiones se toman con contexto, sin pasar por intermediarios.",
  },
  {
    id: "ia-criterio",
    title: "IA con criterio senior",
    body: "Usamos IA para desarrollar más rápido, con revisión de ingeniería en cada entrega. La velocidad no descuenta calidad.",
  },
  {
    id: "todo-incluido",
    title: "Todo incluido",
    body: "Diseño, dominio, hosting y soporte entran en el precio. Te entregamos algo funcionando en producción, no un ZIP.",
  },
  {
    id: "codigo-tuyo",
    title: "El código y los datos son tuyos",
    body: "Cada proyecto se entrega con su código y su base de datos a nombre tuyo. Si mañana querés seguir con otro equipo, podés.",
  },
];

export const featuredCase: FeaturedCase = {
  title: "Un CRM multi-empresa, en producción todos los días",
  summary:
    "Alquímica y Bambú operan su distribución con un sistema construido sobre sus procesos reales: clientes, pedidos, listas de precios y logística de reparto en una sola plataforma.",
  bullets: [
    "Dos empresas operando sobre la misma plataforma",
    "Pedidos, precios por cliente y hojas de reparto en un solo lugar",
    "En producción, con soporte y evolución continua",
  ],
  href: "/casos",
};

export const finalCta: CtaContent = {
  title: "Contanos qué necesitás",
  description:
    "Te respondemos con una propuesta concreta: qué haríamos, en cuánto tiempo y cuánto sale. Sirve tanto si arrancás de cero como si ya tenés algo andando y querés llevarlo más allá.",
  primaryLabel: "Escribinos por WhatsApp",
  primaryHref: siteConfig.whatsappUrl,
  secondaryLabel: siteConfig.email,
  secondaryHref: `mailto:${siteConfig.email}`,
};
