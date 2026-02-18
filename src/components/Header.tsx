import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links matching the reference image
  const navLinks = [
    { name: "Nos métiers", href: "/discover-services" },
    { name: "Qui sommes-nous ?", href: "/about" },
    { name: "Nos engagements", href: "/why-us" },
    { name: "Nous rejoindre", href: "/join-us" },
    { name: "Blog", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Tier (Black BG) */}
      <div className="bg-black border-b border-white/5 shadow-2xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/mainlogo.png"
              alt="Sentinel Security Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-primary tracking-tighter leading-none italic uppercase">
                SENTINEL
              </span>
              <span className="text-[10px] text-primary tracking-[0.3em] font-light leading-none italic uppercase">
                SECURITE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={link.name} className="flex items-center">
                  {index > 0 && (
                    <span className="text-white/20 mx-3 text-xs font-light">|</span>
                  )}
                  <Link
                    to={link.href}
                    className="text-white hover:text-primary transition-colors font-bold text-[13px] uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* 2. Bottom Tier (Yellow BG) */}
      <div className="bg-primary shadow-lg hidden md:block border-t border-black/5 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 text-black font-bold text-[13px] uppercase tracking-wide">
          <p className="opacity-90">
            Sécurité humaine & télésurveillance, 24/7 au Cameroun - On vous protège !
          </p>
          <div className="flex items-center gap-2 md:ml-4 border-l border-black/20 pl-4">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <span>+237 697-912-941 · 24/24 et 7/7</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black mt-0 pb-10 pt-4 px-6 fixed inset-x-0 top-[64px] h-[calc(100vh-64px)] overflow-y-auto animate-fade-in z-40">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-primary transition-all font-bold text-2xl uppercase tracking-tighter border-b border-white/5 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-primary text-black font-bold text-xl py-8 uppercase italic rounded-none shadow-xl">
                Demander un devis
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
