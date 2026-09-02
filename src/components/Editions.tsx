"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Editions() {
  return (
    <section
      id="editions"
      className="bg-cream text-[color:var(--ink-warm)] py-24 md:py-32 px-6 md:px-10"
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
          Editions
        </motion.p>

        <motion.h2
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          One sector <strong className="font-bold">per edition</strong>.
        </motion.h2>

        <motion.p
          className="mt-10 text-base md:text-lg leading-[1.75] font-light max-w-[58ch] mx-auto text-[color:var(--ink-warm)]/70"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
        >
          Each edition takes a single sector and examines it in depth — the
          economics, the regulation, the measured performance of AI on the
          sector&rsquo;s own tasks.
        </motion.p>

        <motion.p
          className="mt-10 md:mt-12 text-2xl md:text-3xl lg:text-[2.4rem] font-light tracking-[0.02em] leading-[1.3]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.24 }}
        >
          Current edition —{" "}
          <strong className="font-bold text-gold">Legal services.</strong>
        </motion.p>

        <motion.p
          className="mt-8 text-sm md:text-base leading-[1.8] font-light text-[color:var(--ink-warm)]/65 max-w-[56ch] mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
        >
          <strong className="font-normal text-[color:var(--ink-warm)]">
            Forthcoming
          </strong>{" "}
          — Education &middot; Agriculture &middot; Energy &middot; Oil &amp;
          gas &middot; Mining &middot; Infrastructure &middot; Tourism &middot;
          Health.
        </motion.p>
      </div>
    </section>
  );
}
