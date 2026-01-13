import { 
  Shield, 
  Users, 
  Camera, 
  Flame, 
  Dog, 
  Bell,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Human Surveillance & Guarding",
    description: "Qualified security agents to watch over your sites, prevent risks and ensure peace of mind, day and night.",
  },
  {
    icon: Shield,
    title: "Event Security",
    description: "Discrete and effective security for your events: access control, crowd management and public protection in complete serenity.",
  },
  {
    icon: Camera,
    title: "Remote Monitoring 24/7",
    description: "Alarm systems connected to our monitoring center for 24/7 protection and rapid interventions.",
  },
  {
    icon: Flame,
    title: "Fire Safety SSIAP 1, 2 & 3",
    description: "Trained SSIAP agents to prevent fires, secure premises and intervene in case of emergency.",
  },
  {
    icon: Dog,
    title: "K-9 Security & Patrol",
    description: "Dog handler teams to deter, detect intrusions and strengthen security at your sensitive sites.",
  },
  {
    icon: Bell,
    title: "Alarm System Installation",
    description: "From sales and rental to installation, we offer complete solutions to secure your property for professionals and individuals.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Surveillance, Fire Safety, Remote Monitoring...{" "}
            <span className="text-primary">Discover All Our Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond human surveillance and remote monitoring, Sentinel Security offers a comprehensive and innovative approach to private security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card hover:bg-secondary transition-all duration-300 border-border hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-card-foreground group-hover:text-secondary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-accent group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-secondary rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-diagonal hidden md:block" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-2">
                A Comprehensive, Enhanced & Innovative Security Offer
              </h3>
              <p className="text-muted-foreground">
                Connected solutions, intelligent alarm systems, and seamless coordination between our field teams and control center.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold whitespace-nowrap"
            >
              Our Commitments
            </Button>
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

export default Services;
