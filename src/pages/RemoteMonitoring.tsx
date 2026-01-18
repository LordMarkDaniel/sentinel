import { Monitor, Eye, ShieldAlert, Video, Lock, FileText, BellRing, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RemoteMonitoring = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Monitor,
      title: "Surveillance 24/7",
      summary: "Une vigilance constante.",
      details: "Nos opérateurs surveillent vos locaux jour et nuit, 365 jours par an, depuis notre centre de contrôle certifié."
    },
    {
      icon: Eye,
      title: "Levée de Doute Vidéo",
      summary: "Vérification immédiate.",
      details: "En cas d'alarme, nous accédons instantanément aux caméras pour confirmer l'intrusion et éviter les faux positifs."
    },
    {
      icon: ShieldAlert,
      title: "Intervention Rapide",
      summary: "Réaction immédiate.",
      details: "Si une menace est confirmée, nous dépêchons nos équipes d'intervention mobile ou alertons les forces de l'ordre."
    },
    {
      icon: Video,
      title: "Rondes Vidéo",
      summary: "Patrouilles virtuelles.",
      details: "Des rondes de sécurité effectuées à distance via vos caméras à des horaires aléatoires ou programmés."
    },
    {
      icon: Lock,
      title: "Gestion des Accès",
      summary: "Contrôle à distance.",
      details: "Ouverture et fermeture de vos sites à distance pour vos employés ou livraisons, avec identification préalable."
    },
    {
      icon: FileText,
      title: "Reporting Complet",
      summary: "Traçabilité totale.",
      details: "Recevez des rapports détaillés de chaque événement, alarme ou ronde vidéo directement sur votre espace client."
    }
  ];

  const processSteps = [
    {
      title: "Détection",
      desc: "Vos capteurs (mouvement, ouverture) signalent une anomalie.",
      icon: BellRing
    },
    {
      title: "Analyse",
      desc: "Nos opérateurs analysent les flux vidéo pour qualifier l'alerte.",
      icon: Eye
    },
    {
      title: "Action",
      desc: "Déclenchement des procédures : appel, intervention, forces de l'ordre.",
      icon: ShieldAlert
    },
    {
      title: "Rapport",
      desc: "Envoi d'un compte-rendu détaillé et sécurisation du site.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Télé<span className="text-primary">surveillance</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Services de surveillance de pointe offrant une protection 24/7 via vidéosurveillance, systèmes d'alarme et équipes d'intervention à distance.
          </p>
        </header>

        {/* Flip Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.summary}</p>
                  <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{feature.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-secondary rounded-full border-2 border-primary/20 flex items-center justify-center mb-6 z-10 relative group hover:border-primary transition-colors">
                            <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        {idx < processSteps.length - 1 && (
                            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border/30 -z-0" />
                        )}
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Protégez vos biens 24h/24
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            La télésurveillance est la solution la plus efficace pour sécuriser vos locaux à moindre coût. Connectez votre système dès aujourd'hui.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Obtenir un devis télésurveillance
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RemoteMonitoring;
