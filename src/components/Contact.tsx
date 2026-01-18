import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "+273 697-912-941",
    subContent: "Disponible 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@sentinel-security.com",
    subContent: "Nous répondons sous 24 heures",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Security Avenue",
    subContent: "Unknown, NY 10001",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "24 Heures / 7 Jours",
    subContent: "Toujours à votre service",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Envoyé !",
      description: "Nous vous répondrons sous 24 heures.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4 relative z-10">
            Besoin d'un devis ou de conseils en sécurité ?{" "}
            <span className="text-primary">Parlons-en</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Nos experts en sécurité sont prêts à analyser vos besoins et à vous fournir des solutions sur mesure.
          </p>
          <Button 
            onClick={() => navigate("/contact-expert")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold relative z-10"
          >
            Contacter un expert en sécurité
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Contactez-nous
            </h3>
            <p className="text-muted-foreground mb-8">
              Que vous ayez besoin d'une surveillance 24h/24, de sécurité événementielle ou d'un audit de sécurité complet, nous sommes là pour vous aider à protéger ce qui compte le plus pour vous.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-muted p-5 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <info.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="text-foreground">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subContent}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-foreground font-semibold mb-4">Suivez-nous</p>
              <div className="flex gap-4">
                {["LinkedIn", "Facebook", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-sm font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-xl border border-border/20 group hover:border-primary/50 transition-all hover:shadow-lg">
            <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-6">
              Demandez un devis gratuit
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Nom complet *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="jean@entreprise.com"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Téléphone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="+273 697-912-941"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Entreprise
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="Votre Entreprise"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-security-dark border-border/20 text-secondary-foreground min-h-[120px]"
                  placeholder="Parlez-nous de vos besoins en sécurité..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
