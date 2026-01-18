import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RequestQuote = () => {
  const navigate = useNavigate();

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

        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Demander un <span className="text-primary">Devis</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Remplissez le formulaire ci-dessous et nos experts en sécurité vous contacteront sous 24 heures avec un devis personnalisé adapté à vos besoins.
          </p>

          <form className="space-y-6 bg-secondary p-8 rounded-xl border border-border/20 group hover:border-primary/50 hover:bg-primary transition-colors duration-300 hover:shadow-lg">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="+273 697-912-941"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Votre entreprise"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Besoins en sécurité
              </label>
              <textarea
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                rows={5}
                placeholder="Décrivez vos besoins en sécurité..."
              />
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold py-6 text-lg">
              Envoyer la demande de devis
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
