import Image from "next/image";

interface SpreadProps {
  src: string;
  alt: string;
  /** Aspect ratio del spread. Default cinemascope (~21:9). */
  ratio?: "cinemascope" | "wide" | "standard";
  /** Caption opcional (eyebrow corto, estilo editorial). */
  caption?: string;
  /** Prioridad de carga (true para spread above-the-fold). */
  priority?: boolean;
  /** Object position para encuadre fino. */
  objectPosition?: string;
  /** Aplica grayscale para unificar tonalidad entre spreads (rev3 cliente). */
  grayscale?: boolean;
}

const ratioClass: Record<NonNullable<SpreadProps["ratio"]>, string> = {
  cinemascope: "aspect-[21/9]",
  wide: "aspect-[16/9]",
  standard: "aspect-[3/2]",
};

export default function Spread({
  src,
  alt,
  ratio = "wide",
  caption,
  priority = false,
  objectPosition,
  grayscale = false,
}: SpreadProps) {
  return (
    <figure className="relative w-full overflow-hidden bg-ink">
      <div className={`relative w-full ${ratioClass[ratio]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          style={{ objectPosition }}
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
        />
        {/* Vignette inferior — garantiza legibilidad de la caption */}
        {caption ? (
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="absolute bottom-6 left-6 md:bottom-10 md:left-12 text-[11px] md:text-[13px] tracking-[0.28em] uppercase text-white font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
