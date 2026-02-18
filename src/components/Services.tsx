import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MotionSection from "@/components/MotionSection";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div id="services" className="bg-black text-white">
      {/* 1. Intro Section */}
      <MotionSection className="py-12 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300">
            Basée au <strong className="text-white">Cameroun et en Afrique Centrale</strong>, Sentinel Cyber accompagne les entreprises,
            institutions et organisations dans la protection de leurs systèmes d'information, données sensibles et infrastructures numériques.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-300">
            Spécialisée en <strong className="text-white">tests d'intrusion (pentest)</strong>, en audits de sécurité informatique,
            surveillance des menaces et conformité réglementaire <strong className="text-white">(ISO 27001, RGPD)</strong>,
            notre cabinet propose des solutions sur mesure, adaptées aux enjeux de chaque organisation.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-300">
            Grâce à une expertise technique pointue, des équipes certifiées et une réactivité optimale, Sentinel Cyber intervient rapidement pour
            sécuriser vos systèmes, applications, réseaux et environnements cloud.
          </p>

          <Button
            onClick={() => navigate("/discover-services")}
            className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-8 py-4 text-base group"
          >
            Découvrez nos services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </MotionSection>

      {/* 2. Highlights Section */}
      <section className="py-10 container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-10 inline-block bg-white text-black px-4 py-2 transform -skew-x-6">
          Pentest & Audits de Sécurité Informatique
        </h2>

        <p className="text-gray-300 max-w-4xl mb-12 text-base md:text-lg">
          Sentinel Cyber met à votre disposition des solutions de cybersécurité complètes. Nos experts assurent
          <strong className="text-white"> les tests d'intrusion de vos systèmes et applications</strong>, ainsi qu'un service de
          <strong className="text-white"> surveillance des menaces 24h/24</strong>. Grâce à des analystes certifiés et à une technologie de pointe,
          nous garantissons une protection fiable de vos actifs numériques.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Highlight 1 */}
          <div className="relative group overflow-hidden h-[320px] rounded-lg cursor-pointer" onClick={() => navigate('/human-surveillance')}>
            <img src="/1i.jpg" alt="Tests d'intrusion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <Button className="w-full justify-between bg-primary text-black hover:bg-white hover:text-black font-bold text-sm py-4 rounded-full group-hover:px-8 transition-all duration-300">
                Tests d'intrusion & Audits de sécurité
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="relative group overflow-hidden h-[320px] rounded-lg cursor-pointer" onClick={() => navigate('/remote-monitoring')}>
            <img src="/4lock.jpg" alt="SOC & Surveillance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <Button className="w-full justify-between bg-primary text-black hover:bg-white hover:text-black font-bold text-sm py-4 rounded-full group-hover:px-8 transition-all duration-300">
                SOC & Surveillance des menaces 24/7
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Innovation Section (Parallax Zoom) */}


      {/* 4. Service Grid Section */}
      <section className="pt-16 pb-8 container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-display font-bold mb-12 text-white">
          Pentest, audits, SOC, conformité ... <span className="font-normal">Découvrez l'ensemble de nos prestations cyber</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              line1: "Tests d'intrusion",
              line2: "(Pentest)",
              desc: "Des experts certifiés pour tester la résistance de vos systèmes et identifier les vulnérabilités avant les attaquants.",
              img: "/1i.jpg",
              link: "/human-surveillance"
            },
            {
              line1: "Audits de sécurité",
              line2: "informatique",
              desc: "Des audits complets pour évaluer la maturité de votre système d'information et identifier les risques critiques.",
              img: "/3i.jpg",
              link: "/fire-safety"
            },
            {
              line1: "Évaluation des menaces",
              line2: "& Red Team",
              desc: "Des simulations d'attaques réalistes pour tester vos défenses et la réactivité de vos équipes sécurité.",
              img: "/1A.png",
              link: "/event-security"
            },
            {
              line1: "Gestion des",
              line2: "vulnérabilités",
              desc: "Un programme structuré pour détecter, prioriser et corriger les vulnérabilités de vos systèmes en continu.",
              img: "/4i.jpg",
              link: "/k9-security"
            },
            {
              line1: "SOC & Surveillance",
              line2: "des menaces 24/7",
              desc: "Un centre opérationnel de sécurité connecté à vos systèmes pour une détection et une réponse aux incidents en temps réel.",
              img: "/4lock.jpg",
              link: "/remote-monitoring"
            },
            {
              line1: "Conformité &",
              line2: "Conseil (ISO 27001, RGPD)",
              desc: "Accompagnement dans la mise en conformité réglementaire et l'obtention de certifications de sécurité reconnues.",
              img: "/5lock.jpg",
              link: "/alarm-systems"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white flex flex-col md:flex-row overflow-hidden group h-full md:min-h-[350px]">
              <div className="md:w-1/2 relative overflow-hidden">
                <img src={item.img} alt={`${item.line1} ${item.line2}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white items-start">
                <div className="mb-4 flex flex-col items-start gap-1">
                  <h3 className="text-base font-display font-bold text-white bg-black px-2 py-1 inline-block">
                    {item.line1}
                  </h3>
                  <h3 className="text-base font-display font-bold text-white bg-black px-2 py-1 inline-block">
                    {item.line2}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 mt-2">
                  {item.desc}
                </p>
                <Button
                  onClick={() => navigate(item.link)}
                  className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-6 py-2 text-sm w-fit mt-auto transition-colors"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Innovation Section (Parallax Zoom) - Moved to bottom */}
      <section ref={parallaxRef} className="relative py-12 overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            style={{
              backgroundImage: "url('/1A.png')",
              scale
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl transform -skew-x-3">
            <div className="transform skew-x-3">
              <div className="flex flex-col items-start gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-display font-bold text-black leading-tight bg-white px-4 py-2 inline-block transform -skew-x-6">
                  Une cybersécurité globale,
                </h2>
                <h2 className="text-xl md:text-2xl font-display font-bold text-black leading-tight bg-white px-4 py-2 inline-block transform -skew-x-6">
                  offensive, défensive et innovante
                </h2>
              </div>

              <div className="mt-8 md:pl-4">
                <p className="text-white mb-8 text-lg leading-relaxed shadow-black drop-shadow-md">
                  Au-delà de la surveillance humaine et de la télésurveillance, Sentinel Security propose une approche globale et innovante de la sécurité privée. Grâce à des solutions connectées, des dispositifs d’alarme intelligents, et une coordination fluide entre nos équipes terrain et notre centre de contrôle, nous offrons à nos clients un service de sécurité augmenté. Cette synergie entre technologie et présence humaine garantit une réactivité optimale, une traçabilité complète des interventions, et une protection adaptée aux enjeux de chaque site.
                </p>
                <div>
                  <Button
                    onClick={() => navigate("/why-us")}
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full px-8 py-5 text-base group bg-transparent"
                  >
                    Notre approche
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
