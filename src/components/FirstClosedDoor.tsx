"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FirstClosedDoor() {
  return (
    <section id="first-closed-door" className="bg-[color:var(--ink-warm)] text-white">
      {/* Spread editorial 02 — title spread "First Closed-Door" */}
      <Spread
        src="/imagery/02-closed-door.jpg"
        alt="Puertas dobles entreabiertas con luz cálida que se filtra"
        ratio="cinemascope"
        caption="First closed-door edition"
      />

      <div className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[820px] mx-auto text-center">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-10 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Primera edición · Acceso por invitación
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[26ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            El impacto cuantitativo de la IA en{" "}
            <strong className="font-bold">los servicios legales</strong>.
          </motion.h2>

          <div className="mt-14 flex justify-center">
            <div className="h-px w-12 bg-gold/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
