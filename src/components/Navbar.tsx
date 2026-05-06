"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

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

  // Sobre el hero: navbar transparente + texto blanco.
  // A partir del scroll: barra crema con backdrop blur + texto en ink-warm.
  const headerBg = scrolled
    ? "bg-[color:var(--cream)]/90 backdrop-blur-xl border-b border-[color:var(--ink-warm)]/8"
    : "bg-transparent";
  const textColor = scrolled ? "text-[color:var(--ink-warm)]" : "text-white";
  const strokeColor = scrolled ? "var(--ink-warm)" : "#FFFFFF";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${headerBg}`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 36 36"
              fill="none"
              className="shrink-0 transition-colors duration-500"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="var(--gold)"
                strokeWidth="1.2"
              />
              <text
                x="18"
                y="20"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--gold)"
                fontSize="11"
                fontWeight="700"
                fontFamily="'Gilroy', 'Inter', sans-serif"
                letterSpacing="0.05em"
              >
                AI
              </text>
            </svg>
            <span
              className={`text-[10px] uppercase tracking-[0.22em] font-light hidden sm:block transition-colors duration-500 ${textColor}`}
            >
              The AI Insight Circle
            </span>
          </a>

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
            {/* Stroke color hint para SVG sin clases */}
            <span className="hidden" data-stroke={strokeColor} />
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
            className="fixed inset-0 z-40 bg-[color:var(--ink-warm)]/95 backdrop-blur-3xl flex items-center justify-center"
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
