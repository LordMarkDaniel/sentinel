import { useNavigate } from "react-router-dom";
import { Shield, Lock, Eye, FileText, Database, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const policies = [
    {
      icon: Database,
      title: "Collecte de Données",
      summary: "Quels types d'informations recueillons-nous ?",
      details: "Nous collectons les informations essentielles telles que votre nom, coordonnées, et détails nécessaires à la prestation de nos services de sécurité et de surveillance."
    },
    {
      icon: FileText,
      title: "Utilisation des Données",
      summary: "Comment utilisons-nous vos informations ?",
      details: "Vos données servent uniquement à la gestion de votre compte, la prestation de services, et la communication légale. Nous ne vendons jamais vos données à des tiers."
    },
    {
      icon: Lock,
      title: "Sécurité & Protection",
      summary: "Comment protégeons-nous vos données ?",
      details: "Nous utilisons des protocoles de cryptage avancés et des mesures de sécurité physiques et numériques strictes pour empêcher tout accès non autorisé."
    },
    {
      icon: UserCheck,
      title: "Vos Droits",
      summary: "Contrôle sur vos informations personnelles.",
      details: "Vous avez le droit d'accéder à vos données, de demander leur rectification ou leur suppression, et de vous opposer à leur traitement conformément à la loi."
    },
    {
      icon: Eye,
      title: "Cookies & Traçage",
      summary: "Notre politique sur les témoins de connexion.",
      details: "Nous utilisons des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences via notre gestionnaire de cookies."
    },
    {
      icon: Shield,
      title: "Conformité Légale",
      summary: "Respect des réglementations en vigueur.",
      details: "Nous nous conformons strictement au RGPD et aux autres lois locales et internationales sur la protection de la vie privée et des données."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Politique de <span className="text-primary">Confidentialité</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Chez Sentinel Security & Services, la protection de votre vie privée est au cœur de nos priorités. Découvrez comment nous traitons vos données.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <policy.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{policy.title}</h3>
                  <p className="text-muted-foreground">{policy.summary}</p>
                  <p className="mt-4 text-sm text-primary font-semibold">Survolez pour en savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{policy.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{policy.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-secondary p-8 rounded-xl border border-border/20">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contactez notre Délégué à la Protection des Données</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant cette politique ou si vous souhaitez exercer vos droits, veuillez nous contacter.
          </p>
          <a href="mailto:privacy@sentinel-security.com" className="text-primary hover:underline font-semibold">
            privacy@sentinel-security.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
