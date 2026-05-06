"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const standards = [
  {
    numero: "01",
    titulo: "Investigación revisada por pares",
    detalle:
      "Cada speaker proviene de instituciones donde el rigor académico es condición de entrada, no resultado.",
  },
  {
    numero: "02",
    titulo: "Implementación comprobada o autoridad estratégica",
    detalle:
      "Hablamos de IA aplicada — no de promesas. Track record verificable o liderazgo institucional reconocido.",
  },
  {
    numero: "03",
    titulo: "Sin ruido comercial",
    detalle:
      "Cero pitch, cero patrocinios disfrazados de contenido. Solo análisis con incentivos alineados al asistente.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ExpertStandard() {
  return (
    <section id="expert-standard" className="bg-paper text-[color:var(--ink-warm)]">
      {/* Spread editorial 04 — manos sobre documento + lámpara dorada */}
      <Spread
        src="/imagery/04-expert-standard.jpg"
        alt="Manos sobre documento iluminado por lámpara dorada en sala de directorio"
        ratio="cinemascope"
        caption="Expert standard"
      />

      <div className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20 md:mb-28">
            <motion.p
              className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Expert standard
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[28ch] mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              Tres filtros que definen{" "}
              <strong className="font-bold">quién toma la palabra</strong>.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 md:gap-x-14 gap-y-14 border-t border-[color:var(--ink-warm)]/15 pt-12 md:pt-16">
            {standards.map((s, index) => (
              <motion.div
                key={s.titulo}
                className="flex flex-col gap-5"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.1 + index * 0.08,
                }}
              >
                <span className="text-gold text-[11px] tracking-[0.22em] font-light">
                  {s.numero}
                </span>
                <h3 className="text-xl md:text-2xl font-light tracking-[0.01em] leading-[1.3]">
                  {s.titulo}
                </h3>
                <p className="text-sm md:text-base text-[color:var(--ink-warm)]/65 leading-[1.7] font-light">
                  {s.detalle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
