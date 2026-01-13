import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Human Surveillance", href: "#" },
      { name: "Event Security", href: "#" },
      { name: "Remote Monitoring", href: "#" },
      { name: "Fire Safety", href: "#" },
      { name: "K-9 Security", href: "#" },
      { name: "Alarm Installation", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Blog", href: "#news" },
      { name: "CSR Report", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Licenses", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-10 w-10 text-primary" />
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
              Your trusted partner in private security. Protecting people and property with excellence since 2002.
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
            <h3 className="font-display font-bold text-secondary-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-secondary-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-secondary-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sentinel Security & Services. All rights reserved Daniel Arts.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                Licensed Security Provider
              </span>
              <span className="text-primary">|</span>
              <span className="text-muted-foreground text-sm">
                Available 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
