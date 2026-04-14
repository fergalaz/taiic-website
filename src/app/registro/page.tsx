"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
  cargo: string;
  industria: string;
  pais: string;
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

export default function RegistroPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    industria: "",
    pais: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

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
      newErrors.email = "Ingresa un email válido";
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

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#E8E4DC] placeholder:text-[#8A8680]/40 focus:ring-2 focus:ring-[#E5B765]/40 focus:border-[#E5B765]/60 focus:outline-none transition-all duration-500 text-sm hover:border-white/[0.12]";

  const labelClasses =
    "block text-sm font-medium text-[#E8E4DC]/80 mb-2 tracking-wide";

  return (
    <div className="min-h-[100dvh] bg-[#1A1A33] text-[#E8E4DC]">
      {/* Back link */}
      <div className="max-w-[800px] mx-auto px-4 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8A8680] hover:text-[#E5B765] transition-colors duration-300"
        >
          <ArrowLeft weight="light" size={16} />
          Volver al inicio
        </a>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E5B765] mb-4">
            Solicitud de Invitación
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            Solicitar Invitación
          </h1>
          <p className="text-base text-[#8A8680] max-w-[55ch] mb-12 leading-relaxed">
            Completa el siguiente formulario para solicitar tu invitación al
            próximo encuentro de The AI Insight Circle. El acceso es por
            invitación y está sujeto a evaluación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1],
            delay: 0.15,
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#E5B765]/10 border border-[#E5B765]/20 flex items-center justify-center mb-6">
                <CheckCircle weight="light" size={32} color="#E5B765" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                Solicitud recibida
              </h2>
              <p className="text-base text-[#8A8680] mt-3 max-w-[45ch] text-center">
                Revisaremos tu solicitud y nos pondremos en contacto contigo
                para confirmar tu participación.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 text-sm text-[#E5B765] hover:text-[#F0C878] transition-colors duration-300"
              >
                <ArrowLeft weight="light" size={16} />
                Volver al inicio
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="reg-nombre" className={labelClasses}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="reg-nombre"
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
                <div>
                  <label htmlFor="reg-apellido" className={labelClasses}>
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="reg-apellido"
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

              <div>
                <label htmlFor="reg-email" className={labelClasses}>
                  Email corporativo
                </label>
                <input
                  type="email"
                  id="reg-email"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="reg-empresa" className={labelClasses}>
                    Empresa / Organización
                  </label>
                  <input
                    type="text"
                    id="reg-empresa"
                    name="empresa"
                    placeholder="Nombre de tu organización"
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
                <div>
                  <label htmlFor="reg-cargo" className={labelClasses}>
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="reg-cargo"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="reg-industria" className={labelClasses}>
                    Industria
                  </label>
                  <select
                    id="reg-industria"
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
                    <option value="Minería y Energía">Minería y Energía</option>
                    <option value="Telecomunicaciones">Telecomunicaciones</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.industria && (
                    <p className="text-red-400/80 text-xs mt-1.5">
                      {errors.industria}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="reg-pais" className={labelClasses}>
                    País{" "}
                    <span className="text-[#8A8680]/40 font-normal">
                      (opcional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="reg-pais"
                    name="pais"
                    placeholder="Tu país"
                    value={formData.pais}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-mensaje" className={labelClasses}>
                  Mensaje{" "}
                  <span className="text-[#8A8680]/40 font-normal">
                    (opcional)
                  </span>
                </label>
                <textarea
                  id="reg-mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos qué te motiva a participar..."
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-[#E5B765] text-[#1A1A33] font-semibold rounded-full py-4 text-base hover:bg-[#F0C878] active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-3"
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
        </motion.div>
      </div>
    </div>
  );
}
