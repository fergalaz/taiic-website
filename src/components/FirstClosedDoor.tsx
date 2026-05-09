"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FirstClosedDoor() {
  return (
    <section
      id="first-closed-door"
      className="bg-[color:var(--ink-warm)] text-white"
    >
      {/* Spread editorial 02 — puertas. Grayscale para unificar tonalidad. */}
      <Spread
        src="/imagery/02-closed-door.jpg"
        alt="Puertas dobles entreabiertas con luz cálida que se filtra"
        ratio="cinemascope"
        caption="First closed-door edition"
        grayscale
      />

      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.p
            className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-white/55 mb-14 md:mb-16 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Latin America · 2026
          </motion.p>

          <motion.h2
            className="font-light leading-[1.15] uppercase mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <span className="block text-gold text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-[0.04em]">
              Primera edición
            </span>
            <span className="block mt-6 md:mt-8 text-white text-xl sm:text-3xl md:text-[2.4rem] lg:text-[2.85rem] tracking-[0.16em]">
              The AI Insight Circle
            </span>
            <span className="block mt-6 md:mt-8 text-gold/85 text-base sm:text-xl md:text-2xl lg:text-[1.6rem] tracking-[0.36em] font-light">
              Acceso por invitación
            </span>
          </motion.h2>

          <div className="mt-16 md:mt-20 flex justify-center">
            <div className="h-px w-16 bg-gold/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
