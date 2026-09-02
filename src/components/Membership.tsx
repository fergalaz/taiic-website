"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Membership() {
  return (
    <section
      id="membership"
      className="bg-paper text-[color:var(--ink-warm)] py-32 md:py-44 px-6 md:px-10"
    >
      <div className="max-w-[920px] mx-auto text-center border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16">
        <motion.p
          className="text-[11px] md:text-xs uppercase tracking-[0.36em] text-gold mb-8 font-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          Membership
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-[1.75] font-light max-w-[62ch] mx-auto text-[color:var(--ink-warm)]/75"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          Participation in the Circle is by membership — individual, firm, and
          corporate tables. Terms and fees are set out in a private memorandum,
          available on request. Universities and research institutions
          participate as institutional partners, on an in-kind basis.
        </motion.p>
      </div>
    </section>
  );
}
