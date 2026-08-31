import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import Contenidos from "@/components/Contenidos";
import ForWhom from "@/components/ForWhom";
import ExpertStandard from "@/components/ExpertStandard";
import SobreNosotros from "@/components/SobreNosotros";
import Magnitude from "@/components/Magnitude";
import Leadership from "@/components/Leadership";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Spread from "@/components/Spread";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiencia />
        {/* Spread editorial — ventana circular (preview iStock 1196259255, agosto 2026) */}
        <Spread
          src="/imagery/05-circle-sunset-PREVIEW.jpg"
          alt="Silueta contemplando el atardecer a través de una ventana circular"
          ratio="cinemascope"
          grayscale
        />
        <Contenidos />
        <ForWhom />
        <ExpertStandard />
        {/* Spread editorial — networking (preview iStock 1633281467, agosto 2026).
            objectPosition alto para no cortar las cabezas en el crop cinemascope. */}
        <Spread
          src="/imagery/09-networking-cocktail-PREVIEW.jpg"
          alt="Ejecutivos conversando durante un cóctel de networking"
          ratio="cinemascope"
          objectPosition="center 22%"
          grayscale
        />
        <SobreNosotros />
        <Magnitude />
        <Leadership />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
