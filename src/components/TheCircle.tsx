"use client";

import { motion } from "framer-motion";

const facts = [
  { k: "Selection", v: "40 to 60 participants per edition" },
  { k: "Format", v: "Chatham House Rule" },
  { k: "Depth", v: "One sector per edition" },
  { k: "Standard", v: "No sponsors. No commercial presence." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TheCircle() {
  return (
    <section
      id="circle"
      className="bg-paper text-[color:var(--ink-warm)] pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-7 font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            The Circle
          </motion.p>

          <motion.h2
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light tracking-[0.02em] leading-[1.2]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            The <strong className="font-bold">private room</strong>.
          </motion.h2>

          <motion.p
            className="mt-10 text-base md:text-lg leading-[1.75] font-light max-w-[62ch] mx-auto text-[color:var(--ink-warm)]/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
          >
            A closed room of forty to sixty senior decision-makers per edition,
            convened under the Chatham House Rule. One sector per edition.
            Discussion grounded in evidence and held among peers, in
            confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 border-t border-[color:var(--ink-warm)]/15 pt-10 md:pt-12">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.k}
              className="flex flex-col gap-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: index * 0.06,
              }}
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.32em] text-gold font-bold">
                {fact.k}
              </span>
              <span className="text-lg md:text-xl font-light tracking-[0.01em] leading-[1.4]">
                {fact.v}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 md:mt-12 text-sm md:text-[15px] leading-[1.7] font-light text-[color:var(--ink-warm)]/60"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          Admission is by invitation or application.
          <br />
          Terms are set out in a private membership memorandum, available on
          request.
        </motion.p>
      </div>
    </section>
  );
}
