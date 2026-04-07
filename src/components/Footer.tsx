"use client";

import { ArrowUp } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-20 pb-10 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column — Logo & tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
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
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#E8E4DC] font-medium">
                The AI Insight Circle
              </span>
            </div>
            <p className="text-sm text-[#8A8680] max-w-[35ch] leading-relaxed">
              Strategic Intelligence for the AI Economy. Experiencias exclusivas
              para ejecutivos C-Level.
            </p>
          </div>

          {/* Center column — Navigation */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8680]/60 mb-5">
              Navegacion
            </p>
            <div className="space-y-3">
              <a
                href="#experiencia"
                className="block text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300"
              >
                Experiencia
              </a>
              <a
                href="#equipo"
                className="block text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300"
              >
                Equipo
              </a>
              <a
                href="#contenidos"
                className="block text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300"
              >
                Contenidos
              </a>
              <a
                href="#registro"
                className="block text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300"
              >
                Registro
              </a>
            </div>
          </div>

          {/* Right column — Contact + back to top */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8680]/60 mb-5">
              Contacto
            </p>
            <p className="text-sm text-[#8A8680] hover:text-[#E8E4DC] transition-colors duration-300">
              contacto@theaiinsightcircle.com
            </p>

            {/* Back to top */}
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-[#8A8680]/50 hover:text-[#C9A84C] transition-colors duration-300"
            >
              Volver al inicio
              <ArrowUp weight="bold" size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[#8A8680]/50">
            2026 The AI Insight Circle. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[11px] text-[#8A8680]/30">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
