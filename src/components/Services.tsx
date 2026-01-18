import { 
  Shield, 
  Users, 
  Camera, 
  Flame, 
  Dog, 
  Bell,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Surveillance Humaine & Gardiennage",
    description: "Des agents de sécurité qualifiés pour surveiller vos sites, prévenir les risques et assurer votre tranquillité d'esprit, jour et nuit.",
    path: "/human-surveillance",
  },
  {
    icon: Shield,
    title: "Sécurité Événementielle",
    description: "Une sécurité discrète et efficace pour vos événements : contrôle d'accès, gestion de foule et protection du public en toute sérénité.",
    path: "/event-security",
  },
  {
    icon: Camera,
    title: "Télésurveillance 24/7",
    description: "Des systèmes d'alarme connectés à notre centre de surveillance pour une protection 24/7 et des interventions rapides.",
    path: "/remote-monitoring",
  },
  {
    icon: Flame,
    title: "Sécurité Incendie SSIAP 1, 2 & 3",
    description: "Des agents SSIAP formés pour prévenir les incendies, sécuriser les locaux et intervenir en cas d'urgence.",
    path: "/fire-safety",
  },
  {
    icon: Dog,
    title: "Sécurité Cynophile & Patrouille",
    description: "Des équipes cynophiles pour dissuader, détecter les intrusions et renforcer la sécurité de vos sites sensibles.",
    path: "/k9-security",
  },
  {
    icon: Bell,
    title: "Installation de Systèmes d'Alarme",
    description: "De la vente et location à l'installation, nous offrons des solutions complètes pour sécuriser vos biens pour les professionnels et les particuliers.",
    path: "/alarm-installation",
  },
];

import MotionSection from "@/components/MotionSection";

const Services = () => {
  const navigate = useNavigate();

  return (
    <MotionSection id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Surveillance, sécurité incendie, télésurveillance...{" "}
            <span className="text-primary">Découvrez tous nos services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Au-delà de la surveillance humaine et de la télésurveillance, Sentinel Security propose une approche complète et innovante de la sécurité privée.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card hover:bg-secondary transition-all duration-300 border-border hover:border-primary/50 overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-card-foreground group-hover:text-white mb-3">
                  {service.title}
                </h3>
                  <p className="text-muted-foreground group-hover:text-white mb-4">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => navigate((service as any).path)}
                  className="p-0 h-auto text-primary hover:text-accent group inline-flex items-center"
                  type="button"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-secondary rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-diagonal hidden md:block" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-2">
                Une Offre de Sécurité Complète, Améliorée et Innovante
              </h3>
              <p className="text-muted-foreground">
                Solutions connectées, systèmes d'alarme intelligents et coordination transparente entre nos équipes sur le terrain et le centre de contrôle.
              </p>
            </div>
            <Button
              onClick={() => navigate("/our-commitments")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold whitespace-nowrap"
            >
              Nos Engagements
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .clip-diagonal {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </MotionSection>
  );
};

export default Services;
