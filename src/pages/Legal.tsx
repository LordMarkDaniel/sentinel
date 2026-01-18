import { useNavigate } from "react-router-dom";
import { Scale, Shield, FileText, Cookie, AlertCircle, Copyright } from "lucide-react";

const Legal = () => {
  const navigate = useNavigate();

  const legalSections = [
    {
      icon: Scale,
      title: "Conditions d'Utilisation",
      summary: "Règles et directives pour l'utilisation de nos services.",
      details: "En accédant à notre site, vous acceptez nos conditions générales, y compris les restrictions d'utilisation, la propriété intellectuelle et la résolution des litiges."
    },
    {
      icon: Shield,
      title: "Politique de Confidentialité",
      summary: "Comment nous protégeons vos données personnelles.",
      details: "Nous nous engageons à protéger votre vie privée. Découvrez comment nous collectons, utilisons et sécurisons vos informations personnelles conformément au RGPD.",
      link: "/privacy-policy"
    },
    {
      icon: Cookie,
      title: "Politique des Cookies",
      summary: "Utilisation des témoins de connexion sur notre site.",
      details: "Nous utilisons des cookies pour améliorer votre expérience. Cette politique explique les types de cookies utilisés et comment vous pouvez les gérer.",
      link: "/cookie-policy"
    },
    {
      icon: FileText,
      title: "Conformité Réglementaire",
      summary: "Nos certifications et adhésions aux normes de l'industrie.",
      details: "Sentinel Security opère en stricte conformité avec les réglementations locales et nationales de sécurité privée, assurant un service légal et éthique."
    },
    {
      icon: Copyright,
      title: "Licences & Droits",
      summary: "Informations sur la propriété intellectuelle et les logiciels.",
      details: "Tous les contenus sont protégés par le droit d'auteur. Ce site utilise également des composants open-source dont les licences sont disponibles ici.",
      link: "/licenses"
    },
    {
      icon: AlertCircle,
      title: "Avis de Non-responsabilité",
      summary: "Limitations de responsabilité concernant nos informations.",
      details: "Bien que nous nous efforcions d'assurer l'exactitude des informations, nous ne pouvons garantir qu'elles sont toujours à jour ou exemptes d'erreurs."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Mentions <span className="text-primary">Légales</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Transparence et conformité sont au cœur de nos opérations. Retrouvez ici l'ensemble de nos documents juridiques et réglementaires.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalSections.map((section, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]" onClick={() => section.link && navigate(section.link)}>
              <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${section.link ? 'cursor-pointer' : ''}`}>
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <section.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{section.title}</h3>
                  <p className="text-muted-foreground">{section.summary}</p>
                  <p className="mt-4 text-sm text-primary font-semibold">
                    {section.link ? "Cliquez pour voir la page" : "Survolez pour plus de détails"}
                  </p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{section.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{section.details}</p>
                  {section.link && (
                    <span className="mt-4 inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors">
                      Accéder à la page
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-secondary p-8 rounded-xl border border-border/20 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Questions Juridiques ?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si vous avez des questions spécifiques concernant nos conditions d'utilisation, nos politiques ou nos obligations réglementaires, notre équipe juridique est à votre disposition.
          </p>
          <a href="mailto:legal@sentinel-security.com" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
            Contacter le service juridique
          </a>
        </section>
      </div>
    </div>
  );
};

export default Legal;
