"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="bg-paper text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Sobre The Insight Circle
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[36ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            La plataforma regional donde la alta dirección define{" "}
            <strong className="font-bold">su posición frente a la IA</strong>.
          </motion.h2>

          <motion.p
            className="mt-12 text-base md:text-lg leading-[1.7] font-light max-w-[64ch] mx-auto text-[color:var(--ink-warm)]/75"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            The AI Insight Circle es un espacio estratégico y exclusivo para
            los principales decisores de América Latina, en un entorno
            cuidadosamente diseñado y de alto estándar, donde comprenden,
            miden y anticipan el impacto de la IA en sus modelos de negocio.
            Es la plataforma de referencia regional donde la alta dirección
            define su posición frente a la transformación tecnológica, con
            rigor y sin ruido.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
