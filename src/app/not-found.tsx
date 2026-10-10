import { ArrowLeft } from "lucide-react";
import { Boton, Seccion } from "@/components/primitivas";

export default function NotFound() {
  return (
    <Seccion className="pt-40 text-center" aria-label="Página no encontrada">
      <p aria-hidden className="text-display font-display text-surface-3">
        404
      </p>
      <h1 className="mt-2 text-title font-display">Página no encontrada</h1>
      <p className="mx-auto mt-4 max-w-prose text-lead text-muted-foreground">
        La página que buscás no existe o fue movida.
      </p>
      <div className="mt-8 flex justify-center">
        <Boton href="/">
          <ArrowLeft aria-hidden className="size-4" />
          Volver al inicio
        </Boton>
      </div>
    </Seccion>
  );
}
