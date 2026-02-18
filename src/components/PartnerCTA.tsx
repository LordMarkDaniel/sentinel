import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PartnerCTA = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            {/* 1. Partner Section (Split Layout) */}
            <section className="grid md:grid-cols-2">
                {/* Left Side (Black BG) */}
                <div className="bg-black text-white p-12 md:p-20 flex flex-col justify-center min-h-[400px]">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                            Un partenaire réactif et engagé, au service de votre sécurité
                        </h2>
                        <div className="w-12 h-1 bg-white/30"></div>
                    </div>
                </div>

                {/* Right Side (White BG) */}
                <div className="bg-white text-black p-12 md:p-20 flex flex-col justify-center min-h-[400px]">
                    <div className="max-w-lg">
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Alliant technologie de pointe et expertise humaine, <strong>SENTINEL SECURITY</strong> accompagne au quotidien de nombreuses entreprises, collectivités et particuliers à la recherche d'un partenaire fiable, flexible et réactif. Sa structure à taille humaine lui permet de rester au plus proche des besoins du terrain, avec une disponibilité 24h/24 et une écoute permanente.
                        </p>
                        <p className="text-gray-700 mb-10 leading-relaxed font-bold">
                            Basée à Douala, à proximité immédiate des grands axes, SENTINEL SECURITY évolue au cœur de son territoire, au service des acteurs économiques locaux comme des sites à forts enjeux.
                        </p>
                        <Button
                            onClick={() => navigate("/about")}
                            className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-6 text-lg group w-fit flex items-center gap-4 transition-all duration-300"
                        >
                            En savoir plus
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerCTA;
