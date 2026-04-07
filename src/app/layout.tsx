import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The AI Insight Circle | Beyond AI Hype",
  description:
    "Donde la inteligencia artificial deja de ser promesa y se convierte en criterio. Experiencias exclusivas para ejecutivos C-Level.",
  openGraph: {
    title: "The AI Insight Circle | Beyond AI Hype",
    description:
      "Experiencias exclusivas para ejecutivos C-Level sobre el impacto real de la IA en negocios e industrias.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh]">
        {/* Noise overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Ambient gold orb */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 600px at 70% 20%, rgba(201, 168, 76, 0.06), transparent 70%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
