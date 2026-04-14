import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The AI Insight Circle | Donde la evidencia define la estrategia",
  description:
    "Foro estrategico exclusivo para lideres de los sectores clave de America Latina. Impacto cuantificable de la inteligencia artificial generativa en las industrias y sectores criticos.",
  openGraph: {
    title: "The AI Insight Circle | Donde la evidencia define la estrategia",
    description:
      "Foro estrategico exclusivo para lideres de America Latina. 40-60 decisores. Una conversacion que la region necesita.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistMono.variable} antialiased`}>
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
