"use client";

import { motion } from "framer-motion";
import {
  ChartBar,
  LockKey,
  GlobeHemisphereWest,
} from "@phosphor-icons/react";

const pilares = [
  {
    icon: ChartBar,
    titulo: "Evidencia, no especulación",
    texto:
      "Datos empíricos. ROI medible. Casos reales. Cada sesión está diseñada para producir claridad operativa, no entusiasmo vacío.",
  },
  {
    icon: LockKey,
    titulo: "Acceso restringido",
    texto:
      "40–60 participantes por edición. Managing partners y directivos C-Level de las firmas y empresas más influyentes de la región. Sin vendedores en el escenario. Sin audiencia pasiva.",
  },
  {
    icon: GlobeHemisphereWest,
    titulo: "Contexto LATAM",
    texto:
      "Jurisdicciones. Economías emergentes. Estructuras institucionales propias. El discurso global sobre IA generativa no aplica sin traducción. Aquí se hace esa traducción.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Gold separator */}
        <div className="gold-separator mb-16" />

        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Experiencia
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold tracking-wide leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        >
          Esto no es una conferencia.
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-text-secondary max-w-[70ch] leading-relaxed mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          Es un espacio de decisión. Curado para quienes dirigen las firmas y
          empresas de América Latina y necesitan claridad—no ruido—sobre cómo la
          inteligencia artificial generativa está redefiniendo el modelo de negocio
          de sus sectores.
        </motion.p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pilares.map((pilar, index) => (
            <motion.div
              key={pilar.titulo}
              className="group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.15 + index * 0.1,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <pilar.icon weight="light" size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary tracking-wide uppercase mb-3">
                {pilar.titulo}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {pilar.texto}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
