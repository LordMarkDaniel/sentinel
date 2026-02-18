import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const navigate = useNavigate();

  // Refs for scroll sections
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const engagementRef = useRef(null);
  const rseRef = useRef(null);
  const contactRef = useRef(null);

  // Parallax animations
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["10%", "30%"]);

  const { scrollYProgress: rseProgress } = useScroll({
    target: rseRef,
    offset: ["start end", "end start"]
  });
  const rseScale = useTransform(rseProgress, [0, 1], [1, 1.1]);

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center pt-32 overflow-hidden bg-black border-b border-white/10">
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
                SENTINEL SECURITY : Un cabinet de
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                cybersécurité éthique, réactif
              </span><br />
              <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                et engagé
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section ref={introRef} className="bg-black pt-12 pb-8 px-4 border-b border-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-light">
              Chez <strong>SENTINEL SECURITY</strong>, notre mission ne s'arrête pas à la protection des systèmes et des données.
              Nous nous engageons chaque jour pour une cybersécurité plus éthique, plus transparente et plus exigeante,
              au Cameroun et partout en Afrique Centrale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Nos Engagements Section */}
      <section ref={engagementRef} className="bg-black pt-12 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase">Notre approche</h2>
            <div className="inline-block bg-primary text-black px-6 py-2 text-lg md:text-xl font-bold uppercase tracking-wide">
              Une cybersécurité éthique, offensive et défensive
            </div>
          </div>

          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16 text-base md:text-lg leading-relaxed font-light">
            Chez <strong>SENTINEL SECURITY</strong>, nous considérons que la cybersécurité ne peut être efficace sans éthique,
            ni durable sans responsabilité. Nous agissons chaque jour avec la conviction qu'un cabinet de
            cybersécurité peut allier performance technique et impact positif sur ses clients et son territoire.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Engagement Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-black p-8 flex flex-col h-full rounded-sm"
            >
              <div className="mb-6">
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase mb-1">Une cybersécurité qui</span><br />
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase">a du sens</span>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p><strong>Notre promesse : protéger avec rigueur tout en agissant avec éthique.</strong></p>
                <p>Chaque mission que nous menons, qu'il s'agisse de pentest, d'audit de sécurité, de surveillance des menaces ou de conformité réglementaire, est pensée dans une logique de valeur ajoutée, d'anticipation des risques et d'adaptation aux besoins du client.</p>
                <p>Nous refusons les prestations au rabais. Notre exigence de qualité garantit la pérennité de notre service.</p>
              </div>
            </motion.div>

            {/* Engagement Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black p-8 flex flex-col h-full rounded-sm"
            >
              <div className="mb-6">
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase mb-1">Un cabinet agile,</span><br />
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase">proche de ses clients</span>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p><strong>Chez SENTINEL SECURITY, l'humain est au cœur de notre stratégie.</strong></p>
                <p>Nous agissons pour que chaque expert soit respecté, reconnu et valorisé dans son parcours. Cela passe par :</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Respect des engagements contractuels</li>
                  <li>Des missions adaptées aux compétences de chacun</li>
                  <li>Des primes de reconnaissance (excellence, cooptation, disponibilité)</li>
                </ul>
              </div>
            </motion.div>

            {/* Engagement Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-black p-8 flex flex-col h-full rounded-sm"
            >
              <div className="mb-6">
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase mb-1">Divulgation</span><br />
                <span className="inline-block bg-primary text-black font-bold px-3 py-1 text-lg uppercase">responsable</span>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p><strong>Même si notre cœur de métier est technique, nous agissons avec éthique et transparence.</strong></p>
                <p>Nos engagements concrets :</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Divulgation responsable des vulnérabilités découvertes</li>
                  <li>Confidentialité absolue de toutes les informations clients</li>
                  <li>Rapports détaillés et actionnables pour chaque mission</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. RSE Report Section (TOTEM) */}
      <section ref={rseRef} className="relative py-20 bg-gray-100 text-black overflow-hidden flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ scale: rseScale }}
              className="relative flex justify-center"
            >
              {/* Report Mockup Visual */}
              <div className="bg-white shadow-2xl p-3 transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm">
                <div className="bg-black aspect-[3/4] relative overflow-hidden flex flex-col items-center justify-center p-6 border-[6px] border-black">
                  <h3 className="text-primary text-3xl md:text-5xl font-display font-black tracking-tighter mb-4">SENTINEL</h3>
                  <p className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border-y border-white/20 py-1.5 mb-6 text-center">Rapport de Transparence 2024</p>
                  <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                    <img src="/1lock.jpg" alt="Accent" className="w-full h-full object-cover grayscale mix-blend-overlay opacity-50" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-primary text-xs md:text-sm font-bold">Agir avec <span className="text-white">sens</span>,</p>
                    <p className="text-primary text-xs md:text-sm font-bold">protéger avec <span className="text-white">éthique</span>,</p>
                    <p className="text-primary text-xs md:text-sm font-bold">innover avec <span className="text-white">conviction</span></p>
                  </div>
                  <img src="/mainlogo.png" alt="Logo" className="absolute bottom-6 right-6 h-6 object-contain invert" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 leading-tight">
                Éthique, conformité, engagements : découvrez comment nous agissons.
              </h2>
              <Button
                onClick={() => { }}
                className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-10 py-6 text-base flex items-center gap-3 transition-all duration-300 group shadow-lg"
              >
                Téléchargez notre rapport de transparence
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Quote CTA (Standardized) */}
      <section ref={contactRef} className="relative pt-12 pb-4 flex items-center justify-center bg-black overflow-hidden">
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
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-4 md:py-5 text-base flex items-center gap-3 transition-all duration-300 group mx-auto shadow-lg"
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

export default WhyUs;
