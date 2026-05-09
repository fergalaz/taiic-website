"use client";

import { motion } from "framer-motion";

const sectores = [
  {
    numero: "01",
    nombre: "Legal",
    detalle: "Reescritura del modelo de negocio jurídico ante la automatización del análisis.",
  },
  {
    numero: "02",
    nombre: "Finanzas",
    detalle: "Riesgo de crédito, cumplimiento y advisory bajo nuevas asimetrías de información.",
  },
  {
    numero: "03",
    nombre: "Infraestructura",
    detalle: "Cómputo, energía y geopolítica de los data centers en LATAM.",
  },
  {
    numero: "04",
    nombre: "Logística",
    detalle: "Optimización de cadenas de suministro y planificación predictiva.",
  },
  {
    numero: "05",
    nombre: "Energía",
    detalle: "Demanda eléctrica, transición y operación de redes con IA.",
  },
  {
    numero: "06",
    nombre: "Retail",
    detalle: "Personalización, surtido y gestión inteligente del punto de venta.",
  },
  {
    numero: "07",
    nombre: "Salud",
    detalle: "Diagnóstico asistido, eficiencia clínica y nuevos estándares regulatorios.",
  },
  {
    numero: "08",
    nombre: "Sector público",
    detalle: "Política regulatoria, datos y servicios al ciudadano basados en IA.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contenidos() {
  return (
    <section
      id="contenidos"
      className="bg-cream text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24 md:mb-32">
          <motion.p
            className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Sector deep dives
          </motion.p>

          <motion.h2
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2] max-w-[28ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            Ocho sectores donde la IA{" "}
            <strong className="font-bold">ya está cambiando las reglas</strong>.
          </motion.h2>

          <motion.p
            className="mt-10 text-base md:text-lg leading-[1.7] font-light max-w-[60ch] mx-auto text-[color:var(--ink-warm)]/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
          >
            Análisis verticales con voces que ya implementaron — sin promesas
            generales, sin pitches comerciales, con datos verificables.
          </motion.p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 border-t border-[color:var(--ink-warm)]/15">
          {sectores.map((sector, index) => (
            <motion.li
              key={sector.nombre}
              className="border-b border-[color:var(--ink-warm)]/15"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
                delay: (index % 2) * 0.05 + Math.floor(index / 2) * 0.04,
              }}
            >
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] gap-5 md:gap-7 items-baseline py-9 md:py-10">
                <span className="text-gold text-xs md:text-sm tracking-[0.22em] font-light">
                  {sector.numero}
                </span>
                <div className="flex flex-col gap-2 md:gap-3">
                  <span className="text-2xl md:text-[1.85rem] font-light tracking-[0.01em] leading-[1.15]">
                    {sector.nombre}
                  </span>
                  <span className="text-sm md:text-[15px] font-light leading-[1.6] text-[color:var(--ink-warm)]/65 max-w-[40ch]">
                    {sector.detalle}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
