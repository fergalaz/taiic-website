"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  UsersThree,
  ChartBar,
  MapTrifold,
} from "@phosphor-icons/react";
import Logo from "./Logo";

const criterios = [
  { eyebrow: "Selección", valor: "40 a 60 participantes por edición" },
  { eyebrow: "Formato", valor: "Chatham House — análisis sin atribución" },
  { eyebrow: "Profundidad", valor: "Análisis sectorial verificado" },
];

const dueDiligenceItems = [
  {
    numero: "01",
    titulo: "Evidencia",
    detalle: "Datos de implementación y métricas verificables, no proyecciones de mercado.",
    Icon: MagnifyingGlass,
  },
  {
    numero: "02",
    titulo: "Acceso a expertos",
    detalle: "Voces con track record real — investigación revisada o autoridad operativa.",
    Icon: UsersThree,
  },
  {
    numero: "03",
    titulo: "Análisis sectorial",
    detalle: "Profundidad por industria — no panorámicas generales.",
    Icon: ChartBar,
  },
  {
    numero: "04",
    titulo: "Contextualización a LATAM",
    detalle: "Lectura regional — regulación, talento y cadenas de valor locales.",
    Icon: MapTrifold,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="bg-cream text-[color:var(--ink-warm)]"
    >
      {/* Banda criterios — heredada del hero, simboliza el "qué es" */}
      <div className="border-b border-[color:var(--ink-warm)]/12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12">
            {criterios.map((c, index) => (
              <motion.div
                key={c.eyebrow}
                className="flex flex-col gap-2 md:px-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.05,
                }}
              >
                <span className="text-[10px] uppercase tracking-[0.32em] text-gold font-light">
                  {c.eyebrow}
                </span>
                <span className="text-base md:text-lg font-light tracking-[0.01em] leading-[1.4]">
                  {c.valor}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloque tesis — logo + eyebrow + título */}
      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[920px] mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex justify-center mb-12 md:mb-14"
          >
            <Logo variant="dark" size={68} />
          </motion.div>

          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.4em] text-gold mb-12 md:mb-14 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
          >
            Una tesis
          </motion.p>

          <motion.h2
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-[0.02em] leading-[1.2] max-w-[24ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.12 }}
          >
            La IA ya no es una cuestión tecnológica; es{" "}
            <strong className="font-bold">una cuestión de modelo de negocio</strong>.
          </motion.h2>

          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-[color:var(--ink-warm)]/30" />
          </div>
        </div>
      </div>

      {/* Inside the Due-Diligence Room — sobre fondo blanco para diferenciar */}
      <div className="bg-paper border-t border-[color:var(--ink-warm)]/10">
        <div className="px-6 md:px-10 py-32 md:py-44">
          <div className="max-w-[1200px] mx-auto">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-light text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Inside the due-diligence room
            </motion.p>

            <motion.h3
              id="inside-the-room"
              className="text-[1.85rem] sm:text-3xl md:text-[2.5rem] lg:text-[2.85rem] font-light tracking-[0.02em] leading-[1.25] max-w-[34ch] mx-auto text-center mb-24 md:mb-32"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              Cuatro disciplinas que definen{" "}
              <strong className="font-bold">la conversación</strong>.
            </motion.h3>

            <ul className="border-t border-[color:var(--ink-warm)]/15">
              {dueDiligenceItems.map((item, index) => (
                <motion.li
                  key={item.titulo}
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
                  <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_4rem_1fr] gap-5 md:gap-8 items-center md:items-start py-9 md:py-11">
                    <span className="text-gold text-xs md:text-sm tracking-[0.22em] font-light pt-1">
                      {item.numero}
                    </span>
                    <span className="hidden md:flex md:pt-1 text-[color:var(--ink-warm)]/70">
                      <item.Icon size={32} weight="thin" />
                    </span>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <span className="text-2xl md:text-[1.85rem] font-light tracking-[0.01em] leading-[1.2]">
                        {item.titulo}
                      </span>
                      <span className="text-sm md:text-[15px] font-light leading-[1.6] text-[color:var(--ink-warm)]/65 max-w-[58ch]">
                        {item.detalle}
                      </span>
                    </div>
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
