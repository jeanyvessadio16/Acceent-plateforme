"use client";

import Header from "@/components/layout/Header";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { programmes } from "@/data/programmeAcceent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState([
    "Tous",
    "Education",
    "Entreprenariat",
    "Culture",
  ]);

  const filtrerImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log();
  };
  return (
    <>
      {/* Header */}
      <Header />
      {/* main */}
      <main>
        <section className="">
          <div
            style={{ backgroundImage: "url('/image/banner.jpg')" }}
            className="bg-cover bg-top relative"
          >
            <div className="absolute inset-0 bg-[#242943] opacity-40"></div>
            <div className="min-h-screen space-y-4 text-center text-white flex flex-col justify-center items-center relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                Bievenue à Acceent
              </h1>
              {/* <Separator orientation="horizontal" className="text-white" /> */}
              <p className="font-semibold uppercase">
                Action pour Contribution Collective pour l&apos;Education,
                l&apos;Entreprenariat et le Numérique et Technologies
              </p>
              <Button size={"xl"} className=" text-lg border border-white">
                En savoir plus
              </Button>
            </div>
          </div>
        </section>

        {/* Programme Acceent */}
        <section className="py-12 px-10">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">
              Programmes Acceent
            </h2>
            <div className="w-full mb-4 flex gap-5 justify-center items-center">
              {searchTerm.map((term) => (
                <Button
                  key={term}
                  className="text-md font-semibold hover:text-[#242943] cursor-pointer"
                  onClick={filtrerImage}
                >
                  {term}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.map((programme) => (
                <Card
                  key={programme.id}
                  className="bg-white shadow-md overflow-hidden border-none"
                >
                  <Image
                    src={programme.imageUrl}
                    alt={programme.title}
                    width={200}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <CardTitle className="text-xl text-black font-bold mb-2">
                      {programme.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {programme.description}
                    </CardDescription>
                    <Button variant="outline" className="mt-4">
                      En savoir plus
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About sections */}
        <section className="bg-[#]">
          <About />
        </section>

        {/* Contact section */}
        <Contact />
      </main>
    </>
  );
}
