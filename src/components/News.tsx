import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MotionSection from "@/components/MotionSection";

const newsArticles = [
  {
    id: 1,
    title: "Comment sécuriser correctement votre maison : alarmes, télésurveillance et conseils locaux",
    excerpt: "Vous vous demandez quelle est la meilleure façon de protéger votre domicile contre les intrusions ? Face à l'augmentation des risques (cambriolages, dégradations, vols), sécuriser votre maison est devenu une priorité.",
    date: "12 janvier 2026",
    category: "Sécurité domestique",
    image: "/1i.jpg",
  },
  {
    id: 2,
    title: "Télésurveillance pour entreprises : 5 conseils pour protéger efficacement vos locaux 24/7",
    excerpt: "La sécurité des locaux professionnels est un enjeu stratégique pour toutes les entreprises. Cambriolages, intrusions, dégradations, actes malveillants ou risques techniques : les menaces sont nombreuses et imprévisibles.",
    date: "11 janvier 2026",
    category: "Sécurité des entreprises",
    image: "/2i.jpg",
  },
  {
    id: 3,
    title: "Sentinel Security inaugure son centre de surveillance : service de protection 24/7",
    excerpt: "C'est officiel : le centre de surveillance SENTINEL SECURITY est désormais pleinement opérationnel. Une avancée dans la protection de pointe pour nos clients.",
    date: "10 janvier 2026",
    category: "Actualités de l'entreprise",
    image: "/3i.jpg",
  },
  {
    id: 4,
    title: "Sentinel Security soutient la diversité : pour une industrie de la sécurité privée plus inclusive",
    excerpt: "Chez Sentinel Security, nous sommes convaincus que les métiers de la sécurité privée doivent refléter la diversité de notre société et offrir des chances égales.",
    date: "9 janvier 2026",
    category: "RSE",
    image: "/4i.jpg",
  },
];

const News = () => {
  const navigate = useNavigate();

  return (
    <MotionSection id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Nos actualités et{" "}
            <span className="text-primary">conseils sécurité</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Restez informé des dernières tendances en matière de sécurité, des conseils et des actualités de l'entreprise
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <Card 
              key={article.id}
              className="group bg-security-dark border-border/20 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-security-gray to-security-black flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
                <img 
                  src={article.image}
                  alt={article.category}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="text-primary/80 text-sm px-4 py-2 border border-primary/50 rounded relative z-10 bg-black/40">
                  {article.category}
                </span>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="font-display font-bold text-secondary-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-accent group/btn"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button 
            onClick={() => navigate("/news")}
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Voir tous les articles
          </Button>
        </div>
      </div>
    </MotionSection>
  );
};

export default News;
