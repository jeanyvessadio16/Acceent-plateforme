import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  listAccompagnement,
  approches,
} from "@/data/education/listAccompagnement";
import { Metadata } from "next";
import {
  Users,
  Target,
  TrendingUp,
  Heart,
  BookOpen,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ACCEENT4ELLES",
  description:
    "ACCEENT4ELLES est un programme d'accompagnement des jeunes filles",
};

export default function Acceent4ELLES() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "ACCENT4ELLES est un programme initié par ACCEENT pour accompagner des jeunes filles en situation de vulnérabilité, souvent confrontées à des difficultés scolaires, économiques ou à des grossesses précoces. Notre objectif est de leur offrir un cadre bienveillant et structurant pour les aider à reprendre confiance en elles, poursuivre leur scolarité et construire un avenir meilleur.",
  };
  return (
    <>
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                ACCEENT4ELLES
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Accompagner les jeunes filles vers un avenir meilleur
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un programme dédié à l&apos;émancipation et à la réussite des
              jeunes filles en situation de vulnérabilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                En savoir plus
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* section statistiques */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Impact
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* bénéficiaire */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary font-bold mb-2">
                  500+
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Bénéficiaires accompagnées
                </CardDescription>
              </CardContent>
            </Card>

            {/* réalisation */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl text-secondary font-bold mb-2">
                  15+
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Projets réalisés avec succès
                </CardDescription>
              </CardContent>
            </Card>

            {/* taux de réussite */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-3xl text-accent font-bold mb-2">
                  95%
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Taux de réussite
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* composant AboutProgramme amélioré */}
      <div className="py-10">
        <AboutPrgramme {...acceent4elles}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* programme */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Le programme propose un accompagnement global
                </h2>
              </div>
              <div className="space-y-3">
                {listAccompagnement.map((list) => (
                  <div
                    key={list.nom}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{list.nom}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec ACCENT4ELLES, nous croyons qu&apos;aucune situation
                n&apos;est définitive. Chaque fille mérite une seconde chance,
                un accompagnement digne et des opportunités pour se révéler et
                s&apos;épanouir.
              </p>
            </div>

            {/* approche */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Notre approche
                </h2>
              </div>
              <div className="space-y-3">
                {approches.map((approche) => (
                  <div
                    key={approche.nom}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      {approche.nom}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre approche repose sur un accompagnement global et durable,
                combinant formation continue, mentorat personnalisé et suivi
                post-formation pour garantir l&apos;autonomie et la réussite des
                bénéficiaires.
              </p>
            </div>
          </div>
        </AboutPrgramme>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
