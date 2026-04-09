import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { standaloneProducts } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CaseStudy } from "@/components/shared/CaseStudy";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export async function generateStaticParams() {
  return standaloneProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = standaloneProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.productName} — Soluciones`,
    description: product.description,
    openGraph: {
      title: `${product.productName} — Soluciones`,
      description: product.description,
    },
    alternates: { canonical: `/productos/soluciones/${slug}` },
  };
}

export default async function SolucionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = standaloneProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: "Soluciones", href: "/productos/soluciones" },
          ]}
          current={product.productName}
          currentColor="text-primary"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main content */}
          <div>
            <PlatformViewer
              productName={product.productName}
              screenshot={product.screenshot}
              screenshots={product.screenshots}
            />

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary rounded-full">
                  Solución
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-medium bg-white/5 border border-border rounded-full text-white/40">
                  {product.status}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.productName}</h1>
              <p className="text-white/40 text-lg mb-6">{product.tagline}</p>
              <p className="text-white/50 leading-relaxed max-w-3xl mb-10">
                {product.description}
              </p>

              {product.caseStudy && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-4">Caso de estudio</h2>
                  <CaseStudy
                    challenge={product.caseStudy.challenge}
                    solution={product.caseStudy.solution}
                    result={product.caseStudy.result}
                  />
                </div>
              )}

              {/* Features */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">Funcionalidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-white/50 text-sm">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            {/* Tech */}
            <div className="bg-muted border border-border rounded-lg p-5">
              <div className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-3">
                Tecnología
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-border rounded-full text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Adopters — hidden temporarily */}
            {/* {product.adopters.length > 0 && (
              <div className="bg-muted border border-border rounded-lg p-5">
                <div className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-3">
                  Usado por
                </div>
                <ul className="space-y-1.5">
                  {product.adopters.map((a) => (
                    <li key={a.name} className="text-sm text-white/50">
                      {a.url ? (
                        <a href={a.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          {a.name}
                        </a>
                      ) : (
                        a.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

            {/* CTAs */}
            <div className="space-y-3">
              {/* Ver producto — hidden temporarily */}
              {/* {product.externalUrl && (
                <GlowButton href={product.externalUrl} external className="w-full">
                  Ver {product.productName}
                </GlowButton>
              )} */}
              <GlowButton href="/contacto" className="w-full">
                Quiero algo similar
              </GlowButton>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
