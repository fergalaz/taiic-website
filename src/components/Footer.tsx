export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column — Logo & tagline */}
          <div>
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
                r="17"
                stroke="#C9A84C"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="18"
                y="20"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#C9A84C"
                fontSize="11"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                AI
              </text>
            </svg>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#E8E4DC] mt-3">
              THE AI INSIGHT CIRCLE
            </p>
            <p className="text-sm text-[#8A8680] mt-2">
              Strategic Intelligence for the AI Economy
            </p>
          </div>

          {/* Center column — Navigation */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A8680] mb-4 font-mono">
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

          {/* Right column — Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A8680] mb-4 font-mono">
              Contacto
            </p>
            <p className="text-sm text-[#8A8680]">
              contacto@theaiinsightcircle.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 mt-12 text-center">
          <p className="font-mono text-[11px] text-[#8A8680]">
            2026 The AI Insight Circle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
