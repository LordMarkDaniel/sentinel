import { Zap, Shield, Smartphone, Wifi, Settings, Wrench, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AlarmInstallation = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wifi,
      title: "Systèmes Sans Fil",
      summary: "Flexibilité et installation rapide.",
      details: "Idéal pour les résidences et petits commerces. Installation sans travaux lourds, évolutif et sécurisé contre le brouillage."
    },
    {
      icon: Settings,
      title: "Systèmes Filaires",
      summary: "Robustesse pour grands sites.",
      details: "La solution privilégiée pour les industries et grands bâtiments. Fiabilité maximale et aucune maintenance de piles."
    },
    {
      icon: Smartphone,
      title: "Contrôle Mobile",
      summary: "Gérez votre sécurité à distance.",
      details: "Armez, désarmez et recevez des notifications en temps réel directement sur votre smartphone, où que vous soyez."
    },
    {
      icon: Shield,
      title: "Détection Avancée",
      summary: "Protection périmétrique et volumétrique.",
      details: "Capteurs de mouvement, contacts d'ouverture, bris de vitre et barrières infrarouges pour une couverture totale."
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      summary: "Gérez les entrées et sorties.",
      details: "Intégration possible avec badges, codes ou biométrie pour restreindre l'accès aux zones sensibles."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      summary: "Support technique réactif.",
      details: "Contrats de maintenance préventive et curative pour garantir que votre système reste opérationnel à 100%."
    }
  ];

  const steps = [
    "Audit de sécurité sur site",
    "Conception sur mesure",
    "Installation professionnelle",
    "Formation des utilisateurs"
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Installation d'<span className="text-primary">Alarme</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Protégez vos locaux avec des systèmes de détection d'intrusion de dernière génération. Conception, installation et maintenance par des experts.
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
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Processus d'Installation</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Nous ne nous contentons pas de poser du matériel. Nous concevons une architecture de sécurité adaptée à la configuration spécifique de vos lieux et à vos habitudes de vie ou de travail.
              </p>
              <ul className="space-y-4">
                  {steps.map((step, i) => (
                      <li key={i} className="flex items-center gap-3 bg-secondary p-4 rounded-lg border border-border/20">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                              {i + 1}
                          </div>
                          <span className="text-white font-medium">{step}</span>
                      </li>
                  ))}
              </ul>
           </div>
           <div className="relative h-full min-h-[400px] bg-secondary rounded-xl overflow-hidden border border-border/20 group">
                <img 
                    src="/mainlogo.png" 
                    alt="Installation Security" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold">Techniciens Certifiés & Matériel Agréé</p>
                </div>
           </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Sécurisez votre propriété dès aujourd'hui
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ne laissez pas la sécurité au hasard. Demandez un audit gratuit et découvrez la solution d'alarme idéale pour vous.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlarmInstallation;
