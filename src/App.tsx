import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Index from "@/pages/Index";
import RequestQuote from "@/pages/RequestQuote";
import DiscoverServices from "@/pages/DiscoverServices";
import OurCommitments from "@/pages/OurCommitments";
import ContactExpert from "@/pages/ContactExpert";
import ArticleDetail from "@/pages/ArticleDetail";
import AllArticles from "@/pages/AllArticles";
import NotFound from "@/pages/NotFound";

// Services pages
import HumanSurveillance from "@/pages/HumanSurveillance";
import EventSecurity from "@/pages/EventSecurity";
import RemoteMonitoring from "@/pages/RemoteMonitoring";
import FireSafety from "@/pages/FireSafety";
import K9Security from "@/pages/K9Security";
import AlarmInstallation from "@/pages/AlarmInstallation";

// Company pages
import About from "@/pages/About";
import WhyUs from "@/pages/WhyUs";
import OurTeam from "@/pages/OurTeam";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import CSRReport from "@/pages/CSRReport";

// Legal
import Legal from "@/pages/Legal";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import Licenses from "@/pages/Licenses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/discover-services" element={<DiscoverServices />} />
            <Route path="/our-commitments" element={<OurCommitments />} />
            <Route path="/contact-expert" element={<ContactExpert />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/news" element={<AllArticles />} />

            {/* Services */}
            <Route path="/human-surveillance" element={<HumanSurveillance />} />
            <Route path="/event-security" element={<EventSecurity />} />
            <Route path="/remote-monitoring" element={<RemoteMonitoring />} />
            <Route path="/fire-safety" element={<FireSafety />} />
            <Route path="/k9-security" element={<K9Security />} />
            <Route path="/alarm-installation" element={<AlarmInstallation />} />

            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/csr-report" element={<CSRReport />} />

            {/* Legal */}
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
