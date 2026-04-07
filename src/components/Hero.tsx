"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const entryEase = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center py-32 px-4"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: entryEase }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6 block">
            Strategic Intelligence for the AI Economy
          </span>

          <h1 className="font-serif text-5xl md:text-7xl text-[#E8E4DC] tracking-tight leading-[0.95]">
            Beyond
            <br />
            AI Hype
          </h1>

          <p className="text-lg md:text-xl text-[#8A8680] max-w-[50ch] leading-relaxed mt-8">
            Donde la inteligencia artificial deja de ser promesa y se convierte
            en criterio.
          </p>

          <a
            href="#registro"
            className="mt-10 inline-flex items-center gap-3 bg-[#C9A84C] text-[#050505] font-semibold rounded-full px-8 py-4 text-base hover:bg-[#D4B55A] active:scale-[0.98] transition-all duration-300"
          >
            Vive la experiencia
            <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
              <ArrowRight weight="bold" size={16} />
            </span>
          </a>
        </motion.div>

        {/* Right column — decorative visual */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: entryEase }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <motion.div
              className="w-80 h-80 md:w-96 md:h-96 rounded-full mx-auto flex items-center justify-center border border-white/[0.06]"
              style={{
                background:
                  "conic-gradient(from 180deg, rgba(201,168,76,0.15), rgba(201,168,76,0.02), rgba(201,168,76,0.08), transparent)",
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-48 h-48 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm flex items-center justify-center">
                <span className="font-serif text-4xl text-[#C9A84C]/60">
                  AI
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
