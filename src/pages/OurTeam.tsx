import { Users, User, Shield, Award, Briefcase, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: "CYBERIX",
      role: "Fondateur & CEO",
      bio: "Expert en cybersécurité certifié CISSP, avec plus de 15 ans d'expérience dans la protection des infrastructures étatiques et bancaires.",
      icon: Shield
    },
    {
      name: "Amina Clarke",
      role: "CISO (RSSI)",
      bio: "Ancienne consultante Big Four, elle supervise la stratégie de sécurité globale et la gouvernance pour nos clients grands comptes.",
      icon: Briefcase
    },
    {
      name: "Jon Reyes",
      role: "Lead Pentester",
      bio: "Spécialiste de l'offensive (OSCP), il dirige les exercices Red Team et les audits de code source critique.",
      icon: Award
    },
    {
      name: "Sarah Connor",
      role: "SOC Manager",
      bio: "Experte en détection de menaces, elle pilote notre centre opérationnel de sécurité 24/7 au Cameroun.",
      icon: User
    },
    {
      name: "Mike Ross",
      role: "Lead Incident Response",
      bio: "Expert en analyse forensique (SANS), il intervient en urgence lors de cyber-attaques pour limiter les impacts.",
      icon: User
    },
    {
      name: "Emily Blunt",
      role: "Lead Compliance & DPO",
      bio: "Juriste spécialisée IT et Lead Auditor ISO 27001, elle assure la conformité RGPD et réglementaire de nos partenaires.",
      icon: Users
    }
  ];

  const partners = [
    "Check Point Software",
    "CrowdStrike",
    "Splunk",
    "Fortinet",
    "Palo Alto Networks"
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Notre <span className="text-primary">Équipe d'Experts</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Un collectif de hackers éthiques, d'analystes et de consultants certifiés, unis pour défendre votre souveraineté numérique au Cameroun.
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
