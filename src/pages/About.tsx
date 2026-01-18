import { useNavigate } from "react-router-dom";
import { Shield, Target, Award, Users, Zap, History, CheckCircle2 } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Intégrité",
      summary: "Le fondement de notre confiance.",
      details: "Nous agissons avec honnêteté et transparence dans toutes nos interactions, garantissant une relation de confiance durable avec nos clients."
    },
    {
      icon: Target,
      title: "Excellence",
      summary: "Des standards élevés.",
      details: "Nous visons la perfection opérationnelle grâce à une formation continue et des protocoles rigoureux."
    },
    {
      icon: Users,
      title: "Engagement",
      summary: "Dévoués à votre sécurité.",
      details: "Notre équipe est totalement investie dans la protection de vos intérêts, disponible et réactive à tout moment."
    },
    {
      icon: Zap,
      title: "Innovation",
      summary: "Technologie de pointe.",
      details: "Nous intégrons les dernières technologies de surveillance et de détection pour garder une longueur d'avance sur les menaces."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">À propos de <span className="text-primary">Nous</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Sentinel Security & Services fournit des solutions de sécurité de confiance depuis 2002. Nous allions expertise humaine et innovation technologique.
          </p>
        </header>

        {/* Flip Cards Section - Nos Valeurs */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => (
              <div key={index} className="group h-80 w-full [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-6 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <val.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-muted-foreground text-sm">{val.summary}</p>
                    <p className="mt-4 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-4">{val.title}</h3>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{val.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary border border-border/20 relative group hover:border-primary/50 transition-colors">
                 <img 
                    src="/lock.jpg" 
                    alt="Security History" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                 />
              </div>
           </div>
           <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Histoire & Mission</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Fondée par des experts de la sécurité, Sentinel Security s'est donnée pour mission de redéfinir les standards de la protection privée. Ce qui a commencé comme une petite agence de gardiennage est devenu un leader régional en solutions de sécurité intégrées.
                </p>
                <p>
                  Notre mission est simple : <strong className="text-primary">Protéger ce qui compte le plus pour vous.</strong> Que ce soit votre famille, votre entreprise ou vos biens, nous déployons des stratégies sur mesure pour garantir votre tranquillité d'esprit.
                </p>
                <ul className="space-y-2 mt-4">
                    {["Certification ISO 9001", "Agrément CNAPS", "Personnel 100% qualifié"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                        </li>
                    ))}
                </ul>
              </div>
           </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-xl p-8 border border-border/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { label: "Clients Satisfaits", value: "500+" },
                    { label: "Agents Qualifiés", value: "150+" },
                    { label: "Sites Sécurisés", value: "300+" },
                    { label: "Interventions / an", value: "2000+" }
                ].map((stat, idx) => (
                    <div key={idx} className="p-4 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
