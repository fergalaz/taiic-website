import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import Contenidos from "@/components/Contenidos";
import FirstClosedDoor from "@/components/FirstClosedDoor";
import ForWhom from "@/components/ForWhom";
import ExpertStandard from "@/components/ExpertStandard";
import ProximoEvento from "@/components/ProximoEvento";
import SobreNosotros from "@/components/SobreNosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero heroImage="/hero/nido_luminoso.webp" />
        <Experiencia />
        <Contenidos />
        <FirstClosedDoor />
        <ForWhom />
        <ExpertStandard />
        <ProximoEvento />
        <SobreNosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
