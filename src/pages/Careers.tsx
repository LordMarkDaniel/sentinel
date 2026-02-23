import { Briefcase, GraduationCap, TrendingUp, Users, Shield, Wallet, Heart, MapPin, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: GraduationCap,
      title: "Certifications Offertes",
      summary: "Monter en expertise.",
      details: "Accès financé aux certifications reconnues mondialement : OSCP, CISSP, CEH, CISM pour rester à la pointe de la menace."
    },
    {
      icon: TrendingUp,
      title: "Parcours d'Expertise",
      summary: "Grandissez avec nous.",
      details: "Des évolutions claires de Junior vers des postes de Lead Architect, Expert Forensique ou Responsable SOC."
    },
    {
      icon: Users,
      title: "Labs & Recherche",
      summary: "Une culture d'innovation.",
      details: "Rejoignez une communauté de chercheurs et de hackers éthiques. Participez à des CTF et à nos projets R&D internes."
    },
    {
      icon: Wallet,
      title: "Rémunération Premium",
      summary: "Valoriser le talent.",
      details: "Nous offrons des salaires attractifs basés sur l'expertise technique, des primes de certification et des avantages sociaux."
    },
    {
      icon: Shield,
      title: "Secteur d'Avenir",
      summary: "Stabilité et impact.",
      details: "Travaillez sur des missions critiques pour la défense numérique du pays, au sein d'un marché en pleine explosion."
    },
    {
      icon: Heart,
      title: "Flexibilité & Équilibre",
      summary: "Qualité de vie.",
      details: "Environnement de travail moderne, options de télétravail hybride et équipements de test de haute performance."
    }
  ];

  const openPositions = [
    {
      title: "Pentester Junior / Confirmé",
      location: "Douala, Cameroun",
      type: "CDI - Temps plein",
      description: "Réalisation de tests d'intrusion web, réseau et mobile pour nos clients bancaires et industriels."
    },
    {
      title: "Analyste SOC (N1/N2)",
      location: "Yaoundé, Cameroun",
      type: "CDI - Rotation 3x8",
      description: "Surveillance des alertes de sécurité, analyse des logs et détection d'incidents en temps réel."
    },
    {
      title: "Consultant GRC / ISO 27001",
      location: "Douala, Cameroun",
      type: "CDI - Temps plein",
      description: "Accompagnement des entreprises dans leur démarche de certification et de conformité réglementaire."
    },
    {
      title: "Lead Incident Responder",
      location: "Hybride (Cameroun)",
      type: "CDI - Temps plein",
      description: "Gestion des crises cyber, analyse forensique et coordination de la remédiation après attaque."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Carrières Cyber chez <span className="text-primary">SENTINEL SECURITY</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Rejoignez l'élite de la cybersécurité au Cameroun. Nous recherchons des passionnés engagés pour la défense de l'espace numérique.
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
