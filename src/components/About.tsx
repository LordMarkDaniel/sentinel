import { Shield, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "20+ Années d'Expérience",
    description: "Établi depuis 2002, nous apportons des décennies d'expertise en sécurité",
  },
  {
    icon: Shield,
    title: "Licencié & Certifié",
    description: "Entièrement accrédité par les organismes réglementaires nationaux de sécurité",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Protection 24 heures sur 24 et équipes d'intervention rapide",
  },
  {
    icon: MapPin,
    title: "Expertise Locale",
    description: "Connaissance approfondie des besoins et défis de sécurité locaux",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-6">
              Expert en Sécurité Privée{" "}
              <span className="text-primary">depuis plus de 20 ans</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              SENTINEL SECURITY & SERVICES est une entreprise spécialisée dans la sécurité privée des biens et des personnes, établie depuis 2002. Forts de plus de 20 ans d'expérience, nous intervenons dans tous les domaines clés de la sécurité : surveillance humaine (gardiennage), télésurveillance 24/7, interventions d'alarme, sécurité incendie (agents SSIAP), sécurité événementielle, ainsi que la vente et l'installation de systèmes d'alarme connectés.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Accrédité par les conseils nationaux de sécurité, Sentinel Security s'appuie sur une parfaite connaissance de son secteur et une capacité constante à s'adapter aux nouveaux défis de sécurité.
            </p>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold"
            >
              En savoir plus sur nous
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-security-dark p-6 rounded-lg border border-border/20 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Banner */}
        <div className="mt-16 bg-security-dark rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-border/20">
          <img src="/mainlogo.png" alt="Sentinel Security" className="h-24 w-24 object-contain flex-shrink-0" />
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-secondary-foreground mb-2">
              Responsabilité, éthique, engagements : découvrez comment nous agissons
            </h4>
            <p className="text-muted-foreground">
              Demandez notre rapport RSE pour en savoir plus sur nos engagements sociaux et environnementaux.
            </p>
          </div>
          <Button 
            onClick={() => navigate("/our-commitments")}
            className="bg-primary text-primary-foreground hover:bg-accent"
          >
            Nos engagements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
