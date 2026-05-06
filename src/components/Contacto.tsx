"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  WhatsappLogo,
  LinkedinLogo,
  CheckCircle,
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
    "w-full bg-transparent border-0 border-b border-[color:var(--ink-warm)]/25 px-0 py-3 text-[color:var(--ink-warm)] placeholder:text-[color:var(--ink-warm)]/35 focus:border-gold focus:outline-none transition-colors duration-500 text-base font-light tracking-[0.01em]";

  const labelClasses =
    "block text-[10px] uppercase tracking-[0.28em] text-[color:var(--ink-warm)]/55 mb-3 font-light";

  return (
    <section
      id="contacto"
      className="bg-cream text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
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
            Contacto
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25] max-w-[28ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <strong className="font-bold">Conversemos</strong>.
          </motion.h2>

          <motion.p
            className="mt-12 text-base md:text-lg leading-[1.7] font-light max-w-[58ch] mx-auto text-[color:var(--ink-warm)]/75"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            Para consultas sobre participación, oportunidades de patrocinio o
            información de próximas ediciones de The AI Insight Circle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16">
          {/* Left — datos de contacto */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold mb-8 font-light">
              Canales directos
            </p>
            <ul className="space-y-7">
              {[
                {
                  Icon: EnvelopeSimple,
                  label: "Email",
                  value: "bernardita@insightcircle.cl",
                  href: "mailto:bernardita@insightcircle.cl",
                },
                {
                  Icon: WhatsappLogo,
                  label: "WhatsApp",
                  value: "+56 9 9318 8836",
                  href: "https://wa.me/56993188836",
                },
                {
                  Icon: LinkedinLogo,
                  label: "LinkedIn",
                  value: "The AI Insight Circle",
                  href: "#",
                },
              ].map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-baseline gap-6 border-b border-[color:var(--ink-warm)]/10 pb-5 hover:border-gold/60 transition-colors duration-500"
                  >
                    <Icon
                      weight="light"
                      size={18}
                      className="text-[color:var(--ink-warm)]/55 group-hover:text-gold transition-colors duration-500 shrink-0 self-center"
                    />
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--ink-warm)]/45 font-light mb-1">
                        {label}
                      </p>
                      <p className="text-base md:text-lg font-light tracking-[0.01em] group-hover:text-gold transition-colors duration-500">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <CheckCircle weight="light" size={36} className="text-gold mb-6" />
                <h3 className="text-2xl md:text-3xl font-light tracking-[0.01em]">
                  Gracias por <strong className="font-bold">tu mensaje</strong>.
                </h3>
                <p className="text-base text-[color:var(--ink-warm)]/65 mt-3 max-w-[40ch] text-center font-light">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
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
                    <p className="text-red-500/80 text-xs mt-2 tracking-wide">
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
                    <p className="text-red-500/80 text-xs mt-2 tracking-wide">
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
                    className={`${inputClasses} appearance-none cursor-pointer`}
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
                    <p className="text-red-500/80 text-xs mt-2 tracking-wide">
                      {errors.motivo}
                    </p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="group inline-flex flex-col items-start gap-3"
                  >
                    <span className="text-base md:text-lg tracking-[0.18em] uppercase font-light pb-2 border-b border-[color:var(--ink-warm)]/40 group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                      Enviar mensaje
                    </span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
