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
        {/* Editorial spread — blurred lobby crowd (preview iStock 1176681661, client pick) */}
        <Spread
          src="/imagery/14-networking-blur-PREVIEW.jpg"
          alt="Blurred figures moving through a bright modern lobby"
          ratio="cinemascope"
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
