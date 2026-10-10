"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alScrollear = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      tabIndex={visible ? undefined : -1}
      className={cn(
        "fixed right-6 bottom-6 z-40 flex size-11 items-center justify-center rounded-full bg-surface-2 text-muted-foreground shadow-elevation-2 transition-[opacity,transform,background-color,color] duracion-moderate hover:bg-surface-3 hover:text-foreground",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp aria-hidden className="size-4.5" />
    </button>
  );
}
