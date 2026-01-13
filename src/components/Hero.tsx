import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      {/* Diagonal Yellow Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary clip-diagonal hidden lg:block" />
      
      <div className="container mx-auto px-4 pt-32 lg:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold tracking-wide">
                TRUSTED PROTECTION
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight mb-6">
              Your Security Partner:{" "}
              <span className="text-primary">Surveillance</span>,{" "}
              Threats & Remote Monitoring
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Sentinel Security & Services provides complete and personalized private security solutions. Our teams ensure human surveillance of your professional sites, as well as 24/7 remote monitoring services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent font-semibold text-lg px-8"
              >
                Request a Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 group"
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Clients Protected</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-slide-in-right">
              <div 
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
                  <Shield className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-display font-bold text-secondary-foreground">
                    Professional Security
                  </p>
                  <p className="text-primary mt-2">Since 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-diagonal {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;
