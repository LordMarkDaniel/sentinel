import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "Comment sécuriser correctement votre maison : alarmes, télésurveillance et conseils locaux",
    date: "12 janvier 2026",
    category: "Sécurité domestique",
    image: "/1i.jpg",
    excerpt: "Vous vous demandez quelle est la meilleure façon de protéger votre domicile contre les intrusions ? Face à l'augmentation des risques (cambriolages, dégradations, vols), sécuriser votre maison est devenu une priorité.",
    content: "Vous vous demandez quelle est la meilleure façon de protéger votre domicile contre les intrusions ? Face à l'augmentation des risques (cambriolages, dégradations, vols), sécuriser votre maison est devenu une priorité.\n\nSentinel Security propose des solutions complètes de sécurité domestique, notamment :\n\n• Installation et surveillance de systèmes d'alarme professionnels\n• Systèmes de télésurveillance 24/7\n• Recommandations de sécurité locales adaptées à votre propriété\n• Protocoles d'intervention d'urgence rapide\n\nNotre équipe expérimentée peut évaluer les vulnérabilités de votre domicile et recommander les mesures de sécurité les plus efficaces. Que vous ayez besoin d'un simple système d'alarme ou d'une surveillance complète 24/7, nous avons des solutions adaptées à vos besoins et à votre budget."
  },
  {
    id: 2,
    title: "Télésurveillance pour entreprises : 5 conseils pour protéger efficacement vos locaux 24/7",
    date: "11 janvier 2026",
    category: "Sécurité des entreprises",
    image: "/2i.jpg",
    excerpt: "La sécurité des locaux professionnels est un enjeu stratégique pour toutes les entreprises. Cambriolages, intrusions, dégradations, actes malveillants ou risques techniques : les menaces sont nombreuses et imprévisibles.",
    content: "La sécurité des locaux professionnels est un enjeu stratégique pour toutes les entreprises. Cambriolages, intrusions, dégradations, actes malveillants ou risques techniques : les menaces sont nombreuses et imprévisibles.\n\nVoici 5 conseils essentiels pour une sécurité d'entreprise efficace :\n\n1. Mettre en œuvre des systèmes de surveillance multi-caméras\n2. Utiliser des systèmes d'alarme intelligents avec alertes en temps réel\n3. Établir des protocoles de contrôle d'accès\n4. Maintenir des évaluations de sécurité régulières\n5. Travailler avec des centres de surveillance professionnels\n\nLes solutions de surveillance d'entreprise de Sentinel Security offrent une protection 24/7 avec des temps de réponse rapides, garantissant que vos actifs commerciaux et vos employés sont toujours protégés."
  },
  {
    id: 3,
    title: "Sentinel Security inaugure son centre de surveillance : service de protection 24/7",
    date: "10 janvier 2026",
    category: "Actualités de l'entreprise",
    image: "/3i.jpg",
    excerpt: "C'est officiel : le centre de surveillance SENTINEL SECURITY est désormais pleinement opérationnel. Une avancée dans la protection de pointe pour nos clients.",
    content: "C'est officiel : le centre de surveillance SENTINEL SECURITY est désormais pleinement opérationnel. Une avancée dans la protection de pointe pour nos clients.\n\nNotre nouveau centre de surveillance ultramoderne comprend :\n\n• Une salle de contrôle avancée avec flux vidéo en temps réel\n• Des professionnels de la sécurité formés disponibles 24/7\n• Des systèmes de coordination d'intervention rapide\n• Une intégration avec les services d'urgence\n• Des capacités de gestion multi-sites\n\nCet investissement important dans l'infrastructure démontre notre engagement à fournir le plus haut niveau de services de sécurité à nos clients dans toutes les régions."
  },
  {
    id: 4,
    title: "Sentinel Security soutient la diversité : pour une industrie de la sécurité privée plus inclusive",
    date: "9 janvier 2026",
    category: "RSE",
    image: "/4i.jpg",
    excerpt: "Chez Sentinel Security, nous sommes convaincus que les métiers de la sécurité privée doivent refléter la diversité de notre société et offrir des chances égales.",
    content: "Chez Sentinel Security, nous sommes convaincus que les métiers de la sécurité privée doivent refléter la diversité de notre société et offrir des chances égales.\n\nNotre engagement en faveur de la diversité comprend :\n\n• Des programmes de recrutement ciblant les communautés sous-représentées\n• L'égalité salariale et des opportunités d'avancement pour tous les employés\n• Une culture d'entreprise inclusive et des formations\n• Des partenariats communautaires avec des organisations axées sur la diversité\n• Des programmes de mentorat pour les jeunes professionnels\n\nNous croyons qu'une équipe diversifiée fournit de meilleures solutions de sécurité et représente les communautés que nous servons. Rejoignez-nous pour construire une industrie de la sécurité plus inclusive."
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
                Intéressé par nos services de sécurité ?
              </h3>
              <p className="text-muted-foreground">
                Contactez notre équipe pour discuter de la protection de vos biens.
              </p>
            </div>
            <button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-primary-foreground hover:bg-accent px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
            >
              Demander un devis
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
