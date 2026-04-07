"use client";

import { motion } from "framer-motion";
import { Strategy, Lightning, Scales } from "@phosphor-icons/react";

const industries = [
  "IA en banca: eficiencia, riesgo y personalizacion",
  "IA en retail: experiencia de cliente y optimizacion",
  "IA en salud: decisiones clinicas y gestion operativa",
  "IA en mineria/energia: optimizacion y seguridad",
  "IA en telecomunicaciones: automatizacion y customer experience",
];

const pillars = [
  {
    icon: Strategy,
    title: "Estrategia y Negocio",
  },
  {
    icon: Lightning,
    title: "Transformacion y Liderazgo",
  },
  {
    icon: Scales,
    title: "Riesgo, Etica y Regulacion",
  },
];

export default function Contenidos() {
  return (
    <section
      id="contenidos"
      className="py-32 md:py-40 px-4"
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
          Contenidos
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-16">
          Contenidos The AI Insight Circle
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Part A — Industries */}
          <div className="lg:col-span-7">
            {industries.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-start gap-4 py-4 border-b border-white/[0.06] group cursor-default hover:translate-x-2 transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.1,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                <p className="text-base text-[#8A8680] group-hover:text-[#E8E4DC] transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Part B — Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.15,
                }}
              >
                {/* Double-Bezel card */}
                <div className="bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
                  <div className="bg-[#0A0A0B] rounded-[calc(2rem-0.375rem)] overflow-hidden border-t-2 border-[#C9A84C]">
                    <div className="p-6 flex items-center gap-4">
                      <pillar.icon weight="light" size={28} color="#C9A84C" />
                      <p className="text-base font-medium text-[#E8E4DC]">
                        {pillar.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
