import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Depuis l'installation de leur système d'alarme connecté et la mise en place de la télésurveillance, je dors beaucoup plus tranquille. Le centre réagit très vite, et l'intervention est systématiquement suivie d'un compte-rendu. Un vrai service pro.",
    author: "Gérante d'une boutique à Douala"
  },
  {
    quote: "Sentinel Sécurité a su adapter ses dispositifs à la configuration de notre site. Leur levée de doute est rapide et efficace, et nous avons un interlocuteur dédié. Nous sommes très satisfaits du suivi.",
    author: "Responsable maintenance, PME logistique (Littoral)"
  },
  {
    quote: "Ils ont installé une alarme sur mesure pour notre maison, reliée directement à leur centre de télésurveillance. L'équipe a été claire, rapide et très rassurante. Et le système est simple à utiliser au quotidien.",
    author: "Propriétaire d'une résidence à Bonapriso"
  },
  {
    quote: "Nous habitons parfois loin de notre site industriel, mais grâce à la télésurveillance Sentinel, on sait qu'il est bien protégé. Ils nous appellent immédiatement en cas d'alerte, et interviennent si besoin. On recommande sans hésiter.",
    author: "Directeur de site agro-industriel, Edéa"
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
                Télésurveillance et alarmes :
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Une sécurité connectée, réactive et continue
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
              Parce que chaque seconde compte en cas d'intrusion ou de risque, <strong>SENTINEL SECURITY</strong> vous propose
              une solution de télésurveillance 24h/24 – 7j/7, renforcée par des systèmes d'alarme performants et
              connectés.
            </p>
            <p className="text-white text-base md:text-lg font-bold leading-relaxed">
              Grâce à notre centre de télésurveillance nouvelle génération basé à Douala, nous assurons une
              protection active et immédiate des biens et des personnes, avec des opérateurs expérimentés et
              des équipes d'intervention mobilisables à tout moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <span className="inline-block bg-primary text-black text-lg md:text-xl font-display font-bold px-4 py-1 uppercase">
              Des solutions de télésurveillance et d'alarme adaptées à chaque environnement
            </span>
            <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-4xl">
              Pour sécuriser un commerce, un site industriel, un entrepôt ou une résidence, nos équipes interviennent sur
              Douala et dans toute la région du Littoral, avec des dispositifs adaptés à chaque type de site. Télésurveillance 24/7,
              alarmes anti-intrusion, levée de doute vidéo ou intervention sur alarme, chaque service répond à une exigence : vous
              protéger en temps réel, sans interruption.
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
                  Protéger mon domicile
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
                  Protéger mon entreprise
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
                Nos solutions de<br /> télésurveillance<br /> et d'alarmes : <span className="bg-primary text-black px-2">un</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">service connecté,</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">complet et</span><br />
                <span className="bg-primary text-black px-2 mt-2 inline-block">réactif</span>
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
                Pour garantir une protection efficace 24h/24, SENTINEL SECURITY propose une offre intégrée de télésurveillance et de dispositifs d'alarme connectés, pilotée depuis notre centre basé à Douala. Chaque alerte est traitée en temps réel par nos opérateurs, qui procèdent à une levée de doute vidéo ou audio immédiate, afin d'écarter les fausses alertes et d'engager, si nécessaire, une intervention rapide sur site.
              </p>

              <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Nos services couvrent :</h4>
                <ul className="space-y-4">
                  {[
                    "la télésurveillance continue, 7 jours sur 7, avec traitement des alertes en temps réel ;",
                    "l'installation, la maintenance et le paramétrage de systèmes d'alarme adaptés à chaque type de site (professionnels et particuliers) ;",
                    "une levée de doute précise et sécurisée, par vidéo ou écoute, pour une réaction adaptée ;",
                    "l'intervention de nos équipes mobiles, en lien direct avec les forces de l'ordre si la situation l'exige."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-gray-800 text-sm md:text-base leading-snug">
                        {item.split(',').map((part, index) => (
                          <span key={index} className={index === 0 && part.startsWith('la') || part.includes('installation') || part.includes('levée') || part.includes('intervention') ? 'bg-primary/30 px-1' : ''}>
                            {part}{index < item.split(',').length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 text-sm italic">
                Grâce à un paramétrage sur mesure et une coordination fluide entre technologies et humains, nous assurons la sécurité de vos biens, de vos sites et de vos collaborateurs, à Douala et dans toute la région Littorale.
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
            <h2 className="text-xl md:text-3xl font-display font-bold mb-4">
              Besoin d'un devis ou d'un conseil en sécurité ?
            </h2>
            <p className="text-lg md:text-xl font-light mb-10 text-gray-600">
              Parlons-en
            </p>
            <Button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-4 md:py-5 text-base flex items-center gap-3 transition-all duration-300 group mx-auto shadow-lg"
            >
              Contacter un expert sécurité
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RemoteMonitoring;
