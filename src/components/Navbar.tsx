"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contenidos", href: "#contenidos" },
];

const allLinks = [
  ...navLinks,
  { label: "Registro", href: "#registro" },
];

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void
) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  onAfter?.();
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Floating pill navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6">
        <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-full px-6 py-3 flex items-center gap-8">
          {/* Logo + wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            {/* SVG logo: circle with "AI" */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#C9A84C"
                strokeWidth="1.5"
              />
              <text
                x="18"
                y="19"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#C9A84C"
                fontSize="12"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.05em"
              >
                AI
              </text>
            </svg>

            <span className="text-[11px] tracking-[0.15em] font-medium text-[#E8E4DC] uppercase whitespace-nowrap">
              The AI Insight Circle
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Registro pill button */}
            <a
              href="#registro"
              onClick={(e) => handleSmoothScroll(e, "#registro")}
              className="border border-[#C9A84C] rounded-full px-4 py-1.5 text-sm text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#050505] transition-all duration-300"
            >
              Registro
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <List size={24} weight="light" color="#E8E4DC" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-3xl bg-black/80 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={24} weight="light" color="#E8E4DC" />
              </button>
            </div>

            {/* Mobile links */}
            <motion.div
              className="flex flex-col items-center justify-center flex-1 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {allLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) =>
                    handleSmoothScroll(e, link.href, () =>
                      setMobileOpen(false)
                    )
                  }
                  className="text-3xl font-serif text-[#E8E4DC]"
                  variants={{
                    hidden: { y: 48, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
