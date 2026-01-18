import { Briefcase, GraduationCap, TrendingUp, Users, Shield, Wallet, Heart, MapPin, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: GraduationCap,
      title: "Formation Continue",
      summary: "Développez vos compétences.",
      details: "Accès à des programmes de formation certifiants et un apprentissage continu pour rester à la pointe de la sécurité."
    },
    {
      icon: TrendingUp,
      title: "Évolution de Carrière",
      summary: "Grandissez avec nous.",
      details: "Des parcours de carrière clairs avec des opportunités de promotion interne vers des postes de supervision et de gestion."
    },
    {
      icon: Users,
      title: "Esprit d'Équipe",
      summary: "Une culture solidaire.",
      details: "Rejoignez une équipe soudée où l'entraide et le respect mutuel sont les piliers de notre environnement de travail."
    },
    {
      icon: Wallet,
      title: "Rémunération",
      summary: "Salaire compétitif.",
      details: "Nous offrons des salaires attractifs, des primes de performance et des avantages sociaux complets."
    },
    {
      icon: Shield,
      title: "Stabilité",
      summary: "Un secteur pérenne.",
      details: "Travailler dans une entreprise établie depuis 2002, offrant sécurité de l'emploi et missions longue durée."
    },
    {
      icon: Heart,
      title: "Bien-être",
      summary: "Santé et sécurité avant tout.",
      details: "Nous prenons soin de nos agents avec des équipements de qualité et un soutien constant sur le terrain."
    }
  ];

  const openPositions = [
    {
      title: "Agent de Sécurité Confirmé",
      location: "Paris, France",
      type: "CDI - Temps plein",
      description: "Surveillance de sites industriels et contrôle d'accès."
    },
    {
      title: "Opérateur de Télésurveillance",
      location: "Lyon, France",
      type: "CDI - Rotation 3x8",
      description: "Gestion des alarmes et coordination des interventions depuis notre centre."
    },
    {
      title: "Maître-Chien",
      location: "Marseille, France",
      type: "CDD - 6 mois",
      description: "Patrouilles de sécurité avec chien pour événements et sites sensibles."
    },
    {
      title: "Superviseur de Terrain",
      location: "Île-de-France",
      type: "CDI - Temps plein",
      description: "Encadrement des équipes et gestion de la relation client sur site."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Carrières chez <span className="text-primary">Sentinel</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Rejoignez une équipe d'élite. Nous recrutons des professionnels engagés envers la sécurité, l'intégrité et l'excellence du service.
          </p>
        </header>

        {/* Benefits Section with Flip Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Pourquoi nous rejoindre ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group h-80 w-full [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.summary}</p>
                    <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                    <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{benefit.title}</h3>
                    <p className="text-primary-foreground/90 leading-relaxed">{benefit.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Postes Ouverts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((job, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{job.description}</p>
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  Voir l'offre
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
           <h2 className="text-3xl font-display font-bold text-white mb-4">Candidature Spontanée</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
             Vous ne trouvez pas le poste idéal ? Nous sommes toujours à la recherche de talents. Envoyez-nous votre CV et nous vous contacterons si une opportunité correspond à votre profil.
           </p>
           <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-semibold">
             Envoyer mon CV <ArrowRight className="ml-2 h-5 w-5" />
           </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
