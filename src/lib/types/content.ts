/**
 * Shared content types for `src/data/`.
 * All site content is typed here so pages/compositions never define ad-hoc shapes.
 */

export type PillarSlug = "webs" | "sistemas" | "ia" | "consultoria";

/** Registered mock screens (JSX interfaces, brand-coherent) — see composiciones/mocks. */
export type MockId =
  | "panel-gestion"
  | "web-corporativa"
  | "copiloto"
  | "auditoria"
  | "agenda-juridica"
  | "turnos"
  | "reparto";

/** Summary of a service pillar — feeds home selector, header dropdown and footer. */
export interface PillarSummary {
  slug: PillarSlug;
  name: string;
  /** One-liner: who this pillar is for, in the client's language. */
  audience: string;
  /** Exactly 3 concrete offerings shown on the home selector. */
  items: string[];
  href: string;
  /** Mock screen previewing this pillar's product. */
  mock: MockId;
}

/** One screen in the visual showcase: a real screenshot OR a registered mock. */
export interface ShowcaseScreen {
  id: string;
  /** Industry label ("Local gastronómico", "Estudio jurídico"…). */
  industry: string;
  /** Short feature caption under the frame. */
  caption: string;
  image?: { src: string; alt: string };
  mock?: MockId;
}

/** Own SaaS product, listed in the products banner. */
export interface OwnProduct {
  id: string;
  name: string;
  tagline: string;
}

/** Products credibility banner content. */
export interface ProductsBanner {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

/** "Cómo trabajamos" differential. */
export interface Differential {
  id: string;
  title: string;
  body: string;
}

/** Featured case teaser on the home. */
export interface FeaturedCase {
  title: string;
  summary: string;
  bullets: string[];
  href: string;
}

/** Contact call-to-action block content. */
export interface CtaContent {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface HeroContent {
  eyebrow: string;
  /** Title split so the highlighted word renders with the brand gradient. */
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  lead: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}
