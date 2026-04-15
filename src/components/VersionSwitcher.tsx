"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface VersionSwitcherProps {
  current: "navy" | "black";
}

export default function VersionSwitcher({ current }: VersionSwitcherProps) {
  const isNavy = current === "navy";
  const targetHref = isNavy ? "/negro" : "/";
  const targetLabel = isNavy ? "Versión negra" : "Versión navy";
  const currentLabel = isNavy ? "Navy" : "Negra";

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[60]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="bg-[#E5B765] text-[#1A1A33] rounded-full shadow-2xl border border-[#E5B765]/30 overflow-hidden flex items-center">
        <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] bg-black/10">
          Versión: {currentLabel}
        </div>
        <Link
          href={targetHref}
          className="px-5 py-3 text-sm font-semibold hover:bg-[#F0C878] transition-colors duration-300"
        >
          Ver {targetLabel} →
        </Link>
      </div>
    </motion.div>
  );
}
