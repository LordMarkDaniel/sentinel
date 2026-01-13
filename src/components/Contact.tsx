import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+273 697-912-941",
    subContent: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@sentinel-security.com",
    subContent: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Security Avenue",
    subContent: "Unknown, NY 10001",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "24 Hours / 7 Days",
    subContent: "Always at your service",
  },
];

const Contact = () => {
  const { toast } = useToast();
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
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
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
            Need a Quote or Security Advice?{" "}
            <span className="text-primary">Let's Talk</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Our security experts are ready to analyze your needs and provide tailored solutions.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent font-semibold relative z-10"
          >
            Contact a Security Expert
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you need round-the-clock surveillance, event security, or a complete security audit, we're here to help protect what matters most to you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-muted p-5 rounded-lg"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-foreground">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subContent}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-foreground font-semibold mb-4">Follow Us</p>
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
          <div className="bg-secondary p-8 rounded-xl">
            <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-6">
              Request a Free Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="John Doe"
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
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Phone
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
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-security-dark border-border/20 text-secondary-foreground"
                    placeholder="Your Company Inc."
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
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
