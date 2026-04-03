import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { WebCatalog } from "@/components/webs/WebCatalog";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export default function SitiosWebPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[{ label: "Productos", href: "/productos" }]}
          current="Sitios Web"
          currentColor="text-primary"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Sitios Web
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Diseñamos sitios web para todos los rubros. Cada sitio es rápido,
              indexable y administrable. Desde institucionales hasta tiendas online.
            </p>
          </div>
          <GlowButton href="/contacto">Quiero mi sitio</GlowButton>
        </div>

        <WebCatalog />
      </div>
    </section>
  );
}
