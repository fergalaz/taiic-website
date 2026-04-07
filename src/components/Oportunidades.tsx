"use client";

import { motion } from "framer-motion";
import {
  ChartLineUp,
  ShieldWarning,
  Translate,
  Handshake,
} from "@phosphor-icons/react";

const cards = [
  {
    icon: ChartLineUp,
    title: "Analizar el impacto medible de la IA",
    description:
      "Evaluacion concreta del retorno de inversion y transformacion digital en distintas industrias.",
    colSpan: "md:col-span-7",
    delay: 0,
  },
  {
    icon: ShieldWarning,
    title: "Anticipar riesgos estrategicos",
    description:
      "Identificacion temprana de amenazas y oportunidades en contextos de alta incertidumbre tecnologica.",
    colSpan: "md:col-span-5",
    delay: 0.1,
  },
  {
    icon: Translate,
    title: "Traducir complejidad en decisiones",
    description:
      "Convertir lenguaje tecnico en frameworks accionables para la alta direccion.",
    colSpan: "md:col-span-5",
    delay: 0.2,
  },
  {
    icon: Handshake,
    title: "Generar conexiones entre lideres",
    description:
      "Networking de alto nivel entre ejecutivos que enfrentan desafios similares en sus industrias.",
    colSpan: "md:col-span-7",
    delay: 0.3,
  },
];

export default function Oportunidades() {
  return (
    <section id="oportunidades" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Section divider */}
        <div className="w-12 h-[1px] bg-[#C9A84C]/30 mb-16" />

        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Oportunidades
        </motion.p>
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
            delay: 0.05,
          }}
        >
          The AI Insight Circle
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className={`${card.colSpan} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
                delay: card.delay,
              }}
            >
              {/* Double-Bezel card */}
              <div className="bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem] hover:ring-white/[0.12] transition-all duration-700 h-full">
                <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] p-8 md:p-10 h-full group-hover:bg-[#0D0D0E] transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-6">
                    <card.icon weight="light" size={24} color="#C9A84C" />
                  </div>
                  <p className="font-sans text-xl text-[#E8E4DC] leading-snug mb-3">
                    {card.title}
                  </p>
                  <p className="text-sm text-[#8A8680] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-base text-[#8A8680] leading-relaxed max-w-[65ch]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          La experiencia se enriquece con la participacion de speakers
          internacionales y una curaduria rigurosa de contenidos, donde el
          aprendizaje no solo proviene del exito, sino tambien del error.
        </motion.p>
      </div>
    </section>
  );
}
