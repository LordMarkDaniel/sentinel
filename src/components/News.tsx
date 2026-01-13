import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "How to Properly Secure Your Home: Alarms, Remote Monitoring and Local Tips",
    excerpt: "Are you wondering about the best way to protect your home against intrusions? Faced with rising risks (burglaries, damage, thefts), securing your home has become a priority.",
    date: "January 12, 2026",
    category: "Home Security",
    image: "/1i.jpg",
  },
  {
    title: "Remote Monitoring for Businesses: 5 Tips to Effectively Protect Your Premises 24/7",
    excerpt: "Business premises security is a strategic issue for all companies. Burglaries, intrusions, damage, malicious acts or technical risks: threats are numerous and don't warn.",
    date: "January 11, 2026",
    category: "Business Security",
    image: "/2i.jpg",
  },
  {
    title: "Sentinel Security Inaugurates Its Monitoring Center: 24/7 Protection Service",
    excerpt: "It's official: the SENTINEL SECURITY monitoring center is now fully operational. An advancement in cutting-edge protection for our clients.",
    date: "January 10, 2026",
    category: "Company News",
    image: "/3i.jpg",
  },
  {
    title: "Sentinel Security Supports Diversity: For a More Inclusive Private Security Industry",
    excerpt: "At Sentinel Security, we firmly believe that private security professions must reflect the diversity of our society and offer equal opportunities.",
    date: "January 09, 2026",
    category: "CSR",
    image: "/4i.jpg",
  },
];

const News = () => {
  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Our News and{" "}
            <span className="text-primary">Security Tips</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest security trends, tips, and company updates
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article, index) => (
            <Card 
              key={index}
              className="group bg-security-dark border-border/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-security-gray to-security-black flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
                <img 
                  src={article.image}
                  alt={article.category}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="text-primary/80 text-sm px-4 py-2 border border-primary/50 rounded relative z-10 bg-black/40">
                  {article.category}
                </span>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="font-display font-bold text-secondary-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-accent group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
