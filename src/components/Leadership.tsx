"use client";

import { motion } from "framer-motion";

const equipo = [
  {
    nombre: "Mauricio Agudelo",
    rol: "Founder & Director, The AI Insight Circle",
    foto: "/team/mauricio-agudelo.webp",
    bio: "Two decades at the intersection of technology, economics, and public policy in Latin America. As a director at CAF — Development Bank of Latin America and the Caribbean — he built the institution's digital-transformation investment platform, mobilizing over USD 5 billion in financing and catalyzing an estimated USD 10–12 billion in regional technology investment. He advises governments, development banks, and boards on the economic and institutional impact of artificial intelligence.",
  },
  {
    nombre: "Bernardita Oyarzún",
    rol: "Co-Founder & Director, The AI Insight Circle · Founder, BOI Events",
    foto: "/team/bernardita-oyarzun.webp",
    bio: "Extensive record in executive programming and senior-stakeholder relations across the region. She co-directs the program and the curation of international speakers, and leads the production of each edition.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-cream text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-12 font-bold text-center">
          Leadership
        </p>

        <div className="space-y-24 md:space-y-32 border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16">
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
                <p className="text-sm md:text-base text-gold tracking-[0.05em] uppercase font-bold">
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
    </section>
  );
}
