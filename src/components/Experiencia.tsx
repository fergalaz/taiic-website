"use client";

import { motion } from "framer-motion";

const pilares = [
  {
    titulo: "Evidencia, no especulación",
    bullets: [
      "Datos empíricos.",
      "ROI medible.",
      "Casos reales.",
      "Cada sesión está diseñada para producir claridad operativa, no entusiasmo vacío.",
    ],
  },
  {
    titulo: "Acceso restringido",
    bullets: [
      "40–60 participantes por edición.",
      "Managing partners y directivos C-Level de las firmas y empresas más influyentes de la región.",
      "Sin vendedores en el escenario.",
      "Sin audiencia pasiva.",
    ],
  },
  {
    titulo: "Contexto LATAM",
    bullets: [
      "Jurisdicciones.",
      "Economías emergentes.",
      "Estructuras institucionales propias.",
      "El discurso global sobre IA generativa no aplica sin traducción y es aquí donde se hace esa traducción.",
    ],
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
          className="font-mono text-xs md:text-[13px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Experiencia The AI Insight Circle
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
          className="text-lg md:text-xl text-text-primary/80 max-w-[72ch] leading-relaxed mb-20 font-light"
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

        {/* Three pillars — bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {pilares.map((pilar, index) => (
            <motion.div
              key={pilar.titulo}
              className="bg-accent/[0.04] border border-accent/15 rounded-2xl p-6 md:p-8"
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
              <h3 className="text-base md:text-lg font-bold text-accent tracking-wide uppercase mb-5">
                {pilar.titulo}
              </h3>
              <ul className="space-y-3">
                {pilar.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base md:text-[17px] text-text-primary/90 leading-relaxed font-light"
                  >
                    <span className="text-accent shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
