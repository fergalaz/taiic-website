"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const principles = [
  {
    numero: "01",
    titulo: "Proven expertise",
    detalle:
      "Each edition convenes specialists with verifiable work in applied AI — practitioners who have deployed, measured, and answered for results in their field. No conference-circuit keynotes.",
  },
  {
    numero: "02",
    titulo: "LLM analysis",
    detalle:
      "Measured performance, productivity, and error rates on sector-specific tasks. Replicable methodology, not demonstrations.",
  },
  {
    numero: "03",
    titulo: "Empirical evidence",
    detalle:
      "Benchmarks, deployment data, and documented results. Verifiable ground for decisions that reduce the firm's exposure.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TheStandard() {
  return (
    <section id="standard" className="bg-paper text-[color:var(--ink-warm)]">
      {/* Editorial spread — speakers panel (client-selected preview, Aug 2026) */}
      <Spread
        src="/imagery/06-speakers-panel-v2-PREVIEW.jpg"
        alt="Panel of speakers in conversation on a conference stage"
        ratio="cinemascope"
        caption="The standard"
        grayscale
      />

      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20 md:mb-28">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-bold"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              The standard
            </motion.p>

            <motion.h2
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2] max-w-[28ch] mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              Three principles govern{" "}
              <strong className="font-bold">the agenda</strong>.
            </motion.h2>
          </div>

          <ul className="border-t border-[color:var(--ink-warm)]/15">
            {principles.map((p, index) => (
              <motion.li
                key={p.titulo}
                className="border-b border-[color:var(--ink-warm)]/15"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.06,
                }}
              >
                <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] gap-5 md:gap-7 items-baseline py-9 md:py-10">
                  <span className="text-gold text-xs md:text-sm tracking-[0.22em] font-bold">
                    {p.numero}
                  </span>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <span className="text-2xl md:text-[1.85rem] font-light tracking-[0.01em] leading-[1.2]">
                      {p.titulo}
                    </span>
                    <span className="text-sm md:text-[15px] font-light leading-[1.6] text-[color:var(--ink-warm)]/65 max-w-[62ch]">
                      {p.detalle}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="mt-16 md:mt-20 text-xl md:text-2xl lg:text-[1.7rem] font-light tracking-[0.01em] leading-[1.5] max-w-[46ch]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            All of it read against Latin America and the Caribbean — regulation,
            talent, market structure, data, compute capacity, AI acquisition
            and capabilities.
          </motion.p>

          <motion.div
            className="mt-14 md:mt-16 border-t border-gold border-b py-8 max-w-[68ch]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
          >
            <p className="text-sm md:text-base leading-[1.7] font-light">
              The agenda is curated independently. The Circle admits no
              sponsors. The Forum accepts a limited number under a fixed rule:
              sponsorship confers no speaking rights and no agenda influence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
