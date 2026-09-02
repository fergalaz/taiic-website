"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TheForum() {
  return (
    <section
      id="forum"
      className="bg-ink text-white py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[920px] mx-auto text-center">
        <motion.p
          className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          The Forum
        </motion.p>

        <motion.h2
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          The <strong className="font-bold">open program</strong>.
        </motion.h2>

        <motion.p
          className="mt-10 text-base md:text-lg leading-[1.75] font-light max-w-[60ch] mx-auto text-white/70"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
        >
          The Forum extends the Circle&rsquo;s standard to a wider audience:
          evidence-based sessions on artificial intelligence for executives
          across the region. Sponsors support the Forum; they do not appear on
          its agenda.
        </motion.p>
      </div>
    </section>
  );
}
