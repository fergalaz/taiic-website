"use client";

import { motion } from "framer-motion";

const audiencia = [
  "Socios directores",
  "Asesores jurídicos generales",
  "CEOs",
  "COOs",
  "CFOs",
  "Miembros de directorio",
  "Líderes seleccionados del sector público",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ForWhom() {
  return (
    <section
      id="for-whom"
      className="bg-cream text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            For whom
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[28ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            La sala está pensada para{" "}
            <strong className="font-bold">quienes deciden, no para quienes opinan</strong>.
          </motion.h2>
        </div>

        <ul className="border-t border-[color:var(--ink-warm)]/15 max-w-[860px] mx-auto">
          {audiencia.map((item, index) => (
            <motion.li
              key={item}
              className="border-b border-[color:var(--ink-warm)]/15"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
                delay: index * 0.05,
              }}
            >
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-6 items-baseline py-7 md:py-9">
                <span className="text-gold text-[11px] md:text-xs tracking-[0.2em] font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xl md:text-2xl font-light tracking-[0.01em]">
                  {item}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
