import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RequestQuote = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Black Header Section */}
      <section className="bg-black text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Besoin d'un devis, d'un conseil en sécurité ou d'une intervention rapide à Douala et ses environs ?
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Split Content & Form Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left Column: Context & Info */}
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-display font-medium text-black mb-10 leading-relaxed">
                Vous recherchez une entreprise de sécurité privée à Douala fiable, réactive et proche de vos enjeux ?
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base mb-12">
                <p>
                  Que vous soyez un particulier souhaitant sécuriser votre domicile, un professionnel à la recherche d'un service de gardiennage, ou une collectivité ayant besoin d'un dispositif de sécurité ponctuel ou permanent, <strong>SENTINEL SECURITY</strong> vous accompagne avec expertise.
                </p>
                <p>
                  Notre équipe est à votre écoute pour vous conseiller et vous proposer un devis personnalisé en matière de :
                </p>

                <ul className="space-y-3 pl-2 border-l-2 border-gray-100 italic">
                  <li>• Surveillance humaine et gardiennage</li>
                  <li>• Télésurveillance et alarmes connectées</li>
                  <li>• Sécurité incendie (agents SSIAP)</li>
                  <li>• Sûreté cynophile (maitres-chiens)</li>
                  <li>• Sécurité événementielle</li>
                  <li>• Interventions sur alarme</li>
                </ul>
              </div>

              {/* Company Details */}
              <div className="mt-auto space-y-2 pt-10 border-t border-gray-100">
                <h3 className="text-xl font-display font-bold text-black">SENTINEL SECURITY</h3>
                <p className="inline-block bg-primary px-2 py-0.5 text-sm font-bold text-black uppercase tracking-wider mb-2">
                  SOCIÉTÉ DE SÉCURITÉ PRIVÉE
                </p>
                <p className="text-gray-600">31 avenue des Droits de l'Homme</p>
                <p className="text-gray-600">Douala, Cameroun</p>
                <p className="text-xl font-bold text-black mt-4 hover:text-primary transition-colors">
                  <a href="tel:+237697912941">+237 697 912 941</a>
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="bg-transparent">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase">Prénom</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase">Nom</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">Nom de l'entreprise</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">Fonction</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">E-mail</label>
                  <input
                    type="email"
                    className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">Type de prestation</label>
                  <div className="relative">
                    <select className="w-full border-2 border-black p-3 outline-none appearance-none bg-white focus:bg-gray-50 transition-colors">
                      <option>Veuillez choisir une option</option>
                      <option>Surveillance humaine</option>
                      <option>Télésurveillance</option>
                      <option>Sécurité Incendie</option>
                      <option>Maîtres-chiens</option>
                      <option>Événementiel</option>
                      <option>Intervention</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase">Votre message</label>
                  <textarea
                    rows={4}
                    className="w-full border-2 border-black p-3 outline-none focus:bg-gray-50 transition-colors resize-none"
                  />
                </div>

                <Button
                  className="w-full bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full py-8 text-xl transition-all duration-300 transform active:scale-95 shadow-lg"
                >
                  Envoyer
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
