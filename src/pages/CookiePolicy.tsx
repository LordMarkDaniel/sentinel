import { useNavigate } from "react-router-dom";
import { Cookie, Settings, BarChart, Target, Clock, Shield } from "lucide-react";

const CookiePolicy = () => {
  const navigate = useNavigate();

  const cookieSections = [
    {
      icon: Cookie,
      title: "Qu'est-ce qu'un cookie ?",
      summary: "Comprendre les fichiers témoins.",
      details: "Un cookie est un petit fichier texte stocké sur votre appareil qui nous permet de vous reconnaître et de mémoriser vos préférences lors de vos visites."
    },
    {
      icon: Shield,
      title: "Cookies Essentiels",
      summary: "Nécessaires au fonctionnement du site.",
      details: "Ces cookies sont indispensables pour naviguer sur le site et utiliser ses fonctionnalités de base, comme l'accès aux zones sécurisées."
    },
    {
      icon: BarChart,
      title: "Cookies Analytiques",
      summary: "Pour améliorer notre site.",
      details: "Ils nous aident à comprendre comment les visiteurs interagissent avec le site, en collectant et en signalant des informations de manière anonyme."
    },
    {
      icon: Target,
      title: "Cookies Marketing",
      summary: "Publicités ciblées et pertinentes.",
      details: "Utilisés pour suivre les visiteurs sur les sites Web. Le but est d'afficher des publicités pertinentes et intéressantes pour l'utilisateur individuel."
    },
    {
      icon: Settings,
      title: "Gestion des Préférences",
      summary: "Contrôlez vos choix.",
      details: "Vous pouvez à tout moment modifier ou retirer votre consentement via notre gestionnaire de cookies ou les paramètres de votre navigateur."
    },
    {
      icon: Clock,
      title: "Durée de Conservation",
      summary: "Combien de temps les gardons-nous ?",
      details: "La durée de vie des cookies varie. Certains sont effacés à la fermeture du navigateur (session), d'autres restent plus longtemps (persistants)."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Politique des <span className="text-primary">Cookies</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser notre trafic et personnaliser le contenu. Voici comment cela fonctionne.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookieSections.map((section, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <section.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{section.title}</h3>
                  <p className="text-muted-foreground">{section.summary}</p>
                  <p className="mt-4 text-sm text-primary font-semibold">Survolez pour en savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{section.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{section.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-secondary p-8 rounded-xl border border-border/20 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Modifier vos préférences</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vous pouvez mettre à jour vos préférences en matière de cookies à tout moment en cliquant sur le bouton ci-dessous.
          </p>
          <button 
            onClick={() => {
              localStorage.removeItem('cookieConsent');
              window.location.reload();
            }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Réinitialiser les préférences
          </button>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
