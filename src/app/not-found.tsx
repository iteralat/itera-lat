import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white/10 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Página no encontrada
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-soft transition-all"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
