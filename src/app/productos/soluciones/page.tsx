import Image from "next/image";
import Link from "next/link";
import { standaloneProducts } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export default function SolucionesPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[{ label: "Productos", href: "/productos" }]}
          current="Soluciones"
          currentColor="text-primary"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Soluciones
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Plataformas llave en mano que digitalizan operaciones reales.
              Gestión, presencia digital y catálogo online — todo administrable
              desde un panel.
            </p>
          </div>
          <GlowButton href="/contacto">Consultá por tu solución</GlowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standaloneProducts.map((product) => (
            <Link
              key={product.id}
              href={`/productos/soluciones/${product.slug}`}
              className="group bg-elevated border border-primary/12 rounded-xl overflow-hidden glow-hover transition-all duration-300 block"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                {product.screenshot ? (
                  <Image
                    src={product.screenshot}
                    alt={product.productName}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center dot-grid">
                    <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                      {product.productName}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {product.screenshot && (
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-1 transition-opacity duration-500 ease-out group-hover:opacity-0">
                    <span className="text-white font-bold text-xl tracking-tight">
                      {product.productName}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {product.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-primary font-bold text-lg mb-1">
                  {product.productName}
                </div>
                <p className="text-white/40 text-sm mb-3">{product.tagline}</p>
                <p className="text-white/30 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.coverLine}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium bg-white/5 border border-border rounded-full text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Ver caso →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
