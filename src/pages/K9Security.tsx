import { Bug, Shield, Search, Activity, Zap, ClipboardCheck, BarChart2, ShieldAlert, Award, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const K9Security = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: Search,
      title: "Scanning Automatisé",
      summary: "Détection continue.",
      details: "Utilisation d'outils de scan de pointe pour identifier en temps réel les vulnérabilités logicielles et les défauts de configuration sur votre parc informatique."
    },
    {
      icon: Bug,
      title: "Analyse Manuelle",
      summary: "Éliminer le bruit.",
      details: "Validation experte par nos analystes pour écarter les faux positifs et confirmer l'exploitabilité réelle des failles détectées."
    },
    {
      icon: ShieldAlert,
      title: "Priorisation des Risques",
      summary: "Agir sur l'essentiel.",
      details: "Classement des vulnérabilités selon leur criticité métier et leur facilité d'exploitation pour optimiser vos efforts de correction."
    },
    {
      icon: ClipboardCheck,
      title: "Suivi de Remédiation",
      summary: "Mesurer l'effort.",
      details: "Accompagnement de vos équipes techniques dans l'application des correctifs et vérification post-remédiation pour confirmer la clôture des failles."
    },
    {
      icon: Activity,
      title: "Scanning de Surface",
      summary: "Protection externe.",
      details: "Surveillance de vos actifs exposés sur internet (EASM) pour détecter les oublis de configuration et les services non sécurisés."
    },
    {
      icon: Zap,
      title: "Veille Cyber (CTI)",
      summary: "Anticiper les exploits.",
      details: "Analyse constante des nouvelles menaces et des 0-days pour vous alerter dès qu'une faille critique concerne votre infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Gestion des <span className="text-primary">Vulnérabilités</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Identifier, Évaluer, Remédier. Un processus continu pour réduire votre surface d'attaque et garder une longueur d'avance sur les menaces numériques.
          </p>
        </header>

        {/* Flip Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <cap.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.summary}</p>
                  <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{cap.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{cap.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training & Welfare Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-full min-h-[400px] bg-secondary rounded-xl overflow-hidden border border-border/20 group">
            <img
              src="/1lock.jpg"
              alt="Vulnerability Management Process"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <span className="text-white font-bold">Rapports & Reporting</span>
              </div>
              <p className="text-gray-300 text-sm">Visualisez votre posture de sécurité en temps réel grâce à nos dashboards.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Processus & Accompagnement</h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Chez Sentinel Security, nous considérons la gestion des vulnérabilités comme un cycle de vie continu, et non comme un audit ponctuel. Nous vous accompagnons à chaque étape pour garantir une sécurité durable.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Méthodologie Agile</h4>
                    <p className="text-sm">Nous intégrons nos scans dans vos environnements de production et de développement avec un impact minimal sur les performances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Support Expert Dédié</h4>
                    <p className="text-sm">Accès direct à nos analystes sécurité pour vous aider à comprendre les vulnérabilités complexes et leur contexte d'exploitation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Besoin d'un diagnostic de vulnérabilité ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ne laissez aucune porte ouverte aux cyber-attaquants. Identifiez vos maillons faibles avant qu'ils ne soient exploités.
          </p>
          <Button
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un audit de vulnérabilité
          </Button>
        </div>
      </div>
    </div>
  );
};

export default K9Security;
