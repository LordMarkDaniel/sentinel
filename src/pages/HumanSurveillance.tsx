import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HumanSurveillance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">
          ← Retour
        </button>

        <header className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-3">Surveillance <span className="text-primary">Humaine</span></h1>
          <p className="text-muted-foreground max-w-3xl">Personnel de sécurité professionnel et formé, déployé pour des patrouilles sur site, la couverture d'événements et la protection d'actifs à haut risque. Nos agents allient expérience et protocoles modernes pour assurer la sécurité des personnes et des biens.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary p-8 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
            <h2 className="text-2xl font-display font-bold text-white group-hover:text-white mb-4">Aperçu</h2>
            <p className="text-muted-foreground group-hover:text-white">Sentinel assure une surveillance humaine discrète et professionnelle adaptée aux besoins de votre site. Nous privilégions la dissuasion par la visibilité, une réponse rapide aux incidents et des rapports détaillés.</p>
          </div>

          <div className="bg-secondary p-8 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
            <h2 className="text-2xl font-display font-bold text-white group-hover:text-white mb-4">Services Inclus</h2>
            <ul className="space-y-3 text-muted-foreground group-hover:text-white">
              <li>Patrouille et contrôle d'accès</li>
              <li>Gestion de foule événementielle</li>
              <li>Surveillance visible et discrète</li>
              <li>Rapport d'incident et liaison</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-primary/10 p-8 rounded-lg border border-border/20">
            <h3 className="text-xl font-semibold text-primary mb-2">Pourquoi choisir nos agents ?</h3>
            <p className="text-muted-foreground">Tout le personnel est agréé, vérifié et formé aux premiers secours ainsi qu'à la désescalade. Nous adaptons les effectifs aux risques du site et fournissons des superviseurs pour les déploiements importants.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HumanSurveillance;
