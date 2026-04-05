import { notFound } from "next/navigation";
import { websites } from "@/data/portfolio";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CaseStudy } from "@/components/shared/CaseStudy";
import { PlatformViewer } from "@/components/plataformas/PlatformViewer";
import { GlowButton } from "@/components/option-2/ui/GlowButton";

export async function generateStaticParams() {
  return websites
    .filter((w) => w.featured)
    .map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = websites.find((w) => w.slug === slug && w.featured);
  if (!site) return {};
  return {
    title: `${site.productName} — Sitios Web`,
    description: site.description,
    openGraph: {
      title: `${site.productName} — Sitios Web`,
      description: site.description,
    },
    alternates: { canonical: `/productos/sitios-web/${slug}` },
  };
}

export default async function WebCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = websites.find((w) => w.slug === slug && w.featured);
  if (!site) notFound();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: "Sitios Web", href: "/productos/sitios-web" },
          ]}
          current={site.productName}
          currentColor="text-primary"
        />

        <div className="mt-8 mb-8">
          <PlatformViewer
            productName={site.productName}
            screenshot={site.screenshot}
            screenshots={site.screenshots}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{site.productName}</h1>
        <p className="text-white/40 text-lg mb-2">{site.tagline}</p>
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
          {site.niche}
        </span>

        <p className="text-white/50 leading-relaxed max-w-3xl mb-10">{site.description}</p>

        {site.caseStudy && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Caso de estudio</h2>
            <CaseStudy
              challenge={site.caseStudy.challenge}
              solution={site.caseStudy.solution}
              result={site.caseStudy.result}
            />
          </div>
        )}

        <div className="flex gap-4">
          {site.url && (
            <GlowButton href={site.url} external>Ver sitio en vivo</GlowButton>
          )}
          <GlowButton href="/contacto" variant="outline">Quiero un sitio así</GlowButton>
        </div>
      </div>
    </section>
  );
}
