"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    numero: "01",
    titulo: "Economic impact analysis",
    detalle:
      "Sector-level modelling of AI's effect on revenue pools, cost structures, and competitive position. Numbers, not narratives.",
  },
  {
    numero: "02",
    titulo: "AI strategy & roadmapping",
    detalle:
      "Board-ready agendas that sequence generative-AI capability against actual cost and revenue drivers, with decision triggers built in.",
  },
  {
    numero: "03",
    titulo: "Sector intelligence",
    detalle:
      "Continuous research on adoption curves, regulatory shifts, and market-structure change across TMT, financial services, and Latin America.",
  },
  {
    numero: "04",
    titulo: "Executive advisory",
    detalle:
      "Direct counsel to boards and senior management on AI strategy, M&A implications, and governance design.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AdvisoryContent() {
  return (
    <main>
      {/* Hero — dark, MAGnitude brand */}
      <section className="bg-ink text-white pt-40 md:pt-52 pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-[920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col items-center"
          >
            <Image
              src="/brand/magnitude-logo-white.png"
              alt="MAGnitude"
              width={1600}
              height={250}
              priority
              sizes="(min-width: 768px) 340px, 250px"
              className="w-[250px] md:w-[340px] h-auto"
            />

            <p className="mt-8 text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold font-bold">
              Strategic Advisory
            </p>

            <h1 className="mt-10 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2] max-w-[22ch]">
              Strategic intelligence for{" "}
              <strong className="font-bold">the AI economy</strong>.
            </h1>

            <p className="mt-10 text-base md:text-lg leading-[1.75] font-light max-w-[60ch] text-white/70">
              Generative AI is not a technology story. It is an economic one.
              Sectors face structural change in revenue pools, cost structures,
              and competitive dynamics; most organizations lack the frameworks
              to measure what is at stake. MAGnitude closes that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Left column — conceptual image */}
            <motion.div
              className="lg:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[color:var(--ink-warm)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imagery/15-keys-PREVIEW.jpg"
                  alt="Antique keys standing upright in sand"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right column — services list */}
            <div className="lg:col-span-7">
              <ul className="border-t border-[color:var(--ink-warm)]/15">
                {services.map((service, index) => (
                  <motion.li
                    key={service.titulo}
                    className="border-b border-[color:var(--ink-warm)]/15"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                      delay: index * 0.06,
                    }}
                  >
                    <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] gap-5 md:gap-7 items-baseline py-8 md:py-9">
                      <span className="text-gold text-xs md:text-sm tracking-[0.22em] font-bold">
                        {service.numero}
                      </span>
                      <div className="flex flex-col gap-2 md:gap-3">
                        <span className="text-xl md:text-2xl font-light tracking-[0.01em] leading-[1.2]">
                          {service.titulo}
                        </span>
                        <span className="text-sm md:text-[15px] font-light leading-[1.6] text-[color:var(--ink-warm)]/60 max-w-[54ch]">
                          {service.detalle}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Founder rule block */}
          <motion.div
            className="mt-20 md:mt-24 border-t border-gold border-b py-8 max-w-[62ch] mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-lg md:text-xl font-light tracking-[0.01em]">
              Engagements are led by the founder.
            </p>
          </motion.div>

          {/* Enquiries + back */}
          <div className="mt-16 md:mt-20 text-center">
            <motion.p
              className="text-xl md:text-2xl font-light tracking-[0.01em]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              Enquiries —{" "}
              <a
                href="mailto:info@insight-circle.ai"
                className="border-b border-gold hover:text-gold transition-colors duration-500"
              >
                info@insight-circle.ai
              </a>
            </motion.p>

            <Link
              href="/"
              className="inline-block mt-14 text-sm md:text-base tracking-[0.18em] uppercase font-bold text-gold pb-2 border-b border-gold hover:brightness-90 transition-all duration-500"
            >
              &larr; The AI Insight Circle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
