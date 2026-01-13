import { Shield, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Established since 2002, we bring decades of security expertise",
  },
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully accredited by national security regulatory bodies",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock protection and rapid response teams",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of local security needs and challenges",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-6">
              Expert in Private Security{" "}
              <span className="text-primary">for Over 20 Years</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              SENTINEL SECURITY & SERVICES is a company specializing in private security of property and people, established since 2002. With over 20 years of experience, we operate in all key areas of security: human surveillance (guarding), 24/7 remote monitoring, alarm interventions, fire safety (SSIAP agents), event security, as well as the sale and installation of connected alarm systems.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Accredited by national security councils, Sentinel Security relies on perfect knowledge of its sector and a constant ability to adapt to new security challenges.
            </p>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-security-dark p-6 rounded-lg border border-border/20 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Banner */}
        <div className="mt-16 bg-security-dark rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-border/20">
          <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="h-10 w-10 text-primary-foreground" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-secondary-foreground mb-2">
              Responsibility, Ethics, Commitments: Discover How We Act
            </h4>
            <p className="text-muted-foreground">
              Request our CSR report to learn more about our social and environmental commitments.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
