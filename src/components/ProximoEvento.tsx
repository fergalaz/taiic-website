"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarBlank,
  MapPin,
  UsersThree,
  User,
} from "@phosphor-icons/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProximoEvento() {
  return (
    <section id="proximo-evento" className="py-32 md:py-40 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="font-mono text-xs md:text-[13px] uppercase tracking-[0.2em] text-accent mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Próximos Eventos
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
                "linear-gradient(135deg, rgba(229,183,101,0.18) 0%, rgba(229,183,101,0.06) 50%, rgba(26,26,51,0.85) 100%)",
            }}
          >
            {/* Subtle border */}
            <div className="absolute inset-0 rounded-3xl border border-accent/25 pointer-events-none" />

            <div className="relative z-10">
              {/* Event name */}
              <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-accent/80 mb-3">
                The AI Insight Circle
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary tracking-wide leading-tight mb-8 max-w-[28ch]">
                The Quantitative Impact Of AI In Legal Consulting
              </h3>

              {/* Tema central */}
              <p className="text-base md:text-lg text-text-primary/85 italic max-w-[72ch] leading-relaxed mb-10 font-light border-l-2 border-accent/40 pl-5">
                How must the business model of a law firm change when AI can
                deliver legal outcomes without traditional human intermediation?
              </p>

              {/* Meta info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <CalendarBlank
                    weight="light"
                    size={22}
                    className="text-accent shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-xs text-text-primary/60 uppercase tracking-wider mb-1">
                      Fecha
                    </p>
                    <p className="text-base md:text-lg text-text-primary font-medium">
                      Por confirmar, 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    weight="light"
                    size={22}
                    className="text-accent shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-xs text-text-primary/60 uppercase tracking-wider mb-1">
                      Ciudad
                    </p>
                    <p className="text-base md:text-lg text-text-primary font-medium">
                      Por confirmar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UsersThree
                    weight="light"
                    size={22}
                    className="text-accent shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-xs text-text-primary/60 uppercase tracking-wider mb-1">
                      Audiencia
                    </p>
                    <p className="text-base md:text-lg text-text-primary font-medium">
                      40–60 Managing Partners y C-Level del ecosistema legal,
                      LATAM
                    </p>
                  </div>
                </div>
              </div>

              {/* Speaker block */}
              <div className="mt-12 pt-10 border-t border-accent/15">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
                  Keynote Speaker
                </p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Speaker photo placeholder */}
                  <div className="md:col-span-3 lg:col-span-2">
                    <div className="aspect-square rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                      <User
                        weight="thin"
                        size={56}
                        className="text-text-secondary/30"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-9 lg:col-span-10">
                    <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      Florencia Marotta-Wurgler
                    </h4>
                    <p className="text-sm md:text-base text-accent/90 mb-4 font-medium">
                      Profesora de Derecho — New York University School of Law
                    </p>
                    <p className="text-base md:text-[17px] text-text-primary/85 leading-relaxed font-light max-w-[70ch]">
                      Experta en contratos, comercio electrónico y privacidad
                      del consumidor. Su investigación se centra en el análisis
                      de contratos digitales y ha contribuido al{" "}
                      <em>Restatement of the Law of Consumer Contracts</em> del
                      American Law Institute.
                    </p>
                  </div>
                </div>
              </div>

              {/* Format + CTA */}
              <div className="mt-12 pt-10 border-t border-accent/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-base md:text-lg text-text-primary/85 font-light">
                  <span className="text-accent font-medium">Formato:</span>{" "}
                  Keynote + Diálogo Moderado + Workshops Prácticos
                </p>
                <motion.a
                  href="/registro"
                  className="group inline-flex items-center gap-3 bg-accent text-[#1A1A33] font-semibold rounded-full px-8 py-4 text-base hover:bg-accent-hover active:scale-[0.98] transition-all duration-300 shrink-0"
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
          </div>
        </motion.div>

        {/* Gold separator */}
        <div className="gold-separator mt-32" />
      </div>
    </section>
  );
}
