import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "The AI Insight Circle | Debida diligencia en IA para la alta dirección",
  description:
    "Círculo privado donde los principales tomadores de decisiones de América Latina analizan el impacto real y medible de la IA en sectores estratégicos — con expertos globales, evidencia sectorial y sin ruido comercial.",
  openGraph: {
    title:
      "The AI Insight Circle | Debida diligencia en IA para la alta dirección",
    description:
      "40–60 participantes seleccionados · Análisis profundos por sector · Formato Chatham House.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-[100dvh]">
        {/* Noise overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
