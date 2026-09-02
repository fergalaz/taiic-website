import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvisoryContent from "@/components/AdvisoryContent";

export const metadata: Metadata = {
  title: "Advisory — MAGnitude | The AI Insight Circle",
  description:
    "MAGnitude. Strategic intelligence for the AI economy. Economic impact analysis, AI strategy and roadmapping, sector intelligence, and executive advisory.",
};

export default function AdvisoryPage() {
  return (
    <>
      <Navbar anchorPrefix="/" />
      <AdvisoryContent />
      <Footer anchorPrefix="/" />
    </>
  );
}
