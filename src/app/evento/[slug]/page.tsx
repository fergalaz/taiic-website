"use client";

import { ArrowLeft, CalendarBlank, MapPin, UsersThree } from "@phosphor-icons/react";

export default function EventoPage() {
  return (
    <div className="min-h-[100dvh] bg-[#1A1A33] text-[#E8E4DC]">
      <div className="max-w-[1000px] mx-auto px-4 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8A8680] hover:text-[#E5B765] transition-colors duration-300"
        >
          <ArrowLeft weight="light" size={16} />
          Volver al inicio
        </a>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E5B765] mb-4">
          Detalle del Evento
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-8">
          The AI Insight Circle
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-3">
            <CalendarBlank weight="light" size={20} className="text-[#E5B765]" />
            <div>
              <p className="text-xs text-[#8A8680] uppercase tracking-wider">
                Fecha
              </p>
              <p className="text-base font-medium">Por confirmar, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin weight="light" size={20} className="text-[#E5B765]" />
            <div>
              <p className="text-xs text-[#8A8680] uppercase tracking-wider">
                Ciudad
              </p>
              <p className="text-base font-medium">Por confirmar</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UsersThree weight="light" size={20} className="text-[#E5B765]" />
            <div>
              <p className="text-xs text-[#8A8680] uppercase tracking-wider">
                Audiencia
              </p>
              <p className="text-base font-medium">40-60 C-Level</p>
            </div>
          </div>
        </div>

        <div className="gold-separator mb-12" />

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Tema Central</h2>
            <p className="text-[#8A8680] leading-relaxed">
              Edicion inaugural en preparacion. Detalles proximamente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Formato</h2>
            <p className="text-[#8A8680] leading-relaxed">
              Keynote + Dialogo Moderado + Workshops Practicos
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Speakers</h2>
            <p className="text-[#8A8680] leading-relaxed">
              Speakers confirmados proximamente.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/registro"
            className="inline-flex items-center gap-3 bg-[#E5B765] text-[#1A1A33] font-semibold rounded-full px-8 py-4 text-base hover:bg-[#F0C878] active:scale-[0.98] transition-all duration-300"
          >
            Solicitar Invitacion
          </a>
        </div>
      </div>
    </div>
  );
}
