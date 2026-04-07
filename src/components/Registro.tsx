"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
  cargo: string;
  industria: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  apellido?: string;
  email?: string;
  empresa?: string;
  cargo?: string;
  industria?: string;
}

export default function Registro() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    industria: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#E8E4DC] placeholder:text-[#8A8680]/40 focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]/60 focus:outline-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-sm hover:border-white/[0.12]";

  const labelClasses =
    "block text-sm font-medium text-[#E8E4DC]/80 mb-2 tracking-wide";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    if (!formData.apellido.trim())
      newErrors.apellido = "El apellido es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un email valido";
    }
    if (!formData.empresa.trim())
      newErrors.empresa = "La empresa es requerida";
    if (!formData.cargo.trim()) newErrors.cargo = "El cargo es requerido";
    if (!formData.industria) newErrors.industria = "Selecciona una industria";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="registro" className="py-32 md:py-40 px-4 relative">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.04), transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        {/* Section divider */}
        <div className="w-12 h-[1px] bg-[#C9A84C]/30 mb-16 mx-auto" />

        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          Registro
        </motion.p>
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
            delay: 0.05,
          }}
        >
          Vive la experiencia ahora
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-[#8A8680] max-w-[50ch] mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Completa tus datos para ser parte del proximo encuentro de The AI
          Insight Circle.
        </motion.p>

        {/* Double-Bezel Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
            delay: 0.15,
          }}
        >
          <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem]">
            <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] p-8 md:p-12">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-6">
                    <CheckCircle weight="light" size={32} color="#C9A84C" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#E8E4DC] mt-2">
                    Gracias por tu interes
                  </h3>
                  <p className="text-base text-[#8A8680] mt-3 max-w-[40ch]">
                    Nos pondremos en contacto contigo pronto para confirmar tu
                    participacion.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Nombre + Apellido */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="text-left">
                      <label htmlFor="nombre" className={labelClasses}>
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                      {errors.nombre && (
                        <p className="text-red-400/80 text-xs mt-1.5">
                          {errors.nombre}
                        </p>
                      )}
                    </div>
                    <div className="text-left">
                      <label htmlFor="apellido" className={labelClasses}>
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                      {errors.apellido && (
                        <p className="text-red-400/80 text-xs mt-1.5">
                          {errors.apellido}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="text-left">
                    <label htmlFor="email" className={labelClasses}>
                      Email corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p className="text-red-400/80 text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Row 2: Empresa + Cargo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="text-left">
                      <label htmlFor="empresa" className={labelClasses}>
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                      {errors.empresa && (
                        <p className="text-red-400/80 text-xs mt-1.5">
                          {errors.empresa}
                        </p>
                      )}
                    </div>
                    <div className="text-left">
                      <label htmlFor="cargo" className={labelClasses}>
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        placeholder="Tu cargo actual"
                        value={formData.cargo}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                      {errors.cargo && (
                        <p className="text-red-400/80 text-xs mt-1.5">
                          {errors.cargo}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Industria */}
                  <div className="text-left">
                    <label htmlFor="industria" className={labelClasses}>
                      Industria
                    </label>
                    <select
                      id="industria"
                      name="industria"
                      value={formData.industria}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" disabled>
                        Selecciona tu industria
                      </option>
                      <option value="Banca">Banca</option>
                      <option value="Retail">Retail</option>
                      <option value="Salud">Salud</option>
                      <option value="Mineria y Energia">
                        Mineria y Energia
                      </option>
                      <option value="Telecomunicaciones">
                        Telecomunicaciones
                      </option>
                      <option value="Tecnologia">Tecnologia</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.industria && (
                      <p className="text-red-400/80 text-xs mt-1.5">
                        {errors.industria}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="text-left">
                    <label htmlFor="mensaje" className={labelClasses}>
                      Mensaje{" "}
                      <span className="text-[#8A8680]/40 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuentanos que te motiva a participar..."
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full bg-[#C9A84C] text-[#050505] font-semibold rounded-full py-4 text-base hover:bg-[#D4B55A] active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-3"
                  >
                    Enviar solicitud
                    <PaperPlaneTilt
                      weight="bold"
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
