import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import SobreNosotros from "@/components/SobreNosotros";
import Contenidos from "@/components/Contenidos";
import ProximoEvento from "@/components/ProximoEvento";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiencia />
        <SobreNosotros />
        <Contenidos />
        <ProximoEvento />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
