import { Search, CheckCircle, FileText, BarChart, ShieldCheck, Database, Lock, ShieldAlert, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FireSafety = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Search,
      title: "Audit de Configuration",
      summary: "Vérifier la robustesse.",
      details: "Analyse approfondie des paramètres de sécurité de vos serveurs, systèmes d'exploitation et équipements réseau (firewalls, switchs)."
    },
    {
      icon: Cpu,
      title: "Audit d'Architecture",
      summary: "Sécuriser la structure.",
      details: "Évaluation de la conception du réseau, du cloisonnement (VLAN), des flux de données et de l'interconnexion des systèmes critiques."
    },
    {
      icon: FileText,
      title: "Audit de Code Source",
      summary: "Éradiquer les bugs.",
      details: "Analyse statique et dynamique du code de vos applications pour identifier les failles logicielles dès la phase de développement."
    },
    {
      icon: BarChart,
      title: "Audit de Gouvernance",
      summary: "ISO 27001 & RGPD.",
      details: "Évaluation de la maturité de votre politique de sécurité (PSSI), respect des normes internationales et protection des données personnelles."
    },
    {
      icon: ShieldCheck,
      title: "Audit de Vulnérabilités",
      summary: "Scan & Analyse.",
      details: "Identification automatisée et manuelle des failles de sécurité connues sur l'ensemble de votre parc informatique."
    },
    {
      icon: Database,
      title: "Audit de Résilience",
      summary: "PCA & PRA.",
      details: "Vérification de vos capacités de reprise après incident, gestion des sauvegardes et protocoles de continuité d'activité."
    }
  ];

  const auditLevels = [
    {
      level: "Scan",
      role: "Audit Quick-Scan",
      desc: "Identification rapide des vulnérabilités critiques et des failles les plus exposées."
    },
    {
      level: "Standard",
      role: "Audit Technique",
      desc: "Analyse complète des configurations, de l'architecture et des droits d'accès."
    },
    {
      level: "Expert",
      role: "Audit Approfondi",
      desc: "Analyse forensique, preuve de concept et plan de remédiation stratégique sur mesure."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Audit de <span className="text-primary">Sécurité Informatique</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Analyser, Évaluer, Sécuriser. Une approche rigoureuse pour identifier vos failles et renforcer la résilience de vos systèmes.
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
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Nos Niveaux d'Audit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {auditLevels.map((item, idx) => (
              <div key={idx} className="bg-secondary border border-border/20 rounded-xl p-6 hover:border-primary/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lock className="h-24 w-24 text-primary" />
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
            Votre infrastructure est-elle réellement protégée ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ne laissez aucune faille fragiliser votre activité. Nos experts réalisent un audit complet pour garantir la sécurité de vos données.
          </p>
          <Button
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un audit technique
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FireSafety;
