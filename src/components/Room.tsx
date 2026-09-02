"use client";

import { motion } from "framer-motion";

const audience = [
  "Managing partners and executive committees",
  "General counsel and chief legal officers",
  "Boards and C-suite of leading companies",
  "Selected public-sector leadership",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Room() {
  return (
    <section
      id="room"
      className="bg-cream text-[color:var(--ink-warm)] py-24 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left column — editorial graphic */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="relative w-full aspect-[3/4] max-h-[72vh] overflow-hidden bg-[color:var(--ink-warm)]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/07-chess-queen-PREVIEW.jpg"
                alt="Chess queen in silhouette on a reflective surface"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "center" }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
                }}
              />
              <span className="absolute bottom-6 left-6 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/85 font-light">
                The room
              </span>
            </div>
          </motion.div>

          {/* Right column — title + list */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-gold mb-7 font-bold"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              The room
            </motion.p>

            <motion.h2
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3rem] font-light tracking-[0.02em] leading-[1.2] mb-10 md:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.08 }}
            >
              Who is <strong className="font-bold">in the room</strong>.
            </motion.h2>

            <ul className="border-t border-[color:var(--ink-warm)]/15">
              {audience.map((item, index) => (
                <motion.li
                  key={item}
                  className="border-b border-[color:var(--ink-warm)]/15"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                    delay: index * 0.04,
                  }}
                >
                  <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-6 items-baseline py-5 md:py-6">
                    <span className="text-gold text-[11px] md:text-xs tracking-[0.22em] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg md:text-xl lg:text-[1.4rem] font-light tracking-[0.01em] leading-[1.3]">
                      {item}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
