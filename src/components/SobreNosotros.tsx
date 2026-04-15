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
    <section id="sobre-nosotros" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="font-mono text-xs md:text-[13px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Sobre Nosotros
        </motion.p>

        {/* Quien organiza */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold tracking-wide leading-tight mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        >
          Quién organiza
        </motion.h2>

        {/* NOTE: Texto en revisión por el cliente — pendiente de definición */}
        <motion.p
          className="text-lg md:text-xl text-text-primary/80 max-w-[78ch] leading-relaxed mb-20 font-light"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          The AI Insight Circle es una iniciativa de Mauricio Agudelo con la
          producción ejecutiva de Bernardita Oyarzún, BOI Events Strategic Partner.
          Nace de una convicción simple: los líderes del sector empresarial en
          América Latina merecen un espacio donde la conversación sobre inteligencia
          artificial se sostenga con datos, no con promesas.
        </motion.p>

        {/* Misión y Visión — readable cards on subtle gold background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
          <motion.div
            className="bg-accent/[0.05] border border-accent/15 rounded-2xl p-8 md:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            <h3 className="text-base font-bold uppercase tracking-[0.15em] text-accent mb-5">
              Misión
            </h3>
            <p className="text-base md:text-lg text-text-primary/90 leading-relaxed font-light">
              Proveer a los decisores económicos de América Latina un espacio
              estratégico, basado en evidencia, para comprender, medir y anticipar
              el impacto de la inteligencia artificial en sus modelos de negocio.
            </p>
          </motion.div>

          <motion.div
            className="bg-accent/[0.05] border border-accent/15 rounded-2xl p-8 md:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <h3 className="text-base font-bold uppercase tracking-[0.15em] text-accent mb-5">
              Visión
            </h3>
            <p className="text-base md:text-lg text-text-primary/90 leading-relaxed font-light">
              Ser la plataforma de referencia regional donde la alta dirección de
              las firmas, instituciones y empresas más relevantes de América Latina
              define su posición frente a la transformación tecnológica—con rigor,
              sin ruido.
            </p>
          </motion.div>
        </div>

        {/* Gold separator */}
        <div className="gold-separator mb-24" />

        {/* Dirección Ejecutiva (antes Nuestro Equipo) */}
        <motion.h3
          className="text-3xl md:text-4xl text-text-primary font-bold tracking-wide mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Dirección Ejecutiva
        </motion.h3>

        <div className="space-y-16">
          {equipo.map((miembro, index) => (
            <motion.div
              key={miembro.nombre}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: index * 0.1,
              }}
            >
              {/* Photo */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="aspect-[4/5] rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden">
                  <img
                    src={miembro.foto}
                    alt={miembro.nombre}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-base md:text-lg font-bold uppercase tracking-[0.1em] text-accent mb-2">
                  {miembro.nombre}
                </p>
                <p className="text-base md:text-lg font-medium text-text-primary mb-5">
                  {miembro.rol}
                </p>
                <p className="text-base md:text-[17px] text-text-primary/85 leading-relaxed max-w-[68ch] font-light">
                  {miembro.bio}
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
