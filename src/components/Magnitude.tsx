"use client";

import { motion } from "framer-motion";

const servicios = [
  {
    numero: "01",
    titulo: "Análisis de Impacto Económico",
    detalle:
      "Cuantificación a nivel sectorial del impacto de la IA en las fuentes de ingresos, las estructuras de costos y las dinámicas competitivas.",
  },
  {
    numero: "02",
    titulo: "Hojas de Ruta Estratégicas",
    detalle:
      "Agendas de transformación listas para presentar al directorio, que traducen las capacidades de la IA generativa en prioridades secuenciadas.",
  },
  {
    numero: "03",
    titulo: "Inteligencia Sectorial",
    detalle:
      "Investigación continua sobre adopción de IA, cambios regulatorios y transformaciones en la estructura de los mercados en TMT y otros sectores.",
  },
  {
    numero: "04",
    titulo: "Asesoría Ejecutiva",
    detalle:
      "Asesoramiento directo a la alta dirección y los directorios sobre estrategia de IA, implicancias para fusiones y adquisiciones (M&A) y marcos de gobernanza.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Magnitude() {
  return (
    <section id="magnitude" className="bg-ink text-white">
      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 md:mb-28">
            {/* Wordmark placeholder — reemplazar por logo oficial MagNitude cuando esté disponible */}
            <motion.p
              className="text-2xl md:text-3xl tracking-[0.24em] uppercase font-light mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Mag<strong className="font-bold text-gold">Nitude</strong>
            </motion.p>

            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-12 font-light"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
            >
              Inteligencia Estratégica para la Economía de la IA
            </motion.p>

            <motion.h2
              className="text-[1.85rem] sm:text-3xl md:text-[2.5rem] font-light tracking-[0.02em] leading-[1.25] max-w-[30ch] mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              La IA generativa no es una historia tecnológica,{" "}
              <strong className="font-bold">sino económica</strong>.
            </motion.h2>

            <motion.p
              className="mt-12 text-base md:text-lg leading-[1.75] font-light max-w-[66ch] mx-auto text-white/70"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
            >
              Todos los sectores críticos enfrentan cambios estructurales en
              sus estructuras de costos, fuentes de ingresos y dinámicas
              competitivas. La mayoría de las organizaciones carece de los
              marcos necesarios para medir qué está realmente en juego.
              MagNitude existe para cerrar esa brecha.
            </motion.p>

            <motion.p
              className="mt-8 text-base md:text-lg leading-[1.75] font-light max-w-[66ch] mx-auto text-white/70"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.24 }}
            >
              The AI Insight Circle cuenta con el soporte de MagNitude, su
              área de inteligencia estratégica que cuantifica la disrupción de
              la IA y asesora sobre lo que significa para su sector, su
              posición y su futuro.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Columna izquierda — imagen conceptual */}
            <motion.div
              className="lg:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative w-full aspect-[4/5] max-h-[70vh] overflow-hidden bg-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imagery/08-carbon-sphere-PREVIEW.jpg"
                  alt="Esfera facetada oscura sobre fondo negro"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Columna derecha — servicios */}
            <div className="lg:col-span-7">
              <ul className="border-t border-white/15">
                {servicios.map((servicio, index) => (
                  <motion.li
                    key={servicio.titulo}
                    className="border-b border-white/15"
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
                    <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] gap-5 md:gap-7 items-baseline py-8 md:py-9">
                      <span className="text-gold text-xs md:text-sm tracking-[0.22em] font-light">
                        {servicio.numero}
                      </span>
                      <div className="flex flex-col gap-2 md:gap-3">
                        <span className="text-xl md:text-2xl font-light tracking-[0.01em] leading-[1.2]">
                          {servicio.titulo}
                        </span>
                        <span className="text-sm md:text-[15px] font-light leading-[1.6] text-white/60 max-w-[54ch]">
                          {servicio.detalle}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
