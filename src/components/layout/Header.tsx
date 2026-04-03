"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const productCategories = [
  {
    name: "Sitios Web",
    href: "/productos/sitios-web",
    description: "Presencia digital profesional",
    colorClass: "text-primary",
  },
  {
    name: "Soluciones",
    href: "/productos/soluciones",
    description: "Software a medida para tu negocio",
    colorClass: "text-primary",
  },
  {
    name: "SaaS",
    href: "/productos/saas",
    description: "Plataformas listas para usar",
    colorClass: "text-primary",
  },
];

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre nosotros", href: "/sobre-nosotros" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const isProductsActive = pathname === "/productos" || pathname.startsWith("/productos/");

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
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:scale-105 active:scale-95 inline-block ${
              isActive("/") ? "text-primary" : "text-white/80 hover:text-primary"
            }`}
          >
            Inicio
          </Link>

          <Link
            href="/servicios"
            className={`text-sm font-medium transition-colors hover:scale-105 active:scale-95 inline-block ${
              isActive("/servicios") ? "text-primary" : "text-white/80 hover:text-primary"
            }`}
          >
            Servicios
          </Link>

          {/* Productos dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:scale-105 active:scale-95 ${
                isProductsActive ? "text-primary" : "text-white/80 hover:text-primary"
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Productos
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel — pt-3 keeps hover area continuous */}
            <div
              className={`absolute top-full left-0 pt-3 w-64 transition-all duration-200 ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-muted border border-border/50 rounded-xl shadow-lg shadow-black/40 overflow-hidden">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <span className={`text-sm font-medium ${cat.colorClass} group-hover:opacity-90`}>
                        {cat.name}
                      </span>
                      <p className="text-xs text-white/70 mt-0.5 truncate">{cat.description}</p>
                    </div>
                  </Link>
                ))}

                <div className="border-t border-border/50 px-4 py-2 flex justify-end">
                  <Link
                    href="/productos"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-[11px] text-white/50 hover:text-primary transition-colors"
                  >
                    Ver todo →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium transition-colors hover:scale-105 active:scale-95 inline-block ${
              isActive("/sobre-nosotros") ? "text-primary" : "text-white/80 hover:text-primary"
            }`}
          >
            Sobre nosotros
          </Link>

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

            {/* Productos expandible */}
            <div className="flex flex-col items-center">
              <button
                className={`flex items-center gap-2 text-2xl font-medium ${isProductsActive ? "text-primary" : ""}`}
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                aria-expanded={isMobileProductsOpen}
              >
                Productos
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isMobileProductsOpen && (
                <div className="flex flex-col items-start gap-3 mt-4 pl-6">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex flex-col"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`text-lg font-medium ${cat.colorClass}`}>{cat.name}</span>
                      <span className="text-sm text-white/50">{cat.description}</span>
                    </Link>
                  ))}
                  <Link
                    href="/productos"
                    className="text-base text-white/60 hover:text-white transition-colors mt-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todo →
                  </Link>
                </div>
              )}
            </div>

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
