"use client";

import { motion } from "framer-motion";
import {
  TrendUp,
  ChartBar,
  GlobeHemisphereWest,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";

const lineasTematicas = [
  {
    icon: TrendUp,
    titulo: "Transformación del modelo de negocio",
    descripcion:
      "Cómo cambia la ecuación económica de una firma o empresa cuando la IA puede producir resultados sin intermediación humana tradicional.",
  },
  {
    icon: ChartBar,
    titulo: "ROI medible de la IA",
    descripcion:
      "Datos reales de productividad, reducción de costos y nuevas fuentes de ingreso en firmas y empresas que ya implementaron.",
  },
  {
    icon: GlobeHemisphereWest,
    titulo: "Jurisdicción y contexto emergente",
    descripcion:
      "Lo que funciona en el mundo no se traduce automáticamente a los marcos de LATAM. Aquí se analizan las diferencias.",
  },
  {
    icon: ShieldCheck,
    titulo: "Gobernanza y gestión del riesgo",
    descripcion:
      "Marcos regulatorios, ética aplicada y los riesgos operativos concretos de adoptar (o no adoptar) IA.",
  },
  {
    icon: Users,
    titulo: "Talento y estructura organizacional",
    descripcion:
      "Qué perfiles necesitará una firma, empresa o institución en 3 años y cómo reorganizar equipos hoy.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contenidos() {
  return (
    <section id="contenidos" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Contenidos
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold tracking-wide leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        >
          Qué se discute aquí
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-text-primary/80 max-w-[78ch] leading-relaxed mb-16 font-light"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          Cada sesión de The AI Insight Circle aborda una dimensión específica del
          impacto de la IA en el negocio. El contenido es curado por un panel asesor
          y presentado por expertos internacionales reconocidos y seleccionados por
          su rigor académico y experiencia práctica.
        </motion.p>

        {/* Grid of thematic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lineasTematicas.map((linea, index) => (
            <motion.div
              key={linea.titulo}
              className="group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.15 + index * 0.08,
              }}
            >
              <div className="h-full bg-accent/[0.04] border border-accent/15 rounded-2xl p-7 md:p-8 hover:border-accent/40 transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <linea.icon
                    weight="light"
                    size={20}
                    className="text-accent"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 tracking-wide">
                  {linea.titulo}
                </h3>
                <p className="text-base md:text-[17px] text-text-primary/85 leading-relaxed font-light">
                  {linea.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
