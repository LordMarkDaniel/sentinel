import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem('cookieConsent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    localStorage.setItem('cookieConsent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Préférences de Cookies</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="preferences">Préférences</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser du contenu personnalisé et analyser notre trafic.
            </p>
            <div className="flex gap-2">
              <Button onClick={handleAcceptAll} className="flex-1">Tout Accepter</Button>
              <Button onClick={handleRejectAll} variant="outline" className="flex-1">Tout Refuser</Button>
              <Button onClick={() => setIsOpen(true)} variant="outline">Personnaliser</Button>
            </div>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                />
                <label htmlFor="necessary" className="text-sm font-medium">
                  Cookies Nécessaires
                </label>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Ces cookies sont essentiels au bon fonctionnement du site web.
              </p>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences(prev => ({ ...prev, analytics: !!checked }))
                  }
                />
                <label htmlFor="analytics" className="text-sm font-medium">
                  Cookies Analytiques
                </label>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Nous aident à comprendre comment les visiteurs interagissent avec notre site web.
              </p>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences(prev => ({ ...prev, marketing: !!checked }))
                  }
                />
                <label htmlFor="marketing" className="text-sm font-medium">
                  Cookies Marketing
                </label>
              </div>
              <p className="text-xs text-muted-foreground ml-6">
                Utilisés pour diffuser des publicités personnalisées.
              </p>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSavePreferences} className="flex-1">Enregistrer les Préférences</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
