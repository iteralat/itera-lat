import { notFound } from "next/navigation";
import { Check, ExternalLink, Cpu, Info, Globe, Users, Target, Lightbulb, Sparkles } from "lucide-react";
import { saasProducts } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CaseStudy } from "@/components/shared/CaseStudy";
import { FadeIn } from "@/components/shared/FadeIn";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export async function generateStaticParams() {
  return saasProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = saasProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.productName} — SaaS`,
    description: product.description,
    openGraph: {
      title: `${product.productName} — SaaS`,
      description: product.description,
    },
    alternates: { canonical: `/productos/saas/${slug}` },
  };
}

export default async function SaaSDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = saasProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: "SaaS", href: "/productos/saas" },
          ]}
          current={product.productName}
          currentColor="text-primary"
        />

        {/* Hero row: carrusel + sidebar — unidad visual de entrada */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8 lg:gap-10">
          <PlatformViewer
            productName={product.productName}
            screenshot={product.screenshot}
            screenshots={product.screenshots}
            externalUrl={product.externalUrl}
          />

          <aside className="space-y-5">
            {/* Info rápida — oculto en mobile para no cortar el flujo galería → contenido */}
            {product.quickFacts && product.quickFacts.length > 0 && (
              <div className="hidden lg:block bg-elevated border border-white/10 rounded-xl p-6 lg:p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Info size={15} className="text-primary" />
                  <div className="text-xs uppercase tracking-widest text-white/80 font-bold">
                    Info rápida
                  </div>
                </div>
                <dl className="space-y-3">
                  {product.quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start justify-between gap-3">
                      <dt className="text-xs uppercase tracking-wider text-white/55 font-semibold shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-sm text-white/95 font-medium text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Demos live — oculto en mobile */}
            {product.liveDemos && product.liveDemos.length > 0 && (
              <div className="hidden lg:block bg-elevated border border-white/10 rounded-xl p-6 lg:p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={15} className="text-primary" />
                  <div className="text-xs uppercase tracking-widest text-white/80 font-bold">
                    Demos en vivo
                  </div>
                </div>
                <ul className="space-y-1">
                  {product.liveDemos.map((demo) => (
                    <li key={demo.url}>
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-2 -mx-1.5 px-1.5 py-2 rounded-md hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="min-w-0 flex items-baseline gap-1.5 flex-wrap">
                          <span className="text-sm text-white/95 font-semibold group-hover:text-primary transition-colors">
                            {demo.name}
                          </span>
                          <span className="text-white/25">·</span>
                          <span className="text-xs text-white/60">{demo.niche}</span>
                        </div>
                        <ExternalLink
                          size={13}
                          className="text-white/40 group-hover:text-primary shrink-0 transition-colors"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/50 mt-3 leading-relaxed italic">
                  Sumamos más demos a medida que se relanzan.
                </p>
              </div>
            )}

            {/* Usado por — solo si hay adopters reales, oculto en mobile */}
            {product.adopters.length > 0 && (
              <div className="hidden lg:block bg-elevated border border-white/10 rounded-xl p-6 lg:p-5">
                <div className="text-xs uppercase tracking-widest text-white/80 font-bold mb-3">
                  Usado por
                </div>
                <ul className="space-y-1.5">
                  {product.adopters.map((a) => (
                    <li key={a.name} className="text-sm text-white/90 font-medium">
                      {a.url ? (
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                        >
                          {a.name}
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        a.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack técnico — discreto, oculto en mobile */}
            <div className="hidden lg:block px-1">
              <div className="flex items-center gap-2 mb-2.5">
                <Cpu size={13} className="text-white/55" />
                <div className="text-[11px] uppercase tracking-widest text-white/60 font-semibold">
                  Construido con
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              {product.externalUrl && (
                <GlowButton href={product.externalUrl} external className="w-full lg:!text-sm lg:!px-4 lg:!py-2.5">
                  Ver {product.productName}
                </GlowButton>
              )}
              <GlowButton href="/contacto" variant="outline" className="w-full lg:!text-sm lg:!px-4 lg:!py-2.5">
                Quiero algo similar
              </GlowButton>
            </div>
          </aside>
        </div>

        {/* Intro editorial: título a la izq, párrafos a la der (full width, sin columna vacía) */}
        <FadeIn className="mt-14 md:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-16">
            {/* Izq: pills + h1 + tagline */}
            <div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-primary/15 border border-primary/30 text-primary rounded-full">
                  SaaS
                </span>
                <span className="px-3 py-1 text-[11px] font-semibold bg-white/8 border border-white/15 rounded-full text-white/75 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {product.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight leading-[1.05]">
                {product.productName}
              </h1>
              <p className="text-white/75 text-lg md:text-xl font-medium leading-snug">
                {product.tagline}
              </p>
            </div>

            {/* Der: párrafos */}
            <div className="space-y-4 lg:pt-2">
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                {product.description}
              </p>
              {product.longDescription?.map((para, i) => (
                <p key={i} className="text-white/65 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Para quién lo pensamos + Por qué lo creamos — full width grid */}
        {(product.forWhom || product.rationale) && (
          <div className={`mt-16 md:mt-20 grid gap-5 ${product.forWhom && product.rationale ? "md:grid-cols-2" : "grid-cols-1"}`}>
            {product.forWhom && (
              <FadeIn>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-4 md:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Users size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                      Para quién lo pensamos
                    </h2>
                  </div>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {product.forWhom}
                  </p>
                </div>
              </FadeIn>
            )}

            {product.rationale && (
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-4 md:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Lightbulb size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                      Por qué lo creamos
                    </h2>
                  </div>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {product.rationale}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        )}

        {/* Cómo lo resolvimos — pilares, full width */}
        {product.pillars && product.pillars.length > 0 && (
          <div className="mt-20 md:mt-28">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <Target size={20} className="text-primary" />
                <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
                  Cómo lo resolvimos
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={0.1 * i}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-4 md:p-6 hover:border-primary/25 transition-colors">
                    <div className="flex items-start gap-2.5 mb-3">
                      <span className="shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] md:text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h3 className="text-base md:text-xl font-bold text-white leading-tight pt-0.5 md:pt-1">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed pl-[2.125rem] md:pl-[2.375rem]">
                      {pillar.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {product.caseStudy && (
          <FadeIn className="mt-20 md:mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Caso de estudio</h2>
            <CaseStudy
              challenge={product.caseStudy.challenge}
              solution={product.caseStudy.solution}
              result={product.caseStudy.result}
            />
          </FadeIn>
        )}

        {/* Funcionalidades — full width, grouped */}
        {product.featureGroups && product.featureGroups.length > 0 ? (
          <div className="mt-20 md:mt-28">
            <FadeIn>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 tracking-tight">
                Funcionalidades
              </h2>
            </FadeIn>
            <div className="space-y-10">
              {product.featureGroups.map((group, gi) => (
                <FadeIn key={group.title} delay={0.05 * gi}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-sm uppercase tracking-wider text-white/90 font-bold">
                      {group.title}
                    </h3>
                    {group.upcoming && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 border border-primary/25 text-primary rounded-full">
                        <Sparkles size={10} />
                        Próximamente
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className={`flex items-start gap-3 p-3.5 rounded-lg border transition-colors ${
                          group.upcoming
                            ? "bg-primary/[0.03] border-primary/15 hover:border-primary/30"
                            : "bg-white/[0.03] border-white/[0.06] hover:border-primary/20"
                        }`}
                      >
                        <Check
                          size={16}
                          className={group.upcoming ? "text-primary/70 mt-0.5 shrink-0" : "text-primary mt-0.5 shrink-0"}
                          strokeWidth={2.5}
                        />
                        <span className="text-white/85 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ) : (
          <FadeIn className="mt-20 md:mt-28">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 tracking-tight">
              Funcionalidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-colors"
                >
                  <Check size={18} className="text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-white/85 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
