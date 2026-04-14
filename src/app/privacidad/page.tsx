"use client";

import { ArrowLeft } from "@phosphor-icons/react";

export default function PrivacidadPage() {
  return (
    <div className="min-h-[100dvh] bg-[#1A1A33] text-[#E8E4DC]">
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
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E5B765] mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-12">
          Política de Privacidad
        </h1>

        <div className="space-y-8 text-[#8A8680] leading-relaxed">
          <p>
            The AI Insight Circle se compromete a proteger la privacidad de los
            datos personales de sus participantes y visitantes. Esta política
            describe cómo recopilamos, usamos y protegemos su información.
          </p>

          <div>
            <h2 className="text-lg font-bold text-[#E8E4DC] mb-3">
              Información que recopilamos
            </h2>
            <p>
              Recopilamos información proporcionada voluntariamente a través de
              nuestros formularios de contacto y solicitud de invitación,
              incluyendo nombre, cargo, organización, email y motivo de
              contacto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#E8E4DC] mb-3">
              Uso de la información
            </h2>
            <p>
              La información recopilada se utiliza exclusivamente para gestionar
              solicitudes de participación, enviar información sobre próximas
              ediciones y atender consultas. No compartimos datos personales con
              terceros sin consentimiento explícito.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#E8E4DC] mb-3">
              Contacto
            </h2>
            <p>
              Para consultas sobre privacidad, contáctenos a{" "}
              <a
                href="mailto:info@insight-circle.ai"
                className="text-[#E5B765] hover:text-[#F0C878] transition-colors duration-300"
              >
                info@insight-circle.ai
              </a>
            </p>
          </div>
        </div>

        <div className="gold-separator mt-16" />

        <p className="font-mono text-[11px] text-[#8A8680]/40 mt-8">
          Última actualización: Abril 2026
        </p>
      </div>
    </div>
  );
}
