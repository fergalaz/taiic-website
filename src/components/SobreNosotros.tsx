"use client";

import { motion } from "framer-motion";

const equipo = [
  {
    nombre: "Mauricio Agudelo",
    rol: "Fundador & Director",
    foto: "https://picsum.photos/seed/taiic-mauricio/400/500",
    bio: "Mas de dos decadas en la interseccion de tecnologia, economia y politica publica en America Latina. Como director en CAF—Banco de Desarrollo de America Latina y el Caribe—construyo desde cero la plataforma de inversion en transformacion digital de la institucion, movilizando mas de USD 5 mil millones en financiamiento y catalizando aproximadamente USD 10-12 mil millones en inversiones tecnologicas regionales. Hoy asesora a gobiernos, bancos de desarrollo y organizaciones sobre el impacto economico e institucional de la inteligencia artificial y las tecnologias estrategicas en mercados emergentes.",
  },
  {
    nombre: "Bernardita Oyarzun",
    rol: "Co-Fundadora & Directora BOI Events",
    foto: "https://picsum.photos/seed/taiic-bernardita/400/500",
    bio: "Amplia trayectoria en programacion ejecutiva y relacionamiento con stakeholders de alto nivel en toda la region. Co-dirige la programacion del foro y la curaduria de speakers internacionales. Su experiencia en diseno de experiencias estrategicas para audiencias ejecutivas asegura que cada edicion del AI Insight Circle cumpla con el estandar que exige su audiencia.",
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
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4"
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
          Quien organiza
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-text-secondary max-w-[75ch] leading-relaxed mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          The AI Insight Circle es una iniciativa de Mauricio Agudelo con la
          produccion ejecutiva de Bernardita Oyarzun, BOI Events. Nace de una
          conviccion simple: los lideres del sector empresarial en America Latina
          merecen un espacio donde la conversacion sobre inteligencia artificial se
          sostenga con datos, no con promesas.
        </motion.p>

        {/* Mision y Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Mision
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              Proveer a los decisores economicos de America Latina un espacio
              estrategico, basado en evidencia, para comprender, medir y anticipar
              el impacto de la inteligencia artificial en sus modelos de negocio.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Vision
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              Ser la plataforma de referencia regional donde la alta direccion de
              las firmas, instituciones y empresas mas relevantes de America Latina
              define su posicion frente a la transformacion tecnologica—con rigor,
              sin ruido.
            </p>
          </motion.div>
        </div>

        {/* Gold separator */}
        <div className="gold-separator mb-24" />

        {/* Equipo */}
        <motion.h3
          className="text-3xl md:text-4xl text-text-primary font-bold tracking-wide mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Nuestro Equipo
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
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-accent mb-2">
                  — {miembro.nombre}
                </p>
                <p className="text-base font-medium text-text-primary/80 mb-4">
                  {miembro.rol}
                </p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[65ch]">
                  {miembro.bio}
                </p>
              </div>
            </motion.div>
          ))}

          {/* BOI Events */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <div className="md:col-span-4 lg:col-span-3">
              <div className="aspect-[4/5] rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-bold text-accent/30 tracking-widest">
                  BOI
                </span>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-accent mb-2">
                — BOI Events
              </p>
              <p className="text-base font-medium text-text-primary/80 mb-4">
                Strategic Partner — Produccion Ejecutiva
              </p>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[65ch]">
                Socio operativo responsable de la produccion, logistica y ejecucion
                de cada edicion del foro.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
