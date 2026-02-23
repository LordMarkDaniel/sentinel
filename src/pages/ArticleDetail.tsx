import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "Comment sécuriser votre infrastructure cloud : Pentests et meilleures pratiques au Cameroun",
    date: "12 janvier 2026",
    category: "Tests d'intrusion",
    image: "/1i.jpg",
    excerpt: "L'adoption du cloud s'accélère, mais la sécurité reste un défi. Découvrez comment nos tests d'intrusion cloud identifient les failles de configuration avant qu'elles ne soient exploitées.",
    content: "L'adoption du cloud s'accélère en Afrique Centrale, mais la sécurité reste un défi majeur. Découvrez comment nos tests d'intrusion cloud identifient les failles de configuration avant qu'elles ne soient exploitées.\n\nSENTINEL SECURITY propose des audits profonds de vos environnements AWS, Azure ou GCP, incluant :\n\n• Analyse des politiques IAM et des privilèges excessifs\n• Détection de buckets S3 ou de bases de données exposés par erreur\n• Test de résistance des API et des micro-services\n• Audit de la segmentation réseau et des groupes de sécurité\n\nNotre équipe d'experts évalue la réalité de votre modèle de responsabilité partagée. Que vous soyez en phase de migration ou déjà en production, un pentest cloud est la seule garantie d'une infrastructure résiliente."
  },
  {
    id: 2,
    title: "Souveraineté numérique : Pourquoi un SOC local est indispensable pour les banques camerounaises",
    date: "11 janvier 2026",
    category: "SOC & Surveillance",
    image: "/2i.jpg",
    excerpt: "Face à la montée des cyberattaques sophistiquées, la gestion déléguée de la surveillance devient stratégique. Analyse d'un enjeu majeur pour le secteur financier en Afrique Centrale.",
    content: "La sécurité des données financières est un enjeu de souveraineté nationale. Face à la montée des cyberattaques sophistiquées, la gestion déléguée de la surveillance via un SOC (Security Operations Center) local devient stratégique.\n\nPourquoi choisir un SOC au Cameroun ?\n\n1. Conformité réglementaire intensive aux directives de la BEAC et de l'ANTIC\n2. Réduction drastique de la latence pour la détection en temps réel\n3. Connaissance approfondie du paysage des menaces régionales\n4. Maîtrise totale du stockage et de la localisation des logs de sécurité\n5. Support technique de proximité en Français et Anglais\n\nSentinel Security opère un SOC de nouvelle génération, alliant intelligence artificielle et expertise humaine pour protéger vos actifs 24/7."
  },
  {
    id: 3,
    title: "SENTINEL SECURITY renforce ses capacités offensives avec une équipe Red Team dédiée",
    date: "10 janvier 2026",
    category: "Actualités",
    image: "/3i.jpg",
    excerpt: "Nous annonçons le lancement de nos opérations Red Team, simulations d'attaques réelles visant à tester la résilience globale des organisations face aux menaces avancées.",
    content: "C'est officiel : le pôle offensif de SENTINEL SECURITY franchit une nouvelle étape avec le lancement d'exercices Red Team complets. Contrairement à un pentest classique, la Red Team simule un attaquant réel déterminé.\n\nNos scénarios d'intrusion avancés incluent :\n\n• Infiltration multi-vectorielle (Web, Réseau, Cloud)\n• Social Engineering physique et numérique\n• Test de vos procédures de détection et de réponse (Blue Team)\n• Persistance et exfiltration de données de test\n• Rapport de remédiation stratégique pour le Comex\n\nCet investissement majeur dans nos capacités offensives démontre notre volonté de fournir une sécurité pragmatique et testée sur le terrain."
  },
  {
    id: 4,
    title: "Certification ISO 27001 : Un investissement stratégique pour la pérennité de votre entreprise",
    date: "9 janvier 2026",
    category: "Conformité",
    image: "/4i.jpg",
    excerpt: "Plus qu'une contrainte réglementaire, la conformité est un levier de confiance client. On vous explique comment structurer votre SMSI pour obtenir la certification.",
    content: "Dans un monde ultra-connecté, la conformité ISO 27001 n'est plus une option mais un avantage concurrentiel majeur. Elle prouve à vos partenaires que vous traitez la sécurité de l'information avec la plus grande rigueur.\n\nNotre méthodologie d'accompagnement comprend :\n\n• Audit de maturité et Gap Analysis initial\n• Définition du périmètre du SMSI\n• Inventaire des actifs et analyse des risques (EBIOS RM / MEHARI)\n• Rédaction de la PSSI et déploiement des contrôles\n• Audit à blanc avant la certification finale\n\nNous croyons qu'une gouvernance solide est la fondation de toute défense technique efficace. Sentinel Security vous guide vers l'excellence opérationnelle."
  },
];

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const article = newsArticles.find(a => a.id === parseInt(id || "1"));

  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground">Article non trouvé</h1>
          <Button onClick={() => navigate("/news")} className="mt-6">
            Voir tous les articles
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </button>

        <article>
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {article.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share and CTA */}
          <div className="bg-secondary p-8 rounded-lg border border-border/20 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Besoin d'une expertise cyber pour votre projet ?
              </h3>
              <p className="text-muted-foreground group-hover:text-white transition-colors">
                Contactez nos consultants pour une analyse personnalisée de vos risques.
              </p>
            </div>
            <button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-primary-foreground hover:bg-accent px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
            >
              Demander une consultation expert
            </button>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-border/20">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Articles connexes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {newsArticles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  onClick={() => navigate(`/article/${relatedArticle.id}`)}
                  className="bg-secondary rounded-lg overflow-hidden border border-border/20 hover:border-primary/50 cursor-pointer transition-colors group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-primary font-semibold mb-2">{relatedArticle.category}</p>
                    <h4 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
