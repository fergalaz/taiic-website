"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  /** Imagen de fondo (full-bleed). Default: esfera al costado derecho. */
  heroImage?: string;
  objectPosition?: string;
}

const doors = [
  { label: "The Circle — the private room", href: "#circle" },
  { label: "The Forum — the open program", href: "#forum" },
];

export default function Hero({
  heroImage = "/imagery/16-hero-sphere-side-PREVIEW.jpg",
  objectPosition = "70% center",
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-ink"
    >
      {/* Background — esfera al costado, nunca sobre el mensaje */}
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
        {/* Overlay navy — deja la esfera a baja opacidad y asegura contraste
            del texto (más denso a la izquierda, donde vive el mensaje) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,20,42,0.94) 0%, rgba(20,20,42,0.86) 45%, rgba(20,20,42,0.62) 100%)",
          }}
        />
      </div>

      {/* Content — la tesis abre la página, alineada a la izquierda */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 pt-32 pb-20 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-[720px]"
        >
          <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-light tracking-[0.01em] leading-[1.12] text-white">
            Not another AI conference.{" "}
            <strong className="font-bold">
              Due diligence before adoption.
            </strong>
          </h1>

          <p className="mt-8 md:mt-10 text-base md:text-lg text-white/70 font-light leading-[1.8] max-w-[58ch]">
            The AI Insight Circle is where senior leadership across Latin
            America and the Caribbean examines the evidence on artificial
            intelligence before adoption decisions are&nbsp;made.
          </p>

          <p className="mt-4 text-base md:text-lg text-white/90 font-normal tracking-[0.01em]">
            Measured performance. Regulatory risk. Economic impact.
          </p>

          <p className="mt-8 md:mt-10 text-[11px] md:text-xs uppercase tracking-[0.32em] text-gold font-bold">
            Peers &middot; Evidence &middot; Method
          </p>

          {/* Las dos puertas — enlaces de texto separados por filete dorado */}
          <div className="mt-10 md:mt-12 pt-6 border-t border-gold/40 flex flex-wrap gap-x-10 gap-y-4">
            {doors.map((door) => (
              <a
                key={door.href}
                href={door.href}
                className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70 hover:text-gold transition-colors duration-500 font-light"
              >
                {door.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
