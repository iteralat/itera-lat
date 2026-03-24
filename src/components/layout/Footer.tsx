import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <ArrowUpRight size={20} strokeWidth={3} />
              </div>
              <span className="font-bold text-2xl tracking-wide">ÍTERA</span>
            </Link>
            <p className="text-zinc-400 max-w-sm text-lg leading-relaxed mb-8">
              Soluciones digitales que evolucionan con vos.
            </p>
            <a
              href="mailto:hola@itera.lat"
              className="text-white hover:text-primary transition-colors text-lg font-medium inline-flex items-center gap-2"
            >
              hola@itera.lat
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Productos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/productos" className="text-zinc-400 hover:text-white transition-colors">Todos los productos</Link>
              </li>
              <li>
                <a href="https://desk.itera.lat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                  IteraDesk <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://link.itera.lat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                  IteraLink <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://shop.itera.lat" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                  IteraShop <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://iteralex.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                  IteraLex <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
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
