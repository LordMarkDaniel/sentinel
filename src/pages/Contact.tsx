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
              Besoin d'un audit, d'un pentest ou d'un conseil en cybersécurité au Cameroun ?
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
                Vous recherchez un cabinet de cybersécurité au Cameroun fiable, réactif et proche de vos enjeux numériques ?
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base mb-12">
                <p>
                  Que vous soyez une PME souhaitant sécuriser votre système d'information, une institution à la recherche d'un audit de sécurité, ou une organisation ayant besoin d'un test d'intrusion, <strong>SENTINEL SECURITY</strong> vous accompagne avec expertise.
                </p>
                <p>
                  Notre équipe est à votre écoute pour vous conseiller et vous proposer une prestation personnalisée en matière de :
                </p>

                <ul className="space-y-3 pl-2 border-l-2 border-gray-100 italic">
                  <li>• Tests d'intrusion (Pentest web, réseau, mobile)</li>
                  <li>• Audits de sécurité informatique</li>
                  <li>• Red Team & simulation d'attaques</li>
                  <li>• SOC & Surveillance des menaces 24/7</li>
                  <li>• Gestion des vulnérabilités</li>
                  <li>• Conformité ISO 27001 & RGPD</li>
                </ul>
              </div>

              {/* Company Details */}
              <div className="mt-auto space-y-2 pt-10 border-t border-gray-100">
                <h3 className="text-xl font-display font-bold text-black">SENTINEL SECURITY</h3>
                <p className="inline-block bg-primary px-2 py-0.5 text-sm font-bold text-black uppercase tracking-wider mb-2">
                  CABINET DE CYBERSÉCURITÉ
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
                      <option>Tests d'intrusion (Pentest)</option>
                      <option>Audit de sécurité informatique</option>
                      <option>Red Team & simulation d'attaques</option>
                      <option>SOC & Surveillance des menaces</option>
                      <option>Gestion des vulnérabilités</option>
                      <option>Conformité ISO 27001 / RGPD</option>
                      <option>Conseil & Formation</option>
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
