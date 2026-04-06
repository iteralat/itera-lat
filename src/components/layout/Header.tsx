"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
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

          {/* Mobile Menu Toggle — placeholder to keep layout, real button is outside header */}
          <div className="md:hidden w-7" />
        </div>
      </header>

      {/* Mobile toggle — outside header so it stays above the overlay */}
      <button
        className="md:hidden fixed top-0 right-0 z-[60] text-white active:scale-90 transition-transform px-6 py-6"
        style={{ top: isScrolled ? "0.5rem" : "1rem" }}
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
          if (isMobileMenuOpen) setIsMobileProductsOpen(false);
        }}
        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={28} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu size={28} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Nav — outside header to avoid backdrop-blur breaking fixed positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-[55] md:hidden flex flex-col items-center justify-center gap-8 overflow-y-auto px-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-white hover:text-primary"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Productos expandible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <button
                className={`flex items-center gap-2 text-2xl font-medium transition-colors ${isProductsActive ? "text-primary" : "text-white hover:text-primary"}`}
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                aria-expanded={isMobileProductsOpen}
              >
                Productos
                <motion.span
                  animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isMobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden w-full"
                  >
                    <ul className="flex flex-col items-center gap-3 mt-5">
                      {productCategories.map((cat, i) => (
                        <motion.li
                          key={cat.href}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                        >
                          <Link
                            href={cat.href}
                            className="text-lg text-white/70 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        </motion.li>
                      ))}
                      <motion.li
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                      >
                        <Link
                          href="/productos"
                          className="text-sm text-white/40 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Ver todo →
                        </Link>
                      </motion.li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              <Link
                href="/contacto"
                className="inline-block text-lg font-semibold bg-primary text-white px-8 py-3.5 rounded-xl hover:bg-primary-soft transition-colors shadow-[0_0_25px_rgba(255,60,0,0.3)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hablemos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
