import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import mainLogo from "/mainlogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Surveillance humaine", href: "/human-surveillance" },
      { name: "Sécurité événementielle", href: "/event-security" },
      { name: "Télésurveillance", href: "/remote-monitoring" },
      { name: "Sécurité incendie", href: "/fire-safety" },
      { name: "Sécurité K-9", href: "/k9-security" },
      { name: "Installation d'alarmes", href: "/alarm-installation" },
    ],
    company: [
      { name: "À propos", href: "/about" },
      { name: "Notre équipe", href: "/our-team" },
      { name: "Nous rejoindre", href: "/join-us" },
      { name: "Actualités & Blog", href: "/news" },
      { name: "Rapport RSE", href: "/csr-report" },
    ],
    legal: [
      { name: "Politique de confidentialité", href: "/privacy-policy" },
      { name: "Conditions d'utilisation", href: "/legal" },
      { name: "Politique de cookies", href: "/cookie-policy" },
      { name: "Licences", href: "/licenses" },
    ],
  };

  return (
    <footer className="bg-secondary pt-8 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/mainlogo.png" alt="Sentinel Security Logo" className="h-10 w-10" />
              <div>
                <h2 className="text-xl font-display font-bold text-primary">
                  SENTINEL
                </h2>
                <p className="text-xs text-secondary-foreground tracking-widest">
                  SECURITY & SERVICES
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Votre partenaire de confiance en sécurité privée. Protéger les personnes et les biens avec excellence depuis 2002.
            </p>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+273 697-912-941</span>
              </a>
              <a href="mailto:contact@sentinel-security.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@sentinel-security.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Security Avenue, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <Link to="/discover-services" className="inline-block mb-4">
              <h3 className="font-display font-bold text-secondary-foreground hover:text-primary transition-colors">
                Nos services
              </h3>
            </Link>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-secondary-foreground mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-secondary-foreground mb-4">
              Mentions légales
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sentinel Security & Services. Tous droits réservés. CYBERIX Arts.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                Prestataire de sécurité agréé
              </span>
              <span className="text-primary">|</span>
              <span className="text-muted-foreground text-sm">
                Disponible 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
