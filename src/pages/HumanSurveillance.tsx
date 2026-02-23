import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HumanSurveillance = () => {
  const navigate = useNavigate();

  // Refs for scroll sections
  const heroRef = useRef(null);
  const savoirFaireRef = useRef(null);
  const solutionsRef = useRef(null);
  const contactRef = useRef(null);

  // Parallax animations
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);

  const { scrollYProgress: solutionsProgress } = useScroll({
    target: solutionsRef,
    offset: ["start end", "end start"]
  });
  const solutionsY = useTransform(solutionsProgress, [0, 1], ["-10%", "10%"]);

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 1. Hero Section (Scale Adjusted) */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center pt-32 overflow-hidden bg-black border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: heroY, scale: 1.1 }}
            src="/6A.png"
            alt="Safety Personnel"
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
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Tests d'intrusion et Pentesting :
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Évaluer vos vulnérabilités pour mieux vous protéger
              </span>
            </div>
          </motion.div>
        </div>

        {/* Floating Social Icons (Right) */}
        <div className="hidden lg:flex flex-col fixed right-10 top-1/2 -translate-y-1/2 z-40 space-y-4">
          {[
            { id: 'instagram', Icon: Instagram },
            { id: 'facebook', Icon: Facebook },
            { id: 'linkedin', Icon: Linkedin }
          ].map(({ id, Icon }) => (
            <a key={id} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary group bg-black/20 backdrop-blur-sm">
              <span className="sr-only">{id}</span>
              <Icon className="w-4 h-4 text-white group-hover:text-black transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* 1b. Sub-Hero Text Section (Scale Adjusted) */}
      <section className="bg-black py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              La sécurité de vos actifs numériques exige expertise, rigueur et anticipation.<br />
              Chez <strong>SENTINEL SECURITY</strong>, nous mettons à votre disposition des experts certifiés, formés aux dernières techniques d'attaque, capables d'identifier vos failles avant qu'elles ne soient exploitées par des acteurs malveillants.
            </p>
            <p className="text-white text-base md:text-lg font-bold leading-relaxed">
              Que vous soyez une entreprise, une institution financière ou un acteur critique, nos équipes vous accompagnent avec des solutions d'audit offensives sur mesure : tests d'intrusion externes, internes, applications web ou infrastructures mobiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. "Savoir-faire" Split Section (Scale Adjusted) */}
      <section ref={savoirFaireRef} className="flex flex-col lg:flex-row min-h-[40vh]">
        {/* Left Side (Black) */}
        <div className="lg:w-1/2 bg-black flex items-center justify-center p-10 lg:p-16 border-t border-white/5 lg:border-t-0 lg:border-r border-white/5">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold leading-tight uppercase"
          >
            Notre savoir-<br />faire : <span className="bg-primary text-black px-2">l'expertise</span><br />
            <span className="bg-primary text-black px-2">offensive au</span><br />
            <span className="bg-primary text-black px-2">service du defensif</span>
          </motion.h2>
        </div>

        {/* Right Side (White) */}
        <div className="lg:w-1/2 bg-white text-black flex items-center p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed"
          >
            <p>
              <strong>Depuis plus de 10 ans, SENTINEL SECURITY mobilise une expertise de pointe dans l'évaluation de la sécurité des systèmes d'information, en s'appuyant sur des méthodologies reconnues (OWASP, NIST) et une culture de la transparence.</strong>
            </p>
            <p>
              Nos auditeurs sont certifiés (OSCP, CEH, CISSP) et formés en continu aux nouvelles vulnérabilités (0-days). Chaque mission fait l'objet d'un cadrage précis, d'une exécution rigoureuse et d'un rapport détaillé incluant des recommandations actionnables et un plan de remédiation priorisé.
            </p>
            <p className="font-bold text-black border-l-4 border-primary pl-6 py-2">
              Nous intervenons sur des écosystèmes complexes : infrastructures cloud (AWS, Azure, GCP), environnements on-premise, applications métier critiques, terminaux IoT ou encore plateformes de gestion de données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Testimonials Section (Scale Adjusted) */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-black text-center text-xl md:text-2xl font-display font-medium mb-12 italic opacity-80">
            Votre satisfaction, <span className="not-italic font-bold">notre meilleure garantie</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              {
                quote: "Le rapport fourni après le pentest était d'une clarté exemplaire. Les vulnérabilités identifiées et les conseils de remédiation nous ont permis de sécuriser notre infrastructure critique avant notre lancement.",
                author: "CISO, Institution Financière"
              },
              {
                quote: "Les experts de SENTINEL SECURITY sont intervenus avec une discrétion et un professionnalisme remarquables. Leur vision offensive nous a ouvert les yeux sur des vecteurs d'attaque insoupçonnés.",
                author: "Responsable Informatique, Secteur Médical"
              },
              {
                quote: "Nous collaborons avec SENTINEL SECURITY pour l'audit de nos nouvelles applications mobiles. Leur réactivité et la précision de leurs analyses sont devenues indispensables à notre cycle de développement.",
                author: "Lead Developer, Fintech Africaine"
              },
              {
                quote: "Au-delà de la technique, c'est l'approche conseil et la pédagogie des auditeurs qui font la différence. On ne se contente pas de lister des failles, on comprend comment les résoudre durablement.",
                author: "Directeur Technique, E-commerce"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary text-black p-6 flex flex-col justify-between min-h-[300px] shadow-xl relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  <Quote className="h-8 w-8 mb-4 opacity-80" fill="black" stroke="none" />
                  <p className="text-sm md:text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
                </div>
                <p className="font-bold uppercase text-[10px] tracking-[0.1em] border-t border-black/10 pt-4">
                  {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Solutions Grid (Scale Adjusted) */}
      <section ref={solutionsRef} className="bg-black py-20 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight uppercase">
              Des <span className="text-white italic font-normal">audits</span> offensifs <span className="bg-white text-black px-4 italic font-normal">adaptés</span> à vos infrastructures numérique
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Découvrez nos expertises en test d'intrusion pour identifier et corriger les failles exploitables sur vos systèmes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Tests d'Intrusion Web & API",
                subtitle: "Sécuriser vos applications critiques.",
                desc: "Audit complet de vos applications web et APIs selon le référentiel OWASP. Identification des injections, brèches d'authentification et défauts de configuration logicielle.",
                img: "/4i.jpg"
              },
              {
                title: "Pentest Infrastructure",
                subtitle: "Identifier les failles de votre réseau.",
                desc: "Simulation d'attaques sur vos réseaux internes et périmètres externes. Évaluation de la robustesse de vos serveurs, pare-feux et infrastructures Active Directory.",
                img: "/5i.jpg"
              },
              {
                title: "Sécurité des Mobiles & Apps",
                subtitle: "Protéger les données de vos utilisateurs.",
                desc: "Analyse approfondie des applications iOS et Android. Vérification du stockage local, des flux réseau et des interactions avec le système d'exploitation.",
                img: "/2i.jpg"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white group overflow-hidden flex flex-col hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    style={{ y: solutionsY, scale: 1.1 }}
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-black font-bold px-3 py-1.5 text-xs md:text-sm uppercase tracking-tight shadow-lg">
                      {service.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-black">
                  <h3 className="font-display font-bold text-lg mb-3">{service.subtitle}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Quote CTA (Scale Adjusted) */}
      <section ref={contactRef} className="relative py-20 flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: contactY, scale: 1.1 }}
            src="/2lock.jpg"
            alt="Contact Background"
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
            className="bg-white text-black p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center shadow-2xl rounded-sm"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 tracking-tight leading-tight">
              Besoin d'un audit ou d'un conseil en cybersécurité ?
            </h2>
            <p className="text-lg md:text-2xl font-light mb-10 text-gray-800">
              Parlons-en
            </p>
            <Button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-10 py-6 text-lg flex items-center gap-4 transition-all duration-300 group mx-auto shadow-xl"
            >
              Contacter un expert cyber
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HumanSurveillance;
