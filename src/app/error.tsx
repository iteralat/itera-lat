"use client";

import { Boton } from "@/components/primitivas";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-page-pad pt-20 text-center">
      <h2 className="text-heading font-display">Algo salió mal</h2>
      <p className="max-w-prose text-body text-muted-foreground">
        Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio.
      </p>
      <div className="mt-2 flex gap-4">
        <Boton onClick={reset}>Intentar de nuevo</Boton>
        <Boton variante="secundario" href="/">
          Ir al inicio
        </Boton>
      </div>
    </div>
  );
}
