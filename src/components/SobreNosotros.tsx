"use client";

import { motion } from "framer-motion";

const equipo = [
  {
    nombre: "Mauricio Agudelo",
    rol: "Fundador & Director, The AI Insight Circle",
    foto: "/team/mauricio-agudelo.webp",
    bio: "Más de dos décadas en la intersección de tecnología, economía y política pública en América Latina. Como director en CAF—Banco de Desarrollo de América Latina y el Caribe—construyó desde cero la plataforma de inversión en transformación digital de la institución, movilizando más de USD 5 mil millones en financiamiento y catalizando aproximadamente USD 10–12 mil millones en inversiones tecnológicas regionales. Hoy asesora a gobiernos, bancos de desarrollo y organizaciones sobre el impacto económico e institucional de la inteligencia artificial y las tecnologías estratégicas en mercados emergentes.",
  },
  {
    nombre: "Bernardita Oyarzún",
    rol: "Co-Fundadora & Directora, BOI Events Strategic Partner",
    foto: "/team/bernardita-oyarzun.webp",
    bio: "Amplia trayectoria en programación ejecutiva para alta dirección y relacionamiento con stakeholders de alto nivel en toda la región. Co-dirige la programación del foro y la curaduría de speakers internacionales. Su experiencia en el diseño de experiencias estratégicas para audiencias de liderazgo garantiza que cada edición de The AI Insight Circle cumpla con los más altos estándares, liderando además la orquestación integral de cada encuentro.",
  },
];

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
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-6 font-light"
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
            Un espacio estratégico y exclusivo para los principales decisores
            de América Latina, en un entorno cuidadosamente diseñado y de alto
            estándar, donde comprenden, miden y anticipan el impacto de la IA
            en sus modelos de negocio.
          </motion.p>
        </div>

        {/* Dirección Ejecutiva */}
        <div className="border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-12 font-light text-center">
            Dirección ejecutiva
          </p>

          <div className="space-y-24 md:space-y-32">
            {equipo.map((miembro, index) => (
              <motion.div
                key={miembro.nombre}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.1,
                }}
              >
                <div className={`md:col-span-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[color:var(--ink-warm)]/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={miembro.foto}
                      alt={miembro.nombre}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>

                <div className={`md:col-span-8 flex flex-col gap-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-light tracking-[0.01em] leading-[1.2]">
                    {miembro.nombre.split(" ").map((part, i, arr) =>
                      i === arr.length - 1 ? (
                        <strong key={i} className="font-bold">{part}</strong>
                      ) : (
                        <span key={i}>{part} </span>
                      )
                    )}
                  </h3>
                  <p className="text-sm md:text-base text-gold tracking-[0.05em] uppercase font-light">
                    {miembro.rol}
                  </p>
                  <p className="text-base md:text-[17px] leading-[1.7] font-light text-[color:var(--ink-warm)]/80 max-w-[60ch]">
                    {miembro.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
