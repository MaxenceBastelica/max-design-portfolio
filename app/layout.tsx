import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxence Bastelica - MAX DESIGN | Développeur Web & Mobile",
  description: "MAX DESIGN - Création et réalisation d'applications mobiles et sites internet. Développeur web spécialisé en Next.js, React et TypeScript.",
  keywords: ["développeur web", "Next.js", "React", "TypeScript", "portfolio", "création web", "applications mobiles"],
  authors: [{ name: "Maxence Bastelica" }],
  openGraph: {
    title: "Maxence Bastelica - MAX DESIGN | Développeur Web & Mobile",
    description: "Création et réalisation d'applications mobiles et sites internet professionnels",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
