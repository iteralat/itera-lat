import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { mainNav, siteConfig } from "@/data/site";
import { pillarSummaries } from "@/data/pilares";

const claseLinkFooter =
  "text-small text-muted-foreground transition-colors duracion-fast hover:text-foreground";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-chrome">
      <div className="mx-auto w-full max-w-wide px-page-pad pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Marca + contacto */}
          <div>
            <Link href="/" aria-label="ÍTERA — Inicio" className="inline-block">
              <Image
                src="/images/logo-itera.png"
                alt="ÍTERA"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-body text-muted-foreground">
              Construimos el software de tu negocio: webs, sistemas a medida e IA aplicada.
            </p>
            <div className="mt-6 grid justify-items-start gap-3">
              <a href={`mailto:${siteConfig.email}`} className={`${claseLinkFooter} inline-flex items-center gap-2`}>
                <Mail aria-hidden className="size-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${claseLinkFooter} inline-flex items-center gap-2`}
              >
                <MessageCircle aria-hidden className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className="text-small font-semibold">Servicios</h2>
            <ul className="mt-5 grid gap-3">
              {pillarSummaries.map((pilar) => (
                <li key={pilar.slug}>
                  <Link href={pilar.href} className={claseLinkFooter}>
                    {pilar.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa">
            <h2 className="text-small font-semibold">ÍTERA</h2>
            <ul className="mt-5 grid gap-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={claseLinkFooter}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className={claseLinkFooter}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="linea-divisoria mt-14" />
        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-meta text-faint md:flex-row md:items-center">
          <p>© {anio} ÍTERA. Todos los derechos reservados.</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
