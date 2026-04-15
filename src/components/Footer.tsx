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
    <footer className="bg-[#141428] pt-24 pb-10 px-4 relative">
      {/* Gold line separator at top */}
      <div className="absolute top-0 left-0 right-0 gold-separator" />

      <div className="max-w-[1400px] mx-auto">
        {/* Logo centered — bigger */}
        <div className="flex flex-col items-center mb-14">
          <svg
            width="80"
            height="80"
            viewBox="0 0 36 36"
            fill="none"
            className="mb-5"
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
          <span className="text-sm md:text-base uppercase tracking-[0.2em] text-text-primary font-medium">
            The AI Insight Circle
          </span>
        </div>

        {/* Navigation links — horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-14">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Partner logos / text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-14">
          {/* MAGnitude Advisory */}
          <div className="flex items-center gap-4 text-text-primary/70">
            <div className="w-12 h-12 rounded-md border border-accent/30 bg-accent/5 flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-accent/60">
              Logo
            </div>
            <p className="text-sm md:text-base font-light tracking-wide">
              Una iniciativa del ecosistema
              <br className="hidden md:block" />
              <span className="font-medium text-text-primary">
                MAGnitude Advisory
              </span>
            </p>
          </div>

          <span className="hidden md:block text-text-secondary/30 text-2xl">
            |
          </span>

          {/* BOI Events */}
          <div className="flex items-center gap-4 text-text-primary/70">
            <div className="w-12 h-12 rounded-md border border-accent/30 bg-accent/5 flex items-center justify-center text-[10px] font-mono uppercase tracking-wider text-accent/60">
              Logo
            </div>
            <p className="text-sm md:text-base font-light tracking-wide">
              Powered by
              <br className="hidden md:block" />
              <span className="font-medium text-text-primary">
                BOI Events Strategic Partner
              </span>
            </p>
          </div>
        </div>

        {/* Social + Back to top */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/[0.1] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinLogo weight="light" size={20} />
          </a>
          {/* Substack icon — text placeholder */}
          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/[0.1] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs font-bold"
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
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-text-secondary/50 hover:text-accent transition-colors duration-300"
          >
            Volver al inicio
            <ArrowUp weight="bold" size={12} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="font-mono text-xs text-text-secondary/50">
            &copy; 2026 The AI Insight Circle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
