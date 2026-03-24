import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageSquare, ExternalLink } from "lucide-react";
import { allProducts } from "@/data/portfolio";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.id === slug);
  if (!product) return { title: "No encontrado" };
  return {
    title: `${product.productName} — ITERA`,
    description: product.tagline,
    openGraph: {
      title: product.productName,
      description: product.tagline,
      images: product.screenshot ? [{ url: product.screenshot, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.id === slug);
  if (!product) notFound();

  const isProduction = product.status.toLowerCase().includes("produccion");
  const isStandalone = product.category === "standalone";

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Volver a Productos
        </Link>

        <div className="mb-12">
          <PlatformViewer
            productName={product.productName}
            screenshot={product.screenshot}
            screenshots={product.screenshots}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                  isProduction
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-cold/10 border-cold/20 text-cold"
                }`}>
                  {product.status}
                </span>
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                  isStandalone
                    ? "bg-primary/10 border-primary/20 text-primary"
                    : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                }`}>
                  {isStandalone ? "Standalone" : "SaaS"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{product.productName}</h1>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">{product.tagline}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Sobre el producto</h2>
              <p className="text-white/60 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-white/70 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="p-6 bg-elevated/30 border border-border rounded-xl">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-white/60 bg-elevated border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {product.adopters.length > 0 && (
              <div className="p-6 bg-elevated/30 border border-border rounded-xl">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Quien ya lo usa</h3>
                <ul className="space-y-3">
                  {product.adopters.map((adopter) => (
                    <li key={adopter.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      {adopter.url ? (
                        <a href={adopter.url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors text-sm">
                          {adopter.name}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{adopter.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isStandalone && product.externalUrl ? (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="font-bold mb-2">Queres {product.productName} para tu negocio?</h3>
                <p className="text-white/50 text-sm mb-4">
                  Mira todo lo que incluye en la landing del producto.
                </p>
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 w-full justify-center"
                >
                  <ExternalLink size={16} /> Ver {product.productName}
                </a>
              </div>
            ) : (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="font-bold mb-2">Necesitas algo similar?</h3>
                <p className="text-white/50 text-sm mb-4">
                  Podemos adaptar esta plataforma a tu negocio o construir algo completamente nuevo.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 w-full justify-center"
                >
                  <MessageSquare size={16} /> Hablemos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
