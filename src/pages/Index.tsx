// Header is provided by App.tsx; avoid rendering it here to prevent duplication
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import PartnerCTA from "@/components/PartnerCTA";
import WhyUs from "@/components/WhyUs";
import News from "@/components/News";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <About />
        <PartnerCTA />
        <WhyUs />
        <News />
      </main>
    </div>
  );
};

export default Index;
