const ClientLogos = () => {
  const logos = [
    { name: "Client 1", src: "/mainlogo.png" },
    { name: "Client 2", src: "/mainlogo.png" },
    { name: "Client 3", src: "/mainlogo.png" },
    { name: "Client 4", src: "/mainlogo.png" },
    { name: "Client 5", src: "/mainlogo.png" },
    { name: "Client 6", src: "/mainlogo.png" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ils nous font confiance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous sommes fiers de travailler avec des leaders de l'industrie et des organisations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
