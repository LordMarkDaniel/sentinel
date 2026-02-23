import { useNavigate } from "react-router-dom";
import { Users, Leaf, Scale, GraduationCap, Heart, Lightbulb, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CSRReport = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      icon: Users,
      title: "Souveraineté & Éthique",
      summary: "Expertise locale et hacking éthique.",
      details: "Nous promouvons une cybersécurité souveraine au Cameroun, basée sur une éthique de hacking rigoureuse et le respect strict du secret professionnel."
    },
    {
      icon: Leaf,
      title: "Sobriété Numérique",
      summary: "Optimisation et éco-conception.",
      details: "Nous adoptons des pratiques de développement durable et optimisons l'infrastructure de nos clients pour réduire leur empreinte carbone numérique."
    },
    {
      icon: Scale,
      title: "Transparence Totale",
      summary: "Conformité et audits indépendants.",
      details: "Nous opérons avec une transparence totale sur nos méthodologies, soumettant régulièrement nos propres processus à des audits tiers indépendants."
    },
    {
      icon: GraduationCap,
      title: "Académie Cyber",
      summary: "Formation des talents de demain.",
      details: "Nous investissons dans la formation continue de nos experts et soutenons les universités locales pour bâtir un écosystème cyber fort en Afrique Centrale."
    },
    {
      icon: Heart,
      title: "Engagement Privacy",
      summary: "Protection absolue des données.",
      details: "La protection de la vie privée est au cœur de notre mission. Nous appliquons les standards RGPD et locaux les plus stricts pour toutes nos opérations."
    },
    {
      icon: Lightbulb,
      title: "R&D Cyber",
      summary: "Innovation en sécurité offensive.",
      details: "Notre laboratoire R&D travaille sur de nouveaux vecteurs de détection et contribue activement à la communauté cyber via la recherche de vulnérabilités."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Rapport de <span className="text-primary">Transparence</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Notre engagement envers une cybersécurité éthique et souveraine. Découvrez comment nous agissons pour protéger vos actifs numériques avec intégrité.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((item, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.summary}</p>
                  <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">Découvrir l'initiative</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{item.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-secondary p-8 md:p-12 rounded-xl border border-border/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Télécharger notre Rapport Annuel de Sécurité</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Consultez nos statistiques de détection, nos indicateurs de performance SOC et le détail de nos méthodologies d'audit certifiées.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Rapport Transparence 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Standard SOC2 / ISO 27001
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-semibold whitespace-nowrap">
            <Download className="mr-2 h-5 w-5" />
            Télécharger le PDF
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CSRReport;
