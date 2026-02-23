import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Depuis la mise en place de leur service SOC et de la surveillance continue de nos terminaux, notre équipe IT respire. Le centre réagit à la moindre anomalie, et l'analyse des alertes est systématiquement suivie d'un rapport précis. Un vrai service d'élite.",
    author: "CISO d'une Banque à Douala"
  },
  {
    quote: "Sentinel Security a su intégrer nos outils existants dans leur SIEM. Leur capacité de détection des mouvements latéraux est impressionnante, et nous avons un analyste dédié. Nous sommes très satisfaits du niveau de vigilance.",
    author: "Directeur des Opérations, Acteur Logistique"
  },
  {
    quote: "Ils ont déployé des sondes sur mesure pour notre infrastructure cloud. L'équipe a été proactive, identifiant une tentative d'exfiltration de données en moins de 10 minutes. C'est le partenaire idéal pour notre transformation numérique.",
    author: "CEO d'une Scale-up Tech"
  },
  {
    quote: "Nous gérons des données de santé sensibles et le SOC Sentinel nous garantit une visibilité totale. Ils nous alertent immédiatement en cas de comportement suspect et bloquent les menaces avant l'impact. On recommande sans hésiter.",
    author: "Responsable Sécurité SI, Clinique Privée"
  }
];

const RemoteMonitoring = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const splitSupportRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center pt-32 overflow-hidden bg-black border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: heroY, scale: 1.1 }}
            src="/4lock.jpg"
            alt="Command Center"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
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
                SOC et surveillance des menaces :
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Une vigilance numérique continue, réactive et intelligente
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

      {/* 2. Intro Statement Section */}
      <section ref={introRef} className="bg-black py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Parce que chaque milliseconde compte lors d'une cyberattaque ou d'une intrusion réseau, <strong>SENTINEL SECURITY</strong> vous propose
              une solution de SOC (Security Operations Center) 24h/24 – 7j/7, renforcée par des outils de détection (EDR/XDR)
              de dernière génération.
            </p>
            <p className="text-white text-base md:text-lg font-bold leading-relaxed">
              Grâce à notre centre opérationnel basé au Cameroun, nous assurons une
              protection active et immédiate de vos systèmes et de vos données, avec des analystes experts et
              des capacités de réponse aux incidents mobilisables à tout moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <span className="inline-block bg-primary text-black text-lg md:text-xl font-display font-bold px-4 py-1 uppercase">
              Une surveillance des menaces adaptée à vos enjeux de cybersécurité
            </span>
            <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-4xl">
              Pour sécuriser vos infrastructures cloud, vos serveurs on-premise, vos terminaux mobiles ou vos postes de travail, nos équipes déploient des sondes intelligentes pour une visibilité complète. Surveillance des logs, analyse comportementale, Threat Hunting et réponse aux incidents, chaque service répond à une exigence : vous protéger contre les ransomwares, les fuites de données et les accès non autorisés, sans interruption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Split Support Section */}
      <section ref={splitSupportRef} className="bg-black py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-[350px] overflow-hidden group border border-white/5"
            >
              <img src="/2lock.jpg" alt="Protéger mon domicile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-start justify-start p-8 md:p-12">
                <Button
                  onClick={() => navigate("/request-quote")}
                  className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-5 text-base flex items-center gap-3 transition-all duration-300 shadow-xl"
                >
                  Protéger mon infrastructure Cloud
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square md:aspect-auto md:h-[350px] overflow-hidden group border border-white/5"
            >
              <img src="/4i.jpg" alt="Protéger mon entreprise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-end p-8 md:p-12">
                <Button
                  onClick={() => navigate("/request-quote")}
                  className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-5 text-base flex items-center gap-3 transition-all duration-300 shadow-xl"
                >
                  Sécuriser mes postes de travail
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Feature Split Section */}
      <section ref={featuresRef} className="bg-white text-black overflow-hidden px-4">
        <div className="grid md:grid-cols-2">
          {/* Left - Typography Heading */}
          <div className="bg-black text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                Nos solutions de<br /> SOC et surveillance<br /> des menaces : <span className="bg-primary text-black px-2">un</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">centre d'expertise,</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">prévention et</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">réponse active</span>
              </h2>
              <div className="w-16 h-0.5 bg-gray-600 mt-8"></div>
            </motion.div>
          </div>

          {/* Right - Detailed List */}
          <div className="p-12 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Pour garantir une protection efficace 24h/24, SENTINEL SECURITY propose une offre intégrée de SOC managé et de détection des menaces (EDR/MDR), pilotée depuis notre centre d'expertise cybersécurité. Chaque événement est corrélé en temps réel par notre SIEM, permettant à nos analystes de détecter les signaux faibles, d'isoler les machines compromises et d'engager une remédiation immédiate.
              </p>

              <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Nos services couvrent :</h4>
                <ul className="space-y-4">
                  {[
                    "la surveillance continue des logs, 7 jours sur 7, pour une visibilité totale sur vos flux;",
                    "le déploiement et la gestion d'outils de détection avancée (EDR/XDR) sur tous vos terminaux;",
                    "une analyse experte des incidents pour comprendre l'origine et l'étendue d'une attaque;",
                    "la réponse aux incidents et le confinement des menaces par nos analystes certifiés."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-gray-800 text-sm md:text-base leading-snug">
                        {item.split(',').map((part, index) => (
                          <span key={index} className={index === 0 && part.startsWith('la') || part.includes('déploiement') || part.includes('analyse') || part.includes('réponse') ? 'bg-primary/30 px-1' : ''}>
                            {part}{index < item.split(',').length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 text-sm italic">
                Grâce à un monitoring proactif et une coordination fluide entre technologies SIEM/SOAR et expertise humaine, nous assurons l'intégrité de vos données et la continuité de vos activités numériques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section ref={testimonialRef} className="bg-white py-24 px-4 border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-display font-bold mb-16 text-black text-center">
            Votre satisfaction, notre meilleure garantie
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary text-black p-8 flex flex-col justify-between min-h-[350px] rounded-sm shadow-xl"
              >
                <div>
                  <Quote className="h-8 w-8 mb-6 opacity-80" fill="black" />
                  <p className="text-base leading-relaxed mb-8 italic">"{t.quote}"</p>
                </div>
                <p className="font-bold uppercase text-[10px] tracking-wider border-t border-black/10 pt-4">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Standardized Bottom CTA */}
      <section ref={ctaRef} className="relative py-24 md:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="/5lock.jpg" alt="Contact Context" className="w-full h-full object-cover opacity-40 grayscale" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-black p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center shadow-2xl rounded-sm"
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

export default RemoteMonitoring;
