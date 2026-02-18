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
                Surveillance humaine et sécurité incendie :
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Des agents qualifiés pour protéger vos sites et vos équipes
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
              La sécurité des biens et des personnes exige présence, réactivité et rigueur.<br />
              Chez <strong>SENTINEL SECURITY</strong>, nous mettons à votre disposition des agents qualifiés, formés aux exigences réglementaires, capables d'assurer une surveillance efficace et une prévention des risques adaptée à chaque environnement.
            </p>
            <p className="text-white text-base md:text-lg font-bold leading-relaxed">
              Que vous soyez une entreprise, une collectivité ou un gestionnaire de site sensible, nos équipes vous accompagnent avec des solutions humaines de sécurité sur mesure : surveillance générale, sécurité incendie, agents cynophiles ou sécurité événementielle.
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
            Notre savoir-<br />faire : <span className="bg-primary text-black px-2">l'humain</span><br />
            <span className="bg-primary text-black px-2">au cœur de la</span><br />
            <span className="bg-primary text-black px-2">sécurité</span>
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
              <strong>Depuis plus de 20 ans, SENTINEL SECURITY mobilise une expertise reconnue dans la protection des sites, des biens et des personnes, en s'appuyant sur une sélection rigoureuse de ses agents, une organisation agile et une culture du résultat.</strong>
            </p>
            <p>
              Nos équipes sont formées, encadrées et évaluées en continu, pour garantir un haut niveau de fiabilité et d'exigence. Chaque mission fait l'objet d'une étude préalable, d'une mise en place personnalisée et d'un suivi rigoureux, en lien avec nos référents de site et notre direction opérationnelle.
            </p>
            <p className="font-bold text-black border-l-4 border-primary pl-6 py-2">
              Nous intervenons dans des environnements variés et sensibles : établissements recevant du public, sièges sociaux, zones industrielles, plateformes logistiques, collectivités locales ou encore événements ponctuels.
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
                quote: "Une équipe fiable, toujours à l'écoute. Leur réactivité a vraiment fait la différence lors d'un incident sur notre site. Nous savons que nous pouvons compter sur eux.",
                author: "Responsable d'exploitation, parc logistique"
              },
              {
                quote: "Les agents SSIAP de SENTINEL SECURITY sont professionnels, discrets et parfaitement formés. Nous leur faisons confiance pour la sécurité de nos bâtiments ERP.",
                author: "Directrice d'établissement médico-social"
              },
              {
                quote: "Nous avons fait appel à SENTINEL SECURITY pour la sécurisation de notre événement. Tout a été fluide, professionnel et maîtrisé, du briefing à la fermeture.",
                author: "Organisateur d'événements culturels"
              },
              {
                quote: "Au-delà du service de sécurité, c'est l'accompagnement humain et la disponibilité des responsables qui font la différence. Une vraie relation de confiance.",
                author: "Gérant d'une chaîne de commerces de centre-ville"
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
              Des <span className="text-white italic font-normal">solutions</span> de sécurité <span className="bg-white text-black px-4 italic font-normal">adaptées</span> à chaque besoin
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Découvrez nos expertises pour une protection fiable, humaine et adaptée à votre environnement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Surveillance humaine et gardiennage",
                subtitle: "Protéger, dissuader, alerter.",
                desc: "Nos agents assurent la sécurité de vos sites en journée, de nuit ou 24h/24, avec un contrôle permanent des accès, des rondes dissuasives et une vigilance constante.",
                img: "/4i.jpg"
              },
              {
                title: "Sécurité incendie SSIAP",
                subtitle: "Prévenir les risques, agir en cas d'urgence.",
                desc: "Nos agents SSIAP veillent au respect des règles de sécurité incendie dans les ERP, IGH et sites industriels. Présents, formés, réactifs.",
                img: "/5i.jpg"
              },
              {
                title: "Dispositif de sécurité événementiel",
                subtitle: "Des dispositifs adaptés à chaque type d'événement.",
                desc: "Accueil du public, contrôle d'accès, surveillance des installations : nos agents assurent une sécurité fluide, discrète et efficace.",
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
              Besoin d'un devis ou d'un conseil en sécurité ?
            </h2>
            <p className="text-lg md:text-2xl font-light mb-10 text-gray-800">
              Parlons-en
            </p>
            <Button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-10 py-6 text-lg flex items-center gap-4 transition-all duration-300 group mx-auto shadow-xl"
            >
              Contacter un expert sécurité
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HumanSurveillance;
