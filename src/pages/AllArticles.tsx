import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "Comment sécuriser correctement votre maison : alarmes, télésurveillance et conseils locaux",
    date: "12 janvier 2026",
    category: "Sécurité domestique",
    image: "/1i.jpg",
    excerpt: "Vous vous demandez quelle est la meilleure façon de protéger votre domicile contre les intrusions ? Face à l'augmentation des risques (cambriolages, dégradations, vols), sécuriser votre maison est devenu une priorité.",
  },
  {
    id: 2,
    title: "Télésurveillance pour entreprises : 5 conseils pour protéger efficacement vos locaux 24/7",
    date: "11 janvier 2026",
    category: "Sécurité des entreprises",
    image: "/2i.jpg",
    excerpt: "La sécurité des locaux professionnels est un enjeu stratégique pour toutes les entreprises. Cambriolages, intrusions, dégradations, actes malveillants ou risques techniques : les menaces sont nombreuses et imprévisibles.",
  },
  {
    id: 3,
    title: "Sentinel Security inaugure son centre de surveillance : service de protection 24/7",
    date: "10 janvier 2026",
    category: "Actualités de l'entreprise",
    image: "/3i.jpg",
    excerpt: "C'est officiel : le centre de surveillance SENTINEL SECURITY est désormais pleinement opérationnel. Une avancée dans la protection de pointe pour nos clients.",
  },
  {
    id: 4,
    title: "Sentinel Security soutient la diversité : pour une industrie de la sécurité privée plus inclusive",
    date: "9 janvier 2026",
    category: "RSE",
    image: "/4i.jpg",
    excerpt: "Chez Sentinel Security, nous sommes convaincus que les métiers de la sécurité privée doivent refléter la diversité de notre société et offrir des chances égales.",
  },
];

const AllArticles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tous les <span className="text-primary">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Restez informé des dernières tendances en matière de sécurité, des conseils et des actualités de l'entreprise
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/article/${article.id}`)}
              className="group bg-secondary border border-border/20 hover:border-primary/50 rounded-lg overflow-hidden transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-secondary overflow-hidden relative">
                <img 
                  src={article.image}
                  alt={article.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="absolute top-4 left-4 text-primary/80 text-sm px-3 py-1 border border-primary/50 rounded bg-black/40 font-semibold">
                  {article.category}
                </span>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <button className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-2 group/btn">
                  Lire la suite
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Vous souhaitez en savoir plus sur nos services ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contactez notre équipe pour discuter de la manière dont Sentinel Security peut protéger vos biens et fournir des solutions de sécurité complètes.
          </p>
          <Button 
            onClick={() => navigate("/request-quote")}
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
