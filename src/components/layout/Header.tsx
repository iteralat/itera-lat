"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Boton } from "@/components/primitivas";
import { mainNav } from "@/data/site";
import { pillarSummaries } from "@/data/pilares";

const claseLinkNav =
  "text-small font-medium transition-colors duracion-fast hover:text-foreground";

export function Header() {
  const [conScroll, setConScroll] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const alScrollear = () => setConScroll(window.scrollY > 24);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  // Lock de scroll con el menú mobile abierto
  useEffect(() => {
    document.body.style.overflow = menuMovilAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMovilAbierto]);

  // Cerrar todo al navegar (rAF: la page nueva ya está renderizada debajo)
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMenuMovilAbierto(false);
      setDropdownAbierto(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Cerrar dropdown con click afuera / Escape
  useEffect(() => {
    const alClickearAfuera = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownAbierto(false);
      }
    };
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownAbierto(false);
        setMenuMovilAbierto(false);
      }
    };
    document.addEventListener("mousedown", alClickearAfuera);
    document.addEventListener("keydown", alTeclear);
    return () => {
      document.removeEventListener("mousedown", alClickearAfuera);
      document.removeEventListener("keydown", alTeclear);
    };
  }, []);

  const esActiva = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const serviciosActivo = pillarSummaries.some((p) => esActiva(p.href));

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-[background-color,box-shadow] duracion-moderate",
          conScroll ? "bg-chrome/90 shadow-elevation-soft backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-wide items-center justify-between px-page-pad">
          <Link href="/" aria-label="ÍTERA — Inicio" className="shrink-0">
            <Image
              src="/images/logo-itera.png"
              alt="ÍTERA"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {/* Servicios (dropdown 4 pilares) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownAbierto(true)}
              onMouseLeave={() => setDropdownAbierto(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownAbierto(!dropdownAbierto)}
                aria-expanded={dropdownAbierto}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1",
                  claseLinkNav,
                  serviciosActivo ? "text-primary-text" : "text-muted-foreground",
                )}
              >
                Servicios
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-3.5 transition-transform duracion-fast",
                    dropdownAbierto && "rotate-180",
                  )}
                />
              </button>

              {/* pt-3 mantiene continua el área de hover */}
              <div
                className={cn(
                  "absolute top-full left-0 w-72 pt-3 transition-[opacity,transform] duracion-base",
                  dropdownAbierto
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-card bg-surface-2 py-2 shadow-elevation-2">
                  {pillarSummaries.map((pilar) => (
                    <Link
                      key={pilar.slug}
                      href={pilar.href}
                      className="block px-4 py-2.5 transition-colors duracion-fast hover:bg-surface-3"
                    >
                      <span className="block text-small font-medium">{pilar.name}</span>
                      <span className="mt-0.5 block text-meta text-faint">{pilar.audience}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  claseLinkNav,
                  esActiva(item.href) ? "text-primary-text" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}

            <Boton tamano="sm" href="/contacto">
              Hablemos
            </Boton>
          </nav>

          {/* Toggle mobile */}
          <button
            type="button"
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            aria-expanded={menuMovilAbierto}
            aria-label={menuMovilAbierto ? "Cerrar menú" : "Abrir menú"}
            className="relative z-50 -mr-2 flex size-11 items-center justify-center rounded-control text-foreground transition-colors duracion-fast hover:bg-surface-2 md:hidden"
          >
            {menuMovilAbierto ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </header>

      {/* Menú mobile: overlay full-screen, siempre montado (salida animada) */}
      <div
        aria-hidden={!menuMovilAbierto}
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background px-page-pad pt-28 pb-10 transition-opacity duracion-moderate md:hidden",
          menuMovilAbierto ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Principal (mobile)" className="grid gap-8">
          <div className="grid gap-3">
            <span className="text-eyebrow uppercase text-faint">Servicios</span>
            {pillarSummaries.map((pilar) => (
              <Link
                key={pilar.slug}
                href={pilar.href}
                tabIndex={menuMovilAbierto ? undefined : -1}
                className={cn(
                  "text-heading font-display transition-colors duracion-fast",
                  esActiva(pilar.href) ? "text-primary-text" : "text-foreground",
                )}
              >
                {pilar.name}
              </Link>
            ))}
          </div>

          <div className="grid gap-3">
            <span className="text-eyebrow uppercase text-faint">ÍTERA</span>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={menuMovilAbierto ? undefined : -1}
                className={cn(
                  "text-heading font-display transition-colors duracion-fast",
                  esActiva(item.href) ? "text-primary-text" : "text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Boton
            tamano="lg"
            href="/contacto"
            tabIndex={menuMovilAbierto ? undefined : -1}
            className="justify-self-start"
          >
            Hablemos
          </Boton>
        </nav>
      </div>
    </>
  );
}
