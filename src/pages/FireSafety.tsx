import { FireExtinguisher, AlertTriangle, FileCheck, HardHat, ShieldAlert, School } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FireSafety = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FireExtinguisher,
      title: "Installation & Maintenance",
      summary: "Équipements de pointe.",
      details: "Installation et vérification périodique des extincteurs, RIA, colonnes sèches et systèmes de désenfumage selon les normes NFS."
    },
    {
      icon: HardHat,
      title: "Agents SSIAP",
      summary: "Personnel qualifié.",
      details: "Mise à disposition d'agents SSIAP 1, 2 et 3 pour la surveillance permanente de vos ERP et IGH."
    },
    {
      icon: FileCheck,
      title: "Audits de Conformité",
      summary: "Respect des normes.",
      details: "Analyse complète de vos installations pour garantir le respect de la réglementation incendie en vigueur."
    },
    {
      icon: School,
      title: "Formation & Exercices",
      summary: "Préparation des équipes.",
      details: "Organisation d'exercices d'évacuation et formation de vos collaborateurs (EPI, ESI) aux gestes qui sauvent."
    },
    {
      icon: ShieldAlert,
      title: "Détection Incendie",
      summary: "Alerte précoce.",
      details: "Systèmes de détection automatique et manuelle reliés à nos centres de surveillance pour une réactivité maximale."
    },
    {
      icon: AlertTriangle,
      title: "Gestion de Crise",
      summary: "Intervention rapide.",
      details: "Protocoles d'urgence éprouvés pour limiter les dégâts et faciliter l'intervention des secours publics."
    }
  ];

  const ssiapLevels = [
    {
      level: "SSIAP 1",
      role: "Agent de Sécurité Incendie",
      desc: "Prévention, sensibilisation, alerte et évacuation."
    },
    {
      level: "SSIAP 2",
      role: "Chef d'Équipe",
      desc: "Management, formation, direction des secours."
    },
    {
      level: "SSIAP 3",
      role: "Chef de Service",
      desc: "Gestion du service, conseil technique, suivi des contrôles."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Sécurité <span className="text-primary">Incendie</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Prévenir, Détecter, Intervenir. Une approche globale de la sécurité incendie pour protéger vos biens et les personnes.
          </p>
        </header>

        {/* Flip Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.summary}</p>
                  <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{service.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SSIAP Levels Section */}
        <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Nos Niveaux d'Intervention (SSIAP)</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {ssiapLevels.map((item, idx) => (
                    <div key={idx} className="bg-secondary border border-border/20 rounded-xl p-6 hover:border-primary/50 transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <HardHat className="h-24 w-24 text-primary" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-4xl font-bold text-primary block mb-2">{item.level}</span>
                            <h3 className="text-xl font-bold text-white mb-3">{item.role}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Votre établissement est-il aux normes ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ne prenez aucun risque avec la sécurité incendie. Nos experts réalisent un audit complet de vos installations.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un audit incendie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FireSafety;
