import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageSquare } from "lucide-react";
import { platforms } from "@/data/portfolio";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((p) => p.id === slug);
  if (!platform) return { title: "No encontrado | ÍTERA" };
  return {
    title: `${platform.productName} | ÍTERA`,
    description: platform.tagline,
  };
}

export default async function PlatformDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms.find((p) => p.id === slug);
  if (!platform) notFound();

  const isProduction = platform.status.toLowerCase().includes("producción");

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/plataformas"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Volver a Plataformas
        </Link>

        {/* Visor de screenshots — full width */}
        <div className="mb-12">
          <PlatformViewer
            productName={platform.productName}
            screenshot={platform.screenshot}
            screenshots={platform.screenshots}
          />
        </div>

        {/* Grid: contenido + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                  isProduction
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-cold/10 border-cold/20 text-cold"
                }`}>
                  {platform.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{platform.productName}</h1>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">{platform.tagline}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Sobre el producto</h2>
              <p className="text-white/60 text-lg leading-relaxed">{platform.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
              <ul className="space-y-4">
                {platform.features.map((feature) => (
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

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {/* Tecnologías */}
            <div className="p-6 bg-elevated/30 border border-border rounded-xl">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {platform.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-white/60 bg-elevated border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Adopters */}
            {platform.adopters.length > 0 && (
              <div className="p-6 bg-elevated/30 border border-border rounded-xl">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">¿Quién ya lo usa?</h3>
                <ul className="space-y-3">
                  {platform.adopters.map((adopter) => (
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

            {/* CTA */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h3 className="font-bold mb-2">¿Necesitás algo similar?</h3>
              <p className="text-white/50 text-sm mb-4">
                Podemos adaptar esta plataforma a tu negocio o construir algo completamente nuevo.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 w-full justify-center"
              >
                <MessageSquare size={16} /> Hablemos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
