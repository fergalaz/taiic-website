"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Premise() {
  return (
    <section id="premise" className="bg-cream text-[color:var(--ink-warm)]">
      <div className="px-6 md:px-10 py-32 md:py-44">
        <div className="max-w-[920px] mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex justify-center mb-12 md:mb-14"
          >
            <Logo variant="dark" size={104} />
          </motion.div>

          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.4em] text-gold mb-12 md:mb-14 font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
          >
            The premise
          </motion.p>

          <motion.h2
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-light tracking-[0.02em] leading-[1.2] max-w-[26ch] mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.12 }}
          >
            AI is no longer a technology question. It is{" "}
            <strong className="font-bold">a business-model question</strong>.
          </motion.h2>

          <motion.p
            className="mt-12 text-base md:text-lg leading-[1.75] font-light max-w-[58ch] mx-auto text-[color:var(--ink-warm)]/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            Every major sector faces structural change in how revenue is earned
            and cost is carried. Most organizations decide without the analysis
            the decision requires. The Circle exists to close that gap.
          </motion.p>

          <div className="mt-16 flex justify-center">
            <div className="h-px w-16 bg-[color:var(--ink-warm)]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
