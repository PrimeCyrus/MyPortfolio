import type { Metadata } from "next";
import { Sora, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Cyrus's Portfolio",
  description:
    "Cyrus — Founder of Enz Labs. 10+ products shipped solo. Open to freelance, part-time, full-time.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${archivo.variable} ${jetbrains.variable} noise antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
