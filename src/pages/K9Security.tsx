import { Dog, Shield, Search, Bomb, Activity, Heart, Award, Footprints } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const K9Security = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: Bomb,
      title: "Détection d'Explosifs",
      summary: "Sécurisation de sites sensibles.",
      details: "Nos chiens sont certifiés pour détecter une large gamme de substances explosives, assurant la sûreté des aéroports, gares et événements."
    },
    {
      icon: Search,
      title: "Détection de Stupéfiants",
      summary: "Lutte contre le trafic.",
      details: "Recherche efficace et rapide de substances illicites dans les entrepôts, les véhicules et les lieux publics."
    },
    {
      icon: Dog,
      title: "Patrouille & Dissuasion",
      summary: "Une présence imposante.",
      details: "Le binôme maître-chien constitue l'un des moyens de dissuasion les plus efficaces contre l'intrusion et le vandalisme."
    },
    {
      icon: Footprints,
      title: "Pistage & Recherche",
      summary: "Retrouver la trace.",
      details: "Capacité à suivre une piste olfactive pour localiser des personnes disparues ou des intrus en fuite."
    },
    {
      icon: Shield,
      title: "Sécurité Événementielle",
      summary: "Gestion de foule.",
      details: "Sécurisation de périmètres et filtrage lors de concerts, festivals et manifestations sportives."
    },
    {
      icon: Activity,
      title: "Intervention Rapide",
      summary: "Réactivité maximale.",
      details: "En cas d'alerte, nos unités cynophiles peuvent intervenir et neutraliser une menace bien plus rapidement qu'un agent seul."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Sécurité <span className="text-primary">Cynophile</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            L'alliance de l'intelligence animale et de l'expertise humaine. Nos unités K-9 offrent des capacités de détection et de protection inégalées.
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
                    alt="K9 Security Training" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="text-white font-bold">Certifiés & Entraînés</span>
                    </div>
                    <p className="text-gray-300 text-sm">Nos chiens suivent un entraînement quotidien rigoureux.</p>
                </div>
           </div>
           <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Excellence & Bien-être Animal</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Chez Sentinel Security, nous considérons nos chiens comme des partenaires à part entière, et non comme de simples outils. Leur bien-être est au cœur de notre démarche opérationnelle.
                </p>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg h-fit">
                            <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Formation Continue</h4>
                            <p className="text-sm">Nos équipes cynophiles s'entraînent chaque semaine pour maintenir leurs compétences au plus haut niveau opérationnel.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg h-fit">
                            <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Soins Vétérinaires</h4>
                            <p className="text-sm">Suivi médical complet, alimentation premium et conditions de vie optimales pour nos athlètes à quatre pattes.</p>
                        </div>
                    </div>
                </div>
              </div>
           </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Besoin d'une unité cynophile ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Pour la sécurisation de vos événements ou la protection de vos sites sensibles, faites appel à l'efficacité de nos équipes K-9.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default K9Security;
