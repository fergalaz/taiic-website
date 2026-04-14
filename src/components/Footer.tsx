"use client";

import { ArrowUp, LinkedinLogo } from "@phosphor-icons/react";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contenidos", href: "#contenidos" },
  { label: "Próximo Evento", href: "#proximo-evento" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141428] pt-20 pb-10 px-4 relative">
      {/* Gold line separator at top */}
      <div className="absolute top-0 left-0 right-0 gold-separator" />

      <div className="max-w-[1400px] mx-auto">
        {/* Logo centered */}
        <div className="flex flex-col items-center mb-12">
          <svg
            width="48"
            height="48"
            viewBox="0 0 36 36"
            fill="none"
            className="mb-4"
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
          <span className="text-[11px] uppercase tracking-[0.15em] text-text-primary font-medium">
            The AI Insight Circle
          </span>
        </div>

        {/* Navigation links — horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Partner logos / text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-text-secondary/50 text-xs tracking-wide">
          <p>Una iniciativa del ecosistema MAGnitude Advisory</p>
          <span className="hidden md:block text-text-secondary/20">|</span>
          <p>Powered by BOI Events Strategic Partner</p>
        </div>

        {/* Social + Back to top */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinLogo weight="light" size={18} />
          </a>
          {/* Substack icon — text placeholder */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-[10px] font-bold"
            aria-label="Substack"
          >
            S
          </a>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mb-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-text-secondary/40 hover:text-accent transition-colors duration-300"
          >
            Volver al inicio
            <ArrowUp weight="bold" size={12} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="font-mono text-[11px] text-text-secondary/40">
            &copy; 2026 The AI Insight Circle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
