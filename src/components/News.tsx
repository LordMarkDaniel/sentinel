import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MotionSection from "@/components/MotionSection";

const newsArticles = [
  {
    id: 1,
    title: "Installation alarme et télésurveillance à Douala : sécuriser durablement son domicile ou ses locaux professionnels",
    excerpt: "Installation alarme et télésurveillance à Douala : cette recherche est aujourd'hui au cœur des préoccupations des entreprises comme des particuliers. Face à la multiplication des risques d'intrusion, de cambriolage ou de dégradation, sécuriser efficacement son...",
    image: "/1i.jpg",
  },
  {
    id: 2,
    title: "Comment bien sécuriser sa maison au Cameroun ? Alarme, télésurveillance et conseils locaux",
    excerpt: "Vous habitez à Douala, Yaoundé, Edéa ou dans une autre ville et vous vous interrogez sur la meilleure manière de protéger votre domicile contre les intrusions ? Face à la montée des risques (cambriolages, dégradations, vols...), sécuriser son...",
    image: "/2i.jpg",
  },
  {
    id: 3,
    title: "Télésurveillance en entreprise : 5 conseils pour protéger efficacement vos locaux 24h/24 avec Escort Sécurité",
    excerpt: "La sécurité des locaux professionnels est un enjeu stratégique pour toutes les entreprises. Cambriolages, intrusions, dégradations, actes malveillants ou risques techniques : les menaces sont nombreuses et ne préviennent pas...",
    image: "/3i.jpg",
  },
  {
    id: 4,
    title: "Escort Sécurité inaugure son centre de télésurveillance : un service de protection 24/7 à la pointe de la réactivité",
    excerpt: "C'est officiel : le centre de télésurveillance ESCORT SÉCURITÉ GLOBAL TECHNOLOGIES est désormais pleinement opérationnel. Une avancée majeure dans la protection de nos clients, offrant une réactivité...",
    image: "/4i.jpg",
  },
];

const News = () => {
  const navigate = useNavigate();

  return (
    <MotionSection id="news" className="pt-4 pb-8 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase tracking-wider">
            Nos actualités et conseils en sécurité privée
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm border border-black/5"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-display font-bold text-black mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-3 uppercase tracking-tight">
                  {article.title}
                </h3>

                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-4 font-light">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                    Lire la suite <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/news")}
            className="inline-flex items-center gap-3 text-black font-bold hover:text-primary transition-all uppercase tracking-[0.2em] text-xs py-3 px-8 border border-black/10 hover:border-primary rounded-full group bg-white shadow-sm"
          >
            Voir tous nos conseils
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </MotionSection>
  );
};

export default News;
