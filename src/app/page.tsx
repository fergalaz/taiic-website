import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiencia from "@/components/Experiencia";
import Oportunidades from "@/components/Oportunidades";
import Equipo from "@/components/Equipo";
import Contenidos from "@/components/Contenidos";
import Registro from "@/components/Registro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiencia />
        <Oportunidades />
        <Equipo />
        <Contenidos />
        <Registro />
      </main>
      <Footer />
    </>
  );
}
