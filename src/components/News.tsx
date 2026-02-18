import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MotionSection from "@/components/MotionSection";

const newsArticles = [
  {
    id: 1,
    title: "Pentest au Cameroun : pourquoi tester la sécurité de votre système d'information est devenu indispensable",
    excerpt: "Les cyberattaques se multiplient en Afrique Centrale. Face à la montée des ransomwares, des attaques par phishing et des intrusions ciblées, les entreprises camerounaises doivent impérativement évaluer la robustesse de leurs systèmes d'information...",
    image: "/1i.jpg",
  },
  {
    id: 2,
    title: "Comment protéger les données de votre entreprise au Cameroun ? RGPD, chiffrement et bonnes pratiques",
    excerpt: "La protection des données personnelles est un enjeu majeur pour toutes les organisations. Que vous soyez une PME à Douala, une institution à Yaoundé ou une multinationale, la mise en conformité RGPD et la sécurisation de vos données sont essentielles...",
    image: "/2i.jpg",
  },
  {
    id: 3,
    title: "SOC en entreprise : 5 raisons d'établir un centre opérationnel de sécurité pour surveiller vos systèmes 24h/24",
    excerpt: "La sécurité des systèmes d'information est un enjeu stratégique pour toutes les organisations. Ransomwares, intrusions, exfiltration de données, attaques zero-day : les menaces sont nombreuses et ne préviennent pas...",
    image: "/3i.jpg",
  },
  {
    id: 4,
    title: "Sentinel Cyber inaugure son centre SOC : un service de surveillance des menaces 24/7 à la pointe de la réactivité",
    excerpt: "C'est officiel : le centre opérationnel de sécurité (SOC) SENTINEL CYBER est désormais pleinement opérationnel. Une avancée majeure dans la protection numérique de nos clients, offrant une réactivité...",
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
            Nos actualités et conseils en cybersécurité
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
            Voir tous nos articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </MotionSection>
  );
};

export default News;
