"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";
import Logo from "./Logo";

interface HeroProps {
  /** Imagen de fondo (full-bleed). Default: silueta + skyline. */
  heroImage?: string;
  objectPosition?: string;
}

export default function Hero({
  heroImage = "/imagery/01-hero-spread.jpg",
  objectPosition = "center",
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background photo — silueta + skyline */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Sala privada con vista al skyline al atardecer"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition }}
          className="object-cover"
        />
        {/* Editorial overlay — oscurece levemente el centro para legibilidad del título */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center"
        >
          {/* Isotipo brandbook — original */}
          <Logo variant="light" size={84} className="mb-12 md:mb-16" />

          {/* Display title — mezcla regular + bold del brandbook */}
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[6.25rem] font-light uppercase text-white leading-[1.04] tracking-[0.16em] md:tracking-[0.18em]">
            The AI <strong className="font-bold text-gold">Insight</strong> Circle
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-white/90 mt-12 md:mt-16 font-light tracking-wide max-w-[44ch]">
            Debida diligencia en inteligencia artificial
            <br className="hidden md:block" /> para la alta dirección.
          </p>
        </motion.div>
      </div>

      {/* Scroll cue — minimal */}
      <a
        href="#experiencia"
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-3 text-white/65 hover:text-gold transition-colors duration-500"
        aria-label="Ver experiencia"
      >
        <span className="text-[10px] uppercase tracking-[0.32em] font-light">
          Continuar
        </span>
        <ArrowDown
          size={16}
          weight="light"
          className="text-gold/80 group-hover:translate-y-1 transition-transform duration-500"
        />
      </a>
    </section>
  );
}
