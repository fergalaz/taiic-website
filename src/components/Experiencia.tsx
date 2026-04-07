export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="py-32 md:py-40 px-4"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
              Experiencia
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#E8E4DC] tracking-tight leading-[1.05] mb-10">
              The AI Insight Circle
            </h2>

            <div className="text-base text-[#8A8680] leading-relaxed max-w-[65ch]">
              <p className="mb-6">
                The AI Insight Circle es un espacio donde se define como la
                inteligencia artificial transformara los negocios, las industrias
                y la toma de decisiones a nivel regional.
              </p>
              <p className="mb-6">
                Reunimos a un circulo selecto de ejecutivos C-Level y lideres
                empresariales para participar en experiencias cuidadosamente
                disenadas, donde la conversacion trasciende la teoria y se
                enfoca en el impacto real de la IA.
              </p>
              <p className="mb-6">
                En un entorno de confianza, rigurosidad y alto nivel
                intelectual, los participantes acceden a perspectivas globales,
                casos concretos y discusiones estrategicas que permiten
                comprender —con precision— que esta funcionando, que no, y que
                viene.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-[#C9A84C] pl-6 py-2">
              <p className="font-serif text-xl md:text-2xl text-[#E8E4DC]/80 italic leading-relaxed">
                The AI Insight Circle no sigue la conversacion. La eleva. La
                ordena. Y, en muchos casos, la define.
              </p>
            </blockquote>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white/[0.02] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/taiic-experience/600/800"
                  alt="TAIIC Experience"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
