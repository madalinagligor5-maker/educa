import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-baloo2",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduZori — Platforma educatoarei organizate și inspirate",
  description:
    "Mai puțin timp cu hârtiile. Mai mult timp la grupă. Planificări, proiecte didactice, activități și materiale pentru grădiniță, organizate într-un singur loc conform Curriculum OMEN 4694/2019.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${baloo2.variable} ${poppins.variable}`}>
      <body className="bg-cream font-body text-charcoal antialiased min-h-screen selection:bg-powderPink selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}
