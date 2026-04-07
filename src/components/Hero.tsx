"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const entryEase = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center py-32 px-4 overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,168,76,0.05), transparent 60%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
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

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#E8E4DC] tracking-tight leading-[0.9]">
            Beyond
            <br />
            <span className="text-[#C9A84C]/80">AI</span> Hype
          </h1>

          <p className="text-lg md:text-xl text-[#8A8680] max-w-[50ch] leading-relaxed mt-10">
            Donde la inteligencia artificial deja de ser promesa y se convierte
            en criterio.
          </p>

          <motion.a
            href="#registro"
            className="group mt-12 inline-flex items-center gap-3 bg-[#C9A84C] text-[#050505] font-semibold rounded-full px-8 py-4 text-base hover:bg-[#D4B55A] active:scale-[0.98] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Vive la experiencia
            <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight weight="bold" size={16} />
            </span>
          </motion.a>
        </motion.div>

        {/* Right column — decorative visual */}
        <motion.div
          className="lg:col-span-5 hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: entryEase }}
        >
          <div className="relative w-full aspect-square max-w-[520px]">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)",
              }}
            />

            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#C9A84C]/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Orbiting dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C9A84C]/40" />
            </motion.div>

            {/* Middle ring */}
            <motion.div
              className="absolute inset-12 rounded-full border border-white/[0.06]"
              style={{
                background:
                  "conic-gradient(from 180deg, rgba(201,168,76,0.12), rgba(201,168,76,0.02), rgba(201,168,76,0.08), transparent)",
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner core */}
            <motion.div
              className="absolute inset-24 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <span className="font-serif text-5xl text-[#C9A84C]/50 select-none">
                AI
              </span>
            </motion.div>

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#C9A84C]/30"
                style={{
                  top: `${30 + i * 20}%`,
                  left: `${20 + i * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8680]/50">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A84C]/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
