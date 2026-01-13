import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  "Reactive and engaged partner for your security",
  "State-of-the-art technology combined with human expertise",
  "24/7 availability and constant listening",
  "Human-scale structure close to your needs",
  "Complete traceability of all interventions",
  "Rapid on-site response times",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden relative">
              <img 
                src="/hacking-2964100.jpg"
                alt="Security Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-security-dark/80 to-security-black/80 flex items-center justify-center relative z-10">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-primary-foreground">24</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-secondary-foreground">
                    Hours a Day
                  </p>
                  <p className="text-primary">7 Days a Week</p>
                  <p className="text-muted-foreground mt-4">
                    We are always available to protect your assets
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary/30 rounded-lg z-20" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-primary/30 rounded-lg z-20" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A Reactive and Engaged Partner,{" "}
              <span className="text-primary">At Your Service</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Combining cutting-edge technology and human expertise, SENTINEL SECURITY supports many businesses, communities and individuals looking for a reliable, flexible and responsive partner.
            </p>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
