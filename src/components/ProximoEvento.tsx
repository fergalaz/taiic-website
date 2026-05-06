"use client";

import { motion } from "framer-motion";
import Spread from "./Spread";

const eventos = [
  {
    fecha: "28 / 07",
    diaSemana: "Martes",
    ciudad: "Bogotá",
    venue: "Nombre Venue",
    horario: "08.00 — 12.30 hrs",
  },
  {
    fecha: "30 / 07",
    diaSemana: "Jueves",
    ciudad: "Ciudad de Panamá",
    venue: "Nombre Venue",
    horario: "08.00 — 12.30 hrs",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProximoEvento() {
  return (
    <section
      id="proximo-evento"
      className="bg-cream text-[color:var(--ink-warm)]"
    >
      {/* Spread editorial 03 — auditorio vacío con haz dorado */}
      <Spread
        src="/imagery/03-next-experiences.jpg"
        alt="Auditorio vacío con un único haz dorado iluminando el podio"
        ratio="cinemascope"
        caption="Next experiences"
      />

      <div className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[1100px] mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-20 md:mb-24">
            <motion.p
              className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Próxima edición
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[34ch] mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              El impacto cuantitativo de la IA en{" "}
              <strong className="font-bold">los servicios legales</strong>.
            </motion.h2>

            <motion.p
              className="mt-12 text-lg md:text-xl italic max-w-[58ch] mx-auto leading-[1.55] font-light text-[color:var(--ink-warm)]/75"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
            >
              ¿Cómo debe cambiar el modelo de negocio de un estudio jurídico
              cuando la IA puede ofrecer resultados legales sin la
              intermediación humana tradicional?
            </motion.p>
          </div>

          {/* Dos ciudades — composición editorial sin cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-20 border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16">
            {eventos.map((evento, index) => (
              <motion.div
                key={evento.ciudad}
                className="flex flex-col gap-5 md:px-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.05 + index * 0.08,
                }}
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-gold font-light">
                    {evento.diaSemana}
                  </p>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[color:var(--ink-warm)]/55 font-light">
                    Julio 2026
                  </p>
                </div>
                <h3 className="text-3xl md:text-[2.5rem] font-light tracking-[0.02em] leading-[1.1]">
                  {evento.ciudad}
                </h3>
                <div className="h-px w-12 bg-[color:var(--ink-warm)]/30" />
                <dl className="grid grid-cols-[6rem_1fr] gap-y-2 text-sm md:text-base font-light text-[color:var(--ink-warm)]/75">
                  <dt className="uppercase tracking-[0.18em] text-[10px] text-[color:var(--ink-warm)]/45 self-center">
                    Fecha
                  </dt>
                  <dd>{evento.fecha}</dd>
                  <dt className="uppercase tracking-[0.18em] text-[10px] text-[color:var(--ink-warm)]/45 self-center">
                    Horario
                  </dt>
                  <dd>{evento.horario}</dd>
                  <dt className="uppercase tracking-[0.18em] text-[10px] text-[color:var(--ink-warm)]/45 self-center">
                    Venue
                  </dt>
                  <dd>{evento.venue}</dd>
                </dl>
              </motion.div>
            ))}
          </div>

          {/* Featuring — speaker en spread editorial 50/50 */}
          <motion.div
            className="mt-24 md:mt-32 pt-14 md:pt-16 border-t border-[color:var(--ink-warm)]/15"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-12 font-light text-center">
              Featuring
            </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
              <div className="md:col-span-4">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[color:var(--ink-warm)]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/team/florencia-marotta.webp"
                    alt="Florencia Marotta-Wurgler"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col gap-5">
                <h4 className="text-2xl md:text-3xl font-light tracking-[0.01em] leading-[1.2]">
                  Florencia <strong className="font-bold">Marotta-Wurgler</strong>
                </h4>
                <p className="text-sm md:text-base text-gold tracking-[0.05em] uppercase font-light">
                  Profesora de Derecho — New York University School of Law
                </p>
                <p className="text-base md:text-[17px] leading-[1.7] font-light text-[color:var(--ink-warm)]/80 max-w-[60ch]">
                  Experta en contratos, comercio electrónico y privacidad del
                  consumidor. Su investigación se centra en el análisis de
                  contratos digitales y ha contribuido al{" "}
                  <em>Restatement of the Law of Consumer Contracts</em> del
                  American Law Institute.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA editorial */}
          <div className="mt-20 md:mt-24 flex justify-center">
            <a
              href="/registro"
              className="group inline-flex flex-col items-center gap-3"
            >
              <span className="text-base md:text-lg tracking-[0.18em] uppercase font-light pb-2 border-b border-[color:var(--ink-warm)]/40 group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                Solicite su invitación
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
