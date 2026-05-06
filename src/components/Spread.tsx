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
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="absolute bottom-6 left-6 md:bottom-10 md:left-12 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/70 font-light">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
