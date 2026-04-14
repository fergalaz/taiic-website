"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarBlank, MapPin, UsersThree } from "@phosphor-icons/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProximoEvento() {
  return (
    <section id="proximo-evento" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Próxima Edición
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold tracking-wide leading-tight mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        >
          Próxima Edición
        </motion.h2>

        {/* Featured event card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          <div
            className="rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(229,183,101,0.15) 0%, rgba(229,183,101,0.05) 50%, rgba(26,26,51,0.8) 100%)",
            }}
          >
            {/* Subtle border */}
            <div className="absolute inset-0 rounded-3xl border border-accent/20 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary tracking-wide mb-8">
                The AI Insight Circle
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <CalendarBlank weight="light" size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider">
                      Fecha
                    </p>
                    <p className="text-base text-text-primary font-medium">
                      Por confirmar, 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin weight="light" size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider">
                      Ciudad
                    </p>
                    <p className="text-base text-text-primary font-medium">
                      Por confirmar
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <UsersThree weight="light" size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider">
                      Audiencia
                    </p>
                    <p className="text-base text-text-primary font-medium">
                      40-60 Managing Partners y C-Level
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-text-secondary mb-4">
                Formato: Keynote + Diálogo Moderado + Workshops Prácticos
              </p>

              <motion.a
                href="/registro"
                className="group inline-flex items-center gap-3 bg-accent text-[#1A1A33] font-semibold rounded-full px-8 py-4 text-base hover:bg-accent-hover active:scale-[0.98] transition-all duration-300 mt-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Solicitar Invitación
                <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight weight="bold" size={16} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
