"use client";

import { motion } from "framer-motion";

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
      className="bg-cream text-[color:var(--ink-warm)] border-t border-[color:var(--ink-warm)]/10"
    >
      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1100px] mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-24 md:mb-28">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Próxima edición
            </motion.p>

            <motion.h2
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2] max-w-[34ch] mx-auto"
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

          {/* Featuring — speaker en spread editorial 50/50 (va antes de los datos por feedback rev3) */}
          <motion.div
            className="border-t border-[color:var(--ink-warm)]/15 pt-16 md:pt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-base md:text-lg uppercase tracking-[0.5em] text-gold mb-14 md:mb-16 font-light text-center">
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
              <div className="md:col-span-8 flex flex-col gap-6">
                <h4 className="text-3xl md:text-4xl lg:text-[2.4rem] font-light tracking-[0.01em] leading-[1.15]">
                  Florencia{" "}
                  <strong className="font-bold">Marotta-Wurgler</strong>
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

          {/* Fechas y venues — bloque cierre */}
          <motion.div
            className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-[color:var(--ink-warm)]/15"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-[color:var(--ink-warm)]/55 font-light text-center">
              <strong className="font-medium tracking-[0.32em] text-[color:var(--ink-warm)] text-base md:text-lg uppercase">
                Julio 2026
              </strong>
            </p>

            <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-20">
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
                  <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-[color:var(--ink-warm)]/55 font-light">
                    {evento.diaSemana} · {evento.fecha}
                  </p>
                  <h3 className="text-gold text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[0.02em] leading-[1.05]">
                    {evento.ciudad}
                  </h3>
                  <div className="h-px w-12 bg-[color:var(--ink-warm)]/30" />
                  <dl className="grid grid-cols-[6rem_1fr] gap-y-3 text-base md:text-lg font-light text-[color:var(--ink-warm)]/80">
                    <dt className="uppercase tracking-[0.22em] text-[10px] md:text-[11px] text-[color:var(--ink-warm)]/45 self-center">
                      Horario
                    </dt>
                    <dd>{evento.horario}</dd>
                    <dt className="uppercase tracking-[0.22em] text-[10px] md:text-[11px] text-[color:var(--ink-warm)]/45 self-center">
                      Venue
                    </dt>
                    <dd>{evento.venue}</dd>
                  </dl>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA editorial */}
          <div className="mt-24 md:mt-28 flex justify-center">
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
