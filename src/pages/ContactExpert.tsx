import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, Users, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ContactExpert = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    securityNeeds: "",
    consultationType: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de consultation envoyée !",
      description: "Nos experts en sécurité vous contacteront sous 24 heures pour planifier votre consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      securityNeeds: "",
      consultationType: "general",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const consultationTypes = [
    { value: "general", label: "Consultation générale de sécurité" },
    { value: "home", label: "Évaluation de la sécurité résidentielle" },
    { value: "business", label: "Audit de sécurité d'entreprise" },
    { value: "event", label: "Planification de la sécurité événementielle" },
    { value: "monitoring", label: "Installation de télésurveillance" },
    { value: "other", label: "Autre" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour à l'accueil
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Contacter un <span className="text-primary">Expert en Sécurité</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Planifiez une consultation avec nos experts en sécurité pour discuter de vos besoins spécifiques et recevoir des recommandations personnalisées pour vos préoccupations de sécurité.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Contactez-nous
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subContent}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="bg-secondary p-6 rounded-lg border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Avantages d'une consultation
              </h3>
              <ul className="space-y-3">
                {[
                  "Évaluation de sécurité personnalisée",
                  "Recommandations de solutions sur mesure",
                  "Devis sans engagement",
                  "Conseils d'experts par des professionnels certifiés",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <div className="bg-secondary p-8 md:p-12 rounded-xl border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-secondary-foreground">
                  Planifiez votre consultation
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-semibold">
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
                    <label className="text-sm text-muted-foreground mb-2 block font-semibold">
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

                {/* Phone and Company */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-semibold">
                      Téléphone *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-security-dark border-border/20 text-secondary-foreground"
                      placeholder="+273 697-912-941"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-semibold">
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

                {/* Consultation Type */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block font-semibold">
                    Type de consultation *
                  </label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-security-dark border border-border/20 text-secondary-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {consultationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Security Needs */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block font-semibold">
                    Décrivez vos besoins en sécurité *
                  </label>
                  <Textarea
                    name="securityNeeds"
                    value={formData.securityNeeds}
                    onChange={handleChange}
                    required
                    className="bg-security-dark border-border/20 text-secondary-foreground min-h-[150px]"
                    placeholder="Parlez-nous de vos préoccupations spécifiques en matière de sécurité, de la taille de la propriété, du nombre de sites, des mesures de sécurité actuelles, etc."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold py-6 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Demander une consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Notre équipe d'experts examinera votre demande et vous contactera sous 24 heures pour convenir d'un moment opportun.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactExpert;
