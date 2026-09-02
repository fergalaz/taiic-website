"use client";

import { ArrowUp } from "@phosphor-icons/react";
import Logo from "./Logo";

const navLinks = [
  { label: "The Circle", href: "#circle" },
  { label: "The Forum", href: "#forum" },
  { label: "Advisory", href: "/advisory" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

interface FooterProps {
  /** Prefijo para los anchors: "" en el home, "/" en subpáginas. */
  anchorPrefix?: string;
}

export default function Footer({ anchorPrefix = "" }: FooterProps) {
  return (
    <footer className="bg-ink pt-24 pb-10 px-4 relative">
      {/* Gold line separator at top */}
      <div className="absolute top-0 left-0 right-0 gold-separator" />

      <div className="max-w-[1400px] mx-auto">
        {/* Logo centered — original brandbook isotipo */}
        <div className="flex flex-col items-center mb-14 gap-5">
          <Logo variant="light" size={80} />
          <span className="text-sm md:text-base uppercase tracking-[0.2em] text-text-primary font-medium">
            The AI Insight Circle
          </span>
        </div>

        {/* Navigation links — horizontal */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-14">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={
                link.href.startsWith("#")
                  ? anchorPrefix + link.href
                  : link.href
              }
              className="text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-center text-sm md:text-base font-light tracking-wide text-text-primary/70 mb-12">
          Executive production —{" "}
          <span className="font-medium text-text-primary">BOI Events</span>
        </p>

        {/* Back to top */}
        <div className="flex justify-center mb-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-text-secondary/50 hover:text-accent transition-colors duration-300"
          >
            Back to top
            <ArrowUp weight="bold" size={12} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="font-mono text-xs text-text-secondary/50">
            &copy; 2026 The AI Insight Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
