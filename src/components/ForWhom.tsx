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
      className="bg-cream text-[color:var(--ink-warm)] py-24 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Columna izquierda — graphic editorial */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="relative w-full aspect-[3/4] max-h-[72vh] overflow-hidden bg-[color:var(--ink-warm)]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/01-hero-spread.jpg"
                alt="Sala privada con ejecutivos al atardecer"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "center 20%" }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
                }}
              />
              <span className="absolute bottom-6 left-6 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/85 font-light">
                For whom
              </span>
            </div>
          </motion.div>

          {/* Columna derecha — título + lista compacta */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-gold mb-7 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              For whom
            </motion.p>

            <motion.h2
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3rem] font-light tracking-[0.02em] leading-[1.2] mb-10 md:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
            >
              La sala está pensada para{" "}
              <strong className="font-bold">
                quienes deciden, no para quienes opinan
              </strong>
              .
            </motion.h2>

            <ul className="border-t border-[color:var(--ink-warm)]/15">
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
                    delay: index * 0.04,
                  }}
                >
                  <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-6 items-baseline py-4 md:py-5">
                    <span className="text-gold text-[11px] md:text-xs tracking-[0.22em] font-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg md:text-xl lg:text-[1.4rem] font-light tracking-[0.01em] leading-[1.3]">
                      {item}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
