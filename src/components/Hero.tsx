import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
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

      {/* Diagonal Yellow Accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-primary hidden lg:block" 
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      
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

          {/* Right Content - Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-slide-in-right">              <div 
                className="w-full h-[500px] bg-gradient-to-br from-security-dark to-security-black rounded-lg shadow-2xl flex items-center justify-center border-2 border-primary/20 relative overflow-hidden"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23000%22 width=%22400%22 height=%22400%22/%3E%3C/svg%3E")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <img 
                  src="/istockphoto-1470457321-612x612.jpg"
                  alt="Security Lock"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="text-center p-8 relative z-20">
                  <img src="/mainlogo.png" alt="Sentinel Security Logo" className="h-40 w-40 mx-auto mb-4 object-contain" />
                  <p className="text-2xl font-display font-bold text-secondary-foreground">
                    Sécurité Professionnelle
                  </p>
                  <p className="text-primary mt-2">Depuis 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
