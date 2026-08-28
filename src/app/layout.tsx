import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Educa - Atelier Didactic | Resurse Didactice pentru Învățători și Educatori",
  description: "Resurse didactice create cu suflet, gata de adus în clasă pentru grădinițe și clasele primare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="bg-[#FFFDF9] min-h-screen flex flex-col justify-between text-[#2D3748]">
        <div>
          <Navbar />
          <main className="pb-16">{children}</main>
        </div>
        
        {/* Footer */}
        <footer className="w-full bg-[#FAF6EE] border-t border-[#EADFC9] py-8 text-center text-xs text-[#8A8373]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Educa - Atelier Didactic. Creat cu drag pentru cadrele didactice.</p>
            <p className="font-semibold text-[#E06D53]">educatori • învățători • părinți</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
