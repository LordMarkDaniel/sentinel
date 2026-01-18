import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Sentinel Security a transformé notre approche de la sécurité. Leur expertise est inégalée.",
    author: "John Doe, PDG de TechCorp"
  },
  {
    quote: "Fiables, professionnels et toujours à l'heure. Je recommande vivement leurs services.",
    author: "Jane Smith, Responsable des Opérations"
  },
  {
    quote: "Le dévouement de l'équipe envers la sûreté et la sécurité est évident dans tout ce qu'ils font.",
    author: "Mike Johnson, Directeur des Installations"
  },
  {
    quote: "Un service exceptionnel qui a dépassé nos attentes. De vrais professionnels.",
    author: "Sarah Wilson, Directrice RH"
  },
  {
    quote: "Sentinel Security offre une tranquillité d'esprit grâce à ses solutions complètes.",
    author: "David Brown, Propriétaire"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits de leur expérience avec Sentinel Security.
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
