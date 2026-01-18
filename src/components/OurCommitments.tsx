import { CheckCircle, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurCommitmentsSection = () => {
  const commitments = [
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Fair employment practices and community engagement programs",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Eco-friendly practices and reduced carbon emissions",
    },
    {
      icon: Users,
      title: "Ethical Business Practices",
      description: "Transparency, honesty, and integrity in all dealings",
    },
  ];

  return (
    <section id="our-commitments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="text-primary">Commitments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe that responsible and ethical business practices are the foundation of trust and long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-white mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white">
                  {commitment.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-security-dark rounded-xl p-8 md:p-12 border border-border/20 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Learn More About Our CSR Initiatives
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our comprehensive commitments to social responsibility, environmental protection, and ethical excellence.
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8 py-6"
          >
            View Our Full Commitments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentsSection;
