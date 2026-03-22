"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre nosotros", href: "/sobre-nosotros" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent border-white/[0.06] py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 hover:scale-105 active:scale-95 transition-transform">
          <Image
            src="/images/logo-itera.png"
            alt="ÍTERA"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:scale-105 active:scale-95 inline-block ${
                isActive(link.href) ? "text-primary" : "text-white/80 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contacto"
            className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-soft transition-all hover:scale-105 active:scale-95 inline-block shadow-[0_0_15px_rgba(255,60,0,0.25)]"
          >
            Hablemos
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-[60] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-[55] flex flex-col items-center justify-center gap-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-medium ${isActive(link.href) ? "text-primary" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contacto"
              className="mt-4 text-xl font-semibold bg-primary text-white px-8 py-4 rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hablemos
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
