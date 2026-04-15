"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenu] = useState(false);

  // links items
  const navbarItems = [
    { name: "Accueil", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Entreprenariat", href: "/entreprenariat" },
    { name: "Numérique", href: "/numerique" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    //   header
    <>
      <header className="w-full fixed px-10 py-4 flex justify-between items-center bg-[#242943]/80 border-b border-gray-700 z-50">
        <div className="logo">
          <Link href="/" className="">
            <Image
              src="/logo/logo-acceent.png"
              alt="Accent logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Bouton de menu */}
        <Button
          onClick={() => setIsMenu(!isMenuOpen)}
          className="md:hidden text-white cursor-pointer"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* navigation menu */}
        <nav className="max-md:hidden">
          <ul className="flex gap-5">
            {navbarItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden min-h-screen flex flex-col justify-center items-center bg-blue-950 py-4 shadow z-40">
          <ul className="flex flex-col gap-4 text-center">
            {navbarItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
