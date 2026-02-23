import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "SENTINEL SECURITY a transformé notre approche de la sécurité informatique. Leur pentest a révélé des vulnérabilités critiques que nous ignorions.",
    author: "Jean-Marc Essono, DSI de TechAfrique"
  },
  {
    quote: "Professionnels, discrets et extrêmement compétents. Leur audit ISO 27001 nous a permis d'obtenir notre certification en un temps record.",
    author: "Marie Nguema, Responsable Sécurité SI"
  },
  {
    quote: "Le SOC de SENTINEL SECURITY a détecté une tentative d'intrusion en temps réel. Leur réactivité a évité une catastrophe pour notre entreprise.",
    author: "Paul Kamga, Directeur des Systèmes d'Information"
  },
  {
    quote: "Un service exceptionnel qui a dépassé nos attentes. Leur rapport de pentest était détaillé, clair et actionnable immédiatement.",
    author: "Aline Biyong, Directrice des Opérations"
  },
  {
    quote: "SENTINEL SECURITY offre une tranquillité d'esprit incomparable grâce à sa surveillance continue et ses expertises en cybersécurité.",
    author: "David Mbarga, PDG d'une fintech camerounaise"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits de nos prestations en cybersécurité, pentest et audits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <blockquote className="text-muted-foreground mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-foreground font-semibold">
                        {testimonial.author}
                      </cite>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
