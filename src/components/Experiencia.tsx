"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const dueDiligenceItems = [
  { numero: "01", titulo: "Evidencia" },
  { numero: "02", titulo: "Acceso a expertos" },
  { numero: "03", titulo: "Análisis sectorial" },
  { numero: "04", titulo: "Contextualización a LATAM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experiencia() {
  return (
    <section id="experiencia" className="bg-cream text-[color:var(--ink-warm)]">
      {/* Spread editorial 01 — transición desde el Hero */}
      <Spread
        src="/imagery/01-hero-spread.jpg"
        alt="Sala privada con vista al skyline al atardecer"
        ratio="cinemascope"
        caption="The AI Insight Circle Experience"
        priority
      />

      {/* Bloque 2 — Tesis principal (columna estrecha centrada) */}
      <div className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[820px] mx-auto text-center">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-12 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Una tesis
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[26ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            La IA ya no es una cuestión tecnológica; es{" "}
            <strong className="font-bold">una cuestión de modelo de negocio</strong>.
          </motion.h2>

          <div className="mt-14 flex justify-center">
            <div className="h-px w-12 bg-[color:var(--ink-warm)]/30" />
          </div>
        </div>
      </div>

      {/* Bloque 3 — Inside the Due-Diligence Room */}
      <div className="px-6 md:px-10 pb-32 md:pb-44">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-light text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Inside the due-diligence room
          </motion.p>

          <motion.h3
            id="inside-the-room"
            className="text-2xl md:text-[2.25rem] font-light tracking-[0.02em] leading-[1.3] max-w-[34ch] mx-auto text-center mb-20 md:mb-28"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            Cuatro disciplinas que definen{" "}
            <strong className="font-bold">la conversación</strong>.
          </motion.h3>

          {/* Lista numerada con hairlines — estilo editorial */}
          <ul className="border-t border-[color:var(--ink-warm)]/15">
            {dueDiligenceItems.map((item, index) => (
              <motion.li
                key={item.titulo}
                className="border-b border-[color:var(--ink-warm)]/15"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.06,
                }}
              >
                <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-6 items-baseline py-7 md:py-9">
                  <span className="text-gold text-[11px] md:text-xs tracking-[0.2em] font-light">
                    {item.numero}
                  </span>
                  <span className="text-xl md:text-2xl font-light tracking-[0.01em]">
                    {item.titulo}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
