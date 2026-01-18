import { Users, User, Shield, Award, Briefcase, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: "CYBERIX",
      role: "Fondateur & PDG",
      bio: "Expert en cybersécurité avec plus de 15 ans d'expérience dans la protection des infrastructures critiques.",
      icon: Shield
    },
    {
      name: "Amina Clarke",
      role: "Responsable des Opérations",
      bio: "Supervise le déploiement quotidien de nos agents et assure la qualité de service sur le terrain.",
      icon: Briefcase
    },
    {
      name: "Jon Reyes",
      role: "Responsable de la Formation",
      bio: "Ancien militaire, il conçoit nos programmes de formation rigoureux pour tous les niveaux d'agents.",
      icon: Award
    },
    {
      name: "Sarah Connor",
      role: "Analyste Sécurité",
      bio: "Spécialiste en évaluation des risques et en planification stratégique de sécurité.",
      icon: User
    },
    {
      name: "Mike Ross",
      role: "Superviseur Terrain",
      bio: "Assure la liaison entre les clients et nos équipes pour une réactivité optimale.",
      icon: User
    },
    {
      name: "Emily Blunt",
      role: "RH & Conformité",
      bio: "Garantit que nos pratiques respectent les normes éthiques et légales les plus strictes.",
      icon: Users
    }
  ];

  const partners = [
    "SecurTech Solutions",
    "Global Monitoring Systems",
    "CyberDefense Alliance",
    "SafeGuard Logistics"
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Notre <span className="text-primary">Équipe</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Des dirigeants et praticiens expérimentés engagés dans la prestation de services de sécurité professionnels et l'amélioration continue.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {members.map((m, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <m.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">{m.name}</h4>
                  <p className="text-primary font-medium">{m.role}</p>
                  <p className="mt-6 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h4 className="text-xl font-display font-bold text-primary-foreground mb-4">{m.name}</h4>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">{m.bio}</p>
                  <div className="flex gap-4">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Nos Partenaires Stratégiques</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {partners.map((partner, idx) => (
                    <div key={idx} className="bg-secondary px-8 py-4 rounded-full border border-border/20 text-muted-foreground font-semibold hover:border-primary hover:text-primary transition-colors cursor-default">
                        {partner}
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
