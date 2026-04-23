import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACCEENT – Éducation",
  description:
    "ACCEENT est une association à Ziguinchor qui œuvre pour l'éducation, la culture, l'entrepreneuriat et le numérique. Découvrez nos programmes ACCEENT4ELLES, TUT'TANK, ACCEENT'INCUB et nos actions locales pour le développement du territoire sénégalais.",
};

export default function EducationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="bg-blue-950/30">
          <Header />
        </div>
        {children}
        <Footer />
      </section>
    </>
  );
}
