import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Premise from "@/components/Premise";
import TheCircle from "@/components/TheCircle";
import TheForum from "@/components/TheForum";
import TheStandard from "@/components/TheStandard";
import Editions from "@/components/Editions";
import Room from "@/components/Room";
import About from "@/components/About";
import AdvisoryTeaser from "@/components/AdvisoryTeaser";
import Leadership from "@/components/Leadership";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spread from "@/components/Spread";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Premise />
        {/* Editorial spread — circular window (preview iStock 1196259255) */}
        <Spread
          src="/imagery/05-circle-sunset-PREVIEW.jpg"
          alt="Silhouette watching the sunset through a circular window"
          ratio="cinemascope"
          grayscale
        />
        <TheCircle />
        <TheForum />
        <TheStandard />
        <Editions />
        <Room />
        {/* Editorial spread — networking (preview iStock 1633281467).
            objectPosition keeps heads visible in the cinemascope crop. */}
        <Spread
          src="/imagery/09-networking-cocktail-PREVIEW.jpg"
          alt="Executives in conversation during a networking reception"
          ratio="cinemascope"
          objectPosition="center 22%"
          grayscale
        />
        <About />
        <AdvisoryTeaser />
        <Leadership />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
