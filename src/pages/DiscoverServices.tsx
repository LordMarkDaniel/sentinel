import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DiscoverServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </button>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Découvrez nos <span className="text-primary">services</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Des solutions de sécurité complètes adaptées à vos besoins. De la surveillance humaine à la télésurveillance 24/7, nous avons ce qu'il vous faut.
        </p>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Surveillance humaine",
              description: "Personnel de sécurité professionnel pour la protection sur site de vos biens et personnes",
            },
            {
              title: "Télésurveillance 24/7",
              description: "Surveillance en temps réel via des systèmes de caméras avancés et centres de contrôle",
            },
            {
              title: "Interventions d'alarme",
              description: "Équipes de réponse rapide prêtes à intervenir sur toute alerte de sécurité dans vos locaux",
            },
            {
              title: "Sécurité incendie (SSIAP)",
              description: "Agents certifiés et mesures de prévention incendie pour une protection maximale",
            },
            {
              title: "Sécurité d'événements",
              description: "Gestion professionnelle de la sécurité pour conférences, concerts et événements corporatifs",
            },
            {
              title: "Systèmes d'alarme",
              description: "Vente et installation de systèmes d'alarme connectés dernier cri et équipements associés",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contactez nos experts en sécurité dès aujourd'hui pour discuter des services adaptés à votre organisation.
          </p>
          <Button
            onClick={() => navigate("/request-quote")}
            className="bg-primary text-primary-foreground hover:bg-white hover:border-primary hover:text-black hover:border font-semibold px-6 py-6 text-lg"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverServices;
