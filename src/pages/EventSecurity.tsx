import { Shield, Target, Crosshair, Zap, Bug, Search, AlertOctagon, Terminal, Ghost, Server, Fingerprint } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EventSecurity = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Ghost,
      title: "Red Team Operations",
      summary: "Simulation d'attaque réelle.",
      details: "Infiltration multi-vectorielle (web, réseau, physique) pour tester la capacité de détection et de réponse de vos équipes de sécurité."
    },
    {
      icon: Target,
      title: "Ingénierie Sociale",
      summary: "Tester le facteur humain.",
      details: "Campagnes de phishing, vishing et smishing pour évaluer la vigilance de vos collaborateurs face aux tentatives de manipulation."
    },
    {
      icon: Crosshair,
      title: "Pentest Physique",
      summary: "Infiltration sur site.",
      details: "Évaluation de la sécurité de vos locaux : contournement de badgeuses, crochetage et accès aux zones sensibles ou salles serveurs."
    },
    {
      icon: Search,
      title: "Analyse de Surface",
      summary: "Cartographie de l'ombre.",
      details: "Identification de tous vos actifs exposés sur internet et analyse des vecteurs d'entrée potentiels pour un attaquant (OSINT)."
    },
    {
      icon: Zap,
      title: "Purple Team",
      summary: "Synergie offensive/défensive.",
      details: "Exercices conjoints pour améliorer vos capacités de détection en temps réel et affiner vos règles de corrélation SIEM."
    },
    {
      icon: AlertOctagon,
      title: "Gestion de Crise",
      summary: "Préparer l'imprévisible.",
      details: "Simulation de crise cyber (Ransomware, Fuite de données) pour tester vos protocoles de communication et de décision."
    }
  ];

  const expertiseTypes = [
    {
      icon: Server,
      title: "Infrastructures Critiques",
      desc: "Protection des systèmes industriels et des réseaux d'énergie."
    },
    {
      icon: Fingerprint,
      title: "Secteur Bancaire",
      desc: "Audit de conformité et résistance aux fraudes complexes."
    },
    {
      icon: Terminal,
      title: "Éditeurs de Logiciels",
      desc: "Sécurisation du cycle de développement et de la supply chain."
    },
    {
      icon: Shield,
      title: "Fintechs & Startups",
      desc: "Accompagnement agile pour une sécurité dès la conception."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Évaluation des menaces & <span className="text-primary">Red Team</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Anticiper, Simuler, Renforcer. Une immersion totale dans l'esprit d'un attaquant pour éprouver vos défenses les plus critiques.
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

        {/* Event Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">Expertises Sectorielles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseTypes.map((type, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Êtes-vous prêt pour une attaque réelle ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            La résilience de votre organisation se mesure face à l'inconnu. Lancez un exercice Red Team pour tester vos limites.
          </p>
          <Button
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Lancer une simulation Red Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventSecurity;
