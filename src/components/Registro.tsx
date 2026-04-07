"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

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
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-[#E8E4DC] placeholder:text-[#8A8680]/50 focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] focus:outline-none transition-all duration-300 text-sm";

  const labelClasses = "block text-sm font-medium text-[#E8E4DC] mb-2";

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
    <section
      id="registro"
      className="py-32 md:py-40 px-4"
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
          Registro
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-4">
          Vive la experiencia ahora
        </h2>
        <p className="text-base text-[#8A8680] max-w-[50ch] mx-auto mb-16">
          Completa tus datos para ser parte del proximo encuentro de The AI
          Insight Circle.
        </p>

        {/* Double-Bezel Card */}
        <div className="max-w-2xl mx-auto bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
          <div className="bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] rounded-[calc(2rem-0.375rem)] p-8 md:p-10">
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <CheckCircle weight="light" size={48} color="#C9A84C" />
                <h3 className="font-serif text-2xl text-[#E8E4DC] mt-4">
                  Gracias por tu interes
                </h3>
                <p className="text-base text-[#8A8680] mt-2">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Nombre + Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <p className="text-red-400 text-xs mt-1">
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
                      <p className="text-red-400 text-xs mt-1">
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
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Row 2: Empresa + Cargo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <p className="text-red-400 text-xs mt-1">
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
                      <p className="text-red-400 text-xs mt-1">
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
                    <option value="Mineria y Energia">Mineria y Energia</option>
                    <option value="Telecomunicaciones">
                      Telecomunicaciones
                    </option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.industria && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.industria}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="text-left">
                  <label htmlFor="mensaje" className={labelClasses}>
                    Mensaje
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
                  className="w-full bg-[#C9A84C] text-[#050505] font-semibold rounded-full py-4 text-base hover:bg-[#D4B55A] active:scale-[0.98] transition-all duration-300 mt-2"
                >
                  Enviar solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
