import { CheckCircle, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurCommitmentsSection = () => {
  const commitments = [
    {
      icon: Heart,
      title: "Éthique & Divulgation responsable",
      description: "Nous respectons les principes de divulgation responsable et agissons toujours dans l'intérêt de nos clients",
    },
    {
      icon: Leaf,
      title: "Protection des données",
      description: "Confidentialité absolue de vos informations sensibles et conformité aux réglementations RGPD",
    },
    {
      icon: Users,
      title: "Pratiques professionnelles éthiques",
      description: "Transparence, honnêteté et intégrité dans toutes nos missions de cybersécurité",
    },
  ];

  return (
    <section id="our-commitments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nos <span className="text-primary">Engagements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous croyons que des pratiques éthiques et responsables sont le fondement de la confiance et du succès durable en cybersécurité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-white mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white">
                  {commitment.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            En savoir plus sur notre approche éthique
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez nos engagements complets en matière de protection des données, de divulgation responsable et d'excellence éthique en cybersécurité.
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6"
          >
            Voir nos engagements complets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentsSection;
