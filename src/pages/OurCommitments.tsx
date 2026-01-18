import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Heart, Leaf, Users } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import MotionSection from "@/components/MotionSection";

const commitments = [
  {
    icon: Users,
    title: "L'Humain d'Abord",
    description:
      "Nous priorisons la sécurité et le bien-être des personnes dans chaque décision que nous prenons.",
    points: [
      "Personnel qualifié",
      "Réponse centrée sur le client",
      "Engagement communautaire",
      "Soutien aux entreprises locales",
    ],
  },
  {
    icon: Leaf,
    title: "Durabilité Environnementale",
    description:
      "Nous nous efforçons de minimiser notre empreinte environnementale grâce à des pratiques écologiques et des opérations durables.",
    points: [
      "Technologies économes en énergie",
      "Réduction des émissions de carbone",
      "Pratiques de bureau durables",
      "Initiatives d'équipement vert",
    ],
  },
  {
    icon: Users,
    title: "Pratiques Commerciales Éthiques",
    description:
      "La transparence, l'honnêteté et l'intégrité guident toutes nos décisions commerciales et interactions avec les clients et les parties prenantes.",
    points: [
      "Tarification et contrats transparents",
      "Protection de la confidentialité des clients",
      "Politiques anti-corruption",
      "Pratiques de concurrence loyale",
    ],
  },
];

export default function OurCommitments() {
  const navigate = useNavigate();

  return (
    <MotionSection className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nos <span className="text-primary">engagements</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Chez Sentinel Security & Services, nous sommes convaincus que des pratiques commerciales responsables et éthiques sont la base de la confiance. Nos engagements vont au-delà des services de sécurité pour englober la responsabilité sociale, la durabilité environnementale et l'excellence éthique.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon as any;
            return (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-all hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-white mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white mb-6">
                  {commitment.description}
                </p>
                <ul className="space-y-3">
                  {commitment.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:text-white" />
                      <span className="text-foreground text-sm group-hover:text-white">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CSR Report Section */}
        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                Responsabilité, éthique, engagements
              </h2>
              <p className="text-muted-foreground mb-6">
                En savoir plus sur notre façon d'agir avec intégrité et conscience sociale. Notre rapport RSE détaillé présente nos efforts en matière de protection de l'environnement, de développement communautaire et de pratiques commerciales éthiques.
              </p>
              <p className="text-muted-foreground mb-8">
                Nous estimons qu'être un excellent prestataire de sécurité signifie être un citoyen d'entreprise responsable, engagé à faire une différence positive dans la société.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6"
              >
                Demander notre rapport RSE
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
                  style={{ backgroundImage: 'url("/2lock.jpg")' }}
                  role="img"
                  aria-label="Engagement vers l'excellence"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-white font-semibold text-lg">Engagement vers l'excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
            Nos valeurs fondamentales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "Intégrité", desc: "Honnêteté et transparence dans toutes les relations" },
              { value: "Excellence", desc: "Les normes les plus élevées en matière de services de sécurité" },
              { value: "Respect", desc: "Valoriser les personnes et les communautés que nous servons" },
              { value: "Innovation", desc: "Amélioration continue et adoption de technologies" },
            ].map((item, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg border border-border/20 text-center group hover:border-primary/50 transition-all hover:shadow-lg">
                <p className="text-xl font-display font-bold text-primary mb-2">{item.value}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
