import { useNavigate } from "react-router-dom";
import { Users, Leaf, Scale, GraduationCap, Heart, Lightbulb, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CSRReport = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      icon: Users,
      title: "Engagement Social",
      summary: "Soutien aux communautés et diversité.",
      details: "Nous nous engageons activement dans les communautés locales que nous servons et promouvons une culture inclusive valorisant la diversité sous toutes ses formes."
    },
    {
      icon: Leaf,
      title: "Environnement",
      summary: "Réduction de l'empreinte écologique.",
      details: "Notre flotte de véhicules migre vers l'électrique et nous avons mis en place une politique zéro papier pour minimiser notre impact environnemental."
    },
    {
      icon: Scale,
      title: "Gouvernance",
      summary: "Éthique et transparence totale.",
      details: "Nous opérons avec les plus hauts standards d'intégrité, assurant une conformité rigoureuse et une transparence financière et opérationnelle."
    },
    {
      icon: GraduationCap,
      title: "Formation",
      summary: "Développement des compétences.",
      details: "Chaque employé bénéficie de programmes de formation continue pour garantir l'excellence opérationnelle et l'évolution de carrière."
    },
    {
      icon: Heart,
      title: "Santé & Sécurité",
      summary: "Bien-être de nos collaborateurs.",
      details: "La sécurité de nos agents est prioritaire. Nous fournissons des équipements de pointe et un soutien psychologique constant."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      summary: "Technologies responsables.",
      details: "Nous investissons dans des technologies de sécurité qui respectent la vie privée tout en améliorant l'efficacité de nos services."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Rapport <span className="text-primary">RSE</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Notre engagement envers la responsabilité sociétale des entreprises guide chacune de nos actions. Découvrez nos piliers fondamentaux.
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Télécharger le Rapport Complet</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Accédez à l'intégralité de nos données, nos objectifs pour l'année à venir et le détail de nos certifications ISO 26000.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Version 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                PDF (4.2 MB)
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
