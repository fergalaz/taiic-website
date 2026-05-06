"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

interface HeroProps {
  /** Conservado por compatibilidad — el rediseño usa --gradient-hero del brandbook. */
  heroImage?: string;
  objectPosition?: string;
}

export default function Hero({}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Vignette top + bottom — sutiliza la transición */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 22%, transparent 70%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-[10px] md:text-[11px] uppercase text-gold tracking-[0.4em] mb-10 md:mb-14 font-light">
            Edición 2026 — Latin America
          </p>

          {/* Display title — mezcla regular + bold del brandbook */}
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light uppercase text-white leading-[1.05] tracking-[0.18em]">
            The AI <strong className="font-bold text-gold">Insight</strong> Circle
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-xl text-white/85 mt-12 md:mt-16 font-light tracking-wide max-w-[44ch] mx-auto">
            Debida diligencia en inteligencia artificial
            <br className="hidden md:block" /> para la alta dirección.
          </p>

          {/* Hairline + criterios */}
          <div className="mt-14 md:mt-20 flex flex-col items-center gap-6">
            <div className="h-px w-16 bg-gold/60" />
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/55 font-light flex flex-wrap items-center justify-center gap-x-5 gap-y-3 max-w-[70ch]">
              <span>40–60 participantes seleccionados</span>
              <span className="text-gold/50">·</span>
              <span>Análisis profundos por sector</span>
              <span className="text-gold/50">·</span>
              <span>Formato Chatham House</span>
            </p>
          </div>

          {/* CTA editorial — tipográfico, no pill */}
          <div className="mt-16 md:mt-20">
            <a
              href="/registro"
              className="group inline-flex flex-col items-center gap-3"
            >
              <span className="text-base md:text-lg text-white tracking-[0.18em] uppercase font-light pb-2 border-b border-gold/70 group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                Solicite su invitación
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Próximos eventos — anclado abajo, susurrado */}
      <a
        href="#proximo-evento"
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-3 text-white/70 hover:text-gold transition-colors duration-500"
      >
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/45 font-light">
          Próximas experiencias
        </span>
        <div className="text-[12px] md:text-sm font-light tracking-wide flex flex-col items-center gap-1">
          <span>Bogotá · Martes 28 de Julio</span>
          <span>Ciudad de Panamá · Jueves 30 de Julio</span>
        </div>
        <ArrowDown
          size={16}
          weight="light"
          className="text-gold/80 mt-2 group-hover:translate-y-1 transition-transform duration-500"
        />
      </a>
    </section>
  );
}
