// Header is provided by App.tsx; avoid rendering it here to prevent duplication
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import News from "@/components/News";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <ClientLogos />
        <News />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
