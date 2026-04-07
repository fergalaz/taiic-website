"use client";

import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

const teamMembers = [
  {
    name: "Por confirmar",
    role: "Director Estrategia",
    colSpan: "col-span-2 md:col-span-1 lg:col-span-2",
  },
  {
    name: "Por confirmar",
    role: "Director Contenidos",
    colSpan: "col-span-1",
  },
  {
    name: "Por confirmar",
    role: "Director Experiencia",
    colSpan: "col-span-1",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-32 md:py-40 px-4">
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
          Equipo
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
          No es para todos.
          <br />
          <span className="text-[#C9A84C]/70">Es para quienes deciden.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — Description */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.1,
            }}
          >
            <div className="text-base md:text-lg text-[#8A8680] leading-relaxed max-w-[65ch] space-y-6">
              <p>
                Un equipo multidisciplinario con experiencia en negocios,
                tecnologia y estrategia, que disena experiencias al nivel de
                quienes toman decisiones.
              </p>
              <p>
                Cada encuentro combina contenido curado, aprendizaje real y
                networking de alto nivel, en entornos cuidadosamente
                seleccionados y con una ejecucion logistica de estandar
                excepcional.
              </p>
              <p>
                Una experiencia 360, donde cada detalle esta pensado para ser
                tan relevante como la conversacion.
              </p>
            </div>

            {/* Highlight statement */}
            <div className="mt-10 bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
              <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] p-8">
                <p className="text-lg md:text-xl text-[#E8E4DC] font-medium leading-snug">
                  No se trata solo de entender la IA.
                  <br />
                  <span className="text-[#C9A84C]">
                    Se trata de decidir mejor con ella.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — Team cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.role}
                  className={member.colSpan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                    delay: 0.15 + index * 0.1,
                  }}
                >
                  {/* Double-Bezel card */}
                  <div className="group bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem] hover:ring-white/[0.12] transition-all duration-700">
                    <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] overflow-hidden group-hover:bg-[#0D0D0E] transition-colors duration-700">
                      {/* Avatar placeholder */}
                      <div className="w-full aspect-[4/5] bg-gradient-to-b from-white/[0.04] to-white/[0.01] flex items-center justify-center">
                        <User
                          weight="thin"
                          size={48}
                          className="text-[#8A8680]/30"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm font-medium text-[#E8E4DC]">
                          {member.name}
                        </p>
                        <p className="text-xs text-[#8A8680] mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
