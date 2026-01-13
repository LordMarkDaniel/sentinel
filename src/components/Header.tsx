import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Our Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="border-b border-border/20 bg-secondary">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <p className="text-sm text-primary">
            Professional Security Services 24/7 - We Protect You!
          </p>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+237XXXXXXXXX"
              className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+273 697-912-941</span>
            </a>
            <span className="text-primary font-bold">· 24/7</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-xl font-display font-bold text-primary">
                SENTINEL
              </h1>
              <p className="text-xs text-secondary-foreground tracking-widest">
                SECURITY & SERVICES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-accent font-semibold">
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-accent font-semibold w-full mt-4">
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
