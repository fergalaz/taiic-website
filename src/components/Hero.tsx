"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background — abstract pattern placeholder (replace with video/brandbook image) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1A1A33 0%, #0F0F24 40%, #1A1A33 100%)",
        }}
      />

      {/* Decorative vertical bars — brandbook reference */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        <div className="flex gap-6 h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-full"
              style={{
                background: `linear-gradient(180deg, transparent, #E5B765 ${30 + i * 5}%, transparent)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1A1A33]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.08em] uppercase text-text-primary leading-tight">
            The AI Insight Circle
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-text-primary/90 mt-6 font-light tracking-wide">
            Donde la evidencia define la estrategia.
          </p>

          {/* Support text */}
          <p className="text-base md:text-lg text-text-secondary max-w-[70ch] mx-auto mt-8 leading-relaxed font-light">
            Foro estrategico exclusivo para lideres de los sectores clave de America Latina.
            Impacto cuantificable de la inteligencia artificial generativa (GenAI) en las industrias
            y sectores criticos. 40-60 decisores. Una conversacion que la region necesita.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            {/* Primary CTA */}
            <motion.a
              href="/registro"
              className="group inline-flex items-center gap-3 bg-accent text-[#1A1A33] font-semibold rounded-full px-8 py-4 text-base hover:bg-accent-hover active:scale-[0.98] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Solicitar Invitacion
              <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight weight="bold" size={16} />
              </span>
            </motion.a>
          </div>

          {/* Secondary CTA — next event teaser */}
          <div className="mt-10 flex items-center justify-center gap-2 text-text-secondary/60 text-sm">
            <span className="font-light tracking-wide">
              Proximo evento &bull; Ciudad por confirmar &bull; 2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} weight="light" className="text-accent/40" />
        </motion.div>
      </motion.div>

      {/* Gold line separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 gold-separator" />
    </section>
  );
}
