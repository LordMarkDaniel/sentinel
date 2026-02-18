import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2">
        {/* Top Left: Headline Strip (Black) */}
        <div className="bg-black text-white p-12 md:p-20 flex flex-col justify-center min-h-[400px]">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Expert en sécurité privée à Douala depuis plus de 20 ans
            </h2>
            <div className="w-12 h-1 bg-white mb-4"></div>
          </div>
        </div>

        {/* Top Right: Description (White) */}
        <div className="bg-white text-black p-12 md:p-20 flex flex-col justify-center min-h-[400px]">
          <div className="max-w-lg">
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>SENTINEL SECURITY & SERVICES</strong> est une entreprise spécialisée dans la sécurité privée des biens et des personnes, implantée à Douala depuis 2002. Forts de plus de <strong>20 ans d'expérience</strong>, elle intervient dans tous les domaines clés de la sécurité : surveillance humaine (gardiennage), télésurveillance 24h/24, interventions sur alarme, sécurité incendie (agents SSIAP), sécurité événementielle, ainsi que la vente et l'installation de systèmes d'alarme connectés.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed font-bold">
              Agréée par les autorités compétentes, Sentinel Security s'appuie sur une parfaite connaissance de son secteur et sur une capacité constante d'adaptation aux nouveaux enjeux de sûreté.
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

        {/* Bottom Left: Visual Area (Panther/Image) */}
        <div className="relative min-h-[400px] overflow-hidden group border-t border-gray-100 flex items-center justify-center bg-[#f5f5f5]">
          <img
            src="/1lock.jpg"
            alt="Sentinel Security Vision"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>

        {/* Bottom Right: CSR Section (Black) */}
        <div className="bg-black text-white p-12 md:p-20 flex flex-col justify-center min-h-[400px] relative">
          <div className="absolute top-8 right-8 text-white/50">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.326-4-3.078-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>

          <div className="max-w-md text-center md:text-left flex flex-col items-center md:items-end w-full">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-10 leading-tight md:text-right">
              Responsabilité, éthique, engagements : découvrez comment nous agissons.
            </h3>

            <Button
              onClick={() => navigate("/our-commitments")}
              className="bg-white text-black hover:bg-primary hover:text-black font-bold rounded-full px-8 py-4 w-full md:w-fit transition-all duration-300"
            >
              Contactez-nous pour obtenir notre rapport RSE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
