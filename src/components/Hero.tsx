"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

interface HeroProps {
  /** Imagen de fondo (full-bleed). Default: silueta + skyline. */
  heroImage?: string;
  objectPosition?: string;
}

export default function Hero({
  heroImage = "/imagery/13-hero-sphere-ext-PREVIEW.jpg",
  objectPosition = "center top",
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-end justify-center overflow-hidden bg-black"
    >
      {/* Background photo — silueta + skyline */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Sculptural spiral sphere in light tones"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition }}
          className="object-cover"
        />
        {/* Editorial overlay — parte alta despejada para ver la foto,
            mitad inferior oscura para legibilidad del bloque de textos */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.62) 62%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* Content anclado abajo (feedback cliente: aire arriba para ver la foto);
          pb da espacio al scroll cue */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 pb-28 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center"
        >
          {/* Lockup vertical brandbook — isotipo + wordmark (rev3 cliente) */}
          <h1 className="sr-only">The AI Insight Circle</h1>
          <Image
            src="/brand/taiic-lockup-vertical.png"
            alt="The AI Insight Circle"
            width={1813}
            height={892}
            priority
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 440px, 64vw"
            className="w-[64vw] max-w-[480px] h-auto"
          />

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-white/90 mt-10 md:mt-12 font-light tracking-wide max-w-[48ch]">
            Not another AI conference.
            <br className="hidden md:block" /> Due diligence before adoption.
          </p>

          {/* Lede — client content Sept 2026 */}
          <p className="text-sm md:text-base text-white/70 mt-6 md:mt-8 font-light leading-[1.8] max-w-[62ch]">
            The AI Insight Circle is where senior leadership across Latin
            America and the Caribbean examines the evidence on artificial
            intelligence — measured performance, regulatory risk, economic
            impact — before adoption decisions are made.
          </p>

          {/* Triad */}
          <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-gold mt-8 md:mt-10 font-bold">
            Peers &middot; Evidence &middot; Method
          </p>
        </motion.div>
      </div>

      {/* Scroll cue — minimal */}
      <a
        href="#premise"
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-3 text-white/65 hover:text-gold transition-colors duration-500"
        aria-label="Continue to content"
      >
        <span className="text-[10px] uppercase tracking-[0.32em] font-light">
          Continue
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
