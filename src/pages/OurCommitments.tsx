import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Heart, Shield, Users, Lock, Eye, Globe, Zap } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import MotionSection from "@/components/MotionSection";

const commitments = [
  {
    icon: Shield,
    title: "Éthique & Responsabilité",
    description:
      "Nous pratiquons une cybersécurité éthique, incluant la divulgation responsable et le respect strict du secret professionnel.",
    points: [
      "Divulgation responsable (VDP)",
      "Secret professionnel absolu",
      "Éthique de hacking (Hacker Éthique)",
      "Expertise locale certifiée",
    ],
  },
  {
    icon: Lock,
    title: "Protection des Données",
    description:
      "La vie privée est un droit fondamental. Nous appliquons les standards les plus stricts pour sécuriser les données de nos clients.",
    points: [
      "Conformité RGPD & Lois locales",
      "Chiffrement de bout en bout",
      "Souveraineté des données",
      "Audit de confidentialité continu",
    ],
  },
  {
    icon: Eye,
    title: "Transparence Totale",
    description:
      "Nous communiquons avec clarté sur les risques identifiés et les mesures prises, sans jargon inutile ni coûts cachés.",
    points: [
      "Rapports détaillés et exploitables",
      "Communication en temps de crise",
      "Indépendance technologique",
      "Tarification claire et fixe",
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
            Nos <span className="text-primary">engagements cyber</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Chez Sentinel Security, nous sommes convaincus que la cybersécurité est avant tout une question de confiance. Nos engagements reposent sur une éthique rigoureuse, la protection absolue de la vie privée et une transparence totale vis-à-vis de nos partenaires.
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
                Transparence, éthique, sécurité
              </h2>
              <p className="text-muted-foreground mb-6">
                Découvrez comment nous protégeons vos actifs avec intégrité. Notre rapport de transparence détaille nos méthodologies, nos certifications et notre engagement pour une cybersécurité souveraine.
              </p>
              <p className="text-muted-foreground mb-8">
                Pour nous, être un expert cyber signifie être un partenaire de confiance, engagé à bâtir un écosystème numérique plus sûr pour tous.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6"
              >
                Explorer nos engagements éthiques
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
              { value: "Intégrité", desc: "Honnêteté et rigueur dans chaque diagnostic de sécurité" },
              { value: "Confidentialité", desc: "Protection absolue des données et des secrets d'affaires" },
              { value: "Résilience", desc: "Capacité à anticiper et à surmonter les crises cyber" },
              { value: "Excellence", desc: "Expertise technique de pointe et formation continue" },
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
