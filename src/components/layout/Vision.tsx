import { type Section } from "@/types/section";
import Image from "next/image";

export default function AboutVision({ title, description, imageUrl }: Section) {
  return (
    <>
      <section className="w-full text-white grid md:grid-cols-2 place-content-center place-items-center gap-10">
        <div className="w-full">
          <h2 className="text-3xl text-center  mb-4 font-bold">{title}</h2>
          <p className="text-lg text-justify">{description}</p>
        </div>
        <div>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={300}
            className="w-full bg-cover bg-center rounded"
          />
        </div>
      </section>
    </>
  );
}
