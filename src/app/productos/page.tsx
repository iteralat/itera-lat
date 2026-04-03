import { websites, standaloneProducts, saasProducts } from "@/data/portfolio";
import { CategoryCard } from "@/components/shared/CategoryCard";

export default function ProductosPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Lo que construimos
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">
            Plataformas en producción, soluciones llave en mano y sitios web
            para todos los rubros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            name="Sitios Web"
            count={`${websites.length} demos`}
            description="Institucionales, catálogos, tiendas online. Cada sitio es rápido, indexable y administrable."
            href="/productos/sitios-web"
            colorClass="text-primary"
            borderColorClass="border-primary/12"
            ctaLabel="Ver galería"
          />
          <CategoryCard
            name="Soluciones"
            count={`${standaloneProducts.length} plataformas`}
            description="Plataformas llave en mano que digitalizan operaciones reales. Gestión, presencia digital y catálogo."
            href="/productos/soluciones"
            colorClass="text-primary"
            borderColorClass="border-primary/12"
            ctaLabel="Ver soluciones"
          />
          <CategoryCard
            name="SaaS"
            count={`${saasProducts.length} productos`}
            description="Software por suscripción. Siempre actualizado, con soporte incluido y listo para usar."
            href="/productos/saas"
            colorClass="text-primary"
            borderColorClass="border-primary/12"
            ctaLabel="Ver productos"
          />
        </div>
      </div>
    </section>
  );
}
