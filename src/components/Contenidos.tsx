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
    description:
      "Modelos de decision, ROI de IA, y frameworks para la alta direccion.",
  },
  {
    icon: Lightning,
    title: "Transformacion y Liderazgo",
    description:
      "Gestion del cambio, cultura digital, y liderazgo en entornos de incertidumbre.",
  },
  {
    icon: Scales,
    title: "Riesgo, Etica y Regulacion",
    description:
      "Gobernanza de datos, sesgo algoritmico, y cumplimiento normativo.",
  },
];

export default function Contenidos() {
  return (
    <section id="contenidos" className="py-32 md:py-40 px-4">
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
          Contenidos
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
          Contenidos The AI
          <br />
          Insight Circle
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Part A — Industries */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8680]/60 mb-6">
              IA por industria
            </p>
            {industries.map((item, index) => (
              <motion.div
                key={item}
                className="group flex items-start gap-4 py-5 border-b border-white/[0.06] cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.08,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                <p className="text-base md:text-lg text-[#8A8680] group-hover:text-[#E8E4DC] group-hover:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Part B — Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8680]/60 mb-6">
              Ejes tematicos
            </p>
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.12,
                }}
              >
                {/* Double-Bezel card */}
                <div className="bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem] hover:ring-white/[0.12] transition-all duration-700">
                  <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] overflow-hidden border-t border-[#C9A84C]/20 group-hover:bg-[#0D0D0E] transition-colors duration-700">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                          <pillar.icon
                            weight="light"
                            size={20}
                            color="#C9A84C"
                          />
                        </div>
                        <p className="text-base font-medium text-[#E8E4DC]">
                          {pillar.title}
                        </p>
                      </div>
                      <p className="text-sm text-[#8A8680] leading-relaxed pl-14">
                        {pillar.description}
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
