import { ShieldCheck, FileText, Lock, Globe, Settings, Scale, GraduationCap, ClipboardCheck, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AlarmInstallation = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShieldCheck,
      title: "Accompagnement ISO 27001",
      summary: "Vers la certification SMSI.",
      details: "Nous vous guidons dans la mise en place de votre Système de Management de la Sécurité de l'Information, de l'analyse d'écart à l'audit final."
    },
    {
      icon: Globe,
      title: "Conformité RGPD",
      summary: "Protéger les données personnelles.",
      details: "Audit de conformité, mise en conformité des processus et accompagnement du DPO pour garantir le respect de la vie privée de vos utilisateurs."
    },
    {
      icon: Settings,
      title: "Gouvernance & PSSI",
      summary: "Structurer votre sécurité.",
      details: "Rédaction et mise en œuvre de votre Politique de Sécurité des Systèmes d'Information adaptée à vos enjeux métiers et réglementaires."
    },
    {
      icon: Scale,
      title: "Audit Réglementaire",
      summary: "Respecter les obligations.",
      details: "Vérification de la conformité de votre infrastructure vis-à-vis des lois locales et internationales (Loi Cyber au Cameroun, HIPAA, etc.)."
    },
    {
      icon: ClipboardCheck,
      title: "Gestion des Risques",
      summary: "Méthodologie EBIOS RM.",
      details: "Identification des socles, des événements redoutés et définition d'un plan de traitement des risques proportionné à vos actifs."
    },
    {
      icon: GraduationCap,
      title: "Formation & Culture",
      summary: "Sensibiliser les équipes.",
      details: "Campagnes de sensibilisation et formations spécifiques pour ancrer la cybersécurité dans la culture de votre organisation."
    }
  ];

  const steps = [
    "Analyse d'écart (Gap Analysis)",
    "Élaboration de la stratégie",
    "Mise en œuvre des mesures",
    "Audit à blanc & Certification"
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Conformité & <span className="text-primary">Conseil</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Garantir votre conformité et structurer votre gouvernance. Un accompagnement expert pour transformer la sécurité en un levier de confiance.
          </p>
        </header>

        {/* Flip Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group h-80 w-full [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.summary}</p>
                  <p className="mt-6 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">En savoir plus</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">{feature.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Approche Conseil</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Nous ne nous contentons pas de lister des exigences. Nous concevons une trajectoire de conformité réaliste, adaptée à votre taille et à vos objectifs stratégiques.
            </p>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-center gap-3 bg-secondary p-4 rounded-lg border border-border/20">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-white font-medium">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-full min-h-[400px] bg-secondary rounded-xl overflow-hidden border border-border/20 group">
            <img
              src="/mainlogo.png"
              alt="Cybersecurity Consulting"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">Experts Certifiés (CISA, CISM, Lead Auditor)</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Êtes-vous en phase avec les réglementations ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ne laissez pas la non-conformité freiner vos opportunités. Demandez un diagnostic conseil pour structurer votre démarche cyber.
          </p>
          <Button
            onClick={() => navigate("/request-quote")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
          >
            Demander un diagnostic conseil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlarmInstallation;
