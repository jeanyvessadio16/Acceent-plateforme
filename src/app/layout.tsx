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
  title: "ACCEENT – Éducation, Culture & Numérique à Ziguinchor",
  description:
    "ACCEENT est une association à Ziguinchor qui œuvre pour l'éducation, la culture, l'entrepreneuriat et le numérique. Découvrez nos programmes ACCEENT4ELLES, TUT'TANK, ACCEENT'INCUB et nos actions locales pour le développement du territoire sénégalais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
