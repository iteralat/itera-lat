import Image from "next/image";
import Link from "next/link";
import { Cloud, RefreshCw, HeadphonesIcon } from "lucide-react";
import { saasProducts } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

const benefits = [
  {
    icon: RefreshCw,
    title: "Actualizaciones continuas",
    description: "Nuevas funciones y mejoras sin reinstalar nada. Tu plataforma evoluciona sola.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte incluido",
    description: "Asistencia técnica y acompañamiento en la adopción desde el día uno.",
  },
  {
    icon: Cloud,
    title: "Escala con tu negocio",
    description: "Infraestructura cloud que crece con tu operación. Sin servidores propios.",
  },
];

export default function SaaSPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[{ label: "Productos", href: "/productos" }]}
          current="SaaS"
          currentColor="text-primary"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              SaaS
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Software por suscripción que resuelve problemas reales.
              Siempre actualizado, con soporte incluido y listo para usar.
            </p>
          </div>
          <GlowButton href="/contacto">Consultá por tu SaaS</GlowButton>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 bg-muted border border-primary/10 rounded-xl"
            >
              <b.icon size={24} className="text-primary mb-4" />
              <div className="font-semibold text-white mb-2">{b.title}</div>
              <p className="text-white/40 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Product cards */}
        <h2 className="text-2xl font-bold mb-8">Nuestros productos SaaS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saasProducts.map((product) => (
            <Link
              key={product.id}
              href={`/productos/saas/${product.slug}`}
              className="group bg-elevated border border-primary/12 rounded-xl overflow-hidden glow-hover transition-all duration-300 block"
            >
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                {product.screenshot ? (
                  <Image
                    src={product.screenshot}
                    alt={product.productName}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center dot-grid">
                    <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">
                      {product.productName}
                    </span>
                  </div>
                )}
              </div>

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
