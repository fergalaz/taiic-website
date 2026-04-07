"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Section divider */}
        <div className="w-12 h-[1px] bg-[#C9A84C]/30 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              Experiencia
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.1,
              }}
            >
              The AI Insight Circle
            </motion.h2>

            <div className="text-base md:text-lg text-[#8A8680] leading-relaxed max-w-[65ch] space-y-6">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.15,
                }}
              >
                The AI Insight Circle es un espacio donde se define como la
                inteligencia artificial transformara los negocios, las industrias
                y la toma de decisiones a nivel regional.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.2,
                }}
              >
                Reunimos a un circulo selecto de ejecutivos C-Level y lideres
                empresariales para participar en experiencias cuidadosamente
                disenadas, donde la conversacion trasciende la teoria y se
                enfoca en el impacto real de la IA.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.25,
                }}
              >
                En un entorno de confianza, rigurosidad y alto nivel
                intelectual, los participantes acceden a perspectivas globales,
                casos concretos y discusiones estrategicas que permiten
                comprender —con precision— que esta funcionando, que no, y que
                viene.
              </motion.p>
            </div>

            <motion.blockquote
              className="mt-12 border-l-2 border-[#C9A84C] pl-8 py-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.3,
              }}
            >
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#E8E4DC]/80 italic leading-relaxed">
                The AI Insight Circle no sigue la conversacion. La eleva. La
                ordena. Y, en muchos casos, la define.
              </p>
            </motion.blockquote>
          </div>

          {/* Right column — visual */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.2,
            }}
          >
            {/* Double-Bezel card */}
            <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem] hover:ring-white/[0.12] transition-all duration-700">
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <img
                  src="https://picsum.photos/seed/taiic-experience/600/800"
                  alt="TAIIC Experience"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
