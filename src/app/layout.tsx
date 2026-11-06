import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Bordado Ruso en videoclases, desde cero | Mariana Robles",
  description:
    "Aprendé Bordado Ruso con videoclases paso a paso, desde cero hasta avanzado, y más de 100 moldes listos para usar. Empezá sin experiencia, sin saber dibujar y sin materiales caros.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7b2346",
};

// Poppins nos mesmos pesos que a referência carrega (400 e 700, normal e itálico).
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* TODO(Luan): Meta Pixel e UTMify desta página ainda não enviados. */}
      </head>
      <body>{children}</body>
    </html>
  );
}
