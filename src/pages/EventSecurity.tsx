import { Users, Ticket, ShieldCheck, Radio, Music, Mic2, PartyPopper, Trophy, Crown, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EventSecurity = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Ticket,
      title: "Contrôle d'Accès",
      summary: "Filtrage rigoureux.",
      details: "Vérification des billets, invitations et accréditations. Palpation de sécurité et inspection visuelle des sacs."
    },
    {
      icon: Users,
      title: "Gestion de Foule",
      summary: "Flux maîtrisés.",
      details: "Canalisation des spectateurs, prévention des mouvements de panique et gestion des files d'attente."
    },
    {
      icon: Crown,
      title: "Protection VIP",
      summary: "Sécurité rapprochée.",
      details: "Escorte et protection des artistes, personnalités politiques et invités de marque dans les zones réservées."
    },
    {
      icon: AlertTriangle,
      title: "Sécurité Incendie",
      summary: "Agents SSIAP.",
      details: "Présence d'agents qualifiés pour la prévention des risques incendie et l'assistance aux personnes."
    },
    {
      icon: ShieldCheck,
      title: "Sécurisation de Zone",
      summary: "Périmètre étanche.",
      details: "Surveillance des barrières, des issues de secours et des zones techniques (backstage, loges)."
    },
    {
      icon: Radio,
      title: "Coordination PC",
      summary: "Pilotage centralisé.",
      details: "Gestion des communications radio et vidéo depuis un poste de commandement pour une réactivité optimale."
    }
  ];

  const eventTypes = [
    {
      icon: Music,
      title: "Concerts & Festivals",
      desc: "Gestion de grandes jauges en extérieur ou en salle."
    },
    {
      icon: Trophy,
      title: "Événements Sportifs",
      desc: "Sécurité des stades, des athlètes et des supporters."
    },
    {
      icon: Mic2,
      title: "Conférences & Séminaires",
      desc: "Accueil professionnel et discret pour le corporate."
    },
    {
      icon: PartyPopper,
      title: "Soirées Privées & Galas",
      desc: "Prestations haut de gamme pour événements exclusifs."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Sécurité <span className="text-primary">Événementielle</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Une sécurité complète pour les événements de toutes tailles. De la planification stratégique à l'intervention sur le terrain.
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">Types d'Événements Couverts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {eventTypes.map((type, idx) => (
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
            Vous organisez un événement ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            La réussite de votre événement passe par la sécurité de vos invités. Confiez-nous la gestion des risques.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Obtenir un devis événementiel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventSecurity;
