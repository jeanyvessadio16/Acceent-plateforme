import AboutSection from "../layout/Aboutsection";
import AboutVision from "../layout/Vision";

export default function About() {
  const aboutData = {
    title: "À propos de ACCEENT",
    description:
      "Acceent est une association sénégalaise située à Ziguinchor, dans le quartier de Santhiaba. Elle œuvre principalement dans les domaines de l'éducation, de la culture, de l'entrepreneuriat, du développement durable et du numérique. Son approche se distingue par un ancrage local fort et une volonté de promouvoir une transformation sociale inclusive et durable. Pour découvrir nos actions concrètes, visitez ACCEENT4ELLES, TUT'TANK et notre programme d'incubation ACCEENT'INCUB.",
    imageUrl: "/image/aboutImage.jpg",
  };

  const aboutVision = {
    title: "Vision et Missions",
    description:
      "Acceent s'engage à autonomiser les populations locales, notamment les jeunes et les femmes, en leur offrant des outils adaptés pour surmonter les défis socio-économiques. L'organisation croit fermement en la création de solutions créatives et adaptées pour améliorer les conditions de vie des communautés locales. Elle aspire à faire de ses bénéficiaires des acteurs du changement, en les dotant des compétences nécessaires pour participer activement au développement de leur territoire. En savoir plus sur notre engagement culturel et social ou consultez notre Agend’Acceent.",
    imageUrl: "/image/vision.jpeg",
  };
  return (
    <>
      {/* sections about */}
      <section className="p-10 space-y-10 bg-[#242943]">
        <AboutSection {...aboutData} />
        <hr className="text-white" />
        <AboutVision {...aboutVision} />
      </section>
    </>
  );
}
