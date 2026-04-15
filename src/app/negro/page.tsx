import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import SobreNosotros from "@/components/SobreNosotros";
import Contenidos from "@/components/Contenidos";
import ProximoEvento from "@/components/ProximoEvento";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function HomeNegro() {
  return (
    <div className="theme-black min-h-[100dvh]">
      <Navbar />
      <main>
        <Hero heroImage="/hero/circulo_luminoso.webp" objectPosition="center 80%" />
        <Experiencia />
        <SobreNosotros />
        <Contenidos />
        <ProximoEvento />
        <Contacto />
      </main>
      <Footer />
      <VersionSwitcher current="black" />
    </div>
  );
}
