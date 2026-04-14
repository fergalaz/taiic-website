"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contenidos", href: "#contenidos" },
  { label: "Contacto", href: "#contacto" },
  { label: "Solicitar Invitacion", href: "/registro", highlight: true },
];

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void
) {
  if (href.startsWith("/")) return; // Let Next.js handle page navigation
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  onAfter?.();
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed transparent header */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="shrink-0"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="#E5B765"
                strokeWidth="1.5"
              />
              <text
                x="18"
                y="20"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#E5B765"
                fontSize="11"
                fontWeight="700"
                fontFamily="'Gilroy', 'Montserrat', sans-serif"
                letterSpacing="0.05em"
              >
                AI
              </text>
            </svg>
            <span className="text-[11px] uppercase tracking-[0.15em] text-text-primary font-medium hidden sm:block">
              The AI Insight Circle
            </span>
          </a>

          {/* Hamburger button — always visible */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <X size={24} weight="light" />
            ) : (
              <List size={24} weight="light" />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#1A1A33]/95 backdrop-blur-3xl flex items-center justify-center"
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
                  className={`text-2xl md:text-4xl font-light tracking-wide transition-colors duration-300 ${
                    link.highlight
                      ? "text-accent hover:text-accent-hover"
                      : "text-text-primary/80 hover:text-text-primary"
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
