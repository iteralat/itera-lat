"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-semibold">Algo salió mal</h2>
      <p className="text-muted-foreground max-w-md">
        Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Intentar de nuevo
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
