import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DiscoverServices = () => {
  const navigate = useNavigate();

  // Refs for scroll sections
  const introRef = useRef(null);
  const expertiseRef = useRef(null);
  const innovationRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll animations for intro
  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });
  const introY = useTransform(introProgress, [0, 1], ["0%", "20%"]);

  // Scroll animations for expertise cards
  const { scrollYProgress: expertiseProgress } = useScroll({
    target: expertiseRef,
    offset: ["start end", "end start"]
  });
  const expertiseY = useTransform(expertiseProgress, [0, 1], ["-10%", "10%"]);

  // Scroll animations for innovation
  const { scrollYProgress: innovationProgress } = useScroll({
    target: innovationRef,
    offset: ["start end", "end start"]
  });
  const innovationY = useTransform(innovationProgress, [0, 1], ["-15%", "15%"]);

  // Scroll animations for contact
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 1. Intro Section with Label Style Title */}
      <section ref={introRef} className="relative min-h-[50vh] flex items-center pt-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: introY, scale: 1.1 }}
            src="/3A.png"
            alt="Security Perspective"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="space-y-1">
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                Nos services : une cybersécurité
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                globale, offensive
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-6 py-1 uppercase tracking-tight">
                et défensive
              </span>
            </div>
          </motion.div>
        </div>

        {/* Side Dots (Navigation Indicators from reference) */}
        <div className="absolute right-10 bottom-10 flex flex-col gap-3 z-20">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </section>

      {/* 2. Structured Offer Description */}
      <section ref={expertiseRef} className="bg-black py-20 relative px-4 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-8">
              Parce que chaque besoin en cybersécurité est unique, SENTINEL CYBER vous propose une offre structurée autour de deux expertises complémentaires : la sécurité offensive (pentest, Red Team) et la sécurité défensive (SOC, audits, conformité).
            </p>
            <p className="text-gray-400 text-lg">
              Au Cameroun et partout en Afrique Centrale, nous protégeons vos systèmes, vos données et vos équipes avec rigueur, réactivité et engagement.
            </p>
          </motion.div>

          {/* Core Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Human & Fire Security */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-gray-900 aspect-[4/3] md:aspect-square"
            >
              <motion.img
                style={{ y: expertiseY, scale: 1.1 }}
                src="/5A.png"
                alt="Human Security"
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-0 right-0 px-8 flex justify-center">
                <Button
                  onClick={() => navigate("/request-quote")}
                  className="bg-primary text-black hover:bg-white font-bold rounded-full px-8 py-6 md:py-7 text-xs md:text-sm flex items-center gap-3 transition-all duration-300 w-full max-w-[400px]"
                >
                  Tests d'intrusion & Audits de sécurité
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Telesurveillance & Alarms */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-gray-900 aspect-[4/3] md:aspect-square"
            >
              <motion.img
                style={{ y: expertiseY, scale: 1.1 }}
                src="/6A.png"
                alt="Telesurveillance"
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-0 right-0 px-8 flex justify-center">
                <Button
                  onClick={() => navigate("/request-quote")}
                  className="bg-primary text-black hover:bg-white font-bold rounded-full px-8 py-6 md:py-7 text-xs md:text-sm flex items-center gap-3 transition-all duration-300 w-full max-w-[400px]"
                >
                  SOC & Surveillance des menaces 24/7
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Social Icons (Reference Style) */}
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

      {/* 3. Innovation Section with Yellow Highlights */}
      <section ref={innovationRef} className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: innovationY, scale: 1.1 }}
            src="/4A.png"
            alt="Innovative Security"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mb-12"
            >
              <p>
                Au-delà du pentest et de la surveillance des menaces, <strong>SENTINEL CYBER</strong> propose une approche globale et innovante de la cybersécurité. Grâce à des solutions de détection avancée, des plateformes d'analyse des menaces intelligentes, et une coordination fluide entre nos équipes offensives et défensives.
              </p>
              <p>
                Nous offrons à nos clients une <strong>protection numérique augmentée</strong>. Cette synergie entre technologie et expertise humaine garantit une réactivité optimale, une traçabilité complète des incidents, et une sécurité adaptée aux enjeux de chaque organisation.
              </p>
            </motion.div>

            <Button
              className="bg-primary text-black hover:bg-white font-bold rounded-full px-8 py-6 text-base flex items-center gap-3 transition-all duration-300 group shadow-lg"
              onClick={() => navigate("/why-us")}
            >
              Notre approche
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Side Dots (Navigation Indicators from reference) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </section>

      {/* 4. Bottom Quote CTA Section */}
      <section ref={contactRef} className="relative py-24 flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y: contactY, scale: 1.1 }}
            src="/5lock.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
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

        {/* Side Dots (Navigation Indicators from reference) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </section>

    </div>
  );
};

export default DiscoverServices;
