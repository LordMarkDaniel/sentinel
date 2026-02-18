import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col">
      {/* Background Image Layer with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/2A.png')" }}
        />
        {/* Dark overlay for the bottom part of image */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Yellow Content Strip - Top Overlay */}
      <div className="relative z-10 w-full bg-primary/75 pt-32 pb-12 px-4 shadow-xl text-center md:text-left flex flex-col items-center">
        <div className="container mx-auto max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-display font-bold text-black leading-tight mb-8" style={{ fontSize: '2rem' }}>
            <span className="block">Entreprise de sécurité privée à Douala</span>
            <span className="block">et dans le Littoral : gardiennage,</span>
            <span className="block">surveillance humaine, sécurité incendie</span>
            <span className="block">SSIAP, alarmes et télésurveillance</span>
          </h1>

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <Link to="/request-quote">
              <Button
                size="lg"
                className="bg-black text-primary hover:bg-black/90 font-bold text-lg px-10 py-7 rounded-full shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:scale-105"
              >
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* The visible area below the yellow strip shows the background image naturally */}
    </section>
  );
};

export default Hero;
