"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Logo from "./Logo";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sectores", href: "#contenidos" },
  { label: "Próximas Experiencias", href: "#proximo-evento" },
  { label: "Sobre", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
  { label: "Solicite su invitación", href: "/registro", highlight: true },
];

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void
) {
  if (href.startsWith("/")) return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  onAfter?.();
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sobre el hero: navbar transparente sin logo (el hero ya muestra el isotipo grande).
  // Después del hero: barra crema con el isotipo brandbook + texto en ink-warm.
  const headerBg = scrolled
    ? "bg-[color:var(--cream)]/92 backdrop-blur-xl border-b border-[color:var(--ink-warm)]/8"
    : "bg-transparent";
  const textColor = scrolled ? "text-[color:var(--ink-warm)]" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${headerBg}`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo solo aparece después de salir del hero */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex items-center gap-3 group transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!scrolled}
            tabIndex={scrolled ? 0 : -1}
          >
            <Logo variant="dark" size={32} />
            <span className="text-[10px] uppercase tracking-[0.22em] font-light hidden sm:block text-[color:var(--ink-warm)]">
              The AI Insight Circle
            </span>
          </a>

          {/* Si no hay scroll, ocupamos el espacio izquierdo con un placeholder */}
          {!scrolled && <span aria-hidden className="w-px h-px" />}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 w-10 h-10 flex items-center justify-center hover:text-gold transition-colors duration-500 ${textColor}`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            style={isOpen ? { color: "#FFFFFF" } : undefined}
          >
            {isOpen ? (
              <X size={22} weight="light" />
            ) : (
              <List size={22} weight="light" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  onClick={(e) =>
                    handleSmoothScroll(e, link.href, () => setIsOpen(false))
                  }
                  className={`text-2xl md:text-3xl font-light tracking-[0.08em] uppercase transition-colors duration-300 ${
                    link.highlight
                      ? "text-gold hover:text-[color:var(--gold-warm)]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
