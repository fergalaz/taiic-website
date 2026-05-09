import Image from "next/image";

type LogoVariant = "dark" | "light" | "gold";

interface LogoProps {
  variant?: LogoVariant;
  size?: number;
  className?: string;
  /** Render the wordmark "THE AI INSIGHT CIRCLE" beside the isotipo */
  withWordmark?: boolean;
  /** Layout when withWordmark is true */
  wordmarkLayout?: "right" | "below";
}

const SRC: Record<LogoVariant, string> = {
  dark: "/brand/taiic-isotipo.png",
  light: "/brand/taiic-isotipo-white.png",
  gold: "/brand/taiic-isotipo-gold.png",
};

export default function Logo({
  variant = "dark",
  size = 56,
  className = "",
  withWordmark = false,
  wordmarkLayout = "right",
}: LogoProps) {
  const isotipo = (
    <Image
      src={SRC[variant]}
      alt="The AI Insight Circle"
      width={size}
      height={size}
      priority
      className="select-none"
    />
  );

  if (!withWordmark) {
    return <span className={`inline-flex ${className}`}>{isotipo}</span>;
  }

  const wordmarkColor =
    variant === "light"
      ? "text-white"
      : variant === "gold"
        ? "text-gold"
        : "text-[color:var(--ink-warm)]";

  if (wordmarkLayout === "below") {
    return (
      <span
        className={`inline-flex flex-col items-center gap-3 ${className}`}
      >
        {isotipo}
        <span
          className={`text-[11px] md:text-xs uppercase tracking-[0.32em] font-light ${wordmarkColor}`}
        >
          The AI Insight Circle
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {isotipo}
      <span
        className={`text-[11px] uppercase tracking-[0.28em] font-light ${wordmarkColor}`}
      >
        The AI Insight Circle
      </span>
    </span>
  );
}
