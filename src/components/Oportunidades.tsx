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
    title: "Analizar el impacto medible de la IA en distintas industrias",
    colSpan: "md:col-span-7",
    delay: 0,
  },
  {
    icon: ShieldWarning,
    title: "Anticipar riesgos en contextos de alta incertidumbre",
    colSpan: "md:col-span-5",
    delay: 0.1,
  },
  {
    icon: Translate,
    title: "Traducir complejidad tecnologica en decisiones estrategicas",
    colSpan: "md:col-span-5",
    delay: 0.2,
  },
  {
    icon: Handshake,
    title:
      "Generar conexiones relevantes entre lideres que enfrentan desafios similares",
    colSpan: "md:col-span-7",
    delay: 0.3,
  },
];

export default function Oportunidades() {
  return (
    <section id="oportunidades" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
          Oportunidades
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-16">
          The AI Insight Circle
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className={`${card.colSpan} bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
                delay: card.delay,
              }}
            >
              <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] p-8">
                <card.icon weight="light" size={32} color="#C9A84C" />
                <p className="font-sans text-lg text-[#E8E4DC] mt-4 leading-snug">
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-base text-[#8A8680] leading-relaxed max-w-[65ch]">
          La experiencia se enriquece con la participacion de speakers
          internacionales y una curaduria rigurosa de contenidos, donde el
          aprendizaje no solo proviene del exito, sino tambien del error.
        </p>
      </div>
    </section>
  );
}
