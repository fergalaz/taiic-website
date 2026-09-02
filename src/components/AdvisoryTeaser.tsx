"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AdvisoryTeaser() {
  return (
    <section
      id="advisory"
      className="bg-cream text-[color:var(--ink-warm)] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-[920px] mx-auto">
        <motion.div
          className="border border-[color:var(--ink-warm)]/20 px-8 md:px-14 py-12 md:py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <Image
            src="/brand/magnitude-logo-dark.png"
            alt="MAGnitude"
            width={1600}
            height={250}
            sizes="(min-width: 768px) 220px, 180px"
            className="w-[180px] md:w-[220px] h-auto"
          />

          <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-gold font-bold">
            Strategic Advisory
          </p>

          <p className="mt-6 text-base md:text-lg leading-[1.75] font-light text-[color:var(--ink-warm)]/75 max-w-[62ch]">
            The Circle&rsquo;s analysis is directed by MAGnitude, its
            strategic-intelligence practice. MAGnitude quantifies the economic
            impact of artificial intelligence — revenue pools, cost structures,
            competitive dynamics — and advises boards across the region under
            direct mandate.
          </p>

          <Link
            href="/advisory"
            className="inline-block mt-10 text-sm md:text-base tracking-[0.18em] uppercase font-bold text-gold pb-2 border-b border-gold hover:brightness-90 transition-all duration-500"
          >
            Advisory &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
