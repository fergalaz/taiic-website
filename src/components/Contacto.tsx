"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  WhatsappLogo,
  LinkedinLogo,
  CheckCircle,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

interface FormData {
  nombre: string;
  cargo: string;
  organizacion: string;
  email: string;
  motivo: string;
}

interface FormErrors {
  nombre?: string;
  cargo?: string;
  organizacion?: string;
  email?: string;
  motivo?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    cargo: "",
    organizacion: "",
    email: "",
    motivo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!formData.motivo) newErrors.motivo = "Selecciona un motivo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const inputClasses =
    "w-full bg-[#1A1A33]/5 border border-[#1A1A33]/15 rounded-xl px-4 py-3.5 text-[#1A1A33] placeholder:text-[#1A1A33]/30 focus:ring-2 focus:ring-[#E5B765]/40 focus:border-[#E5B765]/60 focus:outline-none transition-all duration-500 text-sm";

  const labelClasses =
    "block text-sm font-medium text-[#1A1A33]/80 mb-2 tracking-wide";

  return (
    <section id="contacto" className="py-32 md:py-40 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E5B765] mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Contacto
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A33] font-bold tracking-wide leading-tight mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
        >
          Conversemos
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-[#4A4A5A] max-w-[60ch] leading-relaxed mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          Para consultas sobre participación, oportunidades de patrocinio o
          información sobre próximas ediciones.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column — Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            <div className="space-y-8">
              <a
                href="mailto:info@insight-circle.ai"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A33]/5 border border-[#1A1A33]/10 flex items-center justify-center group-hover:bg-[#E5B765]/10 group-hover:border-[#E5B765]/20 transition-all duration-300">
                  <EnvelopeSimple
                    weight="light"
                    size={22}
                    className="text-[#1A1A33]/60 group-hover:text-[#E5B765] transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#4A4A5A] uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-base text-[#1A1A33] group-hover:text-[#E5B765] transition-colors duration-300">
                    info@insight-circle.ai
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A33]/5 border border-[#1A1A33]/10 flex items-center justify-center group-hover:bg-[#E5B765]/10 group-hover:border-[#E5B765]/20 transition-all duration-300">
                  <WhatsappLogo
                    weight="light"
                    size={22}
                    className="text-[#1A1A33]/60 group-hover:text-[#E5B765] transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#4A4A5A] uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-base text-[#1A1A33] group-hover:text-[#E5B765] transition-colors duration-300">
                    Enlace directo
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A33]/5 border border-[#1A1A33]/10 flex items-center justify-center group-hover:bg-[#E5B765]/10 group-hover:border-[#E5B765]/20 transition-all duration-300">
                  <LinkedinLogo
                    weight="light"
                    size={22}
                    className="text-[#1A1A33]/60 group-hover:text-[#E5B765] transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#4A4A5A] uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-base text-[#1A1A33] group-hover:text-[#E5B765] transition-colors duration-300">
                    The AI Insight Circle
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#E5B765]/10 border border-[#E5B765]/20 flex items-center justify-center mb-6">
                  <CheckCircle weight="light" size={32} color="#E5B765" />
                </div>
                <h3 className="text-2xl md:text-3xl text-[#1A1A33] font-bold">
                  Gracias por tu mensaje
                </h3>
                <p className="text-base text-[#4A4A5A] mt-3 max-w-[40ch] text-center">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contacto-nombre" className={labelClasses}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="contacto-nombre"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {errors.nombre && (
                    <p className="text-red-500/80 text-xs mt-1.5">
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contacto-cargo" className={labelClasses}>
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="contacto-cargo"
                    name="cargo"
                    placeholder="Tu cargo actual"
                    value={formData.cargo}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contacto-org" className={labelClasses}>
                    Firma / Organización
                  </label>
                  <input
                    type="text"
                    id="contacto-org"
                    name="organizacion"
                    placeholder="Nombre de tu organización"
                    value={formData.organizacion}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contacto-email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="contacto-email"
                    name="email"
                    placeholder="nombre@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-red-500/80 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contacto-motivo" className={labelClasses}>
                    Motivo de contacto
                  </label>
                  <select
                    id="contacto-motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Selecciona un motivo
                    </option>
                    <option value="Participación">Participación</option>
                    <option value="Patrocinio">Patrocinio</option>
                    <option value="Prensa">Prensa</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.motivo && (
                    <p className="text-red-500/80 text-xs mt-1.5">
                      {errors.motivo}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group w-full bg-[#E5B765] text-[#1A1A33] font-semibold rounded-full py-4 text-base hover:bg-[#F0C878] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-3"
                >
                  Enviar
                  <PaperPlaneTilt
                    weight="bold"
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
