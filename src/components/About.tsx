"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-paper text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[920px] mx-auto text-center">
        <motion.p
          className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-gold mb-10 font-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          About The AI Insight Circle
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-[1.75] font-light max-w-[64ch] mx-auto text-[color:var(--ink-warm)]/70"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          The AI Insight Circle is the closed room where senior leadership
          reviews the groundwork of due diligence on artificial intelligence:
          empirical performance, regulatory risk, professional responsibility,
          internal governance, and the impact on revenue, margins, and talent.
        </motion.p>

        <motion.p
          className="mt-8 text-lg md:text-xl leading-[1.65] font-light max-w-[56ch] mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
        >
          The Circle does not complete the due diligence. It provides the
          inputs.{" "}
          <strong className="font-bold">
            The adoption decision holds when those inputs reach the firm&rsquo;s
            own committee.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}
