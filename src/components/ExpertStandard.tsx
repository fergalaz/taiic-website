"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const standards = [
  {
    titulo: "Investigación revisada por pares",
    detalle:
      "Cada speaker proviene de instituciones donde el rigor académico es condición de entrada, no resultado.",
  },
  {
    titulo: "Implementación comprobada o autoridad estratégica",
    detalle:
      "Hablamos de IA aplicada — no de promesas. Track record verificable o liderazgo institucional reconocido.",
  },
  {
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
    <section
      id="expert-standard"
      className="bg-paper text-[color:var(--ink-warm)]"
    >
      {/* Spread editorial 04 — manos sobre documento. Grayscale para tono editorial conceptual. */}
      <Spread
        src="/imagery/04-expert-standard.jpg"
        alt="Manos sobre documento iluminado por lámpara dorada en sala de directorio"
        ratio="cinemascope"
        caption="Expert standard"
        grayscale
      />

      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Expert standard
            </motion.p>

            <motion.h2
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2] max-w-[28ch] mx-auto"
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
                <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-light tracking-[0.01em] leading-[1.3]">
                  {s.titulo}
                </h3>
                <p className="text-base md:text-lg text-[color:var(--ink-warm)]/65 leading-[1.7] font-light">
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
