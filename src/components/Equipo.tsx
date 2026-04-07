"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Por confirmar",
    role: "Director Estrategia",
    image: "https://picsum.photos/seed/taiic-team-1/400/500",
    colSpan: "col-span-2",
  },
  {
    name: "Por confirmar",
    role: "Director Contenidos",
    image: "https://picsum.photos/seed/taiic-team-2/400/500",
    colSpan: "col-span-1",
  },
  {
    name: "Por confirmar",
    role: "Director Experiencia",
    image: "https://picsum.photos/seed/taiic-team-3/400/500",
    colSpan: "col-span-1",
  },
];

export default function Equipo() {
  return (
    <section
      id="equipo"
      className="py-32 md:py-40 px-4"
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
          Equipo
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-16">
          No es para todos. Es para quienes deciden.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — Description */}
          <div className="lg:col-span-6">
            <div className="text-base text-[#8A8680] leading-relaxed max-w-[65ch]">
              <p className="mb-6">
                Un equipo multidisciplinario con experiencia en negocios,
                tecnologia y estrategia, que disena experiencias al nivel de
                quienes toman decisiones.
              </p>
              <p className="mb-6">
                Cada encuentro combina contenido curado, aprendizaje real y
                networking de alto nivel, en entornos cuidadosamente
                seleccionados y con una ejecucion logistica de estandar
                excepcional.
              </p>
              <p className="mb-6">
                Una experiencia 360, donde cada detalle esta pensado para ser tan
                relevante como la conversacion.
              </p>
              <p className="text-lg text-[#E8E4DC] font-medium mt-4">
                No se trata solo de entender la IA. Se trata de decidir mejor
                con ella.
              </p>
            </div>
          </div>

          {/* Right column — Team cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.role}
                  className={member.colSpan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px", amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                    delay: index * 0.15,
                  }}
                >
                  {/* Double-Bezel card */}
                  <div className="bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
                    <div className="bg-[#0A0A0B] rounded-[calc(2rem-0.375rem)] overflow-hidden">
                      <img
                        src={member.image}
                        alt="Equipo TAIIC"
                        className="w-full aspect-[4/5] object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm font-medium text-[#E8E4DC]">
                          {member.name}
                        </p>
                        <p className="text-xs text-[#8A8680] mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
