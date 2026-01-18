import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const reasons = [
  "Partenaire réactif et engagé pour votre sécurité",
  "Technologie de pointe combinée à l'expertise humaine",
  "Disponibilité 24/7 et écoute constante",
  "Structure à taille humaine proche de vos besoins",
  "Traçabilité complète de toutes les interventions",
  "Délais d'intervention rapides sur site",
];

const WhyUs = () => {
  const navigate = useNavigate();

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden relative">
              <img 
                src="/hacking-2964100.jpg"
                alt="Security Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-security-dark/80 to-security-black/80 flex items-center justify-center relative z-10">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-primary-foreground">24</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-secondary-foreground">
                    Heures par jour
                  </p>
                  <p className="text-primary">7 jours sur 7</p>
                  <p className="text-muted-foreground mt-4">
                    Nous sommes toujours disponibles pour protéger vos biens
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary/30 rounded-lg z-20" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-primary/30 rounded-lg z-20" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Un partenaire réactif et engagé,{" "}
              <span className="text-primary">À votre service</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Alliant technologie de pointe et expertise humaine, SENTINEL SECURITY accompagne de nombreuses entreprises, collectivités et particuliers à la recherche d'un partenaire fiable, flexible et réactif.
            </p>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={() => navigate("/discover-services")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold group"
            >
              En savoir plus
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
