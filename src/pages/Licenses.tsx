import { useNavigate } from "react-router-dom";
import { Shield, FileCheck, Award, Calendar, Building2, CheckCircle2, AlertCircle, FileText, Lock, Code } from "lucide-react";

const Licenses = () => {
  const navigate = useNavigate();

  const licenses = [
    {
      id: "LIC-SEC-001",
      type: "Licence de Sécurité",
      issuingAuthority: "Département de la Sécurité Publique",
      expiryDate: "2025-12-31",
      icon: Shield,
      description: "Autorisation d'opérer des services de sécurité privée et de gardiennage."
    },
    {
      id: "LIC-ARM-002",
      type: "Licence de Sécurité Armée",
      issuingAuthority: "Bureau d'Investigation de l'État",
      expiryDate: "2025-06-15",
      icon: Award,
      description: "Permis spécial pour le port d'arme dans le cadre de missions de protection rapprochée."
    },
    {
      id: "LIC-FIRE-003",
      type: "Licence de Sécurité Incendie",
      issuingAuthority: "Bureau du Maréchal des Pompiers",
      expiryDate: "2024-09-20",
      icon: FileCheck,
      description: "Certification pour l'audit, l'installation et la maintenance de systèmes incendie."
    },
    {
      id: "LIC-K9-004",
      type: "Licence de Maître-Chien",
      issuingAuthority: "Association Nationale Cynophile",
      expiryDate: "2025-03-10",
      icon: CheckCircle2,
      description: "Agrément pour l'utilisation d'unités cynophiles en patrouille et détection."
    },
    {
      id: "LIC-EVENT-005",
      type: "Licence de Sécurité Événementielle",
      issuingAuthority: "Municipalité Locale",
      expiryDate: "2024-11-30",
      icon: Building2,
      description: "Autorisation pour la gestion de foule et la sécurité lors de grands rassemblements."
    }
  ];

  const getStatus = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { label: "Expiré", color: "text-destructive", icon: AlertCircle };
    if (diffDays < 90) return { label: "Renouvellement", color: "text-yellow-500", icon: AlertCircle };
    return { label: "Valide", color: "text-green-500", icon: CheckCircle2 };
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-6">← Retour</button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Conformité & <span className="text-primary">Licences</span></h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            La transparence est notre priorité. Consultez nos accréditations officielles et nos certifications en vigueur.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {licenses.map((license, index) => {
            const status = getStatus(license.expiryDate);
            const StatusIcon = status.icon;
            
            return (
              <div key={index} className="group h-80 w-full [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary p-8 border border-border/20 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <license.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{license.type}</h3>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-border/50">
                      <StatusIcon className={`h-4 w-4 ${status.color}`} />
                      <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">ID: {license.id}</p>
                    <p className="mt-4 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100">Retourner pour détails</p>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-4">{license.type}</h3>
                    <p className="text-primary-foreground/90 text-sm mb-6">{license.description}</p>
                    
                    <div className="w-full space-y-3 text-left bg-black/10 p-4 rounded-lg">
                      <div>
                        <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Autorité</p>
                        <p className="text-sm font-semibold text-primary-foreground">{license.issuingAuthority}</p>
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Expiration</p>
                        <p className="text-sm font-semibold text-primary-foreground flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {license.expiryDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">Documentation Légale</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                    Nous maintenons une documentation complète de toutes nos opérations pour assurer une conformité totale avec les réglementations locales et internationales.
                </p>
                <button className="text-primary hover:underline font-semibold flex items-center gap-2">
                    Demander un audit de conformité <Shield className="h-4 w-4" />
                </button>
            </div>

            <div className="bg-secondary p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">Assurances & Garanties</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                    Sentinel Security est entièrement assurée pour la responsabilité civile professionnelle, garantissant la protection de nos clients et de nos employés en toutes circonstances.
                </p>
                <button className="text-primary hover:underline font-semibold flex items-center gap-2">
                    Voir les certificats d'assurance <Shield className="h-4 w-4" />
                </button>
            </div>
        </section>

        <section className="bg-secondary p-8 rounded-xl border border-border/20 group hover:border-primary/50 transition-all hover:shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Open Source</h2>
          </div>
          <p className="text-muted-foreground">
            Ce site utilise des bibliothèques open-source soumises à leurs licences respectives. Nous croyons en la transparence logicielle autant qu'en la transparence opérationnelle. Voir le dépôt pour les attributions complètes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Licenses;
