import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-itera.png"
                alt="ÍTERA"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-zinc-400 max-w-sm text-lg leading-relaxed mb-8">
              Soluciones digitales que evolucionan con vos.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hola@itera.lat"
                className="text-white hover:text-primary transition-colors font-medium inline-flex items-center gap-2"
              >
                <Mail size={16} />
                hola@itera.lat
              </a>
              <a
                href="https://wa.me/5492984394286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors font-medium inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Productos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/productos/sitios-web" className="text-zinc-400 hover:text-white transition-colors">Sitios Web</Link>
              </li>
              <li>
                <Link href="/productos/soluciones" className="text-zinc-400 hover:text-white transition-colors">Soluciones</Link>
              </li>
              <li>
                <Link href="/productos/saas" className="text-zinc-400 hover:text-white transition-colors">SaaS</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Agencia</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-white transition-colors">Servicios</Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-zinc-400 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="text-zinc-400 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#showcase" className="text-zinc-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#contacto" className="text-zinc-400 hover:text-white transition-colors">Hablemos</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-zinc-400 text-sm">
          <p>&copy; {currentYear} ÍTERA. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Patagonia, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
