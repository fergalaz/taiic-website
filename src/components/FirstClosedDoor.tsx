"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Spread from "./Spread";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FirstClosedDoor() {
  return (
    <section
      id="first-closed-door"
      className="bg-ink text-white"
    >
      {/* Spread editorial 02 — puertas. Grayscale para unificar tonalidad. */}
      <Spread
        src="/imagery/02-closed-door.jpg"
        alt="Puertas dobles entreabiertas con luz cálida que se filtra"
        ratio="cinemascope"
        caption="First closed-door edition"
        grayscale
      />

      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.p
            className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-white/55 mb-14 md:mb-16 font-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Latin America · 2026
          </motion.p>

          <motion.div
            className="font-light leading-[1.15] uppercase mx-auto flex flex-col items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <h2 className="text-gold text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-[0.04em]">
              Primera edición
            </h2>

            {/* Edition lockup — isotipo + THE AI INSIGHT CIRCLE + tagline (logos-11) */}
            <Image
              src="/brand/taiic-edition-lockup.png"
              alt="The AI Insight Circle — The Quantitative Impact of AI in Legal Consulting"
              width={2018}
              height={1042}
              sizes="(min-width: 1024px) 720px, (min-width: 768px) 600px, 84vw"
              className="w-[84vw] max-w-[720px] h-auto mt-10 md:mt-14"
            />

            <span className="block mt-10 md:mt-14 text-gold/85 text-base sm:text-xl md:text-2xl lg:text-[1.6rem] tracking-[0.36em] font-light">
              Acceso por invitación
            </span>
          </motion.div>

          <div className="mt-16 md:mt-20 flex justify-center">
            <div className="h-px w-16 bg-gold/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
