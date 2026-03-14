"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const portfolioLinks = [
  // { name: "Webs", href: "/webs" }, // TODO: reactivar cuando las demos estén listas
  { name: "Plataformas", href: "/plataformas" },
  { name: "Herramientas", href: "/herramientas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const isPortfolioActive = portfolioLinks.some(
    (l) => pathname === l.href || pathname.startsWith(l.href + "/")
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 hover:scale-105 active:scale-95 transition-transform">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <ArrowUpRight size={20} strokeWidth={3} />
          </div>
          <span className="font-bold text-xl tracking-wide">ÍTERA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:scale-105 active:scale-95 inline-block ${
              pathname === "/" ? "text-primary" : "text-white/80 hover:text-primary"
            }`}
          >
            Inicio
          </Link>

          {/* Portfolio dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:scale-105 active:scale-95 ${
                isPortfolioActive ? "text-primary" : "text-white/80 hover:text-primary"
              }`}
            >
              Portfolio
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-elevated border border-border rounded-lg py-2 min-w-[180px] shadow-xl">
                {portfolioLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-primary bg-primary/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#nosotros"
            className="text-sm font-medium text-white/80 hover:text-primary transition-colors hover:scale-105 active:scale-95 inline-block"
          >
            Sobre ÍTERA
          </Link>

          <Link
            href="/#contacto"
            className="text-sm font-semibold bg-white text-background px-5 py-2.5 rounded-sm hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 inline-block"
          >
            Hablemos
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-[60] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-[55] flex flex-col items-center justify-center gap-6 overflow-y-auto">
            <Link
              href="/"
              className={`text-2xl font-medium ${pathname === "/" ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>

            {/* Portfolio accordion */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                className={`text-2xl font-medium flex items-center gap-2 ${
                  isPortfolioActive ? "text-primary" : ""
                }`}
              >
                Portfolio
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${isMobilePortfolioOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobilePortfolioOpen && (
                <div className="flex flex-col items-center gap-4 mt-4">
                  {portfolioLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium text-white/60 hover:text-white ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-primary"
                          : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#nosotros"
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre ÍTERA
            </Link>

            <Link
              href="/#contacto"
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
