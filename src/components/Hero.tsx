import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, ShieldCheck, Award, Star, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.innerWidth >= 768 && parallaxRef.current) {
        const offset = window.scrollY * 0.3;
        parallaxRef.current.style.setProperty('--parallax-offset', `${offset}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center pointer-events-none will-change-transform"
        style={{ 
          backgroundImage: 'url("/4lock.jpg")',
          transform: 'translateY(var(--parallax-offset, 0px))'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 lg:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className={`flex items-center gap-2 mb-6 transition-transform duration-1000 ease-out will-change-transform ${isMounted ? "translate-y-2" : "translate-y-0"}`}>
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold tracking-wide">
                PROTECTION DE CONFIANCE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Votre Partenaire Sécurité :{" "}
              <span className="text-primary">Surveillance</span>,{" "}
              Menaces & Télésurveillance
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Sentinel Security & Services fournit des solutions complètes et personnalisées de sécurité privée. Nos équipes assurent la surveillance humaine de vos sites professionnels, ainsi que des services de télésurveillance 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/request-quote")}
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent font-semibold text-lg px-8"
              >
                Demander un devis
              </Button>
              <Button 
                onClick={() => navigate("/discover-services")}
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 group"
              >
                Découvrez nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className={`mt-12 flex flex-wrap gap-8 transition-transform duration-1000 ease-out will-change-transform ${isMounted ? "-translate-y-2" : "translate-y-0"}`}>
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-gray-300">Années d'Expérience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-300">Clients Protégés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-gray-300">Surveillance</p>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Badges */}
          <div className="relative hidden lg:flex flex-col items-center justify-center">
            <div className="animate-slide-in-right text-center">
              <img 
                src="/mainlogo.png" 
                alt="Sentinel Security Logo" 
                className="h-48 w-48 mx-auto mb-8 object-contain drop-shadow-2xl" 
              />
              
              <div className="flex justify-center gap-6 flex-wrap">
                {[
                  { Icon: ShieldCheck, label: "Agréé" },
                  { Icon: Award, label: "Certifié" },
                  { Icon: Star, label: "Expert" },
                  { Icon: Clock, label: "24/7" },
                  { Icon: CheckCircle, label: "Fiable" }
                ].map(({ Icon, label }, index) => (
                  <div 
                    key={label} 
                    className="flex flex-col items-center gap-2 group cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'both' }}
                  >
                    <div className="p-3 bg-black/20 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary shadow-lg">
                      <Icon className="h-6 w-6 text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
