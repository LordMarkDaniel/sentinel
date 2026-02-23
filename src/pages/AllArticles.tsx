import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "Comment sécuriser votre infrastructure cloud : Pentests et meilleures pratiques au Cameroun",
    date: "12 janvier 2026",
    category: "Tests d'intrusion",
    image: "/1i.jpg",
    excerpt: "L'adoption du cloud s'accélère, mais la sécurité reste un défi. Découvrez comment nos tests d'intrusion cloud identifient les failles de configuration avant qu'elles ne soient exploitées.",
  },
  {
    id: 2,
    title: "Souveraineté numérique : Pourquoi un SOC local est indispensable pour les banques camerounaises",
    date: "11 janvier 2026",
    category: "SOC & Surveillance",
    image: "/2i.jpg",
    excerpt: "Face à la montée des cyberattaques sophistiquées, la gestion déléguée de la surveillance devient stratégique. Analyse d'un enjeu majeur pour le secteur financier en Afrique Centrale.",
  },
  {
    id: 3,
    title: "SENTINEL SECURITY renforce ses capacités offensives avec une équipe Red Team dédiée",
    date: "10 janvier 2026",
    category: "Actualités",
    image: "/3i.jpg",
    excerpt: "Nous annonçons le lancement de nos opérations Red Team, simulations d'attaques réelles visant à tester la résilience globale des organisations face aux menaces avancées.",
  },
  {
    id: 4,
    title: "Certification ISO 27001 : Un investissement stratégique pour la pérennité de votre entreprise",
    date: "9 janvier 2026",
    category: "Conformité",
    image: "/4i.jpg",
    excerpt: "Plus qu'une contrainte réglementaire, la conformité est un levier de confiance client. On vous explique comment structurer votre SMSI pour obtenir la certification.",
  },
];

const AllArticles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32">
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
            Actualités <span className="text-primary">Cyber</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Restez informé des dernières cybermenaces, des conseils d'experts et des innovations technologiques en Afrique Centrale.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/article/${article.id}`)}
              className="group bg-secondary border border-border/20 hover:border-primary/50 rounded-lg overflow-hidden transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-secondary overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="absolute top-4 left-4 text-primary/80 text-sm px-3 py-1 border border-primary/50 rounded bg-black/40 font-semibold">
                  {article.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <button className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-2 group/btn">
                  Lire la suite
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 2. Premium CTA Section (Parlons-en) */}
      <section className="relative min-h-[500px] flex items-center justify-center py-16 overflow-hidden border-t border-white/10 w-full">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/2lock.jpg"
            alt="Security Personnel"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Social Icons Overlay (Right) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6 text-white">
          <a href="#" className="hover:text-primary transition-all duration-300 transform hover:scale-110">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </div>
          </a>
          <a href="#" className="hover:text-primary transition-all duration-300 transform hover:scale-110">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </div>
          </a>
          <a href="#" className="hover:text-primary transition-all duration-300 transform hover:scale-110">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.326-4-3.078-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
          </a>
        </div>

        {/* Center CTA Box */}
        <div className="relative z-10 container mx-auto px-4 flex justify-center">
          <div className="bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-center max-w-2xl w-full transform hover:scale-[1.01] transition-transform duration-500">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4 leading-tight">
              Besoin d'un audit, d'un pentest ou d'un conseil cyber ?
            </h2>
            <h3 className="text-xl md:text-3xl font-display font-light text-gray-800 mb-10 tracking-tight">
              Anticipons la menace ensemble
            </h3>

            <Button
              onClick={() => navigate("/request-quote")}
              className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-10 py-7 text-lg group w-fit mx-auto flex items-center gap-4 transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              Contacter un expert sécurité
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllArticles;
