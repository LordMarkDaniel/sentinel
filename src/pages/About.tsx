import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const navigate = useNavigate();

  // Refs for scroll sections
  const heroRef = useRef(null);
  const expertiseRef = useRef(null);
  const servicesRef = useRef(null);
  const innovationRef = useRef(null);
  const contactRef = useRef(null);

  // Parallax animations
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["10%", "30%"]);

  const { scrollYProgress: expertiseProgress } = useScroll({
    target: expertiseRef,
    offset: ["start end", "end start"]
  });
  const expertiseImgY = useTransform(expertiseProgress, [0, 1], ["-10%", "10%"]);

  const { scrollYProgress: innovationProgress } = useScroll({
    target: innovationRef,
    offset: ["start end", "end start"]
  });
  const innovationScale = useTransform(innovationProgress, [0, 1], [1, 1.25]);

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center pt-32 overflow-hidden bg-black border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: heroY, scale: 1.1 }}
            src="/1A.png"
            alt="SENTINEL SECURITY Team"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="space-y-1">
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                SENTINEL SECURITY, votre cabinet
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                de cybersécurité au Cameroun, engagé
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                à vos côtés depuis plus de 10 ans
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Description Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Basé au Cameroun, <strong>SENTINEL SECURITY</strong> est un cabinet de cybersécurité reconnu en Afrique Centrale. Depuis 2014, nous protégeons les systèmes d'information, les données sensibles et les infrastructures numériques avec professionnalisme, réactivité et rigueur.
            </p>
            <p className="text-white text-lg md:text-xl font-bold font-display">
              Notre mission : proposer des solutions de cybersécurité offensives et défensives sur mesure, pour les entreprises, les institutions et les organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Expertise Split Sections */}
      <section ref={expertiseRef} className="bg-white text-black overflow-hidden px-4">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 min-h-[400px]">
          <div className="flex items-center py-12 md:pr-12 md:pl-0 container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-xl md:text-2xl font-display font-bold mb-6">
                Une expertise complète en<br />cybersécurité
              </h2>
              <p className="text-sm text-gray-600 mb-4 italic">Notre offre couvre l'ensemble des domaines de la sécurité numérique :</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Tests d'intrusion (Pentest web, réseau, mobile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Audits de sécurité informatique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Red Team & simulation d'attaques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>SOC & Surveillance des menaces 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Gestion des vulnérabilités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Conformité ISO 27001 & RGPD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Réponse aux incidents de sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Conseil & formation en cybersécurité</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Notre SOC basé au Cameroun renforce l'efficacité de notre présence, en assurant une veille permanente et une détection des menaces en temps réel.
              </p>
            </motion.div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden">
            <motion.img
              style={{ y: expertiseImgY, scale: 1.15 }}
              src="/2A.png"
              alt="Security Expertise"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 min-h-[400px] bg-gray-50">
          <div className="relative min-h-[300px] overflow-hidden order-2 md:order-1">
            <motion.img
              style={{ y: expertiseImgY, scale: 1.15 }}
              src="/5A.png"
              alt="Team Security"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center py-12 md:pl-12 order-1 md:order-2 container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-xl md:text-2xl font-display font-bold mb-6 uppercase">
                Un cabinet agile,<br />proche de ses clients
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  SENTINEL SECURITY est une structure indépendante, agile, qui privilégie la proximité et la qualité de service. Nos experts sont disponibles, nos responsables techniques restent en lien direct avec les clients, et chaque mission fait l'objet d'un suivi rigoureux.
                </p>
                <p className="font-bold text-black">
                  Grâce à cette organisation réactive, nous sommes capables d'intervenir rapidement pour toute organisation au Cameroun et en Afrique Centrale, selon les besoins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Service Blocks Grid (Black BG) */}
      <section ref={servicesRef} className="bg-black py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-display font-medium text-white italic">
              Pentest, audits, SOC, conformité ... <span className="text-primary not-italic font-bold">Découvrez l'ensemble de nos services cyber</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                lines: ["Tests d'intrusion", "(Pentest)"],
                desc: "Des experts certifiés pour tester la résistance de vos systèmes et identifier les vulnérabilités avant les attaquants.",
                img: "/4i.jpg"
              },
              {
                lines: ["Audits de sécurité", "informatique"],
                desc: "Des audits complets pour évaluer la maturité de votre SI et identifier les risques critiques.",
                img: "/istockphoto-1211936303-612x612.jpg"
              },
              {
                lines: ["Évaluation des menaces", "& Red Team"],
                desc: "Des simulations d'attaques réalistes pour tester vos défenses et la réactivité de vos équipes sécurité.",
                img: "/2i.jpg"
              },
              {
                lines: ["SOC & Surveillance", "des menaces 24/7"],
                desc: "Un centre opérationnel de sécurité pour une détection et une réponse aux incidents en temps réel.",
                img: "/1lock.jpg"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group h-[450px] overflow-hidden bg-gray-900 border border-white/5"
              >
                <img
                  src={service.img}
                  alt={service.lines.join(" ")}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-start">
                  <div className="flex flex-col gap-1 mb-6">
                    {service.lines.map((line, linIdx) => (
                      <span key={linIdx} className="bg-primary text-black font-bold px-3 py-1 text-xs md:text-sm self-start uppercase">
                        {line}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <Button
                    className="bg-primary text-black font-bold rounded-full py-4 px-6 text-sm flex items-center gap-2 hover:bg-white transition-colors duration-300 w-fit"
                    onClick={() => navigate("/discover-services")}
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Innovation Section (Standardized) */}
      <section ref={innovationRef} className="relative py-32 bg-black overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ scale: innovationScale }}
            src="/4A.png"
            alt="Innovative Security"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold leading-relaxed text-white">
                <span className="bg-white text-black px-3 py-1 block w-fit mb-1">Une cybersécurité globale,</span>
                <span className="bg-white text-black px-3 py-1 block w-fit">offensive, défensive et innovante</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mb-12 mx-auto md:mx-0"
            >
              <p>
                Au-delà du pentest et de la surveillance des menaces, <strong>SENTINEL SECURITY</strong> propose une approche globale et innovante de la cybersécurité.
              </p>
            </motion.div>

            <Button
              className="bg-primary text-black hover:bg-white font-bold rounded-full px-8 py-6 text-base flex items-center gap-3 transition-all duration-300 group shadow-lg mx-auto md:mx-0"
              onClick={() => navigate("/why-us")}
            >
              Notre approche
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Bottom Quote CTA (Standardized) */}
      <section ref={contactRef} className="relative py-24 flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: contactY, scale: 1.1 }}
            src="/2lock.jpg"
            alt="Contact Grayscale"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white text-black p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center shadow-2xl rounded-sm"
          >
            <h2 className="text-xl md:text-3xl font-display font-bold mb-4">
              Besoin d'un audit ou d'un conseil en cybersécurité ?
            </h2>
            <p className="text-lg md:text-xl font-light mb-10 text-gray-600">
              Parlons-en
            </p>
            <Button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-4 text-base flex items-center gap-3 transition-all duration-300 group mx-auto shadow-lg"
            >
              Contacter un expert cyber
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
